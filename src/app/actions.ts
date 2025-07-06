"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { FieldValue } from "firebase-admin/firestore";
import { generateChecklist } from "@/ai/flows/generate-checklist-flow";
import { GenerateChecklistInputSchema, type GenerateChecklistOutput } from "@/ai/schemas/checklist-schema";
import { sendEmail } from "@/lib/email";


const FIREBASE_NOT_CONFIGURED_ERROR = `Server database not configured. Please check your .env file and ensure the following:
1. FIREBASE_PROJECT_ID is set.
2. FIREBASE_CLIENT_EMAIL is set.
3. FIREBASE_PRIVATE_KEY is the full key wrapped in double quotes, including the "-----BEGIN PRIVATE KEY-----" and "-----END PRIVATE KEY-----" markers.`;

// --- Schedule Inspection Form ---

const scheduleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  address: z.string().min(5, "Address must be at least 5 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export type ScheduleFormState = {
  message: string;
  errors?: {
    name?: string[];
    address?: string[];
    email?: string[];
    phone?: string[];
    notes?: string[];
  };
  success: boolean;
};

export async function scheduleInspection(
  prevState: ScheduleFormState,
  formData: FormData
): Promise<ScheduleFormState> {
  if (!db) {
    console.error("Submission failed: Firestore is not initialized. Check your Firebase credentials in the .env file.");
    return {
      message: FIREBASE_NOT_CONFIGURED_ERROR,
      success: false,
    };
  }

  const validatedFields = scheduleSchema.safeParse({
    name: formData.get("name"),
    address: formData.get("address"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    notes: formData.get("notes"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await db.collection("inspections").add({
      ...validatedFields.data,
      submittedAt: FieldValue.serverTimestamp(),
    });
    return { message: "Inspection scheduled successfully! We will contact you shortly.", success: true };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return { message: "Submission failed. A server error occurred.", success: false };
  }
}

// --- Contact Form ---

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (!db) {
    console.error("Submission failed: Firestore is not initialized. Check your Firebase credentials in the .env file.");
    return {
      message: FIREBASE_NOT_CONFIGURED_ERROR,
      success: false,
    };
  }
  
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await db.collection("contacts").add({
      ...validatedFields.data,
      submittedAt: FieldValue.serverTimestamp(),
    });
    return { message: "Message sent successfully! We will get back to you soon.", success: true };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return { message: "Submission failed. A server error occurred.", success: false };
  }
}

// --- Checklist Generator ---
export type ChecklistFormState = {
  checklist?: GenerateChecklistOutput['checklist'];
  error?: string;
  success: boolean;
};

export async function getChecklistAction(
  prevState: ChecklistFormState,
  formData: FormData
): Promise<ChecklistFormState> {
  const validatedFields = GenerateChecklistInputSchema.safeParse({
    propertyType: formData.get("propertyType"),
    propertyAge: formData.get("propertyAge"),
    userConcerns: formData.get("userConcerns"),
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid input. Please check the form and try again.",
      success: false,
    };
  }

  try {
    const result = await generateChecklist(validatedFields.data);
    if (!result || !result.checklist) {
      return { error: "The AI could not generate a checklist. Please try again with different inputs.", success: false };
    }
    return { checklist: result.checklist, success: true };
  } catch (e) {
    console.error("Checklist generation error:", e);
    return { error: "An unexpected error occurred while generating the checklist. Please try again later.", success: false };
  }
}

// --- Send Checklist Form ---

const sendChecklistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  checklistJson: z.string().min(1, "Checklist data is missing."),
});

export type SendChecklistState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    checklistJson?: string[];
  };
  success: boolean;
};

function formatChecklistToHtml(checklist: GenerateChecklistOutput['checklist'], name: string): string {
    let html = `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">`;
    html += `<div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">`;
    html += `<h2 style="color: #0056b3;">Hello ${name},</h2>`;
    html += `<p>Thank you for using the AI Pre-Inspection Checklist from Mayne Inspectors. Here is the custom checklist you generated:</p>`;
    
    checklist.forEach(category => {
        html += `<h3 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 5px;">${category.category}</h3>`;
        html += '<ul style="list-style-type: none; padding-left: 0;">';
        category.items.forEach(item => {
            html += `<li style="margin-bottom: 10px; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: #28a745;">&#10003;</span>${item}</li>`;
        });
        html += '</ul>';
    });

    html += `<br><p>This checklist is a great starting point. For a comprehensive evaluation, a professional inspection is crucial. If you'd like to schedule one or have any questions, please don't hesitate to contact us.</p>`;
    html += `<p>Sincerely,<br><b>The Mayne Inspectors Team</b></p>`;
    html += `</div></div>`;
    return html;
}

export async function sendChecklistAction(
  prevState: SendChecklistState,
  formData: FormData
): Promise<SendChecklistState> {
  if (!db) {
    return {
      message: FIREBASE_NOT_CONFIGURED_ERROR,
      success: false,
    };
  }

  const validatedFields = sendChecklistSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    checklistJson: formData.get("checklistJson"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const { name, email, checklistJson } = validatedFields.data;
  
  try {
    const checklist = JSON.parse(checklistJson);
    await db.collection("checklistLeads").add({
      name,
      email,
      checklist,
      submittedAt: FieldValue.serverTimestamp(),
    });

    const emailHtmlToClient = formatChecklistToHtml(checklist, name);

    // Send email to the client
    const clientEmailResult = await sendEmail({
        to: email,
        subject: "Your Pre-Inspection Checklist from Mayne Inspectors",
        html: emailHtmlToClient,
    });
    
    // Send notification email to the admin
    const adminEmail = "castenhome@gmail.com";
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Pre-Inspection Checklist Lead</h2>
        <p>A new checklist has been generated and saved.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        ${emailHtmlToClient}
      </div>
    `;
    const adminEmailResult = await sendEmail({
        to: adminEmail,
        subject: `New Checklist Lead: ${name}`,
        html: adminEmailHtml,
    });

    if (!clientEmailResult.success) {
        console.error("Client email failed:", clientEmailResult.message);
        // User message is intentionally less specific than the log to avoid leaking implementation details.
        const userMessage = "Checklist saved, but we couldn't email you. Please double-check the email server settings in your .env file. If using Gmail, ensure you have set up and are using a 16-digit 'App Password'.";
        return { message: userMessage, success: true };
    }

    if (!adminEmailResult.success) {
        // This is a non-critical error for the user, but important for the admin.
        console.error("Admin notification email failed:", adminEmailResult.message);
    }

    return { message: "Checklist sent! A copy has been sent to your email.", success: true };
  } catch (error) {
    console.error("Error in sendChecklistAction: ", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { message: `Submission failed. A server error occurred: ${errorMessage}`, success: false };
  }
}

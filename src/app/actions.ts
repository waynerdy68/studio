"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { FieldValue } from "firebase-admin/firestore";

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

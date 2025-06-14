"use server";

import { z } from "zod";

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

  // Simulate API call or database interaction
  console.log("Scheduling inspection:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

  // Example of a possible error during submission
  // if (validatedFields.data.email.includes("testfail")) {
  //   return { message: "Submission failed due to a server error.", success: false };
  // }
  
  return { message: "Inspection scheduled successfully! We will contact you shortly.", success: true };
}


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

  // Simulate API call or database interaction
  console.log("Contact form submission:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

  return { message: "Message sent successfully! We will get back to you soon.", success: true };
}

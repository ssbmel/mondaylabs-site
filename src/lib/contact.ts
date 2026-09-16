import type { ContactFormValues } from "./types";

export interface ContactSubmitResult {
  success: boolean;
}

// Placeholder submit handler — swap the body for a real API/email call later;
// the form component only depends on this function's signature.
export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (process.env.NODE_ENV === "development") {
    console.log("[contact] submission (placeholder):", values);
  }

  return { success: true };
}

import type { ContactFormValues } from "./types";

export interface ContactSubmitResult {
  success: boolean;
}

export async function submitContactForm(values: ContactFormValues): Promise<ContactSubmitResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  return { success: response.ok };
}

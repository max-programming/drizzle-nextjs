"use server";

export async function contactUsAction(formData: FormData) {
  // Do anything with the formData
  return {
    success: true,
    message: "Message sent successfully!",
  };
}

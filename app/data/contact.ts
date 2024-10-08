"use client";
export default async function contactFormAction(
  prevState: any,
  formData: FormData
) {
  const fields = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  return { ...prevState, data: fields };
}

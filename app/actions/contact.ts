"use server";

import { google } from "googleapis";
import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function normalizeFormValue(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const firstName = normalizeFormValue(formData, "firstName");
    const lastName = normalizeFormValue(formData, "lastName");
    const email = normalizeFormValue(formData, "email");
    const institutionType = normalizeFormValue(formData, "institutionType");
    const message = normalizeFormValue(formData, "message");

    if (!firstName || !lastName || !email || !institutionType || !message) {
      return {
        status: "error",
        message: "Please fill in all fields before submitting.",
      };
    }

    const privateKey = requiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
    const serviceAccountEmail = requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    const spreadsheetId = requiredEnv("GOOGLE_SHEET_ID");
    const sheetRange = process.env.GOOGLE_SHEET_RANGE ?? "Sheet1!A:G";

    const smtpHost = requiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");
    const receiverEmail = requiredEnv("CONTACT_RECEIVER_EMAIL");
    const senderEmail = process.env.CONTACT_SENDER_EMAIL ?? smtpUser;

    const jwt = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const submittedAt = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetRange,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            submittedAt,
            firstName,
            lastName,
            email,
            institutionType,
            message,
            "new",
          ],
        ],
      },
    });

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: senderEmail,
      to: receiverEmail,
      subject: `New contact enquiry from ${firstName} ${lastName}`,
      replyTo: email,
      text: [
        `Submitted At: ${submittedAt}`,
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Institution Type: ${institutionType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Submitted At:</strong> ${submittedAt}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution Type:</strong> ${institutionType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return {
      status: "success",
      message: "Thanks! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      status: "error",
      message: "Submission failed. Please try again in a moment.",
    };
  }
}

// api/contact.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, company } = req.body;

    // Honeypot
    if (company) {
      return res.status(400).json({ error: "Bot detected" });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: "Message too long" });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      // reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

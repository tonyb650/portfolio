import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

    const transporter =  nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,// || "smtp.example.com",
      secure: process.env.NODEMAILER_SECURE === "true",
      port: Number(process.env.NODEMAILER_PORT),
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD
      },
    })

  const mailOptions = {

      from: `<${process.env.NODEMAILER_FROM}>`,    // sender email address
      to: ["test@example.com"],             // list of receivers
      //bcc: process.env.NODEMAILER_BCC,             // bcc list
      subject: "subject line",    // Subject line
      text: `${name} ${email} ${message}`,
      html: `${name} ${email} ${message}`,
      // attachments: emailConfig.attachments,    // from: process.env.EMAIL_USER,
    // to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    // subject: `Contact Form Submission from ${name}`,
    // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}

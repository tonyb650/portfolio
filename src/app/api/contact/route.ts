import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';


const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();



 const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Portfolio <noreply@tonybrierly.com>',
      to: ['anthonybrierly@gmail.com'],
      subject: "Incoming message from portfolio contact form",    // Subject line
      text: `Incoming message from ${name}. Email address is ${email}. Message is: ${message}`,
      html: `Incoming message from ${name}. Email address is ${email}. Message is: ${message}`,
    }),
  });

  // console.log(res)
  // console.log(await res.json()) // Returns 'id'

  if (res.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}






  //   const transporter =  nodemailer.createTransport({
  //     host: process.env.NODEMAILER_HOST,// || "smtp.example.com",
  //     secure: process.env.NODEMAILER_SECURE === "true",
  //     port: Number(process.env.NODEMAILER_PORT),
  //     auth: {
  //       user: process.env.NODEMAILER_USER,
  //       pass: process.env.NODEMAILER_PASSWORD
  //     },
  //   })

  // const mailOptions = {

  //     from: `<${process.env.NODEMAILER_FROM}>`,    // sender email address
  //     to: ["test@example.com"],             // list of receivers
  //     //bcc: process.env.NODEMAILER_BCC,             // bcc list
  //     subject: "subject line",    // Subject line
  //     text: `${name} ${email} ${message}`,
  //     html: `${name} ${email} ${message}`,
  //     // attachments: emailConfig.attachments,    // from: process.env.EMAIL_USER,
  //   // to: process.env.EMAIL_TO || process.env.EMAIL_USER,
  //   // subject: `Contact Form Submission from ${name}`,
  //   // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  // };
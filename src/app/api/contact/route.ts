import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_TO = process.env.MAIL_TO

if (!RESEND_API_KEY || !MAIL_TO) {
  throw new Error('Environment variables not set.');
}

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  const { name, email, message } = body || {};

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ success: false, error: 'Missing or invalid fields.' }, { status: 400 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio <noreply@tonybrierly.com>',
        to: [MAIL_TO],
        subject: "Incoming message from portfolio contact form",    // Subject line
        text: `Incoming message from ${name}. Email address is ${email}. Message is: ${message}`,
        html: `Incoming message from ${name}. Email address is ${email}. Message is: ${message}`,
      }),
    });
  
    if (!res.ok) {
      let errorDetail = '';
      try {
        const errorJson = await res.json();
        errorDetail = errorJson.error || errorJson.message || '';
      } catch {}
      throw new Error(`${res.status}${errorDetail ? ': ' + errorDetail : ''}`);
    }
    return NextResponse.json({ success: true });
    
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('429')) {
      return NextResponse.json({ success: false, error: "Too many requests." }, { status: 429 });
    }
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error.' }, { status: 500 });
  }
}
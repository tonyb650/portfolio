import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  
  try {
    
  const { userMessage } = await req.json();

  // Example: calling OpenAI API
  console.log(userMessage)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // store in .env
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // or whichever model
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  console.log("response")
  console.log(response)
  const data = await response.json();
  console.log("data")
  console.log(data)
  const text = data.choices?.[0]?.message?.content ?? "No response";

  return NextResponse.json({ text });
  } catch (error) {
    console.log(error);
    return NextResponse.json( { success: false, error: "Chat failed." }, { status: 500 } );
  }
}

// const { userMessage } = await req.json();
// // const ai = new GoogleGenAI({})

// // const response = await ai.models.generateContent({
// //   model: "gemini-2.5-flash",
// //   contents: userMessage
// // });

// // console.log(response.text)

// // const data = await response.json()

// return NextResponse.json({ text: userMessage });
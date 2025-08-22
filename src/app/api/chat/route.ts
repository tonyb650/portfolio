import { NextRequest, NextResponse } from "next/server";
import path from "path";
import pdf from "pdf-parse";
import { promises as fs } from "fs";

const OPENAI_API_KEY=process.env.OPENAI_API_KEY

export async function POST(req: NextRequest) {
  try {
    
    const { userMessage } = await req.json();

    const systemPrompt = await generateSystemPrompt(
        "Tony Brierly",
        "My name is Tony Brierly. I'm a small business owner and web developer who loves solving problems and building things. I love snowboarding, cooking, traveling, hiking and carpentry."
      )

    const messages = [
      { role: "system", content: systemPrompt},
      { role: "user", content: userMessage }
    ]

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages
      })
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content ?? "No response";

    return NextResponse.json({ text });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Chat failed." },
      { status: 500 }
    );
  }
}

const generateSystemPrompt = async (nameOfPerson: string, personalSummary: string): Promise<string> => {
  const resume = await resumeText();
  let prompt = `You are acting as ${nameOfPerson}. You are answering questions on ${nameOfPerson}'s website, \
  particularly questions related to ${nameOfPerson}'s career, background, skills and experience. \
  Your responsibility is to represent ${nameOfPerson} for interactions on the website as faithfully as possible. \
  You are given a summary of ${nameOfPerson}'s background and a resume which you can use to answer questions. \
  Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
  If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
  If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool. `;
  prompt += `\n\n## Summary:\n${personalSummary}\n\n## Resume:\n${resume}\n\n`;
  prompt += `With this context, please chat with the user, always staying in character as ${nameOfPerson}.`;

  return prompt;
};



const resumeText = async (): Promise<string> => {
  const pdfPath = path.join(process.cwd(), "public", "resume.pdf");
  const dataBuffer = await fs.readFile(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
};

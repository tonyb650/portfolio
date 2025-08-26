import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import{ openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, UIMessage } from "ai"

//! Pick up here:
// Cosden: https://www.youtube.com/watch?v=y4IMq43KvRw
//https://ai-sdk.dev/cookbook/next/markdown-chatbot-with-memoization
// and
//https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting

export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const systemPrompt = await generateSystemPrompt({
      nameOfPerson: "Tony Brierly",
      summaryFile: "summary.txt",
      resumeFile: "resume.txt"
    })

    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages: convertToModelMessages(messages),
      system: systemPrompt,
      onFinish: () => {}, //TODO enable submit button ?
    })

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: "Chat failed." },
      { status: 500 }
    );
  }
}

const generateSystemPrompt = async ({nameOfPerson, summaryFile, resumeFile}: {nameOfPerson: string, summaryFile: string, resumeFile: string}): Promise<string> => {
  const resume = await loadTextFile(resumeFile);
  const summary = await loadTextFile(summaryFile);
  let prompt = `You are acting as ${nameOfPerson}. You are answering questions on ${nameOfPerson}'s website, \
  particularly questions related to ${nameOfPerson}'s career, background, skills and experience. \
  Your responsibility is to represent ${nameOfPerson} for interactions on the website as faithfully as possible. \
  You are given a summary of ${nameOfPerson}'s background and a resume which you can use to answer questions. \
  Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
  If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
  If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool. `;
  prompt += `\n\n## Summary:\n${summary}\n\n## Resume:\n${resume}\n\n`;
  prompt += `With this context, please chat with the user, always staying in character as ${nameOfPerson}.`;
  
  return prompt;
};

const loadTextFile = async (fileName: string): Promise<string> => {
  const filePath = path.join(process.cwd(), 'public', fileName); 
  const fileContent = await fs.readFile(filePath, 'utf8');
  return fileContent;
}

// const messages = [
//   { role: "system", content: systemPrompt},
//   { role: "user", content: userMessage }
// ]

// const response = await fetch("https://api.openai.com/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${OPENAI_API_KEY}`
//   },
//   body: JSON.stringify({
//     model: "gpt-4o-mini",
//     messages
//   })
// });

// const data = await response.json();
// const text = data.choices?.[0]?.message?.content ?? JSON.stringify(data);

// return NextResponse.json({ text });
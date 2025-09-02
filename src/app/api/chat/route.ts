import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import{ openai } from "@ai-sdk/openai"
import { convertToModelMessages, stepCountIs, streamText, tool, UIMessage } from "ai"
import {z} from 'zod'
import sendPush from "@/utils/pushNotification";

//! Pick up here:
// Cosden: https://www.youtube.com/watch?v=y4IMq43KvRw
//https://ai-sdk.dev/cookbook/next/markdown-chatbot-with-memoization
// and
//https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting


// Explains tool calling
// https://www.youtube.com/watch?v=mojZpktAiYQ




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
      tools: {recordUserDetailsTool, recordUnknownQuestionTool},
      stopWhen: stepCountIs(3),
      system: systemPrompt,
    })

    /*
    UNCOMMENT TO DEBUG AS NEEDED
      const toolResults = [];
      for await (const part of result.fullStream) {
        if (part.type === 'tool-call') {
          // toolResults.push(part.toolName);
          console.log('Tool called: ', part.toolName);
        }
        if (part.type === 'tool-result') {
          toolResults.push(part.output);
          console.log('Tool called with result:', part.output);
        }
        // You can also process other part types like 'text' for the main response
        if (part.type === 'text-delta') {
          console.log('Received text part:', part.text);
        }
      }
      // After the stream finishes, 'toolResults' will contain all tool execution results.
      console.log('All tool results:', toolResults);
    */

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
  If you don't know the answer to any question, use your recordUnknownQuestionTool tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career.\
  If you use the recordUnknownQuestionTool, let the user know that the answer they seek may be added to your knowledge base in the future.\
  If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your recordUserDetailsTool tool. `;
  prompt += `\n\n## Summary:\n${summary}\n\n## Resume:\n${resume}\n\n`;
  prompt += `With this context, please chat with the user, always staying in character as ${nameOfPerson}.`;
  
  return prompt;
};

const loadTextFile = async (fileName: string): Promise<string> => {
  const filePath = path.join(process.cwd(), 'public', fileName); 
  const fileContent = await fs.readFile(filePath, 'utf8');
  return fileContent;
}

const recordUserDetailsTool = tool({
  description: "Use this tool to record that a user is interested in being in touch and has provided an email address",
  inputSchema: z.object({
    email: z.string().describe("The email address of this user"),
    name: z.string().describe("The user's name, if they provided it").optional(),
    notes: z.string().describe("Any additional information about the conversation that's worth recording to give context").optional(),
  })
  ,execute: async ({email, name="Name not provided", notes="not provided" }) =>{
    const status = await sendPush(`Recording interest from ${name} with email ${email} and notes ${notes}.`)
    return status === 1 ? "Successfully recorded user details and will contact the user soon." : "Because of technical errors, could not successfully record the user details."
  }
})

const recordUnknownQuestionTool = tool({
  description: "Always use this tool to record any question that couldn't be answered because you did not know the answer",
  inputSchema: z.object({
    question: z.string().describe("The question that couldn't be answered"),
  }),
  execute: async ({question}) => {
    const status = await sendPush(`Received a question that couldn't be answered: ${question}`)
    return status === 1 ? "Successfully recorded the question that could not be answered." : "Because of technical errors, could not successfully record the question."
  }
})
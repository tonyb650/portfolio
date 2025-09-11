import { Chat as SdkChat, useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import ChatContainer from "./ChatContainer"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessageList from "./ChatMessageList"
import { Dispatch, SetStateAction } from "react"


const chat = new SdkChat({
  transport: new DefaultChatTransport({
    api: "/api/chat",
  }),
})


type ChatProps = {
  setIsThinking: Dispatch<SetStateAction<boolean>>
}

const Chat = ({setIsThinking}: ChatProps) => {
    const {messages} = useChat({
      chat: chat,
      experimental_throttle: 50,
      messages: [
        {
          id: "0",
          role: "assistant",
          parts: [{ type: "text", text: "So, what questions do you have?"}]
        }
      ]
    })
    
    return (
      <ChatContainer>
      <ChatHeader className="bg-radial-[at_25%_00%] from-accent to-primary text-white text-left px-8 py-2 ">
        Hi there. It&apos;s me, Tony!<br></br> Well, not really. But ask me any question and I will answer as if I am! And I know everything from LinkedIn plus a whole lot more. Also, if you ask me a question I don&apos;t know, I&apos;ll have Tony tell me that information for next time.
      </ChatHeader>
      <ChatMessageList messages={messages}/>
      <ChatInput chat={chat} setIsThinking={setIsThinking}/>
    </ChatContainer>
  )
}

export default Chat



// const modelWelcomeMessage: ChatMessage = {
//   message: "So, what questions do you have?",
//   type: "incoming",
// }
// const userMessage: ChatMessage = {
//   message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas atque tempora veritatis esse tenetur quo aliquam repellat inventore at?",
//   type: "outgoing",
// }


// const isWorkingMessage: ChatMessage = {
//   message: "Typing",
//   type: "working",
// }
// const long = [modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, isWorkingMessage]
// const short = [ modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, isWorkingMessage]




    // const onUserMessage = async (userMessage: string) => {
    //   sendMessage({text: userMessage})
    //   setIsWorking(true)

    //   const userChat: ChatMessage = {
    //     message: userMessage,
    //     type: "outgoing"
    //   }
    //   setMessages(prev => [...prev, userChat, isWorkingMessage])


    //   //API logic here
    //   console.log("sending message")
    //   const res = await fetch("/api/chat", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({userMessage}),
    //   });

    //   const data = await res.json()

    //   console.log(data.text)

    //   const modelChat: ChatMessage = {
    //     message: data.text,
    //     type: "incoming"
    //   }


    //   setIsWorking(false)
    //   setMessages(prev => [...prev.slice(0,prev.length-1), modelChat])
    // }
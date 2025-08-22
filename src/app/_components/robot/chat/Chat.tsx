import { useState } from "react"
import type { ChatMessage } from "./ChatMessage"
import ChatContainer from "./ChatContainer"
import ChatHeader from "./ChatHeader"
import ChatMessageList from "./ChatMessageList"
import ChatInput from "./ChatInput"

const modelWelcomeMessage: ChatMessage = {
  message: "So, what questions do you have?",
  type: "incoming",
}
const userMessage: ChatMessage = {
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas atque tempora veritatis esse tenetur quo aliquam repellat inventore at?",
  type: "outgoing",
}


const isWorkingMessage: ChatMessage = {
  message: "Typing",
  type: "working",
}
const long = [modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, isWorkingMessage]
const short = [ modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, modelWelcomeMessage, userMessage, isWorkingMessage]


const Chat = ({setIsWorking}: {setIsWorking: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [messages, setMessages]= useState<ChatMessage[]>([modelWelcomeMessage])


    const onUserMessage = async (userMessage: string) => {
      setIsWorking(true)

      const userChat: ChatMessage = {
        message: userMessage,
        type: "outgoing"
      }
      setMessages(prev => [...prev, userChat, isWorkingMessage])


      //API logic here
      console.log("sending message")
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userMessage}),
      });

      const data = await res.json()

      console.log(data.text)

      const modelChat: ChatMessage = {
        message: data.text,
        type: "incoming"
      }


      setIsWorking(false)
      setMessages(prev => [...prev.slice(0,prev.length-1), modelChat])
    }
    
  return (
    <ChatContainer>
      <ChatHeader className="bg-gray-300 text-left px-8 py-2 ">
        Hi there. It&apos;s me, Tony!<br></br> Well, not really. But ask me any question and I will answer as if I am! And I know everything from LinkedIn plus a whole lot more. Also, if you ask me a question I don&apos;t know, I&apos;ll have Tony tell me that information for next time.
      </ChatHeader>
      <ChatMessageList messages={messages}/>
      <ChatInput onUserMessage={onUserMessage}/>
    </ChatContainer>
  )
}

export default Chat
import { useState } from "react"
import type { ChatMessage } from "./ChatMessage"
import ChatContainer from "./ChatContainer"
import ChatHeader from "./ChatHeader"
import ChatMessageList from "./ChatMessageList"
import ChatInput from "./ChatInput"

const messageIn:ChatMessage = {
  message: "hey",
  type: "incoming",
}

const messageOut:ChatMessage = {
  message: "user",
  type: "outgoing",
}

const typing:ChatMessage = {
  message: "Typing",
  type: "working",
}

const short = [messageIn]


const Chat = ({setIsWorking}: {setIsWorking: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [messages, setMessages]= useState<ChatMessage[]>(short)


    const onSendMessage = () => {
      //API logic here
      console.log("sending message")
      setIsWorking(true)
      setMessages([...messages, messageOut, typing])
      setTimeout(() => {
        setIsWorking(false)
        setMessages([...messages, messageOut, messageIn])
      }, 1000)
    }
    
  return (
    <ChatContainer>
      <ChatHeader className="bg-gray-300 text-left px-8 py-2 text-lg">
        Hi there. It&apos;s me, Tony! Well, not really. But you can ask me any question you like and I will answer as if I am! And I know everything from LinkedIn plus a whole lot more. Also, if you ask me a question I don&apos;t know, I&apos;ll ask Tony to tell me that information for next time.
        <br></br>
        So, what questions do you have?
      </ChatHeader>
      <ChatMessageList messages={messages}/>
      <ChatInput onSend={onSendMessage}/>
    </ChatContainer>
  )
}

export default Chat
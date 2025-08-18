import { type ReactNode, useState } from "react"
// import sendIcon from "/src/assets/icons/send.svg"
import { cn } from "@/utils/cn"
import { FaPaperPlane } from "react-icons/fa"

type Props = {
  onSend: (messageText: string) => void,
  children: ReactNode,
  className?: string,
}

const ChatInput = ( { onSend, children, className}: Props ) => {

  const placeholder = "Type Message"
  const [chatInput, setChatInput] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSend(chatInput.trim())
    setChatInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key == "Enter" && !e.shiftKey && "form" in e.target && chatInput.trim() !== "") {
      e.preventDefault();
      (e.target.form as HTMLFormElement).requestSubmit()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea autoFocus name="chatInput" id="chatInput" rows={3} placeholder={placeholder} className={cn("px-3 py-1.5 w-full bg-blue-500 rounded-xl resize-none focus:outline-none" , className)} aria-label="Chat Input" value={chatInput} onKeyDown={handleKeyDown} onChange={(e) => setChatInput(e.target.value)}/>
        <div className="w-full flex justify-center">
          <button disabled={chatInput.trim() === ""} className="btn mt-0 mb-0.5 px-24" type="submit">
            Send Message
            {/* <img src={sendIcon} width='18' className="ml-2"/> */}
            <FaPaperPlane/>
          </button>
        </div>
      </form>
      {children}
    </>
  )
}

export default ChatInput
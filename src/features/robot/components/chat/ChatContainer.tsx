import { cn } from '@/utils/cn'
import { useState } from 'react'
import ChatInput from './ChatInput'
import type { ChatMessage } from './ChatMessage'
import ChatMessageList from './ChatMessageList'
import ChatToolbox from './ChatToolbox'

type Props = {
  className?: string,
}

const ChatContainer = ({className}: Props) => {
  const [messages]= useState<ChatMessage[]>([])


  const handleUserMessage = () => {
    console.log("message")
  }

  return (
    <div className={cn(className)}>
          <ChatMessageList className="grow" messages={messages}/>
          <ChatInput onSend={handleUserMessage} className="">
          <div className="w-full flex justify-center">
            <div className="border-t-2 border-slate-400 w-full md:w-3/4 my-2">what ?</div>
          </div>
          <ChatToolbox className="flex sm:flex-row justify-center gap-4 text-white font-roboto">
            Tools here
            {/* <ControlButtons 
              tool={tool} 
              onFinalize={() => setConfirmFinalizeDialog(true)} 
              onSave={() => setConfirmSaveDialog(true)}
              onReset={() => setConfirmResetDialog(true)}
            /> */}
          </ChatToolbox>
        </ChatInput>
    </div>
  )
}

export default ChatContainer
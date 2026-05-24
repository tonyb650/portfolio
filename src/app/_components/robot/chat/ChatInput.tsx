'use client'

import { cn } from '@/utils/cn'
import { Chat, UIMessage, useChat } from '@ai-sdk/react'
import { UIDataTypes, UITools } from 'ai'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import ChatTypingIndicator from './ChatTypingIndicator'

type ChatInputProps = {
  chat: Chat<UIMessage<unknown, UIDataTypes, UITools>>
  className?: string
  setIsThinking: Dispatch<SetStateAction<boolean>>
}

const ChatInput = ({ chat, className, setIsThinking }: ChatInputProps) => {
  const [chatInput, setChatInput] = useState<string>('')
  const { sendMessage, status } = useChat({ chat })

  useEffect(() => {
    setIsThinking(status !== 'ready')
    // if(status !== "ready") {
    //   setIsThinking(true)
    // } else {
    //   setIsThinking(false)
    // }
  }, [status, setIsThinking])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage({ text: chatInput.trim() })
    setChatInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey && 'form' in e.target && !disabled) {
      e.preventDefault()
      ;(e.target.form as HTMLFormElement).requestSubmit()
    }
  }

  const disabled = chatInput.trim() === '' || status !== 'ready'

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'bg-accent m-2 flex w-auto rounded-xl text-white',
        className
      )}
    >
      <textarea
        name="chatInput"
        id="chatInput"
        rows={2}
        placeholder={'Example: What has been your most challenging project?'}
        className="w-full resize-none py-1 pl-3 focus:outline-none"
        aria-label="Chat Input"
        value={chatInput}
        onKeyDown={handleKeyDown}
        onChange={(e) => setChatInput(e.target.value)}
      />
      <button
        disabled={disabled}
        className={cn(
          'm-2 flex w-36 items-center justify-between gap-3 rounded-full bg-black/20 px-4 py-2',
          { 'cursor-pointer': !disabled }
        )}
        type="submit"
      >
        <span className="w-full justify-items-center">
          {status !== 'ready' ? (
            <ChatTypingIndicator color="white" />
          ) : (
            'Submit'
          )}
        </span>
        <FaPaperPlane size={16} className="shrink-0" />
      </button>
    </form>
  )
}

export default ChatInput

'use client'

import { cn } from "@/utils/cn";
import { Chat, UIMessage, useChat } from "@ai-sdk/react";
import { UIDataTypes, UITools } from "ai";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatTypingIndicator from "./ChatTypingIndicator";

type ChatInputProps = {
  chat: Chat<UIMessage<unknown, UIDataTypes, UITools>>;
  className?: string;
};

const ChatInput = ({ chat, className }: ChatInputProps) => {
  const [chatInput, setChatInput] = useState<string>("")
  const {sendMessage, status} = useChat({chat})

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({text: chatInput.trim()});
    setChatInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log("keyDown");
    if (
      e.key == "Enter" &&
      !e.shiftKey &&
      "form" in e.target &&
      !disabled
    ) {
      e.preventDefault();
      (e.target.form as HTMLFormElement).requestSubmit();
    }
  };

  const disabled = chatInput.trim() === "" || status !== "ready"

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-auto bg-accent text-white rounded-xl flex m-2", className)}
    >
      <textarea
        autoFocus
        name="chatInput"
        id="chatInput"
        rows={2}
        placeholder={"Example: What has been your most challenging project?"}
        className="py-1 pl-3 focus:outline-none resize-none w-full"
        aria-label="Chat Input"
        value={chatInput}
        onKeyDown={handleKeyDown}
        onChange={(e) => setChatInput(e.target.value)}
      />
      <button
        disabled={disabled}
        className={cn(
          "m-2 py-2 px-4 bg-black/20 rounded-full flex justify-between items-center gap-3 w-36",
          { "cursor-pointer": !disabled }
        )}
        type="submit"
      >
        <span className="w-full justify-items-center">
          { status !== 'ready' ? <ChatTypingIndicator color="white"/> : "Submit"}
        </span>
        <FaPaperPlane size={16} className="shrink-0" />
      </button>
    </form>
  );
};

export default ChatInput;

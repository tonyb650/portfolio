import { cn } from "@/utils/cn";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

type ChatInputProps = {
  onSend: (messageText: string) => void;
  className?: string;
};

const ChatInput = ({ onSend, className }: ChatInputProps) => {
  const [chatInput, setChatInput] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(chatInput.trim());
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

  const disabled = chatInput.trim() === "";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-auto bg-[#B37D4E] rounded-xl flex m-2", className)}
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
          "m-2 py-2 px-4 bg-black/20 rounded-full flex items-center gap-3",
          { "cursor-pointer": !disabled }
        )}
        type="submit"
      >
        Submit
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default ChatInput;

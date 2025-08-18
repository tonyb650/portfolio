import { cn } from "@/utils/cn";
import ChatMessage, { type ChatMessage as ChatMessageType } from "./ChatMessage";

type Props = {
  messages: ChatMessageType[];
  className?: string;
};

const ChatMessageList = ({ messages, className }: Props) => {
  return (
    <div className={cn(className)}>
      {messages.map((message, i) => (
        <ChatMessage key={i} message={message} className="" />
      ))}
    </div>
  );
};

export default ChatMessageList;

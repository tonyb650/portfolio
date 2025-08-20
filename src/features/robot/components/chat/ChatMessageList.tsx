import { cn } from "@/utils/cn";
import ChatMessage, { type ChatMessage as ChatMessageType } from "./ChatMessage";

type Props = {
  messages: ChatMessageType[];
  className?: string;
};


const ChatMessageList = ({ messages, className }: Props) => {
  return (
    <div className={cn("overflow-y-auto h-full flex flex-col justify-end",className)}
      style={{scrollbarColor: "#3498db #ecf0f1"}}
    >
      {messages.map((message, i) => (
        <ChatMessage key={i} message={message} />
      ))}
    </div>
  );
};

export default ChatMessageList;

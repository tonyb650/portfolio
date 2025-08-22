import { cn } from "@/utils/cn";
import ChatMessage, { type ChatMessage as ChatMessageType } from "./ChatMessage";

type Props = {
  messages: ChatMessageType[];
  className?: string;
};


const ChatMessageList = ({ messages, className }: Props) => {
  return (
    <div className={cn("flex flex-col-reverse h-full overflow-y-scroll", className)}
      style={{scrollbarColor: "#0B3C5d #438496"}}
    >
      <div>
        {messages.map((message, i) => (
          <ChatMessage key={i} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessageList;

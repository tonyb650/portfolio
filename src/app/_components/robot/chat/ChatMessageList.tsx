import { cn } from "@/utils/cn";
import { ChatMessageWrapper } from "./ChatMessage";
import { UIDataTypes, UIMessage, UITools } from "ai";
import { MemoizedMarkdown } from "./MemoizedMarkdown";

type Props = {
  messages: UIMessage<unknown, UIDataTypes, UITools>[];
  className?: string;
};


const ChatMessageList = ({ messages, className }: Props) => {
  return (
    <div className={cn("flex flex-col-reverse h-full overflow-y-scroll", className)}
      style={{scrollbarColor: "#0B3C5d #438496"}}
    >
      <div className="space-y-0.5">
        {messages.map((message) => (
          <div key={message.id}>
              {message.parts.map((part) => {
                if (part.type === "text") {
                  return (
                    <ChatMessageWrapper key={`${message.id}-text`} role={message.role}>

                      <MemoizedMarkdown

                        id={message.id}
                        content={part.text}
                      />
                    </ChatMessageWrapper>
                  );
                }
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessageList;

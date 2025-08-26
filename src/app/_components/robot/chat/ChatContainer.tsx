import { cn } from "@/utils/cn";
import { type PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const ChatContainer = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={cn("flex justify-between h-[calc(100dvh-65px)] flex-col rounded-2xl bg-white/10", className)}>
      {children}
    </div>
  );
};

export default ChatContainer;

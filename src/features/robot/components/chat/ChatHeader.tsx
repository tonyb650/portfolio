import { cn } from "@/utils/cn";
import type { PropsWithChildren } from "react";

type ChatHeaderProps = {
  className?: string;
};

const ChatHeader = ({
  children,
  className
}: PropsWithChildren<ChatHeaderProps>) => {
  return (
    <div className={cn( "rounded-t-2xl text-center py-1", className )}>
      {children}
    </div>
  );
};

export default ChatHeader;

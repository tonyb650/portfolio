import { cn } from "@/utils/cn";
import { useState } from "react";
import RobotCard from "./RobotCard";
import Chat from "./chat/Chat";

const RobotMe = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  // const [isWorking, setIsWorking] = useState(false)

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto h-dvh pt-14 pb-2 px-5 grid grid-cols-4 gap-4 "
    >
      <div className={cn("col-span-1 flex justify-center items-start", {"bg-black/20": true})}>
        <RobotCard/>
      </div>
      <div className="col-span-3">
        <Chat/>
      </div>
    </div>
  );
};

export default RobotMe;

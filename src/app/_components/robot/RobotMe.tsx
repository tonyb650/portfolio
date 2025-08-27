import { cn } from "@/utils/cn";
import RobotCard from "./RobotCard";
import Chat from "./chat/Chat";

const RobotMe = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto h-dvh pt-14 pb-2 px-5 sm:grid sm:grid-cols-4 gap-4 "
    >
      <div className={cn("hidden col-span-1 sm:flex justify-center items-start", {"bg-black/20": true})}>
        <RobotCard/>
      </div>
      <div className="sm:col-span-3">
        <Chat/>
      </div>
    </div>
  );
};

export default RobotMe;

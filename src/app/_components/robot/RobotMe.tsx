import Chat from "./chat/Chat";
import ParticleAnimation from "./ParticleAnimation";
import { useRef, useState } from "react";

const RobotMe = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  const [isThinking, setIsThinking] = useState<boolean>(false)
  const containerRef = useRef(null)

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto h-dvh pt-14 pb-2 px-5 sm:grid sm:grid-cols-4 gap-4 "
    >
      <div ref={containerRef} className={"hidden col-span-1 sm:flex justify-center items-start h-[calc(100dvh-65px)]"}>
        <ParticleAnimation containerRef={containerRef} speed={isThinking ? 8 : 0.25}/>
      </div>
      <div className="sm:col-span-3 h-[calc(100dvh-65px)] ">
        <Chat setIsThinking={setIsThinking}/>
      </div>
    </div>
  );
};

export default RobotMe;

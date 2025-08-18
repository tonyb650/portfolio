import ChatContainer from "@/features/robot/components/chat/ChatContainer";

const RobotMe = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto h-dvh border py-12 px-5 grid grid-cols-4 gap-4">
      <div className="border col-span-1">
        Agentic Me
      </div>
      <div className="border col-span-3">

<ChatContainer/>
      </div>
    </div>
  );
};

export default RobotMe
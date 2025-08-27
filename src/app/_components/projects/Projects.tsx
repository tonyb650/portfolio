import Arc from "../Arc";
import ProjectGrid from "./ProjectGrid";

// ! text-black ??

const Projects = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="" >
      <Arc openDown={true} className="text-back"/>
      <div className="max-w-7xl mx-auto min-h-[85dvh] md:min-h-[75dvh] flex items-center justify-center">
        <ProjectGrid />
      </div>
      <Arc openDown={false} className="text-back"/>
    </div>
  );
};

export default Projects
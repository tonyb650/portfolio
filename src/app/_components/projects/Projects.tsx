import Arc from "../Arc";
import ProjectGrid from "./ProjectGrid";

// ! text-black ??
const Projects = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="border border-white" >
      <Arc openDown={true} className="text-back"/>
      <div className="max-w-7xl mx-auto">
        <ProjectGrid />
      </div>
      <Arc openDown={false} className="text-back"/>
    </div>
  );
};

export default Projects
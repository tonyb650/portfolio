import Arc from "../Arc";
import ProjectGrid from "./ProjectGrid";


const Projects = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref}>
      <Arc openDown={true} />
      <div className="max-w-7xl mx-auto">
        <ProjectGrid />
      </div>
      <Arc openDown={false} />
    </div>
  );
};

export default Projects
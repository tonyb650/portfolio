import Arc from "../Arc";
import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";
import projects from "./data/projects.json";

export type Project = {
  coverImage: string;
  screenshot: string;
  title: string;
  shortDescription: string;
  description: string;
  url?: string;
  gitHub?: string;
  light?: boolean;
};

const Projects = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="">
      <Arc openDown={true} className="text-bgcolor" />
      <div className="max-w-7xl mx-auto min-h-[85dvh] md:min-h-[75dvh] flex items-center justify-center">
        <ProjectGrid>
          {(projects as Project[]).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectGrid>
      </div>
      <Arc openDown={false} className="text-bgcolor" />
    </div>
  );
};

export default Projects;

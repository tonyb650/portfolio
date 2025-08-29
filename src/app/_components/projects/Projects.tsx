import Arc from "../Arc";
import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";


export type Project = {
  coverImage: string;
  screenshot: string;
  light?: boolean;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    coverImage: "cybersecurity.png",
    screenshot: "ps_dashboard.png",
    title: "Pocket Security",
    description: "A structured interview platform for assessing security needs."
  },
  {
    coverImage: "wws_speech.png",
    screenshot: "wws_screenshot.png",
    title: "Wedding Wordsmith",
    description: "An AI-powered wedding planning and speech collaboration platform."
  },
  {
    coverImage: "clock.png",
    screenshot: "tm_screenshot.png",
    title: "Time Manager",
    description: "A unique time management tool with integrated Pomodoro timer."
  },
  {
    coverImage: "calendar.png",
    screenshot: "calendify_screenshot.png",
    title: "Calendify",
    description: "Using TensorFlow and Machine Learning to optimally schedule you calendar."
  }
];

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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectGrid>
      </div>
      <Arc openDown={false} className="text-bgcolor" />
    </div>
  );
};

export default Projects;

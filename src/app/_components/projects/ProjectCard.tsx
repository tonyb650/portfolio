import { cn } from "@/utils/cn";
import {
  motion,
  useAnimationControls,
  type LegacyAnimationControls
} from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import RollText from "./RollText";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";
import { type Project } from "./Projects";

const ProjectCard = ({project}: {project: Project}) => {
  const hoverControls = useAnimationControls()
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false)

  const highlight = () => {
    hoverControls.start("highlight");
  }

  const restore = () => {
    hoverControls.start("initial");
  }

  // TODO Look to WDS Job Board for proper handling of responsive card layout
  return (
    <>
      <button
        onMouseOver={highlight}
        onMouseLeave={restore}
        className={cn(
          "lg:min-w-[400px] md:min-h-[300px] overflow-hidden relative flex flex-col justify-between p-2.5",
          "bg-linear-to-t from-[#000000DD] via-[#000000DD] via-15% to-[#00000000] to-40%"
        )}
        onClick={() => setDetailOpen(true)}
      >
        <div className="flex justify-end">
          <Pointer hoverControls={hoverControls} light={project.light || false} />
        </div>
        <div className={cn("text-white text-left")}>
          <Title text={project.title} hoverControls={hoverControls} className={cn({"text-shadow-black text-shadow-sm": project.light})}/>
          <div>{project.description}</div>
        </div>
        <ProjectImage filename={project.coverImage} hoverControls={hoverControls} />
      </button>
      <ProjectDialog project={project} isOpen={isDetailOpen} onClose={() => setDetailOpen(false)}/>
    </>
  );
};

export default ProjectCard;

const Title = ({ text, hoverControls, className }: {text: string, hoverControls: LegacyAnimationControls, className?: string}) => {
  return (
    <RollText hoverControls={hoverControls} className={cn("text-2xl", className)}>
      {text}
    </RollText>
  );
};

const Pointer = ({
  hoverControls,
  light
}: {
  hoverControls: LegacyAnimationControls;
  light: boolean;
}) => {
  return (
    <motion.div
      variants={{
        initial: { rotate: "0deg" },
        highlight: { rotate: "-45deg" }
      }}
      initial="initial"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      animate={hoverControls}
    >
      <GoArrowRight
        className={cn("text-white size-12 ", { "text-black": light })}
      />
    </motion.div>
  );
};

const ProjectImage = ({ filename, hoverControls }:{filename: string, hoverControls: LegacyAnimationControls}) => {

  return (
    <motion.img
      src={`/images/${filename}`}
      variants={{
        initial: { scale: "1", filter: "grayscale(100%)" },
        highlight: { scale: "1.1", filter: "grayscale(0%)" }
      }}
      initial="initial"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      animate={hoverControls}
      className="h-full w-full object-cover brightness-90 grayscale absolute top-0 left-0 z-[-1] hover:grayscale-0 hover:brightness-100 hover:scale-110 duration-300 ease-in-out"
    />
  );
};

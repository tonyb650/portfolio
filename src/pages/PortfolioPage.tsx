import ColorPalette from "@/components/ColorPalette";
import Arc from "@/components/Arc";
import Typewriter from "@/features/about/Typewriter";
import Welcome from "@/features/about/Welcome";
import { useContext } from "react";
import { RefContext, type RefContextType } from "@/layouts/RootLayout";
import RobotMe from "@/features/robot/components/RobotMe";
import ProjectGrid from "@/features/projects/components/ProjectGrid";

const PortfolioPage = () => {
  const refs = useContext<RefContextType | null>(RefContext);
  const aboutRef = refs?.aboutRef || null;
  const projectsRef = refs?.projectsRef || null;
  const robotRef = refs?.robotRef || null;
  const contactRef = refs?.contactRef || null;

  return (
    <>
      <div className="bg-[#0B3C5d]">
        <About ref={aboutRef} />
      </div>

      <Projects ref={projectsRef} />

      <div className="bg-[#0B3C5d]">
        <RobotMe ref={robotRef} />
        <Contact ref={contactRef} />
      </div>
    </>
  );
};

export default PortfolioPage;

const WelcomeText = () => {
  return (
    <div className="h-60 md:h-30">
      <Typewriter
        text= "My name is Tony Brierly, I'm a full stack software developer experienced in working closely with clients, web applications from rough concept to full implementation. Primarily proficiencies include React, Typescript and NodeJS."
        delay={25}
      />
    </div>
  );
};

const About = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto min-h-[90vh] md:min-h-[80vh]  flex">
      <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:items-center  md:flex-auto">
        <div className="md:col-span-3   flex flex-auto items-start">
          <div className="w-full space-y-8 md:space-y-0 px-4 md:px-0 ">

            <Welcome className=""/>
            <WelcomeText />
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center  flex-auto items-center  ">
          <img
            src="/src/assets/hands_typing.png"
            width={200}
            className="bg-white rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};


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



const Contact = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto h-96">
      contact section
      <ColorPalette />
    </div>
  );
};


/**



 */
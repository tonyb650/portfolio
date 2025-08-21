import Arc from "@/components/Arc";
import ColorPalette from "@/components/ColorPalette";
import Welcome from "@/features/about/Welcome";
import WelcomeText from "@/features/about/WelcomeText";
import ContactForm from "@/features/contact/ContactForm";
import ProjectGrid from "@/features/projects/components/ProjectGrid";
import RobotMe from "@/features/robot/components/RobotMe";
import { RefContext, type RefContextType } from "@/layouts/RootLayout";
import { useContext } from "react";
import Laptop from '@/assets/about/hands_typing.png'

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
        <footer className="text-center text-white p-1">
          tonybrierly.com
        </footer>
      </div>
    </>
  );
};

export default PortfolioPage;


const About = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto min-h-[90vh] md:min-h-[80vh]  flex">
      <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:items-center  md:flex-auto">
        <div className="md:col-span-3   flex flex-auto items-start">
          <div className="w-full space-y-8 md:space-y-0 pl-6  ">
            <Welcome className=""/>
            <WelcomeText />
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center  flex-auto items-center  ">
          <img
            src={Laptop}
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
    <div ref={ref} className="max-w-7xl mx-auto h-dvh pt-24 pb-2 px-5  gap-4 ">
      <ContactForm/>
      <ColorPalette />
    </div>
  );
}
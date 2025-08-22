import { RefObject, useContext } from "react";
// import { RefContext, type RefContextType } from "@/layouts/RootLayout";
import MenuButton from "./MenuButton";
import MountainIcon from "../MountainIcon";
import { RefContext, RefContextType } from "@/app/page";

export type PageSection = {
  title: string;
  sectionRef: RefObject<HTMLDivElement | null> | null;
};

const Navbar = () => {
  const refs = useContext<RefContextType | null>(RefContext);

  const aboutRef = refs?.aboutRef || null;
  const projectsRef = refs?.projectsRef || null;
  const robotRef = refs?.robotRef || null;
  const contactRef = refs?.contactRef || null;

  const sections: PageSection[] = [
    { title: "About", sectionRef: aboutRef },
    { title: "Projects", sectionRef: projectsRef },
    { title: "Robot Me", sectionRef: robotRef },
    { title: "Contact", sectionRef: contactRef }
  ];

  return (
    <div className="flex justify-between sm:justify-center md:justify-between items-center h-12 px-4">
      <button
        className="sm:hidden md:inline cursor-pointer"
        onClick={() => {
          aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <MountainIcon size={36} className="rounded-md shadow shadow-black/40" />
      </button>
      <ul className="hidden sm:flex sm:gap-10 text-white text-2xl ">
        {sections.map(({ title, sectionRef }, i) => (
          <li
            key={i}
            className="group text-white transition-all duration-300 ease-in-out"
          >
            <button
              className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
              onClick={() => {
                sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
      <MenuButton className="sm:hidden" />
    </div>
  );
};

export default Navbar;

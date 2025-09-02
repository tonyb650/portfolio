import { RefObject, useContext, useState } from "react";
import MountainIcon from "../MountainIcon";
import { RefContext, RefContextType } from "@/app/page";
import MenuButton from "./MenuButton";
import { cn } from "@/utils/cn";

const NAVBAR_HEIGHT = 48

export type PageSection = {
  title: string;
  sectionRef: RefObject<HTMLDivElement | null> | null;
  offset: number;
};

const Navbar = () => {
  const refs = useContext<RefContextType | null>(RefContext);
  const [isMenuOpen, setMenuOpen] = useState(false)


  const aboutRef = refs?.aboutRef || null;
  const projectsRef = refs?.projectsRef || null;
  const robotRef = refs?.robotRef || null;
  const contactRef = refs?.contactRef || null;

  const sections: PageSection[] = [
    { title: "About", sectionRef: aboutRef, offset: NAVBAR_HEIGHT },
    { title: "Projects", sectionRef: projectsRef, offset: 72 }, // Arc height == ~72
    { title: "Robot Me", sectionRef: robotRef, offset: 0 },
    { title: "Contact", sectionRef: contactRef, offset: 0 }
  ];

  const scrollToSection = (ref: RefObject<HTMLDivElement | null> | null, offset: number) => {
    const elementPosition = ref?.current?.getBoundingClientRect().top                        // Relatively, where on the screen is this element now?
    const currentPosition = window.pageYOffset                                               // how far down the screen is the user currently scrolled?
    const offsetPosition = elementPosition ? elementPosition + currentPosition  - offset : 0 // add it all together to get a good target to scroll to
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className={`flex justify-between sm:justify-center md:justify-between items-center mx-4 min-h-[${NAVBAR_HEIGHT}px]`}>

        {/* Logo */}
        <button
          className="sm:hidden md:inline cursor-pointer"
          onClick={() => {scrollToSection(sections[0].sectionRef, sections[0].offset)}}
        >
          <MountainIcon size={36} className="rounded-md shadow shadow-black/40 hover:scale-105 transition-all" />
        </button>

        {/* Desktop */}
        <ul className="hidden sm:flex sm:gap-10 text-white text-2xl py-2 px-4">
          {sections.map(({ title, sectionRef, offset }, i) => (
            <li
            key={i}
            className="group text-white transition-all duration-300 ease-in-out"
            >
              <button
                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer"
                onClick={() => {scrollToSection(sectionRef,offset)}}
                >
                {title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button onClick={() =>{ console.log("clicked"); setMenuOpen(prev => !prev)}} className="sm:hidden">
          <MenuButton isOpen={isMenuOpen} />
        </button>
        
      </div>

      {/* **** Slide-Over Menu *** */}
      {/* First div is a container that covers the full screen (except the top navbar). The slide-over needs this container to move into */}
      <div className={cn("w-full h-full fixed top-11 invisible sm:hidden", {"visible": isMenuOpen}  )}>
        {/* Second div is a background. This disables the remainder of the screen while the menu is open. This slides in with the slide-over just to look prettier */}
        <div  className={cn("w-full h-full bg-gray-900 absolute top-0 right-0 duration-300 ease-out transition-all translate-x-full opacity-0", {"translate-x-0 opacity-50": isMenuOpen})} onClick={() => setMenuOpen(false)}/>
        {/* Third div (ul) is the actual slide-over menu. This lives off screen and then translates in from the right when isMenuOpen == true */}
        <ul className={cn("w-full bg-accent text-right absolute space-y-5 py-5 px-8 right-0 duration-300 ease-out transition-all translate-x-full", {"translate-x-0": isMenuOpen})} >
          {sections.map(({ title, sectionRef, offset }, i) => (
            <li key={i} className="list-none">
              <button
                className="text-2xl text-text hover:text-white transition-all cursor-pointer"
                onClick={() => {
                  setMenuOpen(false)
                  scrollToSection(sectionRef, offset)
                }}
                >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar
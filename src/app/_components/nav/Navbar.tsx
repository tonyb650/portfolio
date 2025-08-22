import { useContext } from "react";
// import { RefContext, type RefContextType } from "@/layouts/RootLayout";
import MenuButton from "./MenuButton";
import MountainIcon from "../MountainIcon";
import { RefContext, RefContextType } from "@/app/page";

const Navbar = () => {

  const refs = useContext<RefContextType | null>(RefContext)

  const aboutRef = refs?.aboutRef || null
  const projectsRef = refs?.projectsRef ||null
  const robotRef = refs?.robotRef || null
  const contactRef = refs?.contactRef || null

  const sections = [
    {title: "About", sectionRef: aboutRef},
    {title: "Projects", sectionRef: projectsRef},
    {title: "Robot Me", sectionRef: robotRef},
    {title: "Contact", sectionRef: contactRef},
  ]

  return (
    <div className="flex justify-between sm:justify-center md:justify-between items-center h-12 px-4">
      <div className="sm:hidden md:inline">
        <MountainIcon height={36} width={36} className="rounded-md shadow shadow-black/40"/>
      </div>
      <ul className="hidden sm:flex sm:gap-10 text-white text-2xl ">
        { sections.map( ({title, sectionRef}, i) => (

          <li key={i}>
            <button
              className="cursor-pointer"
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

export default Navbar
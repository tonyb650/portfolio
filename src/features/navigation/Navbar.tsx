import { useContext } from "react";
import { RefContext, type RefContextType } from "@/layouts/RootLayout";
import MenuButton from "./MenuButton";

const Navbar = () => {

  const refs = useContext<RefContextType | null>(RefContext)

  const aboutRef = refs?.aboutRef || null
  const projectsRef = refs?.projectsRef ||null
  const robotRef = refs?.robotRef || null
  const contactRef = refs?.contactRef || null


  return (
    <div className="flex justify-between sm:justify-center md:justify-between items-center h-12 px-4">
      <div className="sm:hidden md:inline">
        <Logo />
      </div>
      <ul className="hidden sm:flex sm:gap-10 text-white text-2xl ">
        <li>
          <button
            onClick={() => {
              // const element = document.getElementById("about");
              aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // const element = document.getElementById("projects");
              projectsRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // const element = document.getElementById("robot");
              robotRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Robot Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // const element = document.getElementById("contact");
              // console.log("firing")
              // console.log(contactRef)
              contactRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </button>
        </li>
      </ul>
      <MenuButton className="sm:hidden" />
    </div>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <div className="text-[#B37D4E] font-black text-2xl shadow bg-white rounded-lg py-1 font-stretch-ultra-condensed">
      {"<T/B>"}
    </div>
  );
};

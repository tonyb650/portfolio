import { RefObject, useContext, useState } from "react";
import MountainIcon from "../MountainIcon";
import { RefContext, RefContextType } from "@/app/page";
import MenuButton from "./MenuButton";
import { cn } from "@/utils/cn";

export type PageSection = {
  title: string;
  sectionRef: RefObject<HTMLDivElement | null> | null;
};

const Navbar = () => {
  const refs = useContext<RefContextType | null>(RefContext);
  const [isMenuOpen, setMenuOpen] = useState(false)


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
    <>
      <div className="flex justify-between sm:justify-center md:justify-between items-center mx-4 min-h-12">

        {/* Logo */}
        <button
          className="sm:hidden md:inline cursor-pointer"
          onClick={() => {
            aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <MountainIcon size={36} className="rounded-md shadow shadow-black/40 hover:scale-105 transition-all" />
        </button>

        {/* Desktop */}
        <ul className="hidden sm:flex sm:gap-10 text-white text-2xl py-2 px-4">
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
          {sections.map(({ title, sectionRef }, i) => (
            <li key={i} className="list-none">
              <button
                className="text-2xl text-text hover:text-white transition-all cursor-pointer"
                onClick={() => {
                  setMenuOpen(false)
                  sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
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

export default Navbar;
{/* <div  className={cn("w-full  duration-500 ease-out transition-all absolute  bg-gray-900 opacity-0 ", {"opacity-100": isMenuOpen})}> */}

/*


import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div className="fixed top-24 w-52 text-right">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              <TrashIcon className="size-4 fill-white/30" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}


 */
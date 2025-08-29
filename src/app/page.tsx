"use client"

import { createContext } from "react";
import About from "./_components/about/About";
import Projects from "./_components/projects/Projects";
import RobotMe from "./_components/robot/RobotMe";
import Contact from "./_components/contact/Contact";
import Navbar from "./_components/nav/Navbar";
import ScrollToTop from "./_components/ScrollToTop";

export type RefContextType = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  robotRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export const RefContext = createContext<RefContextType | null>(null);

import { useRef } from "react";
import { cn } from "@/utils/cn";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const robotRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <RefContext.Provider
      value={{ aboutRef, projectsRef, robotRef, contactRef }}
    >
      <ScrollToTop />
      <div className="flex flex-col ">
        <header className={cn("z-10 w-full bg-accent sm:bg-radial-[at_75%_00%] from-accent to-primary shadow-sm fixed top-0")}>
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </header>

        <main>
          <div className="bg-bgcolor pt-12">
            <About ref={aboutRef} />
          </div>

          <Projects ref={projectsRef} />

          <div className="bg-bgcolor">
            <RobotMe ref={robotRef} />
            <Contact ref={contactRef} />
          </div>
        </main>

        <footer className="text-center text-text p-1 bg-bgcolor">
          tonybrierly.com
        </footer>
      </div>
    </RefContext.Provider>
  );
}
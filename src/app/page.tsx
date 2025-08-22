"use client"

import { createContext, useContext, useEffect, useState } from "react";
import About from "./_components/about/About";

export type RefContextType = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  robotRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export const RefContext = createContext<RefContextType | null>(null);

export default function Home() {
  const refs = useContext<RefContextType | null>(RefContext);

  const aboutRef = refs?.aboutRef || null;
  const projectsRef = refs?.projectsRef || null;
  const robotRef = refs?.robotRef || null;
  const contactRef = refs?.contactRef || null;





  return (
    <RefContext.Provider
      value={null}
    >
          <ScrollToTop />
      <div className="flex flex-col ">
        {/* <header className="z-10 bg-[#438496] shadow-sm sticky top-0">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </header> */}

    
      <div className="bg-[#0B3C5d]">
        <About ref={aboutRef} />
      </div>

      {/* <Projects ref={projectsRef} />

      <div className="bg-[#0B3C5d]">
        <RobotMe ref={robotRef} />
        <Contact ref={contactRef} /> */}
        <footer className="text-center text-white p-1">
          tonybrierly.com
        </footer>
      </div>
      {/* </div> */}
    </RefContext.Provider>
  );
}



const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};
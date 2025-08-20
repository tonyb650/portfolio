import { Outlet, ScrollRestoration } from "react-router";
import React, { createContext, useRef } from "react";
import Navbar from "@/features/navigation/Navbar";

export type RefContextType = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  robotRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export const RefContext = createContext<RefContextType | null>(null);

const RootLayout = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const robotRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <RefContext.Provider
      value={{ aboutRef, projectsRef, robotRef, contactRef }}
    >
      <div className="flex flex-col ">
        <header className="z-10 bg-[#438496] shadow-sm sticky top-0">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </header>
        <ScrollRestoration />

        <Outlet />
        
      </div>
    </RefContext.Provider>
  );
};

export default RootLayout;

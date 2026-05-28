'use client'

import { createContext } from 'react'
import About from './_components/about/About'
import Projects from './_components/projects/Projects'
import RobotMe from './_components/robot/RobotMe'
import Contact from './_components/contact/Contact'
import Navbar from './_components/nav/Navbar'
import Button from './_components/ui/Button'
// import ScrollToTop from "./_components/ScrollToTop";

export type RefContextType = {
  aboutRef: React.RefObject<HTMLDivElement | null>
  projectsRef: React.RefObject<HTMLDivElement | null>
  robotRef: React.RefObject<HTMLDivElement | null>
  contactRef: React.RefObject<HTMLDivElement | null>
}

export const RefContext = createContext<RefContextType | null>(null)

import { useRef } from 'react'
import { cn } from '@/utils/cn'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const robotRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  return (
    <RefContext.Provider value={{ aboutRef, projectsRef, robotRef, contactRef }}>
      {/* <ScrollToTop /> */}
      <div className="flex flex-col">
        <header className="bg-accent from-accent to-primary fixed top-0 z-10 w-full shadow-sm sm:bg-radial-[at_75%_00%]">
          <div className="mx-auto max-w-7xl">
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

        <footer className="text-text bg-bgcolor flex justify-center pb-5">
          <Button as="a" variant="ghost" href="https://www.linkedin.com/in/tony-brierly">
            LinkedIn
          </Button>
          <Button as="a" variant="ghost" href="https://github.com/tonyb650">
            GitHub
          </Button>
        </footer>
      </div>
    </RefContext.Provider>
  )
}

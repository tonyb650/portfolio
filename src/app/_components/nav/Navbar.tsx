import { RefObject, useContext, useState } from 'react'
import MountainIcon from '../MountainIcon'
import { RefContext, RefContextType } from '@/app/page'
import MenuButton from './MenuButton'
import { cn } from '@/utils/cn'

const NAVBAR_HEIGHT = 48

export type PageSection = {
  title: string
  sectionRef: RefObject<HTMLDivElement | null> | null
  offset: number
}

const Navbar = () => {
  const refs = useContext<RefContextType | null>(RefContext)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const aboutRef = refs?.aboutRef || null
  const projectsRef = refs?.projectsRef || null
  const robotRef = refs?.robotRef || null
  const contactRef = refs?.contactRef || null

  const sections: PageSection[] = [
    { title: 'About', sectionRef: aboutRef, offset: NAVBAR_HEIGHT },
    { title: 'Projects', sectionRef: projectsRef, offset: 72 }, // Arc height == ~72
    { title: 'Robot Me', sectionRef: robotRef, offset: 0 },
    { title: 'Contact', sectionRef: contactRef, offset: 0 },
  ]

  const scrollToSection = (
    ref: RefObject<HTMLDivElement | null> | null,
    offset: number
  ) => {
    const elementPosition = ref?.current?.getBoundingClientRect().top // Relatively, where on the screen is this element now?
    const currentPosition = window.pageYOffset // how far down the screen is the user currently scrolled?
    const offsetPosition = elementPosition
      ? elementPosition + currentPosition - offset
      : 0 // add it all together to get a good target to scroll to
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div
        className={`mx-4 flex items-center justify-between sm:justify-center md:justify-between min-h-[${NAVBAR_HEIGHT}px]`}
      >
        {/* Logo */}
        <button
          className="cursor-pointer sm:hidden md:inline"
          onClick={() => {
            scrollToSection(sections[0].sectionRef, sections[0].offset)
          }}
        >
          <MountainIcon
            size={36}
            className="rounded-md shadow shadow-black/40 transition-all hover:scale-105"
          />
        </button>

        {/* Desktop */}
        <ul className="hidden px-4 py-2 text-2xl text-white sm:flex sm:gap-10">
          {sections.map(({ title, sectionRef, offset }, i) => (
            <li
              key={i}
              className="group text-white transition-all duration-300 ease-in-out"
            >
              <button
                className="cursor-pointer bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]"
                onClick={() => {
                  scrollToSection(sectionRef, offset)
                }}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => {
            console.log('clicked')
            setMenuOpen((prev) => !prev)
          }}
          className="sm:hidden"
        >
          <MenuButton isOpen={isMenuOpen} />
        </button>
      </div>

      {/* **** Slide-Over Menu *** */}
      {/* First div is a container that covers the full screen (except the top navbar). The slide-over needs this container to move into */}
      <div
        className={cn('invisible fixed top-11 h-full w-full sm:hidden', {
          visible: isMenuOpen,
        })}
      >
        {/* Second div is a background. This disables the remainder of the screen while the menu is open. This slides in with the slide-over just to look prettier */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-full translate-x-full bg-gray-900 opacity-0 transition-all duration-300 ease-out',
            { 'translate-x-0 opacity-50': isMenuOpen }
          )}
          onClick={() => setMenuOpen(false)}
        />
        {/* Third div (ul) is the actual slide-over menu. This lives off screen and then translates in from the right when isMenuOpen == true */}
        <ul
          className={cn(
            'bg-accent absolute right-0 w-full translate-x-full space-y-5 px-8 py-5 text-right transition-all duration-300 ease-out',
            { 'translate-x-0': isMenuOpen }
          )}
        >
          {sections.map(({ title, sectionRef, offset }, i) => (
            <li key={i} className="list-none">
              <button
                className="text-text cursor-pointer text-2xl transition-all hover:text-white"
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
  )
}

export default Navbar

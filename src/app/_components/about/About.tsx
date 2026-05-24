import Laptop from '@/assets/about/hands_typing.png'
import Welcome from './Welcome'
import Image from 'next/image'
import Typewriter from './Typewriter'

const WELCOME_BIO_TEXT =
  "Hi, I'm Tony. I'm a full stack software developer who loves working with clients to bring web applications from rough concept to full implementation. Let's build something great together."

const About = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null> | null
}) => {
  return (
    <div ref={ref} className="mx-auto flex min-h-[90vh] max-w-7xl">
      <div className="flex flex-col-reverse md:grid md:flex-auto md:grid-cols-5 md:items-center">
        <div className="flex flex-auto items-start md:col-span-3">
          <div className="w-full space-y-8 px-5 md:space-y-0 md:pl-8">
            <Welcome />
            <div className="h-60 text-center md:ml-4 md:h-30 md:text-left">
              <Typewriter
                text={WELCOME_BIO_TEXT}
                delay={30}
                className="text-text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-auto items-center justify-center pt-12 md:col-span-2 md:pt-0">
          <Image
            priority
            src={Laptop.src}
            width={250}
            height={250}
            className="rounded-2xl bg-white"
            alt="Hands typing on a laptop"
          />
        </div>
      </div>
    </div>
  )
}

export default About

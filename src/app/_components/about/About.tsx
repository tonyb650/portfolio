import Laptop from '@/assets/about/hands_typing.png'
import Welcome from './Welcome';
import WelcomeText from './WelcomeText';
import Image from 'next/image';

const WELCOME_BIO_TEXT = "My name is Tony Brierly. I'm a full stack software developer who loves working with clients to bring web applications from rough concept to full implementation. Let's build something great together."

const About = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto min-h-[90vh] flex">
      <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:items-center md:flex-auto">
        <div className="md:col-span-3 flex flex-auto items-start">
          <div className="w-full space-y-8 md:space-y-0 px-5 md:pl-8 ">
            <Welcome className=""/>
            <WelcomeText text={WELCOME_BIO_TEXT}/>
          </div>
        </div>
        <div className="pt-12 md:pt-0 md:col-span-2 flex justify-center  flex-auto items-center  ">
          <Image
            priority
            src={Laptop.src}
            width={250}
            height={250}
            className="bg-white rounded-2xl"
            alt='Hands typing on a laptop'
          />
        </div>
      </div>
    </div>
  );
};

export default About
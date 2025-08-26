import Laptop from '@/assets/about/hands_typing.png'
import Welcome from './Welcome';
import WelcomeText from './WelcomeText';
import Image from 'next/image';
// import ColorPalette from '../ColorPalette';


const About = ({
  ref
}: {
  ref: React.RefObject<HTMLDivElement | null> | null;
}) => {
  return (
    <div ref={ref} className="max-w-7xl mx-auto min-h-[90vh] md:min-h-[80vh]  flex">
      <div className="flex flex-col-reverse md:grid md:grid-cols-5 md:items-center  md:flex-auto">
        <div className="md:col-span-3   flex flex-auto items-start">
          <div className="w-full space-y-8 md:space-y-0 pl-6  ">
            <Welcome className=""/>
            <WelcomeText />
            {/* <ColorPalette/> */}
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center  flex-auto items-center  ">
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
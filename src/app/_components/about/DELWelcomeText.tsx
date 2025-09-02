import Typewriter from "./Typewriter";

const WelcomeText = ({text}: {text: string}) => {
  return (
    <div className="h-60 md:h-30 md:ml-4">
      <Typewriter
        text={text} 
        delay={30}
        className="text-text"
      />
    </div>
  );
};

export default WelcomeText
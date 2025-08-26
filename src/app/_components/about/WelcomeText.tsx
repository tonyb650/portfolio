import Typewriter from "./Typewriter";

const WelcomeText = () => {
  return (
    <div className="h-60 md:h-30 md:ml-4">
      <Typewriter
        text= "My name is Tony Brierly, I'm a full stack software developer experienced in working closely with clients, web applications from rough concept to full implementation. Primarily proficiencies include React, Typescript and NodeJS."
        delay={25}
        className="text-text"
      />
    </div>
  );
};

export default WelcomeText
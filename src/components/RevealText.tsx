import { motion } from "framer-motion";

const RevealText = () => {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipText href="#">Twitter</FlipText>
      <FlipText href="#">LinkedIn</FlipText>
      <FlipText href="#">Facebook</FlipText>
      <FlipText href="#">Instagram</FlipText>
    </section>
  );
};

export default RevealText;

const DURATION = 0.25
const STAGGER = 0.025

const FlipText = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl "
      style={{lineHeight:0.80}}
    >
      <div>
        {children.split("").map((l, i) => {
          return <motion.span variants={{initial: {y: 0}, hovered: {y: "-100%"}}} key={i} className="inline-block" transition={{duration: DURATION, ease: "easeInOut", delay: STAGGER * i}}>{l}</motion.span>;
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return <motion.span variants={{initial: {y: "100%"}, hovered: {y: 0}}} key={i} className="inline-block"transition={{duration: DURATION, ease: "easeInOut", delay: STAGGER * i}}>{l}</motion.span>;
        })}
      </div>
    </motion.a>
  );
};

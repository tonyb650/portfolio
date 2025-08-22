import { cn } from '@/utils/cn';
import{motion, type LegacyAnimationControls} from 'framer-motion'

const DURATION = 0.15
const STAGGER = 0.025

const RollText = ({hoverControls, children, className }: { hoverControls: LegacyAnimationControls, children: string, className?: string }) => {

  return (
    <motion.h2
      initial="initial"
      animate={hoverControls}
      className={cn("relative block overflow-hidden whitespace-nowrap ", className)}
      style={{lineHeight:1.15}}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span 
              key={i} 
              variants={{
                initial: {y: 0}, 
                highlight: {y: "-115%"}
              }} 
              className="inline-block" 
              transition={{duration: DURATION, ease: "easeInOut", delay: STAGGER * i}}
            >
              {l}
            </motion.span>
          )
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span 
              key={i} 
              variants={{
                initial: {y: "100%"},
                highlight: {y: 0}
              }} 
              className="inline-block"
              transition={{duration: DURATION, ease: "easeInOut", delay: STAGGER * i}}
            >
              {l}
            </motion.span>
          )
        })}
      </div>
    </motion.h2>
  );
};

export default RollText
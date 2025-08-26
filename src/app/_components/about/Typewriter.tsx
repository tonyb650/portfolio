import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';


type TypewriterProps = {
  text: string, 
  delay?: number,
  className?: string
}

const Typewriter = ({ text, delay=25, className }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = text.split(" ")

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + words[currentIndex]+" ");
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, words]);

  return <span className={cn(className)}>{currentText}</span>;
};

export default Typewriter;
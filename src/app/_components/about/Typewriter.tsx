import { useEffect, useState } from 'react';

const Typewriter = ({ text, delay }: {text: string, delay: number}) => {
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

  return <span className='text-white'>{currentText}</span>;
};

export default Typewriter;
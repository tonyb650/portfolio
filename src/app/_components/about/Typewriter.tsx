import { cn } from '@/utils/cn'
import { useEffect, useMemo, useState } from 'react'

type TypewriterProps = {
  text: string
  delay?: number
  className?: string
}

const Typewriter = ({ text, delay = 25, className }: TypewriterProps) => {
  const [visibleWordCount, setVisibleWordCount] = useState(0)

  const words = useMemo(() => text.split(' '), [text])

  /* First useEffect is not needed here, but makes this component more useful in other apps */
  useEffect(() => {
    setVisibleWordCount(0)
  }, [text])

  useEffect(() => {
    if (visibleWordCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleWordCount((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [visibleWordCount, delay, words.length])

  return (
    <div aria-label={text}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn('word', className, {
            'word-visible': visibleWordCount > index,
          })}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export default Typewriter

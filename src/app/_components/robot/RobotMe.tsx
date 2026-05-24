import Chat from './chat/Chat'
import ParticleAnimation from './ParticleAnimation'
import { useRef, useState } from 'react'

const RobotMe = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null> | null
}) => {
  const [isThinking, setIsThinking] = useState<boolean>(false)
  const containerRef = useRef(null)

  return (
    <div
      ref={ref}
      className="mx-auto h-dvh max-w-7xl gap-4 px-5 pt-14 pb-2 sm:grid sm:grid-cols-4"
    >
      <div
        ref={containerRef}
        className={
          'col-span-1 hidden h-[calc(100dvh-65px)] items-start justify-center sm:flex'
        }
      >
        <ParticleAnimation
          containerRef={containerRef}
          speed={isThinking ? 8 : 0.25}
        />
      </div>
      <div className="h-[calc(100dvh-65px)] sm:col-span-3">
        <Chat setIsThinking={setIsThinking} />
      </div>
    </div>
  )
}

export default RobotMe

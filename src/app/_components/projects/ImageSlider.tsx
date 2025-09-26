import { cn } from '@/utils/cn'
import { useState } from 'react'
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa'
import { LuCircleArrowLeft, LuCircleArrowRight } from 'react-icons/lu'

export type Image = {
  url: string
  alt: string
}

type ImageSliderProps = {
  images: Image[]
  className?: string
}

const ImageSlider = ({ images, className }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  function showPreviousImage() {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  function showNextImage() {
    setImageIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      className={cn('relative h-full w-full', className)}
      aria-label="Image Carousel"
    >
      <div className="flex h-full w-full overflow-hidden">
        {images.map(({ url, alt }, i) => (
          <img
            key={i}
            src={url}
            className="block h-full w-full shrink-0 grow-0 object-cover transition-all duration-300 ease-in-out"
            style={{ translate: `-${imageIndex * 100}%` }}
            alt={alt}
            aria-hidden={imageIndex !== i}
          />
        ))}
      </div>
      <button
        onClick={showPreviousImage}
        className="absolute top-0 bottom-0 left-0 block h-full cursor-pointer p-1 text-white transition-all duration-200 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Next Image"
      >
        <LuCircleArrowLeft
          aria-hidden
          size={28}
          className="fill-black stroke-white"
        />
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-0 right-0 bottom-0 block h-full cursor-pointer p-1 text-white transition-all duration-200 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Previous Image"
      >
        <LuCircleArrowRight
          aria-hidden
          size={28}
          className="fill-black stroke-white"
        />
      </button>
      <div className="absolute bottom-0.5 left-1/2 flex -translate-1/2 gap-1 bg-white/50 p-1 rounded-full shadow-sm shadow-black">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImageIndex(i)}
            className="block h-4 w-4 cursor-pointer transition-all duration-100 ease-in-out hover:scale-125 focus-visible:scale-125"
            aria-label={`View Image ${i + 1}`}
          >
            {i === imageIndex ? (
              <FaRegDotCircle
                aria-hidden
                className="h-full w-full fill-black stroke-white"
              />
            ) : (
              <FaRegCircle
                aria-hidden
                className="h-full w-full fill-black stroke-white"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ImageSlider

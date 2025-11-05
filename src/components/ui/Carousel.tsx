'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselProps {
  baseWidth?: number
  autoplay?: boolean
  autoplayDelay?: number
  pauseOnHover?: boolean
  loop?: boolean
  round?: boolean
  children: React.ReactNode[]
}

export function Carousel({
  baseWidth = 300,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = false,
  children
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === children.length - 1) {
        return loop ? 0 : prevIndex
      }
      return prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return loop ? children.length - 1 : 0
      }
      return prevIndex - 1
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoplay && !isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoplayDelay)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, autoplayDelay, isPaused, loop, children.length])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div
      style={{ height: '600px', position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: baseWidth }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -baseWidth }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-jni-gold w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              style={{
                borderRadius: round ? '50%' : '4px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
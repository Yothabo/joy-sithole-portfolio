import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  title: string
  location: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials, 
  autoPlayInterval = 6000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      next()
    }
    if (touchStart - touchEnd < -50) {
      prev()
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(next, autoPlayInterval)
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlayInterval])

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -200 : 200,
      opacity: 0
    })
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center p-6 md:p-8 min-h-[320px] flex flex-col justify-center"
          >
            <svg className="w-10 h-10 text-primary-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm md:text-base text-primary-600 mb-6 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="border-t border-primary-100 pt-4">
              <p className="font-semibold text-primary-600 text-sm md:text-base">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs text-primary-500">{testimonials[currentIndex].title}</p>
              <p className="text-xs text-primary-400 mt-1">{testimonials[currentIndex].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots - using CSS class for dark mode adaptation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left')
              setCurrentIndex(index)
              if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
                autoPlayRef.current = null
              }
            }}
            className={`testimonial-dot w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'active' : ''
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel

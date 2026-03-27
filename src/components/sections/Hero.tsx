import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import ScreenReaderText from '../ui/ScreenReaderText'
import GlobalMatrix from '../ui/GlobalMatrix'

const Hero = () => {
  const [greeting, setGreeting] = useState('Hello')
  const [isMobile, setIsMobile] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) setGreeting('Good morning')
    else if (hour >= 12 && hour < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Simple dark mode detection
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Use a more efficient observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode()
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const topImageOpacity = useTransform(
    scrollY,
    [0, 500, 900],
    [0.85, 0.15, 0]
  )

  const portfolioOpacity = useTransform(
    scrollY,
    [300, 600, 900],
    [0, 0.2, 0.25]
  )
  
  const portfolioText = useTransform(
    scrollY,
    [400, 650, 900],
    ['PORTFOLIO', 'JOY SITHOLE', 'JOY SITHOLE']
  )

  const calendlyLink = "https://calendly.com/joynokusithole/discovery-call"
  const imageSrc = isDark ? '/images/joyNude.png' : '/images/joy.png'
  
  // Adjust position for dark mode image offset
  const darkOffset = isDark ? '1%' : '0%'
  const finalTopPosition = useTransform(
    scrollY,
    [0, 500, 900],
    [`calc(35% + ${darkOffset})`, `calc(18% + ${darkOffset})`, `calc(8% + ${darkOffset})`]
  )

  return (
    <section className="relative min-h-screen section-padding overflow-hidden flex items-end md:items-center" aria-label="Introduction to Joy Sithole, Virtual Assistant for Business Growth">
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <GlobalMatrix />
      </div>

      <motion.div 
        className="fixed right-0 top-0 h-full flex items-start pt-16 pointer-events-none select-none z-10"
        style={{ opacity: portfolioOpacity }}
      >
        <motion.span 
          className="hero-vertical-text text-[15vw] md:text-[12vw] font-black uppercase tracking-wider whitespace-nowrap"
          style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: "'Russo One', sans-serif"
          }}
        >
          {portfolioText}
        </motion.span>
      </motion.div>

      {isMobile && (
        <motion.div 
          className="fixed left-0 w-[500px] pointer-events-none select-none z-10"
          style={{ 
            opacity: topImageOpacity, 
            top: finalTopPosition,
            transform: 'translateY(-50%)'
          }}
          transition={{ duration: 0.1, ease: "linear" }}
          aria-hidden="true"
        >
          <img 
            key={imageSrc}
            src={imageSrc}
            alt=""
            className="w-full h-auto object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
            }}
            loading="lazy"
            role="presentation"
          />
        </motion.div>
      )}

      <div className="container-custom relative z-20 w-full pb-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl md:mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 md:mb-6 flex items-center gap-3"
          >
            <div className="hidden md:block w-12 h-12 flex-shrink-0" aria-hidden="true">
              <img 
                key={imageSrc}
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover rounded-full"
                loading="eager"
                role="presentation"
              />
            </div>
            <p className="text-xs md:text-base">
              {greeting}, I'm <span className="font-bold">Joy Sithole</span>
            </p>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6"
          >
            Virtual Assistant for Business Growth
          </motion.h1>
          
          <ScreenReaderText>
            Joy Sithole is a Virtual Assistant for Business Growth with three years of international experience serving clients across South Africa, the United States, and Australia. She specializes in email management, client communication, calendar coordination, operations support, data management, and team coordination.
          </ScreenReaderText>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xs md:text-base mb-4 md:mb-6 max-w-2xl"
          >
            I partner with business owners to streamline operations and deliver exceptional client experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-start"
          >
            <Button href={calendlyLink} fullWidth className="md:w-[300px]">
              Schedule a discovery call
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-row items-center gap-3 mt-1 text-[10px]"
          >
            <a href="mailto:Joynokusithole@gmail.com" className="hover:text-primary-600 dark:hover:text-white transition-colors">
              Joynokusithole@gmail.com
            </a>
            <span className="text-primary-300 dark:text-white/40">•</span>
            <a href="tel:+27795554738" className="hover:text-primary-600 dark:hover:text-white transition-colors">
              +27 79 555 4738
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

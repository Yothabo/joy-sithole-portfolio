import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-[100] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: darkMode ? '#7A4F5A' : 'white',
        border: darkMode ? `1px solid #915F6D` : `1px solid rgba(145, 95, 109, 0.3)`
      }}
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">Toggle dark mode</span>
    </motion.button>
  )
}

export default ThemeToggle

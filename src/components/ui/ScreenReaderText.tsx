import React from 'react'

interface ScreenReaderTextProps {
  children: React.ReactNode
}

const ScreenReaderText: React.FC<ScreenReaderTextProps> = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
}

export default ScreenReaderText

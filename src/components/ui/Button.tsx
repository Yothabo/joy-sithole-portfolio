import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
  className?: string
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ariaLabel,
}) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  const widthClass = fullWidth ? 'w-full' : ''
  
  const classes = `${variantClass} ${widthClass} ${className}`
  
  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel || "Schedule a discovery call (opens in new tab)"}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel || children?.toString()}
    >
      {children}
    </button>
  )
}

export default Button

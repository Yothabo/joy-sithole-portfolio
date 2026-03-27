import React, { useMemo } from 'react'

interface GlobalMatrixProps {
  className?: string
}

const GlobalMatrix: React.FC<GlobalMatrixProps> = ({ className = '' }) => {
  const cols = 20
  const rows = 20
  const gap = 3
  const maxOpacity = 0.52 // Slightly increased from 0.45
  const minOpacity = 0.12
  const coloredCells = 0.35
  const accentCells = 0.2
  const borderChance = 0.45
  const zeroOpacityChance = 0.25

  const gridCells = useMemo(() => {
    const seed = 'global-matrix-dense-balanced'
    
    let cells = Array.from({ length: cols * rows }).map((_, index) => {
      const pseudoRandom = (i: number) => {
        const x = Math.sin(i * 9999) * 10000
        return x - Math.floor(x)
      }
      
      const row = Math.floor(index / cols)
      const col = index % cols
      
      const maxDist = Math.sqrt(Math.pow(rows-1, 2) + Math.pow(cols-1, 2))
      const distFromTopLeft = Math.sqrt(Math.pow(row, 2) + Math.pow(col, 2))
      const distFromBottomRight = Math.sqrt(Math.pow(rows-1 - row, 2) + Math.pow(cols-1 - col, 2))
      
      const distanceToNearestCorner = Math.min(distFromTopLeft, distFromBottomRight)
      const normalizedDistance = Math.pow(distanceToNearestCorner / (maxDist / 2), 0.5)
      
      let opacity = maxOpacity - (normalizedDistance * (maxOpacity - minOpacity))
      opacity = Math.min(Math.max(opacity, minOpacity), maxOpacity)
      
      const hasColor = pseudoRandom(index + seed.length) < coloredCells
      const hasAccent = pseudoRandom(index + seed.length + 3000) < accentCells
      const hasBorder = pseudoRandom(index + seed.length + 1000) < borderChance
      const isZeroOpacity = pseudoRandom(index + seed.length + 2000) < zeroOpacityChance
      
      let finalOpacity = isZeroOpacity ? 0 : opacity
      if (hasColor && !isZeroOpacity) {
        finalOpacity = Math.min(finalOpacity * 1.28, 0.68) // Slightly increased
      }
      if (hasAccent && !isZeroOpacity) {
        finalOpacity = Math.min(finalOpacity * 1.38, 0.73) // Slightly increased
      }
      
      return {
        opacity: finalOpacity,
        hasColor,
        hasAccent,
        hasBorder,
        isZeroOpacity
      }
    })
    
    return cells
  }, [cols, rows, minOpacity, maxOpacity, coloredCells, accentCells, borderChance, zeroOpacityChance])

  return (
    <div 
      className={`fixed inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <div 
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gap: `${gap}px`,
          width: '100%',
          height: '100%',
        }}
      >
        {gridCells.map((cell, i) => (
          <div 
            key={i} 
            className={`
              ${cell.hasBorder && !cell.isZeroOpacity ? 'border border-primary-600/35' : ''}
              rounded-sm
              transition-all duration-200
            `}
            style={{ 
              opacity: cell.opacity,
              backgroundColor: cell.hasAccent && !cell.isZeroOpacity 
                ? `rgba(255, 255, 255, ${cell.opacity * 0.72})`
                : cell.hasColor && !cell.isZeroOpacity 
                  ? `rgba(145, 95, 109, ${cell.opacity * 0.63})`
                  : undefined
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default GlobalMatrix

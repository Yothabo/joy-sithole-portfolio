import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceImage = path.join(__dirname, '../public/images/joy.png')
const outputDir = path.join(__dirname, '../public/images/optimized')

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Optimize for different sizes and formats
async function optimizeImages() {
  try {
    // WebP versions (smaller file size)
    await sharp(sourceImage)
      .resize(1920) // Full size
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'joy-full.webp'))

    await sharp(sourceImage)
      .resize(800) // Tablet size
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, 'joy-medium.webp'))

    await sharp(sourceImage)
      .resize(400) // Mobile size
      .webp({ quality: 70 })
      .toFile(path.join(outputDir, 'joy-small.webp'))

    // Also create optimized PNG fallback
    await sharp(sourceImage)
      .resize(1920)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(outputDir, 'joy-optimized.png'))

    console.log(' Images optimized successfully!')
  } catch (error) {
    console.error('Error optimizing images:', error)
  }
}

optimizeImages()

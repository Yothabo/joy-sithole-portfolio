import { HelmetProvider } from 'react-helmet-async'
import Hero from './components/sections/Hero'
import Philosophy from './components/sections/Philosophy'
import About from './components/sections/About'
import Strengths from './components/sections/Strengths'
import Tools from './components/sections/Tools'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import Footer from './components/sections/Footer'
import SEO from './components/SEO'
import ThemeToggle from './components/ui/ThemeToggle'

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <main className="relative">
        <div className="relative z-10">
          <Hero />
          <Philosophy />
          <About />
          <Strengths />
          <Tools />
          <Testimonials />
          <Pricing />
          <Footer />
        </div>
        <ThemeToggle />
      </main>
    </HelmetProvider>
  )
}

export default App

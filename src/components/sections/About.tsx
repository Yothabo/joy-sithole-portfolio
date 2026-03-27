import { motion } from 'framer-motion'
import ScreenReaderText from '../ui/ScreenReaderText'

const outcomes = [
  {
    title: "Stronger client relationships",
    description: "Professional communication that builds trust and loyalty"
  },
  {
    title: "More time for strategy",
    description: "Daily operations managed so you can focus on what matters"
  },
  {
    title: "Consistent brand experience",
    description: "Every interaction reflects your values and standards"
  },
  {
    title: "Seamless daily operations",
    description: "Bookings, inquiries, and follow ups handled without friction"
  }
]

const About = () => {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="About Joy Sithole's professional approach">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-4 md:mb-6">
            <span className="text-primary-600/70 font-medium tracking-wide text-xs md:text-base">
              WHY WORK WITH ME
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-1">
              Three years of international experience
            </h2>
          </div>

          <p className="text-xs md:text-base text-primary-600/80 mb-12 md:mb-16 max-w-3xl leading-relaxed">
            I've supported clients across South Africa, the United States, and Australia, 
            saving them over 50 hours monthly through efficient systems and reliable execution. 
            My approach combines operational expertise with a commitment to professional excellence.
          </p>
          
          <ScreenReaderText>
            Joy has three years of international experience serving clients across South Africa, the United States, and Australia. She helps businesses save over 50 hours per month through efficient systems and reliable execution. Her approach combines operational expertise with professional excellence, delivering stronger client relationships, more time for strategy, consistent brand experiences, and seamless daily operations.
          </ScreenReaderText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="flex items-start gap-4">
                <div className="md:ml-0">
                  <h4 className="font-semibold text-sm md:text-base mb-1">{item.title}</h4>
                  <p className="text-xs md:text-base text-primary-600/80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

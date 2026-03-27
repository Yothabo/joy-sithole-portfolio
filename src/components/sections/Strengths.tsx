import { motion } from 'framer-motion'
import ScreenReaderText from '../ui/ScreenReaderText'

const strengths = [
  "Strong written and verbal communication",
  "Highly organized with attention to detail",
  "Reliable and proactive execution",
  "Quick to adapt to new tools and platforms",
  "Solution oriented approach",
  "Professional and client focused"
]

const Strengths = () => {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="Professional strengths">
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
              STRENGTHS
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-1">
              What defines my work
            </h2>
          </div>
          
          <p className="text-xs md:text-base text-primary-600/80 mb-12 md:mb-16 max-w-3xl leading-relaxed">
            Clear communication, organized execution, and a proactive approach to every task.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-3"
            >
              <div className="flex items-start gap-4">
                <div className="md:ml-0">
                  <p className="text-xs md:text-base text-primary-600/80 leading-relaxed">{strength}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <ScreenReaderText>
          Joy's professional strengths include strong written and verbal communication, highly organized with attention to detail, reliable and proactive execution, quick adaptation to new tools and platforms, solution oriented approach, and professional client focus.
        </ScreenReaderText>
      </div>
    </section>
  )
}

export default Strengths

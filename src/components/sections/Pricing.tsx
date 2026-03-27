import { motion } from 'framer-motion'
import { useState } from 'react'
import ConsultationModal from '../ui/ConsultationModal'

const regions = [
  { 
    name: "South Africa", 
    rate: "R150–220"
  },
  { 
    name: "United States", 
    rate: "$12–18"
  },
  { 
    name: "Australia", 
    rate: "$15–25"
  }
]

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative section-padding overflow-hidden" aria-label="Pricing and investment information">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-4 md:mb-6">
              <span className="text-primary-600 font-medium tracking-wide text-xs md:text-base">
                INVESTMENT
              </span>
              <h2 className="text-xl md:text-3xl font-bold text-primary-600 mt-1">
                Hourly rates by region
              </h2>
            </div>

            <p className="text-xs md:text-base text-primary-600 mb-8 max-w-3xl leading-relaxed">
              Pricing is determined by the complexity and volume of the task. All rates are denominated 
              in local currency. Volume-based discounts are available for ongoing engagements.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between py-2"
              >
                <span className="text-xs md:text-base text-primary-600">{region.name}</span>
                <span className="text-sm md:text-lg text-primary-600" style={{ fontFamily: "'Georgia', serif" }}>
                  {region.rate}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Pricing

import { motion } from 'framer-motion'

const services = [
  {
    title: "Time management",
    description: "Calendar coordination and task prioritization across time zones"
  },
  {
    title: "Email management",
    description: "Inbox organization, filtering, and professional response drafting"
  },
  {
    title: "Client issue resolution",
    description: "Timely follow-ups and problem-solving for client inquiries"
  },
  {
    title: "Data management",
    description: "Record keeping, data entry, and information organization"
  },
  {
    title: "Team coordination",
    description: "Support for growing teams across multiple time zones"
  },
  {
    title: "Operations support",
    description: "Daily administrative tasks and workflow optimization"
  }
]

const Philosophy = () => {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="Services offered by Joy Sithole">
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
              SERVICES
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-1">
              Client Support & Operations Specialist
            </h2>
          </div>

          <p className="text-xs md:text-base text-primary-600 mb-12 md:mb-16 max-w-2xl">
            I provide comprehensive support for businesses operating in fast-paced, growth-focused environments, handling everything from client communication to behind-the-scenes operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((item, index) => (
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
                  <h3 className="font-semibold text-sm md:text-base mb-1 text-primary-600">{item.title}</h3>
                  <p className="text-xs md:text-base text-primary-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy

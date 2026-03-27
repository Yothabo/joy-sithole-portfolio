import { motion } from 'framer-motion'
import ScreenReaderText from '../ui/ScreenReaderText'

const tools = [
  {
    name: "Calendar & Scheduling",
    tools: "Calendly, Google Calendar, Acuity"
  },
  {
    name: "Email Management",
    tools: "Gmail, Outlook, Superhuman"
  },
  {
    name: "Project Management",
    tools: "Asana, Trello, ClickUp"
  },
  {
    name: "CRM & Data",
    tools: "HubSpot, Salesforce, Airtable"
  },
  {
    name: "Team Collaboration",
    tools: "Slack, Microsoft Teams, Zoom"
  }
]

const Tools = () => {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="Tools and platforms Joy works with">
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
              TOOLS & PLATFORMS
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-1">
              Technology I work with
            </h2>
          </div>
          
          <p className="text-xs md:text-base text-primary-600 mb-12 md:mb-16 max-w-3xl leading-relaxed">
            Quick to adapt to your existing systems. Experienced with industry-standard tools across multiple categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="flex items-start gap-4">
                <div className="md:ml-0">
                  <h3 className="font-semibold text-sm md:text-base mb-1 text-primary-600">{tool.name}</h3>
                  <p className="text-xs md:text-base text-primary-500 leading-relaxed">{tool.tools}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <ScreenReaderText>
          Joy is experienced with calendar and scheduling tools including Calendly, Google Calendar, and Acuity; email management with Gmail, Outlook, and Superhuman; project management with Asana, Trello, and ClickUp; CRM and data platforms including HubSpot, Salesforce, and Airtable; and team collaboration tools like Slack, Microsoft Teams, and Zoom.
        </ScreenReaderText>
      </div>
    </section>
  )
}

export default Tools

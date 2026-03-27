import { motion } from 'framer-motion'
import { 
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn
} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-3xl font-bold text-primary-600 mb-4">
              Let's work together
            </h2>
            
            <p className="text-xs md:text-base text-primary-600 max-w-2xl mx-auto mb-8">
              Ready to streamline your operations? Reach out and let's discuss how I can support your business.
            </p>
          </motion.div>

          {/* Contact and Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center gap-10 md:gap-12 mb-12 flex-wrap"
          >
            <a 
              href="mailto:Joynokusithole@gmail.com" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Email Joy Sithole"
            >
              <FaEnvelope className="text-2xl md:text-3xl" />
            </a>
            
            <a 
              href="tel:+27795554738" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Call Joy Sithole"
            >
              <FaPhoneAlt className="text-2xl md:text-3xl" />
            </a>
            
            <a 
              href="https://linkedin.com/in/joysithole" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Connect with Joy on LinkedIn"
            >
              <FaLinkedinIn className="text-2xl md:text-3xl" />
            </a>
            
            <a 
              href="https://wa.me/27795554738" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Message Joy on WhatsApp"
            >
              <RiWhatsappFill className="text-2xl md:text-3xl" />
            </a>
            
            <a 
              href="https://instagram.com/joysithole" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Follow Joy on Instagram"
            >
              <AiFillInstagram className="text-2xl md:text-3xl" />
            </a>
          </motion.div>

          {/* Copyright and Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-[9px] text-primary-300 max-w-[95vw] mx-auto leading-relaxed">
              © {currentYear} Joy Sithole • This is a professional portfolio. All contact details are shared solely for business inquiries. 
              Any unsolicited or socially oriented communication will not be entertained. Joy Sithole respects 
              your privacy and will never share, publish, or distribute any client data without explicit written 
              and signed consent.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

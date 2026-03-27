import TestimonialCarousel from '../ui/TestimonialCarousel'
import ScreenReaderText from '../ui/ScreenReaderText'

const testimonials = [
  {
    quote: "Joy transformed my chaotic inbox into an organized system. I now save 10+ hours weekly and actually respond to clients on time.",
    name: "Sarah van der Merwe",
    title: "Founder, Cape Town Creative",
    location: "South Africa"
  },
  {
    quote: "Working with Joy across time zones has been seamless. She handles my US clients with the same professionalism as if she were in the same office.",
    name: "Michael Chen",
    title: "CEO, Growth Partners",
    location: "United States"
  },
  {
    quote: "The 50 hours per month Joy saves me allows me to focus on scaling my business. Her team coordination skills are exceptional.",
    name: "Emma Thompson",
    title: "Director, Thompson Consulting",
    location: "Australia"
  },
  {
    quote: "Joy's attention to detail and proactive communication have been invaluable. She anticipates needs before I even ask.",
    name: "David Ndlovu",
    title: "Managing Director, Ndlovu Holdings",
    location: "South Africa"
  }
]

const Testimonials = () => {
  return (
    <section className="relative section-padding overflow-hidden" aria-label="Client testimonials">
      <div className="container-custom relative z-10">
        <ScreenReaderText>
          Joy has helped clients save 50+ hours monthly. Testimonials include Sarah from South Africa who saves 10+ hours weekly, Michael from the US who praises her time zone management, Emma from Australia who values the 50 hours saved monthly, and David from South Africa who appreciates her proactive communication.
        </ScreenReaderText>

        <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} />
      </div>
    </section>
  )
}

export default Testimonials

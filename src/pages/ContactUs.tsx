import { BusinessTiming } from '../components/BusinessTiming'
import { FAQ } from '../components/FAQ'
import TestimonialsSection from '../components/Testimonials'
import { Contact } from '../components/paths'

const ContactUs = () => {
return (
    <div>
      <Contact />
      <FAQ />
      <BusinessTiming />
      <TestimonialsSection/>
    </div>
  )
}

export default ContactUs
import { FaCode, FaMobileAlt, FaPaintBrush, FaTools } from 'react-icons/fa'
import './Services.css'
 
const services = [
  {
    icon: <FaCode />,
    title: 'React Development',
    description:
      'Building modern, responsive web applications using React.js with clean, maintainable code and best practices.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description:
      'Creating mobile-first websites that look perfect on every screen — phones, tablets, and desktops.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Landing Pages',
    description:
      'Designing and building high-converting landing pages for businesses, products, and events.',
  },
  {
    icon: <FaTools />,
    title: 'Website Maintenance',
    description:
      'Updating, improving, and maintaining existing websites. Bug fixes, performance improvements, and new features.',
  },
]
 
function Services() {
  return (
    <section id='services' className='section-alt'>
      <div className='container'>
        <h2 className='section-title'>What I Offer</h2>
        <p className='section-subtitle'>
          Services I provide to clients and businesses
        </p>
 
        <div className='services__grid'>
          {services.map((service, idx) => (
            <div className='services__card card' key={idx}>
              <div className='services__icon'>{service.icon}</div>
              <h3 className='services__title'>{service.title}</h3>

              <p className='services__desc'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
export default Services


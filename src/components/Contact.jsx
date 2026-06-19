import { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Contact.css'
 
function Contact() {
  // formData state: tracks what the user types in each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
 
  // submitted state: shows a success message after form submit
  const [submitted, setSubmitted] = useState(false)
 
  // handleChange: updates formData when the user types in any field
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
 
  // handleSubmit: prevents page reload, shows success message
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }
 
  return (
    <section id='contact' className='section-alt'>
      <div className='container'>
        <h2 className='section-title'>Get In Touch</h2>
        <p className='section-subtitle'>
          I am open to opportunities, collaborations, and freelance projects.
          Let us build something great together.
        </p>
 
        <div className='contact__grid'>
 
          {/* LEFT: Contact Info */}
          <div className='contact__info'>
            <h3 className='contact__info-title'>Contact Details</h3>
 
            <div className='contact__detail'>
              <FaEnvelope className='contact__detail-icon' />

              <div>
                <p className='contact__detail-label'>Email</p>
                <a href='mailto:youremail@gmail.com' className='contact__detail-value'>
                  youremail@gmail.com
                </a>
              </div>
            </div>
 
            <div className='contact__detail'>
              <FaPhone className='contact__detail-icon' />
              <div>
                <p className='contact__detail-label'>Phone</p>
                <a href='tel:+2348000000000' className='contact__detail-value'>
                  +234 800 000 0000
                </a>
              </div>
            </div>
 
            {/* Social Links */}
            <div className='contact__socials'>
              <p className='contact__socials-label'>Find Me Online</p>
              <div className='contact__socials-icons'>
                <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer'>
                  <FaGithub />
                </a>
                <a href='https://linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin />
                </a>
                <a href='https://twitter.com/yourusername' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
 
          {/* RIGHT: Contact Form */}
          <div className='contact__form-wrap'>
            {submitted ? (
              <div className='contact__success'>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you soon.</p>
                <button className='btn btn-primary' onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className='contact__form' onSubmit={handleSubmit}>
                <div className='contact__field'>
                  <label htmlFor='name'>Your Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}

                    onChange={handleChange}
                    placeholder='John Doe'
                    required
                  />
                </div>
                <div className='contact__field'>
                  <label htmlFor='email'>Your Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    required
                  />
                </div>
                <div className='contact__field'>
                  <label htmlFor='message'>Your Message</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Hello, I would like to discuss a project...'
                    rows={5}
                    required
                  />
                </div>
                <button type='submit' className='btn btn-primary contact__submit'>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default Contact


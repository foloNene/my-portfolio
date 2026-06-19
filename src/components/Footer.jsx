
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import './Footer.css'
 
function Footer() {
  const year = new Date().getFullYear()
 
  return (
    <footer className='footer'>
      <div className='container footer__inner'>
 
        {/* LEFT: Branding */}
        <div className='footer__brand'>
          <a href='#hero' className='footer__logo'>&lt;YourName /&gt;</a>
          <p className='footer__tagline'>
            Building the web, one component at a time.
          </p>
        </div>
 
        {/* CENTRE: Quick Links */}
        <nav className='footer__links'>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
 
        {/* RIGHT: Social Icons */}
        <div className='footer__socials'>
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
 
      {/* BOTTOM BAR */}
      <div className='footer__bottom'>
        <p>
          &copy; {year} YourName. Built with{' '}
          <FaHeart className='footer__heart' /> using React.js
        </p>
      </div>
    </footer>
  )
}

export default Footer;
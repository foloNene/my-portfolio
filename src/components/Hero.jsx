
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Hero.css'
import OlaideImage from '../assets/OlaideImage.jpeg'

 
function Hero() {
  return (
    <section id='hero' className='hero'>
      <div className='container hero__inner'>
 
        {/* LEFT: Text Content */}
        <div className='hero__content'>
          <p className='hero__greeting'>Hello, I am</p>
          <h1 className='hero__name'>Olaide Adebanjo</h1>
          <h2 className='hero__title'>
            React.js Developer &amp; Frontend Engineer
          </h2>
          <p className='hero__bio'>
            I build beautiful, fast, and responsive web applications
            using React.js. I am passionate about creating clean code
            and outstanding user experiences.
          </p>
 
          {/* CTA BUTTONS */}
          <div className='hero__buttons'>
            <a href='#projects' className='btn btn-primary'>
              View My Work
            </a>
            <a href='#contact' className='btn btn-outline'>
              Hire Me
            </a>
          </div>
 
          {/* SOCIAL ICONS */}
          <div className='hero__socials'>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
            <a
              href='https://linkedin.com/in/yourusername'


              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
 
        {/* RIGHT: Avatar / Photo */}
        <div className='hero__image-wrap'>
          <div className='hero__avatar'>
            {/* <span className='hero__avatar-initials'>YN</span> */}
                <img className='hero__avatar-initials' src={OlaideImage} alt="" />
          </div>
        </div>
 
      </div>
    </section>
  )
}
 
export default Hero


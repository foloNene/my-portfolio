import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import './About.css'
 
const highlights = [
  { icon: <FaCode />,       title: 'Clean Code',     desc: 'I write readable, maintainable code that follows best practices.'       },
  { icon: <FaLaptopCode />, title: 'Responsive Design', desc: 'Every project I build works beautifully on phones, tablets, and desktops.' },
  { icon: <FaRocket />,     title: 'Fast Delivery',  desc: 'I deliver projects on time with quality and attention to detail.'         },
]
 
function About() {
  return (
    <section id='about' className='section-alt'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <p className='section-subtitle'>
          A little background on who I am and what drives me
        </p>
 
        <div className='about__grid'>
 
          {/* LEFT: Bio Text */}
          <div className='about__text'>
            <h3 className='about__heading'>
              Hi! I am a Passionate React Developer
            </h3>
            <p>
              I am a frontend developer with a deep passion for building
              modern web applications. I completed my React.js training at
              Skillscore IT Solutions & Training, where I learned to build
              real-world projects from scratch.
            </p>
            <p>
              I enjoy solving problems, learning new technologies, and
              collaborating with teams to bring ideas to life on the web.
              My goal is to build products that make people's lives easier
              and better.
            </p>
            <p>
              When I am not coding, I enjoy reading about technology,
              watching tech tutorials, and building personal projects.
            </p>
            <a href='#contact' className='btn btn-primary about__cta'>
              Let's Work Together
            </a>

          </div>
 
          {/* RIGHT: Highlight Cards */}
          <div className='about__highlights'>
            {highlights.map((item, idx) => (
              <div className='about__highlight-card' key={idx}>
                <span className='about__highlight-icon'>{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default About


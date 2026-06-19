import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiVite, SiTailwindcss, SiFigma, SiGithub } from 'react-icons/si'
import './Skills.css'
 
const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js',    icon: <FaReact />,       level: 85 },
      { name: 'JavaScript',  icon: <SiJavascript />,  level: 80 },
      { name: 'HTML5',       icon: <FaHtml5 />,       level: 90 },
      { name: 'CSS3',        icon: <FaCss3Alt />,     level: 85 },
      { name: 'Tailwind',    icon: <SiTailwindcss />, level: 75 },
    ]
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git',    icon: <FaGitAlt />,  level: 80 },
      { name: 'GitHub', icon: <SiGithub />,  level: 80 },
      { name: 'Vite',   icon: <SiVite />,    level: 75 },
      { name: 'Figma',  icon: <SiFigma />,   level: 60 },
      { name: 'Node.js',icon: <FaNodeJs />,  level: 55 },
    ]
  },
  {
    category: 'Soft Skills',
    softSkills: [
      'Problem Solving',  'Team Collaboration',
      'Communication',    'Time Management',
      'Attention to Detail', 'Quick Learner',
    ]
  },
]
 
function SkillBar({ name, icon, level }) {
  return (
    <div className='skill-bar'>
      <div className='skill-bar__header'>
        <span className='skill-bar__icon'>{icon}</span>
        <span className='skill-bar__name'>{name}</span>
        <span className='skill-bar__percent'>{level}%</span>
      </div>
      <div className='skill-bar__track'>
        <div
          className='skill-bar__fill'

          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
 
function Skills() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <h2 className='section-title'>My Skills</h2>
        <p className='section-subtitle'>
          Technologies and tools I work with regularly
        </p>
 
        <div className='skills__grid'>
          {skillCategories.map((cat, idx) => (
            <div className='skills__category card' key={idx}>
              <h3 className='skills__category-title'>{cat.category}</h3>
 
              {/* Render skill bars if skills array exists */}
              {cat.skills && cat.skills.map((skill, i) => (
                <SkillBar key={i} {...skill} />
              ))}
 
              {/* Render badge pills for soft skills */}
              {cat.softSkills && (
                <div className='skills__badges'>
                  {cat.softSkills.map((s, i) => (
                    <span key={i} className='skills__badge'>{s}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
export default Skills



import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import projects from '../data/projects'
import './Projects.css'
 
// ProjectCard — reusable card component for one project
function ProjectCard({ title, description, tags, liveUrl, githubUrl, featured }) {
  return (
    <div className={`project-card card ${featured ? 'project-card--featured' : ''}`}>
      {featured && <span className='project-card__badge'>Featured</span>}
 
      {/* Decorative top bar */}
      <div className='project-card__bar' />
 
      <h3 className='project-card__title'>{title}</h3>
      <p className='project-card__desc'>{description}</p>
 
      {/* Tech Stack Tags */}
      <div className='project-card__tags'>
        {tags.map((tag, i) => (
          <span key={i} className='project-card__tag'>{tag}</span>
        ))}
      </div>
 
      {/* Action Links */}
      <div className='project-card__links'>
        <a
          href={liveUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='project-card__link project-card__link--live'
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href={githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='project-card__link project-card__link--github'
        >
          <FaGithub /> Source Code
        </a>
      </div>
    </div>
  )
}
 
function Projects() {


  return (
    <section id='projects' className='section'>
      <div className='container'>
        <h2 className='section-title'>My Projects</h2>
        <p className='section-subtitle'>
          Real projects I have built during training and practice
        </p>
 
        <div className='projects__grid'>
          {/* Loop through the projects array and render a card for each */}
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
 
export default Projects


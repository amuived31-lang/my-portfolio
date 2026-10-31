import { motion } from 'framer-motion';
import { ExternalLink, ImageOff } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

function StatusBadge({ status }) {
  const cls = {
    Completed: 'status-completed',
    'In Progress': 'status-in-progress',
    Planned: 'status-planned',
  }[status] || 'status-planned';
  return <span className={`project-status-badge ${cls}`}>{status}</span>;
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header-tag">✦ Projects</span>
          <h2 className="section-heading">
            Real Projects.{' '}
            <span className="text-gradient">Real Impact.</span>
          </h2>
          <p className="section-subheading">
            Code that solves real problems. Each project tells a story of a challenge, a solution, and something learned.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <article
                className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                aria-label={`Project: ${project.title}`}
              >
                {/* Screenshot area */}
                <div className="project-img">
                  {project.image ? (
                    <img src={project.image} alt={`Screenshot of ${project.title}`} />
                  ) : (
                    <>
                      <ImageOff size={36} strokeWidth={1} style={{ color: 'rgba(139,92,246,0.4)' }} />
                      <span style={{ fontSize: '0.8rem' }}>Add your project screenshot here</span>
                    </>
                  )}
                  <StatusBadge status={project.status} />
                </div>

                <div className="project-content">
                  {project.featured && (
                    <div className="project-featured-label">⭐ Featured Project</div>
                  )}

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  {/* Problem statement */}
                  <div className="project-problem">
                    <div className="project-problem-label">🎯 Problem Solved</div>
                    <p>{project.problem}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* Tech stack */}
                  <div className="project-tech" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={15} />
                      GitHub
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--primary"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {project.demo === '#' && (
                      <span
                        className="project-link"
                        style={{ opacity: 0.5, cursor: 'not-allowed' }}
                        title="Demo link coming soon"
                        aria-label="Demo coming soon"
                      >
                        <ExternalLink size={15} />
                        Demo Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

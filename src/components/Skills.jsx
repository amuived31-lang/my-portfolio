import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

// Inline SVG icons for skills
const SKILL_ICONS = {
  html5: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M4 2l2.4 27 9.6 2.7 9.6-2.7L28 2H4z" fill="#E44D26"/>
      <path d="M16 29.4l7.8-2.2 2.1-23.2H16v25.4z" fill="#F16529"/>
      <path d="M16 13.2H11.4l-.3-3.5H16V6.2H7.4l.8 9H16v-2zm0 9l-4.9-1.3-.3-3.7H7.3l.6 7 8.1 2.3V22z" fill="#fff"/>
      <path d="M16 13.2v3.5h4.3l-.4 4.9-3.9 1.1V26l8.1-2.3 1-11H16z" fill="#ebebeb"/>
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M4 2l2.4 27 9.6 2.7 9.6-2.7L28 2H4z" fill="#264DE4"/>
      <path d="M16 29.4l7.8-2.2 2.1-23.2H16v25.4z" fill="#2965F1"/>
      <path d="M16 13.2H11.2l.1 1.6.2 2H16v-3.5zm0-7H7.4l.2 2.5.1 1H16V6.2z" fill="#ebebeb"/>
      <path d="M16 16.8v3.5l3.9 1.1.3-3.6H16zm.2-10.6v3.5h8l-.2-1.9-.2-1.6H16.2z" fill="#fff"/>
      <path d="M16 22.3v4l-4.9-1.3-.3-3.7H7.3l.6 7 8.1 2.3V22.3z" fill="#ebebeb"/>
      <path d="M16 22.3l7.8-2.2.1-1.5.3-3.4H16v4.1l3.9-1.1-.3 3.6L16 22.3z" fill="#fff"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M13.2 24.8s-2.1.2-1.4 1.4c.8 1.4 4.5 1.5 5.2 1.5 3.3 0 6.6-.7 6.6-.7s-1.1.8-3.1 1.1c-3.4.5-8.2.4-10-1-1.2-.9-.4-2.1 2.7-2.3zm-1.8-3.9s-2.3.4-1.5 1.7c.9 1.4 4.5 1.4 5.3 1.4 3.4 0 6.4-.6 6.4-.6s-1.1.7-3.1 1c-3.5.5-8.6.4-10.3-1-1.3-1-.4-2.3 3.2-2.5zm4.8-5.3c1.5 1.6-.4 3.2-.4 3.2s3.8-2 2-4.5c-1.7-2.4-3-3.6 4.1-7.7-6.9 1.6-7.8 5-5.7 9zm7.3 6.9c.7-.7.4-1.4.4-1.4s-.8.6-2.3.7c-2 .2-5.4.1-8.2-.2-1.2-.1-2.4-.4-2.4-.4s.4.6 2 .9c3.2.6 8.5.5 10.5-.6zm-8.8-12.7c-1.3 2.1 1.7 4 1.7 4s.6-1.9-.8-3.4c-1.5-1.5-1.5-2.6 1.7-5.4-4 1.4-4 3.4-2.6 4.8zm9.5 8.7c1.7-1.4 2.3-3.2.7-4.1-.4-.2-.8-.3-1.2-.3.4-.6.5-1.3.1-1.8-.7-.9-2.3-.9-4.2-.2 2.7-.9 4.3.4 3.5 1.5-.7.9-2.2 1.5-4.4 1.7-2.6.2-6.5-.1-9.1-.8-1.5-.4-2.1-.9-2.1-1.3 0-.8 1.4-1.4 3.3-1.8.8-.2 1.7-.3 2.6-.4.4-.1.7-.1 1.1-.2 1.8-.4 3.1-1 3.5-1.7-.8-.4-2.6-.5-4.5-.2-2.6.4-5 1.3-5.8 2.5-.9 1.3-.2 2.7 1.8 3.6-2.5.4-3.7 1.6-3.2 2.7.6 1.4 3.6 2.1 6.8 2.3 4 .3 8.3.1 10.6-.7.7-.3 1.2-.6 1.6-.9z" fill="#EA2D2E"/>
    </svg>
  ),
  python: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M15.9 2C11.1 2 11.4 4 11.4 4v4.1H16v1.3H7.8S4 9 4 13.9c0 4.9 2.7 4.7 2.7 4.7h1.6v-2.3s-.1-2.7 2.7-2.7h4.6s2.6.04 2.6-2.5V5.4S18.6 2 15.9 2zM13.7 3.8c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9z" fill="#3776AB"/>
      <path d="M16.1 30C20.9 30 20.6 28 20.6 28v-4.1H16v-1.3h8.2s3.8.4 3.8-4.5c0-4.9-2.7-4.7-2.7-4.7h-1.6v2.3s.1 2.7-2.7 2.7h-4.6s-2.6-.04-2.6 2.5v5.7s-.3 3.4 2.3 3.4zM18.3 28.2c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9.5 0 .9.4.9.9 0 .5-.4.9-.9.9z" fill="#FFD43B"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M30.1 14.6L17.4 1.9a2.6 2.6 0 00-3.7 0l-2.6 2.6 3.3 3.3a3.1 3.1 0 013.2 3.2l3.2 3.2a3.1 3.1 0 11-1.9 1.9l-3-3v7.8a3.1 3.1 0 11-2.5-.1V13a3.1 3.1 0 01-1.7-4L8.5 5.7l-6.6 6.6a2.6 2.6 0 000 3.7l12.7 12.7a2.6 2.6 0 003.7 0l11.8-11.8a2.6 2.6 0 000-3.3z" fill="#F05032"/>
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header-tag">✦ Technical Skills</span>
          <h2 className="section-heading">
            Core Technologies &{' '}
            <span className="text-gradient">Tools.</span>
          </h2>
          <p className="section-subheading">
            Proficiencies acquired through B.Tech coursework, hands-on coding, and academic software development.
          </p>
        </motion.div>

        <div className="skills__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className="skill-card"
                style={{ '--skill-color': `${skill.color}40`, height: '100%', display: 'flex', flexDirection: 'column' }}
                role="article"
                aria-label={`${skill.name} skill`}
              >
                <div
                  className="skill-icon"
                  style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}40` }}
                  aria-hidden="true"
                >
                  {SKILL_ICONS[skill.icon]}
                </div>
                <div className="skill-name" style={{ fontSize: '1.15rem' }}>{skill.name}</div>
                <div className="skill-desc" style={{ flex: 1, marginBottom: 18 }}>{skill.description}</div>
                
                <div className="skill-bar-wrap">
                  <motion.div
                    className="skill-bar"
                    style={{ background: skill.color, width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
                <div className="skill-level">{skill.level}% Proficiency</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

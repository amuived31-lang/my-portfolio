import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

// SVG icons for each skill (inline, no external CDN)
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
  javascript: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path d="M8.9 24.7c.6 1 1.4 1.7 2.9 1.7 1.2 0 2-.6 2-1.5 0-1-.8-1.4-2.2-2l-.8-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.9 4.3-3.9 1.8 0 3.2.6 4.1 2.2l-2.3 1.5c-.5-.9-1-1.2-1.8-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.2 1.8 1.7l.8.3c2.5 1.1 3.9 2.1 3.9 4.5 0 2.6-2 4.1-4.7 4.1-2.6 0-4.3-1.2-5.1-2.9l2.9-1zm10.1.2c.4.8.8 1.4 1.7 1.4.9 0 1.5-.4 1.5-1.7V14.6h3v10c0 2.8-1.6 4.1-4 4.1-2.1 0-3.4-1.1-4-2.4l2.8-1.4z" fill="#323330"/>
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
  aws: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path d="M9.1 13.8c0 .5.05 1 .15 1.4.1.4.25.85.5 1.3.08.15.1.3.1.4 0 .17-.1.35-.3.52l-1 .68c-.14.1-.28.15-.4.15-.16 0-.32-.08-.48-.23a5 5 0 01-.58-.75 12.4 12.4 0 01-.5-1 6.1 6.1 0 01-2.3 2.72c-.63.42-1.4.63-2.3.63-1.08 0-1.95-.3-2.6-.93-.64-.62-.97-1.45-.97-2.47 0-1.09.38-1.98 1.16-2.65.77-.68 1.8-1.01 3.1-1.01.43 0 .87.04 1.33.1.47.06.95.17 1.46.3V12.5c0-.97-.2-1.65-.6-2.04-.4-.4-1.08-.6-2.04-.6-.44 0-.9.06-1.36.17-.47.1-.93.26-1.38.46-.2.1-.36.15-.44.18-.08.03-.15.04-.2.04-.17 0-.26-.12-.26-.38v-.6c0-.2.03-.35.1-.43.07-.08.2-.17.38-.26.44-.23.97-.42 1.58-.57C2.15 9.07 2.79 9 3.45 9c1.37 0 2.37.3 3.02.92.64.6.97 1.53.97 2.76v3.64l-.33-.54zm-2.4 1.77a4 4 0 00-1.26-.2c-.55 0-1 .1-1.38.33-.38.22-.57.56-.57 1.03 0 .45.16.8.48 1.04.32.23.77.35 1.35.35.57 0 1.06-.15 1.47-.44.4-.3.67-.7.8-1.22V15.6h-.9zm7.5 2.97c-.2 0-.34-.03-.43-.1-.1-.07-.18-.2-.25-.42l-2.83-9.32c-.07-.22-.1-.37-.1-.46 0-.18.1-.28.27-.28h1.1c.2 0 .35.04.43.1.08.07.17.22.24.43L14.5 17.3l1.68-5.83c.06-.22.15-.36.23-.43.1-.07.24-.1.43-.1h.9c.2 0 .34.03.43.1.1.07.18.2.24.43l1.7 5.9 1.76-5.9c.07-.22.17-.36.25-.43.08-.07.23-.1.43-.1h1.04c.18 0 .28.1.28.28 0 .06-.01.12-.03.2l-.1.27L20.87 18c-.07.23-.16.37-.25.43-.1.07-.24.1-.43.1h-.96c-.2 0-.35-.04-.44-.1-.1-.07-.18-.22-.23-.44L17 12.1l-1.55 5.86c-.06.23-.14.37-.23.44-.1.07-.24.1-.43.1h-.97zm13.5.24c-.6 0-1.2-.07-1.78-.22-.58-.14-1.04-.3-1.36-.5-.18-.1-.3-.22-.35-.33a.75.75 0 01-.07-.33v-.62c0-.27.1-.4.28-.4.07 0 .15.01.23.04l.26.12c.4.2.84.35 1.3.46.47.1.93.17 1.4.17.74 0 1.32-.13 1.72-.38.4-.26.6-.63.6-1.1 0-.32-.1-.58-.3-.8-.2-.2-.56-.4-1.08-.57l-1.55-.48c-.78-.24-1.36-.6-1.72-1.07-.36-.46-.54-1-.54-1.58 0-.46.1-.86.3-1.2.2-.36.47-.67.8-.92.34-.25.72-.44 1.16-.57.44-.13.9-.2 1.38-.2.24 0 .5.02.74.05.25.04.47.09.7.14.22.06.43.12.62.2.2.07.35.14.46.2.15.1.25.18.32.27.06.08.1.2.1.35v.57c0 .27-.1.4-.27.4-.1 0-.25-.04-.47-.14-.7-.32-1.5-.47-2.37-.47-.68 0-1.2.1-1.58.34-.38.23-.57.57-.57 1.03 0 .32.1.6.32.82.22.2.62.42 1.2.6l1.52.47c.77.24 1.33.58 1.66 1.02.34.45.5.96.5 1.53 0 .46-.1.88-.3 1.25-.2.37-.47.7-.83.96-.36.27-.78.47-1.28.6-.5.15-1.05.22-1.63.22z" fill="#FF9900"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
      <polyline points="10,20 4,16 10,12" stroke="#A855F7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,12 28,16 22,20" stroke="#A855F7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="18" y1="9" x2="14" y2="23" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header-tag">✦ Technical Skills</span>
          <h2 className="section-heading">
            Tools I Turn{' '}
            <span className="text-gradient">Into Magic.</span>
          </h2>
          <p className="section-subheading">
            Every technology is a new language to master. Here are the tools I speak fluently — and the ones I'm still learning.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="skill-card"
                style={{ '--skill-color': `${skill.color}40` }}
                title={skill.description}
                role="article"
                aria-label={`${skill.name} skill`}
              >
                <div
                  className="skill-icon"
                  style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
                  aria-hidden="true"
                >
                  {SKILL_ICONS[skill.icon] || SKILL_ICONS.code}
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-desc">{skill.description}</div>
                {skill.level > 0 && (
                  <>
                    <div className="skill-bar-wrap">
                      <motion.div
                        className="skill-bar"
                        style={{ background: skill.color, width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.08 + 0.3, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                    <div className="skill-level">{skill.level}% Proficiency</div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

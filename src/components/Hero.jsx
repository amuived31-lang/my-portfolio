import { Mail, ArrowDown, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import portrait from '../assets/uma.jpeg';

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${(i * 137.5) % 100}%`,
    left: `${(i * 97.3) % 100}%`,
    size: (i % 3) + 1,
    opacity: 0.3 + (i % 5) * 0.1,
    duration: 2 + (i % 4),
    delay: (i % 6) * 0.5,
  }));
}

const ORBIT_DOTS = [
  { speed: '7s', radius: '-160px', color: '#60a5fa' },
  { speed: '11s', radius: '-160px', color: '#a78bfa' },
  { speed: '15s', radius: '-160px', color: '#f472b6' },
];

export default function Hero() {
  const stars = useMemo(() => generateStars(70), []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section" aria-label="Hero section">
      {/* Animated subtle stars */}
      <div className="stars-bg" aria-hidden="true">
        {stars.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              '--opacity': s.opacity,
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero__grid">
          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="hero__badge" aria-label="Professional status badge">
              <span className="hero__badge-dot" />
              {personalInfo.title}
            </div>

            <p className="hero__greeting">Hello, I'm</p>

            <h1 className="hero__name">UMADEVI.</h1>

            <p className="hero__tagline">{personalInfo.tagline}</p>

            <p className="hero__desc">{personalInfo.shortBio}</p>

            <div className="hero__cta">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                id="view-projects-btn"
              >
                View Weather App
                <ExternalLink size={16} />
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                id="contact-hero-btn"
              >
                Get in Touch
                <Send size={16} />
              </button>
            </div>

            <div className="hero__socials" aria-label="Social and contact links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero__social-link"
                aria-label="Send email"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Portrait + Orbital Visual */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <div className="hero__glow-blue" />
            <div className="hero__glow-violet" />

            <div className="hero__orbit-container">
              {/* Rotating orbital rings */}
              <div className="hero__portrait-ring" />
              <div className="hero__portrait-ring-2" />

              {/* Orbiting dots */}
              {ORBIT_DOTS.map((dot, i) => (
                <span
                  key={i}
                  className="orbit-dot"
                  style={{
                    '--orb-speed': dot.speed,
                    '--orb-radius': dot.radius,
                    background: dot.color,
                    boxShadow: `0 0 12px ${dot.color}`,
                    animationDelay: `${i * -2.5}s`,
                  }}
                />
              ))}

              {/* Real Portrait */}
              <div className="hero__portrait">
                <img
                  src={portrait}
                  alt="Portrait photo of Umadevi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="btn-secondary"
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '8px 18px',
          fontSize: '0.82rem',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'var(--bg-glass)',
          border: '1px solid var(--border)',
          borderRadius: 50,
          color: 'var(--text-muted)',
          cursor: 'pointer',
          zIndex: 2,
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down to About section"
      >
        <ArrowDown size={14} />
        Scroll Down
      </motion.button>
    </section>
  );
}

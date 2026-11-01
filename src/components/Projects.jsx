import { motion } from 'framer-motion';
import { ExternalLink, CloudSun, Wind, Droplets, Compass, Check, Search } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { weatherProject } from '../data/portfolioData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Projects() {
  const p = weatherProject;

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <span className="section-header-tag">✦ Featured Project</span>
          <h2 className="section-heading">
            Engineering in <span className="text-gradient">Action.</span>
          </h2>
          <p className="section-subheading">
            A deep dive into my featured real-world web application, built with modern web fundamentals and live API integration.
          </p>
        </motion.div>

        {/* Prominent Single Project Showcase */}
        <motion.article
          className="project-showcase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          style={{
            marginTop: '48px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border)',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card), 0 0 60px rgba(59,130,246,0.12)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Top Hero Bar */}
          <div
            style={{
              padding: '36px 36px 28px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  ● Active Deployment
                </span>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(99,102,241,0.15)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    color: 'var(--violet-bright)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Standalone Web App
                </span>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-display)' }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: '4px 0 0' }}>
                {p.subtitle}
              </p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                aria-label="View Weather App source code on GitHub"
              >
                <GithubIcon size={18} />
                Source Code
              </a>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                aria-label="View Weather App live demo"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>

          {/* Grid Layout: Visual Interface Simulation & Details */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              padding: '36px',
            }}
          >
            {/* LEFT: Weather App Interactive Visual Mockup */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.15), rgba(139,92,246,0.12))',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: 'inset 0 0 30px rgba(59,130,246,0.1)',
                }}
              >
                {/* Search Bar Preview */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    marginBottom: '24px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                  }}
                >
                  <Search size={16} color="var(--cyan-bright)" />
                  <span>Bangalore, India</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.6 }}>Live Query</span>
                </div>

                {/* Main Temperature Display */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1, color: '#fff', fontFamily: 'var(--font-display)' }}>
                      26°<span style={{ fontSize: '2rem', color: 'var(--cyan-bright)' }}>C</span>
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '6px', fontWeight: 500 }}>
                      Partly Cloudy • Bangalore
                    </div>
                  </div>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 30px rgba(245,158,11,0.5)',
                    }}
                  >
                    <CloudSun size={38} color="#fff" />
                  </div>
                </div>

                {/* Metrics Row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    background: 'rgba(0,0,0,0.25)',
                    borderRadius: '14px',
                    padding: '16px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                      <Droplets size={18} color="var(--cyan-bright)" />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Humidity</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>68%</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                      <Wind size={18} color="var(--blue-bright)" />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Wind Speed</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>14 km/h</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
                      <Compass size={18} color="var(--violet-bright)" />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Conditions</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Mild Wind</div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Technologies & APIs
                </h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.technologies.map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '6px 14px',
                        background: 'rgba(99,102,241,0.12)',
                        border: '1px solid rgba(99,102,241,0.3)',
                        borderRadius: '20px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--violet-bright)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Architecture, Capabilities & Verified Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  Project Overview
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {p.summary}
                </p>
              </div>

              {/* Verified Features List */}
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '14px', color: 'var(--cyan-bright)' }}>
                  Verified Application Features
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                  {p.verifiedFeatures.map((feat, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 14px',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Check size={16} color="var(--violet-bright)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Capabilities Breakdown */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '20px',
                }}
              >
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Core Capabilities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.capabilities.map((cap) => (
                    <div key={cap.num} style={{ display: 'flex', gap: '12px', alignItems: 'baseline', fontSize: '0.88rem' }}>
                      <span style={{ color: 'var(--violet-bright)', fontWeight: 700, fontSize: '0.78rem' }}>
                        {cap.num}.
                      </span>
                      <div>
                        <strong style={{ color: 'var(--text-primary)' }}>{cap.title}: </strong>
                        <span style={{ color: 'var(--text-secondary)' }}>{cap.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

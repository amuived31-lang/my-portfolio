import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, MapPin, CheckCircle2, Calendar, Maximize2, X, Trophy } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

import hackathonImg from '../assets/certificates/sih-hackathon-2025.jpg';
import awsImg from '../assets/certificates/aws-community-day-2026.jpg';
import geminiImg from '../assets/certificates/gemini-certified-educator.png';
import deloitteImg from '../assets/certificates/deloitte-data-analytics.png';

const CERT_IMAGES = {
  hackathon: hackathonImg,
  aws: awsImg,
  gemini: geminiImg,
  deloitte: deloitteImg,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Education() {
  const { education, certifications } = aboutData;
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  return (
    <section id="education" className="section" aria-label="Education, Certifications and Hackathons">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <span className="section-header-tag">✦ Credentials & Achievements</span>
          <h2 className="section-heading">
            Education & <span className="text-gradient">Certifications.</span>
          </h2>
          <p className="section-subheading">
            My formal engineering degree program, national-level hackathon participation, and verified industry credentials.
          </p>
        </motion.div>

        {/* Top: Formal Degree Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          custom={0}
          style={{ marginTop: '40px' }}
        >
          <div
            className="education-hero-card"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-card)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '160px',
                height: '160px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                    }}
                  >
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--cyan-bright)',
                        fontWeight: 700,
                      }}
                    >
                      Undergraduate Degree
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-display)' }}>
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '4px 0 6px' }}>
                  {education.institution}
                </h4>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    marginBottom: '10px',
                  }}
                >
                  <MapPin size={16} color="var(--violet-bright)" />
                  <span>{education.location}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {education.fullDegree}
                </p>
              </div>

              {/* Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--violet-bright)' }}>
                  Program Highlights
                </div>
                {education.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--violet-bright)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Hackathons Grid */}
        <div style={{ marginTop: '54px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Award size={24} color="var(--magenta-bright)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
              Verified Certificates & Hackathons
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {certifications.map((cert, index) => {
              const imageSrc = CERT_IMAGES[cert.imageKey];
              const isHackathon = cert.id === 'hackathon';

              return (
                <motion.div
                  key={cert.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeInUp}
                  custom={index + 1}
                >
                  <div
                    style={{
                      background: 'var(--bg-glass)',
                      border: isHackathon ? '1px solid rgba(236,72,153,0.4)' : '1px solid var(--border)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: isHackathon ? '0 10px 30px rgba(236,72,153,0.15)' : 'var(--shadow-card)',
                      backdropFilter: 'blur(16px)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Certificate Image Thumbnail with View Overlay */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/10',
                        overflow: 'hidden',
                        background: '#090e1f',
                        cursor: 'pointer',
                      }}
                      onClick={() => setSelectedCert({ ...cert, imageSrc })}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedCert({ ...cert, imageSrc });
                        }
                      }}
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <img
                        src={imageSrc}
                        alt={`Certificate: ${cert.title}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                          display: 'block',
                        }}
                      />

                      {/* Tag pill */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '16px',
                          background: isHackathon ? 'rgba(236,72,153,0.85)' : 'rgba(4,11,26,0.85)',
                          backdropFilter: 'blur(8px)',
                          color: '#fff',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {isHackathon ? <Trophy size={13} /> : <Award size={13} />}
                        <span>{cert.category}</span>
                      </div>

                      {/* Hover action overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(4,11,26,0.5)',
                          opacity: 0,
                          transition: 'opacity 0.25s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                        }}
                        className="cert-hover-overlay"
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                      >
                        <Maximize2 size={18} />
                        <span>Click to Enlarge</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--violet-bright)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {cert.issuer}
                        </span>
                        {cert.date && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Calendar size={12} />
                            {cert.date}
                          </span>
                        )}
                      </div>

                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                        {cert.title}
                      </h4>

                      <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, flex: 1 }}>
                        {cert.description}
                      </p>

                      <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.06)',
                            color: 'var(--cyan-bright)',
                            fontWeight: 600,
                          }}
                        >
                          {cert.badge}
                        </span>

                        <button
                          onClick={() => setSelectedCert({ ...cert, imageSrc })}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--violet-bright)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                          }}
                        >
                          <Maximize2 size={13} />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(4, 11, 26, 0.88)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '920px',
                width: '100%',
                maxHeight: '90vh',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: '16px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    {selectedCert.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ''}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                  aria-label="Close certificate preview"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Viewer */}
              <div
                style={{
                  padding: '20px',
                  overflowY: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#040b1a',
                }}
              >
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '65vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                  }}
                />
              </div>

              {/* Modal Footer Description */}
              <div
                style={{
                  padding: '16px 24px',
                  borderTop: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                  {selectedCert.description}
                </p>
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  Open Original
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

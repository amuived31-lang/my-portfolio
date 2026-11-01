import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Umadevi">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
        >
          <span className="section-header-tag">✦ About Me</span>
          <h2 className="section-heading">
            Background & <span className="text-gradient">Aspirations.</span>
          </h2>
          <p className="section-subheading">
            Get to know my academic background, technical focus areas, and career goals.
          </p>
        </motion.div>

        <div className="about__grid" style={{ marginTop: 48 }}>
          {/* LEFT — Profile Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            custom={0}
          >
            <div className="about__portrait-card">
              <div className="about__portrait-img">
                <img
                  src={profilePhoto}
                  alt="Umadevi professional profile photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 'inherit',
                    display: 'block',
                  }}
                />
              </div>
              <div className="about__card-info">
                <div className="about__info-item">
                  <Briefcase size={16} />
                  <div>
                    <div className="about__info-label">Professional Role</div>
                    <div className="about__info-value">{personalInfo.title}</div>
                  </div>
                </div>
                <div className="about__info-item">
                  <MapPin size={16} />
                  <div>
                    <div className="about__info-label">Location</div>
                    <div className="about__info-value">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="about__info-item">
                  <GraduationCap size={16} />
                  <div>
                    <div className="about__info-label">Education</div>
                    <div className="about__info-value">Amity University (CSE AIML)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Bio */}
            <motion.div className="about__bio" variants={fadeInUp} custom={1}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 16, color: 'var(--violet-bright)', fontWeight: 700 }}>
                Who I Am
              </h3>
              {aboutData.bio.map((para, i) => (
                <p key={i} style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>{para}</p>
              ))}
            </motion.div>

            {/* Focus & Passions */}
            <motion.div variants={fadeInUp} custom={2}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 14, color: 'var(--cyan-bright)', fontWeight: 700 }}>
                Areas of Focus
              </h3>
              <div className="about__interests">
                <span className="interest-tag">Frontend Web Development</span>
                <span className="interest-tag">React & Modern UI Engineering</span>
                <span className="interest-tag">Core Computer Science & AIML</span>
                <span className="interest-tag">Problem Solving & Algorithms</span>
                <span className="interest-tag">API Integration & Weather Apps</span>
                <span className="interest-tag">Responsive & Accessible Design</span>
              </div>
            </motion.div>

            {/* Career Aspiration Card */}
            <motion.div variants={fadeInUp} custom={3}>
              <div
                className="about__aspiration-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.12))',
                  border: '1px solid rgba(139,92,246,0.3)',
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Target size={18} color="var(--cyan-bright)" />
                  <h4 style={{ margin: 0, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--cyan-bright)', fontWeight: 700 }}>
                    Career Objective
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontStyle: 'italic', margin: 0 }}>
                  "My goal is to start my career in a dynamic organization where I can contribute, learn, and grow as a professional."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

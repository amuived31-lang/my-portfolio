import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Star } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <span className="section-header-tag">✦ About Me</span>
          <h2 className="section-heading">
            My Story.{' '}
            <span className="text-gradient">My Journey.</span>
          </h2>
          <p className="section-subheading">
            Every great developer has a story. Here's mine — the people, moments and questions that shaped who I am.
          </p>
        </motion.div>

        <div className="about__grid" style={{ marginTop: 56 }}>
          {/* LEFT — Portrait Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            custom={0}
          >
            <div className="about__portrait-card">
              <div className="about__portrait-img">
                <img
                  src={profilePhoto}
                  alt="Professional profile photo"
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
                  <MapPin size={16} />
                  <div>
                    <div className="about__info-label">Location</div>
                    <div className="about__info-value">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="about__info-item">
                  <Star size={16} />
                  <div>
                    <div className="about__info-label">Role</div>
                    <div className="about__info-value">{personalInfo.title}</div>
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
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Bio */}
            <motion.div className="about__bio" variants={fadeInUp} custom={1}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 16, color: 'var(--violet-bright)' }}>
                Who I Am
              </h3>
              {aboutData.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp} custom={2}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 14, color: 'var(--cyan-bright)' }}>
                Education
              </h3>
              {aboutData.education.map((edu, i) => (
                <div key={i} className="education-card">
                  <div className="education-icon">
                    <GraduationCap size={22} color="#fff" />
                  </div>
                  <div className="education-details">
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                    <div className="edu-meta">
                      <span><Calendar size={12} />{edu.year}</span>
                      {edu.grade && <span><Star size={12} />{edu.grade}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeInUp} custom={3}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 14, color: 'var(--magenta-bright)' }}>
                Interests & Passions
              </h3>
              <div className="about__interests">
                {aboutData.interests.map((interest, i) => (
                  <span key={i} className="interest-tag">{interest}</span>
                ))}
              </div>
            </motion.div>

            {/* Aspiration */}
            <motion.div variants={fadeInUp} custom={4}>
              <div className="about__aspiration-card">
                <h4>🎯 Career Aspiration</h4>
                <p>{aboutData.aspirations}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

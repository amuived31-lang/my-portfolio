import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const CONTACT_CARDS = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    id: 'contact-email',
    isExternal: false,
  },
  {
    label: 'Phone',
    value: personalInfo.phoneFormatted,
    href: `tel:${personalInfo.phone}`,
    icon: <Phone size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #059669, #10b981)',
    id: 'contact-phone',
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    value: 'uma-devi-12a28a3a2',
    href: personalInfo.linkedin,
    icon: <LinkedinIcon size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #0077B5, #0ea5e9)',
    id: 'contact-linkedin',
    isExternal: true,
  },
  {
    label: 'GitHub',
    value: '@amuived31-lang',
    href: personalInfo.github,
    icon: <GithubIcon size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #374151, #111827)',
    id: 'contact-github',
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact Umadevi">
      <div className="container">
        <div className="contact__inner">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-header-tag">✦ Get In Touch</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Let's <span className="text-gradient">Connect.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
              I am actively looking to start my career in a dynamic organization where I can contribute, learn, and grow as a professional. Feel free to reach out directly!
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                padding: '6px 16px',
                borderRadius: '20px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
              }}
            >
              <MapPin size={15} color="var(--violet-bright)" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </motion.div>

          <div className="contact__cards" style={{ marginTop: '40px' }}>
            {CONTACT_CARDS.map((card, i) => (
              <motion.a
                key={card.id}
                href={card.href}
                target={card.isExternal ? '_blank' : undefined}
                rel={card.isExternal ? 'noopener noreferrer' : undefined}
                className="contact__card"
                id={card.id}
                aria-label={`${card.label}: ${card.value}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div
                  className="contact__icon"
                  style={{ background: card.bg }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <div className="contact__card-text">
                  <div className="contact__card-label">{card.label}</div>
                  <div className="contact__card-value">{card.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ marginTop: 44 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              id="send-email-btn"
              aria-label="Send an email to Umadevi"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Send size={18} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

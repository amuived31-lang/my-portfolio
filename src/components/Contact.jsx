import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const CONTACT_CARDS = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    id: 'contact-email',
  },
  {
    label: 'GitHub',
    value: '@your-username',
    href: personalInfo.github,
    icon: <GithubIcon size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #374151, #111827)',
    id: 'contact-github',
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
    icon: <LinkedinIcon size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #0077B5, #0ea5e9)',
    id: 'contact-linkedin',
  },
  {
    label: 'Twitter / X',
    value: '@your-handle',
    href: personalInfo.twitter,
    icon: <TwitterIcon size={22} color="#fff" />,
    bg: 'linear-gradient(135deg, #1d9bf0, #374151)',
    id: 'contact-twitter',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="contact__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-header-tag">✦ Contact</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Let's{' '}
              <span className="text-gradient">Build Together.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Whether you have a project idea, a collaboration opportunity, or just want to say hello —
              my inbox is always open. I'd love to connect with builders, dreamers and innovators.
            </p>
          </motion.div>

          <div className="contact__cards">
            {CONTACT_CARDS.map((card, i) => (
              <motion.a
                key={card.id}
                href={card.href}
                target={card.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact__card"
                id={card.id}
                aria-label={`${card.label}: ${card.value}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ marginTop: 48 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              id="send-message-btn"
              aria-label="Send an email"
              style={{ display: 'inline-flex' }}
            >
              <Send size={18} />
              Send Me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

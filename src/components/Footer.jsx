import { Mail, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo" aria-label="Umadevi portfolio logo">
            U. Umadevi
          </div>

          <p className="footer__copy">
            © {year} Umadevi. Crafted with ❤️ for AWS Student Builder Challenge 2026.
          </p>

          <div className="footer__links" aria-label="Footer social links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer__link"
              aria-label="Email"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* AWS badge */}
        <div style={{ textAlign: 'center' }}>
          <div className="footer__aws-badge">
            <Cloud size={14} />
            Built for AWS Student Builder Challenge — Build Your Tech Superpower 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

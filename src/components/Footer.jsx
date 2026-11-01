import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo" aria-label="Umadevi portfolio logo">
            Umadevi.
          </div>

          <p className="footer__copy">
            © {CURRENT_YEAR} Umadevi. Student Frontend Developer • Bangalore, Karnataka.
          </p>

          <div className="footer__links" aria-label="Footer social links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer__link"
              aria-label="Send Email"
              title="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="footer__link"
              aria-label="Call Phone"
              title="Phone"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

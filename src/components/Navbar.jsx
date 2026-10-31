import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Superpower', href: '#superpower' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <button
            className="navbar__logo"
            onClick={() => handleNavClick('#home')}
            aria-label="Go to top"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800 }}
          >
            U. Umadevi
          </button>

          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  className={`navbar__link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-expanded={mobileOpen}
              aria-label="Toggle mobile menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <button
              key={link.label}
              className={`navbar__link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

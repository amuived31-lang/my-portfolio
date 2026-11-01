import { useState, useEffect } from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('umadevi-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('umadevi-theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app-wrapper" data-theme={theme}>
      {/* Fixed cosmic background */}
      <div className="cosmic-bg" aria-hidden="true" />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="main-content" id="main-content" role="main">
        <Hero />
        <div className="gradient-divider" aria-hidden="true" />
        <About />
        <div className="gradient-divider" aria-hidden="true" />
        <Skills />
        <div className="gradient-divider" aria-hidden="true" />
        <Education />
        <div className="gradient-divider" aria-hidden="true" />
        <Projects />
        <div className="gradient-divider" aria-hidden="true" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

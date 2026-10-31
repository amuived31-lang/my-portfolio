import { useState, useEffect } from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SuperpowerMachine from './components/SuperpowerMachine';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Persist theme preference
  useEffect(() => {
    const saved = localStorage.getItem('umadevi-theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('umadevi-theme', theme);
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
        <Projects />
        <div className="gradient-divider" aria-hidden="true" />
        <SuperpowerMachine />
        <div className="gradient-divider" aria-hidden="true" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

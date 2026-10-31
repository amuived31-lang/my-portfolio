import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, RefreshCw, Info } from 'lucide-react';
import { superpowers } from '../data/portfolioData';

// Deterministic "random" that cycles through all powers then shuffles
let lastIndex = -1;
function nextPower(current) {
  let idx;
  do {
    idx = Math.floor(Math.random() * superpowers.length);
  } while (idx === lastIndex && superpowers.length > 1);
  lastIndex = idx;
  return superpowers[idx];
}

// Particles config
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  color: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#06b6d4' : '#6366f1',
  speed: `${2 + (i % 4)}s`,
  radius: `${-100 - (i % 3) * 40}px`,
  start: `${i * 30}deg`,
  delay: `${(i * 0.25).toFixed(2)}s`,
}));

export default function SuperpowerMachine() {
  const [phase, setPhase] = useState('idle'); // idle | activating | result
  const [discovered, setDiscovered] = useState(null);
  const timerRef = useRef(null);

  const activate = useCallback(() => {
    if (phase === 'activating') return;
    setPhase('activating');
    setDiscovered(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const power = nextPower(discovered?.id);
      setDiscovered(power);
      setPhase('result');
    }, 2400);
  }, [phase, discovered]);

  const reset = useCallback(() => {
    setPhase('idle');
    setDiscovered(null);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const discoverAgain = useCallback(() => {
    setPhase('activating');
    setDiscovered(null);
    timerRef.current = setTimeout(() => {
      const power = nextPower(discovered?.id);
      setDiscovered(power);
      setPhase('result');
    }, 2000);
  }, [discovered]);

  return (
    <section id="superpower" className="section superpower-section" aria-label="Superpower discovery machine">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header-tag">✦ Superpower</span>
          <h2 className="section-heading">
            The Superpower{' '}
            <span className="text-gradient">Discovery Machine.</span>
          </h2>
          <p className="section-subheading">
            Every developer has a hidden superpower. This machine reveals yours — and mine. Interact below to discover.
          </p>
        </motion.div>

        <div className="superpower-wrapper">
          {/* LEFT — Machine Visual */}
          <motion.div
            className="machine-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
          >
            {/* Rings */}
            <div className={`machine-ring ring-1${phase === 'activating' ? ' fast' : ''}`} />
            <div className={`machine-ring ring-2${phase === 'activating' ? ' fast' : ''}`} />
            <div className={`machine-ring ring-3${phase === 'activating' ? ' fast' : ''}`} />
            <div className={`machine-ring ring-4${phase === 'activating' ? ' fast' : ''}`} />

            {/* Particles */}
            <div className="machine-particles">
              {PARTICLES.map(p => (
                <span
                  key={p.id}
                  className="particle"
                  style={{
                    '--particle-color': p.color,
                    '--p-speed': p.speed,
                    '--p-radius': p.radius,
                    '--p-start': p.start,
                    animationDelay: p.delay,
                    opacity: phase === 'activating' ? 1 : 0.5,
                  }}
                />
              ))}
            </div>

            {/* Core */}
            <div className="machine-core">
              <button
                className={`machine-core-inner${phase === 'activating' ? ' activating' : ''}`}
                onClick={activate}
                disabled={phase === 'activating'}
                aria-label="Activate superpower discovery"
                title="Click to activate"
                style={{
                  background:
                    phase === 'result' && discovered
                      ? `radial-gradient(circle, ${discovered.color.from}, ${discovered.color.to})`
                      : undefined,
                }}
              >
                {/* Energy symbol */}
                <svg
                  viewBox="0 0 40 40"
                  width="40"
                  height="40"
                  fill="none"
                  style={{ position: 'absolute', animation: `spin ${phase === 'activating' ? '0.5s' : '4s'} linear infinite` }}
                >
                  <circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <path d="M20 6 L22 18 L28 18 L16 34 L18 22 L12 22 Z" fill="rgba(255,255,255,0.8)" />
                </svg>
              </button>

              {/* Status label */}
              <div style={{
                position: 'absolute',
                bottom: -32,
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}>
                {phase === 'idle' ? '⚡ Click core or button below' :
                 phase === 'activating' ? '🌀 Scanning...' :
                 '✅ Power revealed'}
              </div>
            </div>

            {/* Glow effect when activated */}
            {phase === 'activating' && (
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.2), transparent 60%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* RIGHT — Interaction Panel */}
          <motion.div
            className="machine-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Hint */}
            <div className="machine-hint" role="note">
              <div className="machine-hint-icon"><Info size={18} /></div>
              <p>
                <strong>This machine is interactive.</strong> Click{' '}
                <strong>"Discover My Power"</strong> below (or the glowing core on the left) to activate the machine and reveal a unique developer superpower — its story, skills, and what makes it extraordinary.
              </p>
            </div>

            {/* Discover button */}
            <button
              className={`btn-discover${phase === 'activating' ? ' activating' : ''}`}
              onClick={activate}
              disabled={phase === 'activating'}
              id="discover-power-btn"
              aria-label="Discover superpower"
            >
              {phase === 'activating' ? (
                <>
                  <span className="spinner" />
                  Scanning the cosmos...
                </>
              ) : phase === 'result' ? (
                <>
                  <Zap size={20} />
                  Discover Again
                </>
              ) : (
                <>
                  <Zap size={20} />
                  Discover My Power ✨
                </>
              )}
            </button>

            {/* Result card */}
            <AnimatePresence mode="wait">
              {phase === 'result' && discovered && (
                <motion.div
                  key={discovered.id}
                  className="discovery-card"
                  style={{
                    borderColor: `${discovered.color.from}60`,
                    '--card-color-from': `${discovered.color.from}20`,
                  }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  role="region"
                  aria-label={`Discovered superpower: ${discovered.title}`}
                >
                  <span className="discovery-emoji" role="img" aria-label={discovered.title}>
                    {discovered.icon}
                  </span>

                  <div
                    className="discovery-subtitle"
                    style={{ color: discovered.color.from }}
                  >
                    {discovered.subtitle}
                  </div>

                  <h3
                    className="discovery-title"
                    style={{
                      background: `linear-gradient(135deg, ${discovered.color.from}, ${discovered.color.to})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {discovered.title}
                  </h3>

                  <p className="discovery-tagline">{discovered.tagline}</p>

                  <p className="discovery-desc">{discovered.description}</p>

                  <div className="discovery-skills" aria-label="Related skills">
                    {discovered.skills.map(skill => (
                      <span
                        key={skill}
                        className="discovery-skill-tag"
                        style={{
                          background: `${discovered.color.from}20`,
                          borderColor: `${discovered.color.from}50`,
                          color: discovered.color.from,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div
                    className="discovery-story"
                    style={{ borderLeftColor: discovered.color.from }}
                  >
                    📖 {discovered.story}
                  </div>

                  <p
                    className="discovery-quote"
                    style={{ color: discovered.color.from }}
                  >
                    "{discovered.quote}"
                  </p>

                  <button
                    className="btn-again"
                    onClick={discoverAgain}
                    aria-label="Discover a different superpower"
                    id="discover-again-btn"
                  >
                    <RefreshCw size={15} />
                    Discover Another Power
                  </button>
                </motion.div>
              )}

              {phase === 'activating' && (
                <motion.div
                  key="scanning"
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: 'var(--text-muted)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ fontSize: '2.5rem', marginBottom: 12 }}
                  >
                    🔮
                  </motion.div>
                  <p style={{ fontSize: '0.9rem' }}>Scanning your developer DNA...</p>
                </motion.div>
              )}

              {phase === 'idle' && (
                <motion.div
                  key="idle"
                  style={{
                    textAlign: 'center',
                    padding: '32px 20px',
                    color: 'var(--text-muted)',
                    border: '1px dashed var(--border)',
                    borderRadius: 20,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>⚡</div>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Your superpower awaits discovery. Click the button above to begin the scan.
                  </p>
                  <p style={{ fontSize: '0.78rem', marginTop: 8, color: 'var(--text-muted)' }}>
                    6 unique powers — which one is yours?
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

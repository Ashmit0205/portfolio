import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// Mechanical click sound using Web Audio API
const playClickSound = (isLight) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = isLight ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(isLight ? 520 : 340, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Ignore until first user gesture
  }
};

export default function PullCord({ theme, toggleTheme }) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [flash, setFlash] = useState(false);

  // Cord physics - optimized for navbar height
  const defaultLength = 78;
  const dragY = useMotionValue(0);
  const smoothY = useSpring(dragY, { stiffness: 500, damping: 16, mass: 0.7 });

  // Compute total cord height
  const cordHeight = useTransform(smoothY, (y) => defaultLength + y);

  const handlePullComplete = () => {
    toggleTheme();
    playClickSound(theme === 'dark');
    setHasInteracted(true);
    setFlash(true);
    setTimeout(() => setFlash(false), 400);
  };

  const handleDragEnd = (event, info) => {
    setIsPulling(false);
    if (info.offset.y > 25) {
      handlePullComplete();
    }
    dragY.set(0);
  };

  const handleClick = () => {
    dragY.set(35);
    setTimeout(() => {
      handlePullComplete();
      dragY.set(0);
    }, 140);
  };

  const isLight = theme === 'light';

  return (
    <div
      className="pull-cord-nav-item cursor-target"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '42px',
        userSelect: 'none',
        zIndex: 50
      }}
    >
      {/* Light burst flash on switch */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 3.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: `${defaultLength - 38}px`,
              left: '0px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: isLight
                ? 'radial-gradient(circle, rgba(255, 230, 120, 0.9) 0%, rgba(99, 102, 241, 0) 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.9) 0%, rgba(6, 182, 212, 0) 70%)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        )}
      </AnimatePresence>

      {/* SVG Cord String anchored to top edge */}
      <svg
        style={{
          position: 'absolute',
          top: '-20px', // Top anchor mount
          left: '16px',
          width: '20px',
          height: `${defaultLength + 80}px`,
          overflow: 'visible',
          pointerEvents: 'none'
        }}
      >
        <motion.line
          x1="0"
          y1="0"
          x2="0"
          y2={cordHeight}
          stroke={isLight ? '#475569' : '#94a3b8'}
          strokeWidth="2"
          strokeDasharray="4 2"
          strokeLinecap="round"
          style={{ opacity: 0.85 }}
        />
        {/* Top anchor mount point */}
        <circle cx="0" cy="2" r="2.5" fill={isLight ? '#1e293b' : '#c7d2fe'} />
      </svg>

      {/* Pull Handle / Bead */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 55 }}
        dragElastic={0.55}
        onDragStart={() => setIsPulling(true)}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        style={{
          position: 'absolute',
          top: '-20px',
          left: '6px',
          y: smoothY,
          cursor: 'grab',
          touchAction: 'none',
          zIndex: 10
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92, cursor: 'grabbing' }}
      >
        {/* Sphere Pull Bead */}
        <div
          style={{
            marginTop: `${defaultLength}px`,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: isLight
              ? 'radial-gradient(circle at 35% 35%, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)'
              : 'radial-gradient(circle at 35% 35%, #ffffff 0%, #e0e7ff 40%, #6366f1 100%)',
            boxShadow: isLight
              ? '0 6px 14px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(0,0,0,0.15)'
              : '0 0 16px rgba(99, 102, 241, 0.7), 0 6px 14px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(0,0,0,0.3)',
            border: `1.5px solid ${isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.45)'}`,
            transition: 'background 0.3s, box-shadow 0.3s, border 0.3s',
            position: 'relative'
          }}
        >
          {/* Subtle bead cap */}
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              left: '7px',
              width: '6px',
              height: '5px',
              background: isLight ? '#64748b' : '#a5b4fc',
              borderRadius: '2px 2px 0 0'
            }}
          />
        </div>

        {/* Playful Handwritten "pull the cord!" Tooltip & Curved Arrow */}
        <AnimatePresence>
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -5 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10, transition: { duration: 0.25 } }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                position: 'absolute',
                top: `${defaultLength - 16}px`,
                right: '28px',
                width: '130px',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '6px',
                zIndex: 30
              }}
            >
              {/* Handwritten text */}
              <div
                style={{
                  fontFamily: '"Caveat", "Gochi Hand", cursive, sans-serif',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: isLight ? '#334155' : '#e2e8f0',
                  lineHeight: 1.05,
                  textAlign: 'right',
                  transform: 'rotate(-5deg)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.5px',
                  textShadow: isLight ? '0 1px 3px rgba(255,255,255,0.9)' : '0 2px 10px rgba(0,0,0,0.9)'
                }}
              >
                pull the
                <br />
                cord!
              </div>

              {/* Hand-drawn curved arrow pointing to bead */}
              <svg
                width="38"
                height="34"
                viewBox="0 0 50 45"
                fill="none"
                style={{
                  color: isLight ? '#475569' : '#818cf8',
                  transform: 'rotate(8deg)',
                  flexShrink: 0
                }}
              >
                <path
                  d="M 6 40 C 14 26, 28 10, 42 16"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 32 8 L 44 16 L 36 26"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

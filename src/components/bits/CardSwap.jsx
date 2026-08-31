import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CardSwap({
  items = [],
  interval = 4000,
  pauseOnHover = true,
  className = '',
  renderCard
}) {
  const [cards, setCards] = useState(() => items.map((item, i) => ({ ...item, uniqueKey: i })));
  const [isHovered, setIsHovered] = useState(false);

  // Sync if items prop changes
  useEffect(() => {
    setCards(items.map((item, i) => ({ ...item, uniqueKey: i })));
  }, [items]);

  const swapCard = () => {
    setCards((prevCards) => {
      if (prevCards.length <= 1) return prevCards;
      const [first, ...rest] = prevCards;
      return [...rest, first];
    });
  };

  useEffect(() => {
    if (pauseOnHover && isHovered) return;
    const timer = setInterval(swapCard, interval);
    return () => clearInterval(timer);
  }, [interval, isHovered, pauseOnHover]);

  return (
    <div
      className={`card-swap-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '340px',
        perspective: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          height: '280px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {cards.slice(0, 4).map((card, index) => {
            const isTop = index === 0;
            const yOffset = index * 16;
            const scale = 1 - index * 0.05;
            const zIndex = cards.length - index;
            const opacity = 1 - index * 0.2;

            return (
              <motion.div
                key={card.uniqueKey}
                layout
                initial={{ scale: 0.85, y: yOffset + 40, opacity: 0 }}
                animate={{
                  scale,
                  y: yOffset,
                  opacity,
                  zIndex,
                  rotateX: index * 2,
                  rotateZ: (index % 2 === 0 ? 1 : -1) * (index * 1.5)
                }}
                exit={{
                  y: -120,
                  opacity: 0,
                  scale: 1.05,
                  rotateZ: -10,
                  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                  mass: 0.8
                }}
                onClick={isTop ? swapCard : undefined}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  cursor: isTop ? 'pointer' : 'default',
                  transformOrigin: 'bottom center',
                  willChange: 'transform, opacity'
                }}
              >
                {renderCard ? renderCard(card, isTop, index) : (
                  <div
                    className="glass spotlight-card"
                    style={{
                      padding: '2rem',
                      borderRadius: '16px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{card.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{card.description || card.subtitle}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center'
        }}
      >
        <button
          onClick={swapCard}
          className="btn btn-secondary magnetic"
          style={{
            fontSize: '0.75rem',
            padding: '0.35rem 0.9rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}
        >
          SWAP CARD [↻]
        </button>
      </div>
    </div>
  );
}

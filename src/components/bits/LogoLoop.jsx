import { useState, useRef } from 'react';

export default function LogoLoop({
  items = [],
  speed = 30, // seconds for one full loop
  direction = 'left', // 'left' | 'right'
  pauseOnHover = true,
  gap = 40,
  className = '',
  renderItem
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Repeat items to ensure seamless infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`logo-loop-container ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        padding: '1rem 0',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      <div
        className="logo-loop-track"
        style={{
          display: 'flex',
          width: 'max-content',
          gap: `${gap}px`,
          animation: `logoLoop ${speed}s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`,
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="logo-loop-item"
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {renderItem ? renderItem(item, index) : (
              <div
                style={{
                  padding: '0.6rem 1.25rem',
                  background: 'var(--subcard-bg, rgba(14, 20, 32, 0.7))',
                  border: '1px solid var(--subcard-border, rgba(255, 255, 255, 0.08))',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                {item.icon && <span style={{ color: item.color || 'var(--accent-primary)' }}>{item.icon}</span>}
                <span>{item.name || item}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logoLoop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

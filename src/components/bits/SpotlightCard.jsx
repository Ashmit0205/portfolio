import { useRef, useState, useCallback } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(99, 102, 241, 0.15)',
  borderColor = 'rgba(168, 85, 247, 0.6)',
  size = 500,
  style = {},
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card glass ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      {...props}
    >
      {/* Radial Spotlight Fill */}
      <div
        className="spotlight-layer"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: opacity,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          zIndex: 1
        }}
      />

      {/* Radial Border Glow */}
      <div
        className="spotlight-border-layer"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          pointerEvents: 'none',
          opacity: opacity,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(${size * 0.8}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 70%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 2
        }}
      />

      <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

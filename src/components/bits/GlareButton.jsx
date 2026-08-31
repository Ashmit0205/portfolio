import { useState, useRef } from 'react';
import Magnet from './Magnet';

export default function GlareButton({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  glareColor = 'rgba(255, 255, 255, 0.45)',
  style = {},
  ...props
}) {
  const btnRef = useRef(null);
  const [glarePosition, setGlarePosition] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setGlarePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <Magnet padding={40} magnetStrength={3}>
      <button
        ref={btnRef}
        type={type}
        onClick={onClick}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`btn btn-primary glare-btn ${className}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: disabled ? 'not-allowed' : 'pointer',
          ...style
        }}
        {...props}
      >
        {/* Dynamic Glare Reflection */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.25s ease',
            background: `radial-gradient(120px circle at ${glarePosition.x}px ${glarePosition.y}px, ${glareColor}, transparent 70%)`,
            zIndex: 1
          }}
        />

        {/* Ambient Linear Sheen */}
        <div
          className="glare-sweep"
          style={{
            position: 'absolute',
            top: '-50%',
            left: isHovered ? '130%' : '-60%',
            width: '40%',
            height: '200%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
            transform: 'rotate(25deg)',
            transition: 'left 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        <div style={{ position: 'relative', zIndex: 3, display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
          {children}
        </div>
      </button>
    </Magnet>
  );
}

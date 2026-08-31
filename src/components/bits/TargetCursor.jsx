import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';

export default function TargetCursor({
  targetSelector = 'a, button, .cursor-target, .magnetic, .btn, .spotlight-card, input, textarea',
  spinDuration = 4,
  hoverDuration = 0.25,
  cursorColor = '#6366f1',
  activeColor = '#06b6d4'
}) {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const cornersRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmall = window.innerWidth <= 768;
      setIsMobile(hasTouch && isSmall);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const corners = cornersRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Target hover listeners
    const handleTargetEnter = () => {
      setIsHovered(true);
      gsap.to(corners, {
        scale: 1.4,
        rotate: 45,
        borderColor: activeColor,
        duration: hoverDuration,
        ease: 'power2.out'
      });
      gsap.to(dot, {
        scale: 1.6,
        backgroundColor: activeColor,
        boxShadow: `0 0 12px ${activeColor}`,
        duration: hoverDuration
      });
    };

    const handleTargetLeave = () => {
      setIsHovered(false);
      gsap.to(corners, {
        scale: 1,
        rotate: 0,
        borderColor: cursorColor,
        duration: hoverDuration,
        ease: 'power2.out'
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: cursorColor,
        boxShadow: `0 0 8px ${cursorColor}`,
        duration: hoverDuration
      });
    };

    // Attach to current and dynamic targets
    const attachListeners = () => {
      const targets = document.querySelectorAll(targetSelector);
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleTargetEnter);
        target.addEventListener('mouseleave', handleTargetLeave);
      });
      return targets;
    };

    let currentTargets = attachListeners();
    const observer = new MutationObserver(() => {
      currentTargets.forEach((t) => {
        t.removeEventListener('mouseenter', handleTargetEnter);
        t.removeEventListener('mouseleave', handleTargetLeave);
      });
      currentTargets = attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth ticker animation
    let animId;
    const render = () => {
      // Linear interpolation for silky cursor movement
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
      currentTargets.forEach((t) => {
        t.removeEventListener('mouseenter', handleTargetEnter);
        t.removeEventListener('mouseleave', handleTargetLeave);
      });
    };
  }, [isMobile, targetSelector, hoverDuration, cursorColor, activeColor]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="target-cursor-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform'
      }}
    >
      {/* Center Reticle Dot */}
      <div
        ref={dotRef}
        className="target-cursor-dot"
        style={{
          position: 'absolute',
          top: '-3px',
          left: '-3px',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: cursorColor,
          boxShadow: `0 0 8px ${cursorColor}`,
          transition: 'background-color 0.2s, box-shadow 0.2s',
          pointerEvents: 'none'
        }}
      />

      {/* Target Corner Crosshairs / Reticle Frame */}
      <div
        ref={cornersRef}
        className="target-cursor-corners"
        style={{
          position: 'absolute',
          top: '-16px',
          left: '-16px',
          width: '32px',
          height: '32px',
          border: `1.5px solid ${cursorColor}`,
          borderRadius: '4px',
          opacity: 0.85,
          pointerEvents: 'none',
          transition: 'border-color 0.2s, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          clipPath: 'polygon(0% 0%, 30% 0%, 30% 10%, 10% 10%, 10% 30%, 0% 30%, 0% 70%, 10% 70%, 10% 90%, 30% 90%, 30% 100%, 0% 100%, 100% 100%, 70% 100%, 70% 90%, 90% 90%, 90% 70%, 100% 70%, 100% 30%, 90% 30%, 90% 10%, 70% 10%, 70% 0%, 100% 0%)'
        }}
      />
    </div>
  );
}

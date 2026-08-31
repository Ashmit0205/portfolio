import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function BlurText({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words', // 'words' | 'letters'
  direction = 'top', // 'top' | 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = {
    filter: 'blur(10px)',
    opacity: 0,
    y: direction === 'top' ? -25 : 25
  };

  const defaultTo = {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0
  };

  return (
    <span
      ref={ref}
      className={`blur-text-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: animateBy === 'words' ? '0.3em' : '0.02em',
        verticalAlign: 'baseline'
      }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={defaultFrom}
          animate={inView ? defaultTo : defaultFrom}
          transition={{
            duration: 0.5,
            delay: (i * delay) / 1000,
            ease: [0.16, 1, 0.3, 1]
          }}
          onAnimationComplete={i === elements.length - 1 ? onAnimationComplete : undefined}
          style={{
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
            whiteSpace: el === ' ' ? 'pre' : 'normal'
          }}
        >
          {el === ' ' ? '\u00A0' : el}
        </motion.span>
      ))}
    </span>
  );
}

import { useEffect, useRef, useState } from 'react';

export const ScrollStackItem = ({ children, className = '', style = {} }) => {
  return (
    <div className={`scroll-stack-item ${className}`} style={style}>
      {children}
    </div>
  );
};

export default function ScrollStack({
  children,
  className = '',
  itemStackDistance = 24,
  scaleRatio = 0.03,
  topOffset = 100
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const items = itemsRef.current.filter(Boolean);

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const nextItem = items[index + 1];

        if (nextItem) {
          const nextRect = nextItem.getBoundingClientRect();
          const overlap = Math.max(0, topOffset + itemStackDistance * index - nextRect.top);
          const progress = Math.min(1, Math.max(0, (window.innerHeight - nextRect.top) / (window.innerHeight * 0.8)));

          // Scale and dim current item as next item comes in
          const currentScale = 1 - (items.length - 1 - index) * scaleRatio * (nextRect.top < topOffset + 100 ? 1 : 0);
          item.style.transform = `scale(${Math.max(0.92, 1 - progress * scaleRatio)})`;
          item.style.transformOrigin = 'top center';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itemStackDistance, scaleRatio, topOffset]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="scroll-stack-card-wrapper"
            style={{
              position: 'sticky',
              top: `${topOffset + i * itemStackDistance}px`,
              zIndex: i + 1,
              transition: 'transform 0.2s ease-out',
              willChange: 'transform'
            }}
          >
            {child}
          </div>
        ))
      ) : (
        children
      )}
    </div>
  );
}

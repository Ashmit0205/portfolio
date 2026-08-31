import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedList({
  items = [],
  onItemSelect,
  showGradients = true,
  className = '',
  itemClassName = '',
  renderItem,
  maxHeight = '420px'
}) {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (item, index) => {
    setSelectedIndex(index);
    if (onItemSelect) onItemSelect(item, index);
  };

  return (
    <div
      className={`animated-list-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        maxHeight,
        overflowY: 'auto',
        borderRadius: '12px',
        padding: '0.5rem 0'
      }}
    >
      <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {items.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <motion.div
              key={item.id || item.title || index}
              onClick={() => handleItemClick(item, index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.02, x: 4 }}
              className={`animated-list-item ${itemClassName} ${isSelected ? 'selected' : ''}`}
              style={{
                cursor: 'pointer',
                borderRadius: '10px',
                transition: 'background-color 0.25s, border-color 0.25s'
              }}
            >
              {renderItem ? renderItem(item, index, isSelected) : (
                <div
                  style={{
                    padding: '0.85rem 1.25rem',
                    background: isSelected ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isSelected ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.06)'}`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{typeof item === 'string' ? item : item.name}</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

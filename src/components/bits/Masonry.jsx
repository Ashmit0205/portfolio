import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Masonry({
  items = [],
  columns = 3,
  gap = 20,
  className = '',
  renderItem
}) {
  const [columnCount, setColumnCount] = useState(columns);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumnCount(1);
      else if (window.innerWidth < 1024) setColumnCount(Math.min(2, columns));
      else setColumnCount(columns);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Distribute items across columns
  const columnData = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);
    items.forEach((item, index) => {
      cols[index % columnCount].push({ item, index });
    });
    return cols;
  }, [items, columnCount]);

  return (
    <div
      className={`masonry-grid ${className}`}
      style={{
        display: 'flex',
        gap: `${gap}px`,
        width: '100%',
        alignItems: 'flex-start'
      }}
    >
      {columnData.map((col, colIdx) => (
        <div
          key={colIdx}
          className="masonry-column"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${gap}px`,
            flex: 1
          }}
        >
          {col.map(({ item, index }) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: (index * 0.06),
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {renderItem ? renderItem(item, index) : item}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

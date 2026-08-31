import { motion } from 'framer-motion';
import TiltedCard from '../bits/TiltedCard';

export default function HeroSticker() {
  return (
    <div
      className="hero-sticker-container"
      style={{
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <TiltedCard
        maxTilt={14}
        scaleOnHover={1.04}
        glareOpacity={0}
        showSpotlight={false}
        className="hero-sticker-tilted"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          boxShadow: 'none'
        }}
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1.2, 0, -1.2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Ambient Backdrop Glow */}
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 75%)',
              filter: 'blur(35px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          {/* Hacker Sticker Graphic */}
          <img
            src="/hero-sticker.png"
            alt="Cyber Systems Hacker Sticker"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '430px',
              objectFit: 'contain',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 30px rgba(6, 182, 212, 0.25))',
              userSelect: 'none',
              pointerEvents: 'auto'
            }}
            draggable={false}
          />
        </motion.div>
      </TiltedCard>
    </div>
  );
}

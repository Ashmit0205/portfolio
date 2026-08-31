import { ArrowUp } from 'lucide-react';
import Magnet from '../bits/Magnet';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Noise / Subtle Schematic Grid Background */}
      <div
        className="footer-grid-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />

      <div className="container footer-content" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <p style={{ margin: 0, fontWeight: 600 }}>© 2026 Ashmit Gupta. Engineered for practical systems.</p>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#64748b' }}>
            LATENCY: 0.12ms • UTF-8 • SYS_OK
          </span>
        </div>

        <Magnet padding={30} magnetStrength={3}>
          <a href="#home" className="back-to-top" id="back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </a>
        </Magnet>
      </div>
    </footer>
  );
}

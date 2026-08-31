import { motion } from 'framer-motion';
import { Eye, Layout, Database, Cpu, Hammer, GitBranch, Zap } from 'lucide-react';
import BlurText from '../bits/BlurText';
import SpotlightCard from '../bits/SpotlightCard';
import Magnet from '../bits/Magnet';

const PILLARS = [
  { icon: <Hammer size={20} />, title: 'Pragmatic Builder', text: 'I value building working systems that solve tangible coordination problems rather than purely studying theoretical concepts.' },
  { icon: <GitBranch size={20} />, title: 'Technical Breadth', text: 'Eager to explore multiple layers of engineering—including system modeling, scripting, frontend layout, and APIs.' },
  { icon: <Zap size={20} />, title: 'Automation Mindset', text: 'Passionate about identifying manual bottlenecks and programming third-party interfaces to automate repetitive workflows.' },
];

export default function About() {
  return (
    <section className="about section container" id="about">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 01 :: ARCHITECTURE & EVOLUTION ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="My Story & Development Evolution" delay={80} animateBy="words" direction="top" />
        </h2>
        <p className="section-subtitle-description">
          From computer vision foundations to full-stack systems and automated API workflows.
        </p>
        <div className="section-header-divider" />
      </div>

      <div className="about-grid">
        <SpotlightCard
          className="about-info"
          spotlightColor="rgba(99, 102, 241, 0.18)"
          borderColor="rgba(168, 85, 247, 0.5)"
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            <BlurText text="The Development Evolution" delay={50} animateBy="words" />
          </h3>
          <p>
            My interest in engineering began with experimenting with computer vision and deep learning, building <strong>Real-Time Object Detection using YOLO</strong> with OpenCV and PyTorch. Building on deep neural architectures, I developed <strong>Deep Learning Based Music Source Separation (MUSIX)</strong>, integrating the HTDemucs model for AI-powered vocal isolation and karaoke generation.
          </p>
          <p>
            From machine learning pipelines, I expanded into Web3 decentralized platforms, building <strong>DecentWork – Decentralized Freelancing Platform</strong> with Ethereum smart contracts for trustless escrow-based payments with MetaMask and Ethers.js. I also engineered the official <strong>Phoenix Club Website</strong> using React.js, Vite, and Tailwind CSS with responsive client-side routing.
          </p>
          <p>
            In addition to full-stack and blockchain engineering, I designed physical computing systems with the <strong>Warehouse Inventory Management Robot</strong> (ESP32 / embedded C++), and engineered the <strong>Spotify Voice Assistant & Playlist Migration System</strong> combining wake-word NLP playback control with cross-platform AppleScript migration.
          </p>
          <div className="journey-summary-badges">
            {[
              { icon: <Eye size={14} />, label: 'CV & ML' },
              { icon: <Layout size={14} />, label: 'App Design' },
              { icon: <Database size={14} />, label: 'System Logic' },
              { icon: <Cpu size={14} />, label: 'API Automation' },
            ].map((b) => (
              <Magnet key={b.label} padding={30} magnetStrength={3}>
                <div className="summary-badge">
                  {b.icon} {b.label}
                </div>
              </Magnet>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="about-core"
          spotlightColor="rgba(6, 182, 212, 0.18)"
          borderColor="rgba(99, 102, 241, 0.5)"
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            <BlurText text="Core Engineering Pillars" delay={50} animateBy="words" />
          </h3>
          <div className="core-pillars-list">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                className="pillar-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.1, duration: 0.5 }}
              >
                <div className="pillar-icon">{p.icon}</div>
                <div className="pillar-text">
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

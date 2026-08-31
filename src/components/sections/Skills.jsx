import { useState } from 'react';
import { Cpu, Code, Eye, FileCode, ShieldCheck, Terminal, Layers, Database, Globe, Lock, Workflow, Server } from 'lucide-react';
import AnimatedList from '../bits/AnimatedList';
import LogoLoop from '../bits/LogoLoop';
import SpotlightCard from '../bits/SpotlightCard';
import BlurText from '../bits/BlurText';

const TECH_STACK = [
  { name: 'Python', icon: '🐍', color: '#38bdf8' },
  { name: 'PyTorch', icon: '🔥', color: '#ef4444' },
  { name: 'YOLO', icon: '🎯', color: '#f59e0b' },
  { name: 'OpenCV', icon: '👁️', color: '#ec4899' },
  { name: 'ESP32 / Embedded', icon: '🤖', color: '#10b981' },
  { name: 'C / C++', icon: '⚡', color: '#6366f1' },
  { name: 'React.js', icon: '⚛️', color: '#06b6d4' },
  { name: 'Tailwind CSS', icon: '🎨', color: '#38bdf8' },
  { name: 'Solidity / Web3', icon: '💎', color: '#6366f1' },
  { name: 'Ethereum', icon: '⟠', color: '#a855f7' },
  { name: 'Vite', icon: '⚡', color: '#eab308' },
  { name: 'Streamlit', icon: '👑', color: '#ff4b4b' },
  { name: 'FFmpeg', icon: '🎬', color: '#10b981' },
  { name: 'JavaScript', icon: '⚡', color: '#f59e0b' },
  { name: 'Git & GitHub', icon: '🐙', color: '#f43f5e' }
];

const SKILL_CATEGORIES = [
  {
    id: 'cv',
    icon: <Eye size={20} />,
    title: 'Machine Learning & CV',
    color: '#ec4899',
    skills: [
      { name: 'Real-Time YOLO Object Detection Pipeline', level: 'Advanced' },
      { name: 'Music Source Separation & Stems (HTDemucs)', level: 'Advanced' },
      { name: 'PyTorch Deep Learning & Neural Inference', level: 'Advanced' },
      { name: 'Computer Vision & Preprocessing (OpenCV)', level: 'Advanced' },
      { name: 'Interactive Streamlit Application Development', level: 'Advanced' },
      { name: 'FFmpeg Audio Processing & Optimization', level: 'Proficient' },
      { name: 'Data Manipulation (NumPy & Pandas)', level: 'Advanced' },
      { name: 'Supervised Learning & Model Evaluation', level: 'Proficient' }
    ]
  },
  {
    id: 'web',
    icon: <Code size={20} />,
    title: 'Web & Systems Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React.js & Vite (Hooks, SPAs, Fast HMR)', level: 'Advanced' },
      { name: 'Tailwind CSS & Glassmorphic Design Systems', level: 'Advanced' },
      { name: 'Client-Side Routing (React Router 6)', level: 'Advanced' },
      { name: 'MetaMask & Ethers.js Web3 Integration', level: 'Advanced' },
      { name: 'Solidity Smart Contracts & Hardhat Testing', level: 'Proficient' },
      { name: 'Vanilla JavaScript (ES6+ Closures, Async/Await)', level: 'Advanced' },
      { name: 'Responsive Mobile-First Architecture', level: 'Advanced' }
    ]
  },
  {
    id: 'api',
    icon: <Cpu size={20} />,
    title: 'APIs & Automation',
    color: '#6366f1',
    skills: [
      { name: 'Spotify Web API & Spotipy Integration', level: 'Advanced' },
      { name: 'SpeechRecognition & Voice Command NLP', level: 'Advanced' },
      { name: 'AppleScript macOS System Automation', level: 'Advanced' },
      { name: 'OAuth 2.0 PKCE Authorization & Tokens', level: 'Advanced' },
      { name: 'REST API Architecture & Metadata Extraction', level: 'Advanced' },
      { name: 'Rate Limiting, Pagination & Retry Logic', level: 'Proficient' },
      { name: 'Cross-Platform Data Migration Pipelines', level: 'Advanced' }
    ]
  },
  {
    id: 'se',
    icon: <FileCode size={20} />,
    title: 'Software & Embedded Systems',
    color: '#a855f7',
    skills: [
      { name: 'Embedded C/C++ Firmware (ESP32 / Arduino)', level: 'Advanced' },
      { name: 'Sensor-based Automation & Motor Control', level: 'Advanced' },
      { name: 'Object-Oriented Programming (OOP) in C++', level: 'Advanced' },
      { name: 'UML System Modeling & Class Diagrams', level: 'Proficient' },
      { name: 'Entity Association & State Machine Patterns', level: 'Advanced' },
      { name: 'Design Patterns (Factory, Singleton, Observer)', level: 'Proficient' }
    ]
  },
  {
    id: 'sec',
    icon: <ShieldCheck size={20} />,
    title: 'Cybersecurity & Forensics',
    color: '#10b981',
    skills: [
      { name: 'Digital Forensic Investigation Protocols', level: 'Academic' },
      { name: 'Chain of Custody & Evidence Preservation', level: 'Academic' },
      { name: 'Data Recovery & Hex Stream Analysis', level: 'Academic' },
      { name: 'Cyber Crime Laws & IT Security Frameworks', level: 'Academic' }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0]);

  return (
    <section className="skills section container" id="skills">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 03 :: TECHNICAL KNOWLEDGE & LANGUAGES ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="Technical Knowledge & Skills" delay={70} animateBy="words" />
        </h2>
        <p className="section-subtitle-description">
          A clean breakdown of concepts and tools I have actively applied in production and academic environments.
        </p>
        <div className="section-header-divider" />
      </div>

      {/* React Bits: Logo Loop Infinite Tech Stack Marquee */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h4 style={{ textAlign: 'center', fontSize: '0.85rem', fontFamily: 'JetBrains Mono', color: '#94a3b8', marginBottom: '1rem', letterSpacing: '1px' }}>
          {'> CORE TECH STACK TICKER:'}
        </h4>
        <LogoLoop items={TECH_STACK} speed={25} gap={24} pauseOnHover={true} />
      </div>

      {/* Interactive Category Selector & Animated List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '2rem', alignItems: 'start' }}>
        {/* Category Navigation Stack */}
        <SpotlightCard
          spotlightColor="rgba(99, 102, 241, 0.15)"
          borderColor="rgba(168, 85, 247, 0.4)"
          style={{ padding: '1.5rem', borderRadius: '14px' }}
        >
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Domain Categories
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = activeCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: `1.5px solid ${isSelected ? cat.color : 'var(--glass-border)'}`,
                    background: isSelected ? `${cat.color}22` : 'var(--tag-bg, rgba(255,255,255,0.02))',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  <span style={{ fontWeight: isSelected ? 700 : 500, fontSize: '0.92rem' }}>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </SpotlightCard>

        {/* React Bits: Animated List for Selected Domain Skills */}
        <SpotlightCard
          spotlightColor="rgba(6, 182, 212, 0.15)"
          borderColor="rgba(99, 102, 241, 0.4)"
          style={{ padding: '2rem', borderRadius: '14px', minHeight: '380px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
            <span style={{ color: activeCategory.color }}>{activeCategory.icon}</span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              {activeCategory.title}
            </h3>
          </div>

          <AnimatedList
            items={activeCategory.skills}
            maxHeight="320px"
            renderItem={(item) => (
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  background: 'var(--subcard-bg, rgba(14, 20, 32, 0.7))',
                  border: '1px solid var(--subcard-border, rgba(255, 255, 255, 0.08))',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
                  {item.name}
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '20px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(99, 102, 241, 0.3)'
                  }}
                >
                  {item.level}
                </span>
              </div>
            )}
          />
        </SpotlightCard>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import ScrollStack from '../bits/ScrollStack';
import SpotlightCard from '../bits/SpotlightCard';
import TiltedCard from '../bits/TiltedCard';
import Masonry from '../bits/Masonry';
import Magnet from '../bits/Magnet';
import BlurText from '../bits/BlurText';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const PROJECTS = [
  {
    id: 'yolo-detection',
    num: '01',
    category: 'COMPUTER VISION / DEEP LEARNING',
    title: 'Real-Time Object Detection using YOLO',
    era: '2024',
    summary: 'Developed a computer vision application by integrating a pre-trained YOLO model for real-time object detection in images and videos. Built an inference pipeline using OpenCV, performed image preprocessing, optimized detection performance, and visualized detected objects with confidence scores.',
    githubUrl: 'https://github.com/Ashmit0205',
    demoUrl: 'https://github.com/Ashmit0205',
    schematic: {
      title: 'YOLO INFERENCE PIPELINE SCHEMATIC:',
      code: '[ Input Media / Video Stream ] ──► [ OpenCV Preprocessing ] ──► [ YOLO Model Inference ] ──► [ NMS & Confidence Filter ] ──► [ Annotated Visual Overlay ]'
    },
    masonryMedia: [
      { id: 1, title: 'Inference Pipeline', desc: 'Real-time frame ingestion and preprocessing using OpenCV with low-latency PyTorch execution' },
      { id: 2, title: 'Preprocessing & Normalization', desc: 'Color space conversion, aspect-ratio letterboxing, and batch tensor normalization' },
      { id: 3, title: 'Performance Optimization', desc: 'Confidence thresholding and Non-Maximum Suppression (NMS) for high FPS throughput' },
      { id: 4, title: 'Visual Annotation Engine', desc: 'Dynamic rendering of categorized bounding boxes with real-time confidence scores' }
    ],
    cols: [
      { h: 'Problem', p: 'Accurately detecting and classifying multiple objects across images and live video feeds in real time with high computational efficiency and minimal latency.' },
      { h: 'Approach', p: 'Integrated a pre-trained YOLO architecture with a custom inference pipeline in OpenCV to streamline image preprocessing, forward pass execution, and post-processing.' },
      { h: 'Implementation', p: 'Built an end-to-end computer vision application in Python and PyTorch that processes frames, executes YOLO model inference, optimizes detection speed, and plots labeled bounding boxes.' },
      { h: 'Technical Challenges', p: 'Balancing inference accuracy and framerate on live video streams; eliminating redundant candidate boxes via NMS; handling varied lighting and object scales.' },
      { h: 'Technologies', p: 'Python • PyTorch • YOLO • OpenCV • NumPy • Git' },
      { h: 'Outcome', p: 'A fast, accurate real-time object detection pipeline that delivers visual object classification and confidence metrics across diverse video inputs.' }
    ]
  },
  {
    id: 'musix',
    num: '02',
    category: 'AUDIO AI / DEEP LEARNING',
    title: 'Deep Learning Based Music Source Separation (MUSIX)',
    era: '2025',
    summary: 'Developed an AI-powered karaoke generation application by integrating the pre-trained HTDemucs model for music source separation. Built an end-to-end audio processing pipeline including audio downloading, preprocessing, vocal separation, instrumental reconstruction, and efficient file management with an interactive Streamlit interface.',
    githubUrl: 'https://github.com/Ashmit0205/MUSIX',
    demoUrl: 'https://github.com/Ashmit0205/MUSIX',
    schematic: {
      title: 'AUDIO SEPARATION & STEM RECONSTRUCTION:',
      code: '[ Raw Audio Ingestion ] ──► [ FFmpeg Standardization ] ──► [ HTDemucs Deep Net ] ──► [ Stem Isolation (Vocals / Inst) ] ──► [ Streamlit Playback & Export ]'
    },
    masonryMedia: [
      { id: 1, title: 'HTDemucs Separation Engine', desc: 'Hybrid Transformer deep neural network separating vocals and multiple backing tracks' },
      { id: 2, title: 'FFmpeg Audio Processing', desc: 'Automated sample rate standardization, format conversion, and waveform chunking' },
      { id: 3, title: 'Interactive Streamlit UI', desc: 'Responsive web interface for audio upload, real-time waveform preview, and stem management' },
      { id: 4, title: 'Karaoke & Stem Generator', desc: 'Lossless instrumental reconstruction and isolated vocal extraction with efficient caching' }
    ],
    cols: [
      { h: 'Problem', p: 'Separating overlapping acoustic frequencies in polyphonic music to extract clean vocal tracks and generate high-fidelity karaoke backing tracks.' },
      { h: 'Approach', p: 'Integrated the state-of-the-art pre-trained HTDemucs (Hybrid Transformer Demucs) model into an automated audio pipeline with an interactive Streamlit UI.' },
      { h: 'Implementation', p: 'Developed a complete processing architecture including audio downloading, format normalization with FFmpeg, deep neural source separation, stem recombination, and dynamic file management.' },
      { h: 'Technical Challenges', p: 'Preventing phase cancellation and audio bleeding between stems; managing heavy memory usage during deep model inference; streamlining multi-track I/O.' },
      { h: 'Technologies', p: 'Python • PyTorch • HTDemucs • Streamlit • FFmpeg • NumPy • Pandas • Git' },
      { h: 'Outcome', p: 'Delivered an interactive AI-powered karaoke generation and stem isolation web application producing studio-quality isolated vocals and backing tracks.' }
    ]
  },
  {
    id: 'inventory-robot',
    num: '03',
    category: 'EMBEDDED SYSTEMS / ROBOTIC AUTOMATION',
    title: 'Warehouse Inventory Management Robot',
    era: '2025',
    summary: 'An automated color-following robotic system designed to improve the efficiency of inventory transportation within a warehouse. Each product type is assigned a fixed color corresponding to a designated path, where an ESP32 microcontroller processes color sensor inputs and drives DC geared motors for autonomous routing.',
    githubUrl: 'https://github.com/Ashmit0205',
    demoUrl: 'https://github.com/Ashmit0205',
    schematic: {
      title: 'EMBEDDED SENSOR-TO-ACTUATOR CONTROL LOOP:',
      code: '[ Product Color Target ] ──► [ Color Sensor Input ] ──► [ ESP32 Microcontroller (C/C++) ] ──► [ Motor Driver Control ] ──► [ DC Geared Motors Path Navigation ]'
    },
    masonryMedia: [
      { id: 1, title: 'ESP32 Control Firmware', desc: 'Low-latency embedded C/C++ control logic for real-time sensor polling, threshold calibration, and motor PWM actuation' },
      { id: 2, title: 'Color-Based Path Navigation', desc: 'Optical color sensor discrimination mapping product categories to designated delivery destinations' },
      { id: 3, title: 'Motor Driver & Actuation', desc: 'Dual-channel motor driver interfacing high-torque DC geared motors on an Arduino-compatible robotic chassis' },
      { id: 4, title: 'Power & Circuitry Architecture', desc: 'Dedicated rechargeable battery power distribution with regulated sensor and motor isolation rails' }
    ],
    cols: [
      { h: 'Problem', p: 'Manual warehouse inventory transportation is labor-intensive, time-consuming, and prone to routing errors during peak distribution.' },
      { h: 'Approach', p: 'Designed an automated color-following robotic vehicle where distinct product types correspond to specific color-coded destination tracks.' },
      { h: 'Implementation', p: 'Engineered embedded C/C++ firmware on an ESP32 microcontroller within the Arduino IDE to ingest color sensor inputs, execute differential steering algorithms, and command motor drivers for precise trajectory tracking.' },
      { h: 'Technical Challenges', p: 'Calibrating optical color sensor sensitivity across varying ambient warehouse lighting conditions; optimizing motor driver PWM feedback loops to prevent overshoot.' },
      { h: 'Technologies', p: 'ESP32 • C/C++ • Color Sensor • Motor Driver • DC Geared Motors • Sensor Automation • Arduino IDE' },
      { h: 'Outcome', p: 'Successfully built and tested an autonomous warehouse transport robot that reduces manual intervention and streamlines item routing.' }
    ]
  },
  {
    id: 'decentwork',
    num: '04',
    category: 'WEB3 & BLOCKCHAIN PLATFORMS',
    title: 'DecentWork – Decentralized Freelancing Platform',
    era: '2026',
    summary: 'Built a decentralized freelancing platform using Ethereum smart contracts for secure escrow-based payments between clients and freelancers. Developed a responsive React.js frontend with Tailwind CSS, integrated MetaMask authentication using Ethers.js, implemented job posting, milestone management, escrow fund locking, transaction approval, and automated payment release through blockchain smart contracts.',
    githubUrl: 'https://github.com/poorvirastogi/freelancing_platform',
    demoUrl: 'https://github.com/poorvirastogi/freelancing_platform',
    schematic: {
      title: 'SMART CONTRACT ESCROW & STATE WORKFLOW:',
      code: '[ Client Job Creation ] ──► [ Escrow Fund Lock (Solidity) ] ──► [ Milestone Submission ] ──► [ Client Approval ] ──► [ Automated ETH Release ]'
    },
    masonryMedia: [
      { id: 1, title: 'Solidity Escrow Contracts', desc: 'Secure Ethereum smart contracts for trustless milestone escrow, fund locking, and automated payout execution' },
      { id: 2, title: 'MetaMask & Ethers.js', desc: 'Seamless Web3 wallet authentication, transaction signing, and contract event listener bindings' },
      { id: 3, title: 'Milestone & Job Management', desc: 'Interactive dashboard for clients and freelancers to negotiate deliverables, track stages, and verify tasks' },
      { id: 4, title: 'Tailwind Glassmorphic UI', desc: 'Modern responsive interface built with React.js and Tailwind CSS featuring real-time blockchain status feeds' }
    ],
    cols: [
      { h: 'Problem', p: 'Traditional freelance marketplaces impose high platform commissions, delayed payment clearing, and centralized custody risks on worker earnings.' },
      { h: 'Approach', p: 'Architected a decentralized Web3 platform using Ethereum smart contracts for non-custodial escrow fund locking, automated release, and transparent milestone tracking.' },
      { h: 'Implementation', p: 'Built a responsive React.js frontend with Tailwind CSS, connected MetaMask authentication via Ethers.js, and programmed Solidity contracts for job posting, milestone management, fund locking, transaction approval, and automated releases.' },
      { h: 'Technical Challenges', p: 'Securing smart contract escrow logic against reentrancy; optimizing gas consumption on contract calls; managing asynchronous Web3 wallet state and chain network switches.' },
      { h: 'Technologies', p: 'React.js • Tailwind CSS • JavaScript (ES6) • Solidity • Ethereum • Ethers.js • Hardhat • MetaMask' },
      { h: 'Outcome', p: 'Delivered a functional decentralized freelancing platform ensuring verified payment security, zero third-party escrow risks, and automated milestone settlements.' }
    ]
  },
  {
    id: 'phoenix',
    num: '05',
    category: 'FRONTEND ENGINEERING / WEB ARCHITECTURE',
    title: 'Phoenix Club Website',
    era: '2026',
    summary: 'Developed the official Phoenix Club website using React.js, Vite, and Tailwind CSS. Built reusable UI components, implemented client-side routing using React Router, designed responsive layouts, and optimized application performance across desktop and mobile platforms.',
    githubUrl: 'https://github.com/Ashmit0205/phoenix-club',
    demoUrl: 'https://github.com/Ashmit0205/phoenix-club',
    schematic: {
      title: 'VITE SPA & CLIENT ROUTING ARCHITECTURE:',
      code: '[ Vite Bundler / HMR ] ──► [ React Router Engine ] ──► [ Reusable Component Library ] ──► [ Tailwind Responsive Grid ] ──► [ Optimized Production SPA ]'
    },
    masonryMedia: [
      { id: 1, title: 'Modular UI Component Library', desc: 'Reusable, accessible UI components styled with Tailwind CSS for consistent club branding' },
      { id: 2, title: 'Client-Side Routing', desc: 'Smooth single-page routing and animated page transitions powered by React Router' },
      { id: 3, title: 'Responsive Layout Design', desc: 'Mobile-first fluid layouts engineered for seamless cross-platform rendering on phones, tablets, and desktops' },
      { id: 4, title: 'Vite Performance Optimization', desc: 'Lightning-fast asset bundling, lazy-loading, and optimized production bundle chunking' }
    ],
    cols: [
      { h: 'Problem', p: 'The Phoenix Club needed a modern, responsive, and easily maintainable web presence to broadcast updates, showcase events, and connect active members.' },
      { h: 'Approach', p: 'Engineered a modern Single Page Application (SPA) using React.js, Vite, React Router, and Tailwind CSS for rapid navigation, performance, and clean aesthetics.' },
      { h: 'Implementation', p: 'Developed reusable UI component systems, integrated client-side routes, structured responsive view layouts, and tuned build performance across devices.' },
      { h: 'Technical Challenges', p: 'Ensuring cross-browser responsive layout consistency; fine-tuning route transitions without UI flashes; optimizing asset delivery for fast load times.' },
      { h: 'Technologies', p: 'React.js • Vite • Tailwind CSS • JavaScript (ES6) • HTML5 • CSS3 • React Router • Git' },
      { h: 'Outcome', p: 'Deployed a responsive, high-performance club website that serves as an engaging and accessible digital portal for members and visitors.' }
    ]
  },
  {
    id: 'spotify-assistant',
    num: '06',
    category: 'VOICE AI & API AUTOMATION',
    title: 'Spotify Voice Assistant & Playlist Migration System',
    era: '2026',
    summary: 'Developed a voice-controlled music assistant supporting wake-word activation, speech recognition, natural language command parsing, and Spotify playback control using the Spotify Web API. Built a playlist migration tool that transfers Spotify playlists to Apple Music through metadata extraction, REST API integration, OAuth authentication, and AppleScript-based automation.',
    githubUrl: 'https://github.com/Ashmit0205',
    demoUrl: 'https://github.com/Ashmit0205',
    schematic: {
      title: 'VOICE PIPELINE & CROSS-PLATFORM MIGRATION FLOW:',
      code: '[ Wake-Word & Voice Input ] ──► [ SpeechRecognition & NLP ] ──► [ Spotify Web API / Spotipy ] ──► [ Playback Control ]\n                                                                           │ (Metadata Extraction)\n                                                                           ▼\n[ Apple Music Library ] ◄─── [ AppleScript Automation Engine ] ◄─── [ REST OAuth Token Broker ]'
    },
    masonryMedia: [
      { id: 1, title: 'Wake-Word & Voice Recognition', desc: 'Continuous background listening with wake-word detection and SpeechRecognition NLP intent extraction' },
      { id: 2, title: 'Spotify Web API & Spotipy', desc: 'OAuth 2.0 PKCE authentication and high-throughput REST client executing playback, search, and queue commands' },
      { id: 3, title: 'Cross-Platform Track Matcher', desc: 'Automated ISRC and fuzzy metadata matching pipeline mapping tracks from Spotify to Apple Music catalogs' },
      { id: 4, title: 'AppleScript Automation Engine', desc: 'Native macOS system scripts automating background playlist creation and direct library track ingestion' }
    ],
    cols: [
      { h: 'Problem', p: 'Controlling music playback hands-free on desktop environments is cumbersome, and migrating curated playlists from Spotify to Apple Music traditionally requires paid third-party tools.' },
      { h: 'Approach', p: 'Created an integrated Python audio automation suite combining wake-word voice command recognition with a programmatic Spotify-to-Apple Music migration pipeline via AppleScript.' },
      { h: 'Implementation', p: 'Built a voice processing engine using SpeechRecognition and Spotipy for Spotify playback. Developed an automated migration module that queries Spotify playlist tracks, parses catalog metadata, and invokes AppleScript to automate playlist construction in Apple Music.' },
      { h: 'Technical Challenges', p: 'Minimizing voice recognition latency and ambient noise filtering; handling Spotify API rate limiting and token refreshes; coordinating asynchronous AppleScript OS-level batch injections.' },
      { h: 'Technologies', p: 'Python • Spotify Web API • Spotipy • SpeechRecognition • OAuth 2.0 • REST APIs • AppleScript' },
      { h: 'Outcome', p: 'Delivered an all-in-one music automation system providing reliable hands-free voice playback control and seamless zero-cost playlist migration to Apple Music.' }
    ]
  }
];

function ProjectStackCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltedCard rotateAmplitude={6} scaleOnHover={1.01} showGlare={true} glareOpacity={0.15}>
      <SpotlightCard
        className="timeline-card"
        spotlightColor="rgba(99, 102, 241, 0.18)"
        borderColor="rgba(6, 182, 212, 0.5)"
        style={{
          borderRadius: '16px',
          padding: '2rem'
        }}
      >
        <div className="timeline-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                background: 'rgba(6, 182, 212, 0.12)',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px'
              }}
            >
              #{project.num}
            </span>
            <span className="timeline-card-category">{project.category}</span>
          </div>
          <span className="timeline-card-era">{project.era}</span>
        </div>

        <h3 className="timeline-card-title" style={{ fontSize: '1.65rem', margin: '0.4rem 0 0.75rem 0' }}>
          {project.title}
        </h3>

        <p className="timeline-card-summary" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
          {project.summary}
        </p>

        {/* Expandable Case Study Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="timeline-case-study-details active"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              {project.schematic && (
                <div className="ascii-schematic-box" style={{ marginTop: '1.25rem' }}>
                  <span className="ascii-schematic-title">{project.schematic.title}</span>
                  <pre><code>{project.schematic.code}</code></pre>
                </div>
              )}

              {/* React Bits: Masonry layout for Architecture & Sub-module visual blocks */}
              {project.masonryMedia && (
                <div style={{ margin: '1.25rem 0' }}>
                  <h4 style={{ fontSize: '0.82rem', fontFamily: 'JetBrains Mono', color: 'var(--accent-primary)', marginBottom: '0.65rem', letterSpacing: '1px' }}>
                    {'> ARCHITECTURE & SUB-MODULES:'}
                  </h4>
                  <Masonry
                    items={project.masonryMedia}
                    columns={2}
                    gap={14}
                    renderItem={(m) => (
                      <div className="project-submodule-card">
                        <h5>
                          {m.title}
                        </h5>
                        <p>
                          {m.desc}
                        </p>
                      </div>
                    )}
                  />
                </div>
              )}

              <div className="case-study-grid" style={{ marginTop: '1rem' }}>
                {project.cols.map((col) => (
                  <div key={col.h} className="case-col">
                    <h4>{col.h}</h4>
                    <p>{col.p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="timeline-card-footer" style={{ marginTop: '1.5rem', paddingTop: '1.25rem' }}>
          <Magnet padding={25} magnetStrength={3}>
            <button
              className="btn-toggle-details"
              onClick={() => setExpanded((e) => !e)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                background: 'transparent',
                border: 'none'
              }}
            >
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={16} />
              </motion.span>
              <span>{expanded ? 'Hide Case Study' : 'View Deep Case Study'}</span>
            </button>
          </Magnet>

          <div className="timeline-links">
            <Magnet padding={20} magnetStrength={3}>
              <a
                href={project.githubUrl || 'https://github.com/Ashmit0205'}
                target="_blank"
                rel="noreferrer"
                className="timeline-link"
                aria-label={`View code for ${project.title}`}
              >
                <GithubIcon /> <span>Code</span>
              </a>
            </Magnet>
            <Magnet padding={20} magnetStrength={3}>
              <a
                href={project.demoUrl || project.githubUrl || 'https://github.com/Ashmit0205'}
                target="_blank"
                rel="noreferrer"
                className="timeline-link"
                aria-label={`View project details for ${project.title}`}
              >
                <ExternalLink size={14} /> <span>Repo / Live</span>
              </a>
            </Magnet>
          </div>
        </div>
      </SpotlightCard>
    </TiltedCard>
  );
}

export default function Journey() {
  return (
    <section className="journey section container" id="journey">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 02 :: CHRONOLOGICAL EXECUTION TIMELINE ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="Development Journey & Projects" delay={70} animateBy="words" />
        </h2>
        <p className="section-subtitle-description">
          Follow the progression of my technical capability, moving from academic computer vision experiments to full API orchestration platforms.
        </p>
        <div className="section-header-divider" />
      </div>

      {/* React Bits: Scroll Stack for Sticky Stacking Project Cards */}
      <div style={{ marginTop: '1rem' }}>
        <ScrollStack topOffset={110} itemStackDistance={28} scaleRatio={0.025}>
          {PROJECTS.map((project) => (
            <ProjectStackCard key={project.id} project={project} />
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}

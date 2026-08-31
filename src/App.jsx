import { useState, useEffect } from 'react';

// UI Primitives & React Bits
import TargetCursor from './components/bits/TargetCursor';
import WebThreads from './components/bits/WebThreads';
import ScrollProgress from './components/ui/ScrollProgress';
import AmbientCanvas from './components/ui/AmbientCanvas';
import BackgroundBlobs from './components/ui/BackgroundBlobs';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Skills from './components/sections/Skills';
import Credentials from './components/sections/Credentials';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      {/* React Bits: Target Crosshair Cursor */}
      <TargetCursor
        cursorColor={theme === 'dark' ? '#6366f1' : '#4f46e5'}
        activeColor="#06b6d4"
      />

      {/* React Bits: WebThreads Full-page Dynamic Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          pointerEvents: 'none',
          opacity: theme === 'light' ? 0.5 : 0.65
        }}
      >
        <WebThreads
          color1={theme === 'light' ? '#4f46e5' : '#6366f1'}
          color2={theme === 'light' ? '#059669' : '#10b981'}
          color3="#38bdf8"
          backgroundColor={theme === 'light' ? '#f8fafc' : '#05070b'}
          lightMode={theme === 'light'}
          speed={0.18}
          threadCount={6}
          frequency={4.0}
          spread={0.18}
          taper={1.0}
          position={0.5}
          fanMode="center"
          glow={0.012}
          falloff={0.78}
          thickness={0.85}
          brightness={0.38}
          opacity={0.8}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.03}
          mouseInteraction={true}
          mouseStrength={0.2}
        />
      </div>
      <ScrollProgress />
      <AmbientCanvas />
      <BackgroundBlobs />

      {/* Layout */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} />
        <About />
        <Journey />
        <Skills />
        <Credentials />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

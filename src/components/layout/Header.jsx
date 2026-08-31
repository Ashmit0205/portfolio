import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnet from '../bits/Magnet';
import PullCord from '../ui/PullCord';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#education', label: 'Education' },
];

export default function Header({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navMenuRef = useRef(null);
  const linkRefs = useRef({});

  // Active section tracking
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((sec) => {
        if (window.scrollY + 140 >= sec.offsetTop) current = sec.getAttribute('id');
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pill position
  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    const menu = navMenuRef.current;
    if (activeLink && menu) {
      const menuRect = menu.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPillStyle({ left: linkRect.left - menuRect.left, width: linkRect.width, opacity: 1 });
    }
  }, [activeSection]);

  const handlePillHover = (href) => {
    const id = href.replace('#', '');
    const link = linkRefs.current[id];
    const menu = navMenuRef.current;
    if (link && menu) {
      const menuRect = menu.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setPillStyle({ left: linkRect.left - menuRect.left, width: linkRect.width, opacity: 1 });
    }
  };

  const handleMenuLeave = () => {
    const activeLink = linkRefs.current[activeSection];
    const menu = navMenuRef.current;
    if (activeLink && menu) {
      const menuRect = menu.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPillStyle({ left: linkRect.left - menuRect.left, width: linkRect.width, opacity: 1 });
    } else {
      setPillStyle((s) => ({ ...s, opacity: 0 }));
    }
  };

  return (
    <header className="header glass-pill-header">
      <nav className="nav container">
        <Magnet padding={40} magnetStrength={3}>
          <a
            href="#"
            className="logo"
            id="nav-logo"
            aria-label="Ashmit Gupta Home"
            style={{
              color: theme === 'light' ? '#000000' : '#ffffff',
              textDecoration: 'none'
            }}
          >
            <span className="ascii-bracket">&lt;</span>
            <span
              style={{
                color: theme === 'light' ? '#000000' : '#ffffff',
                fontWeight: 800
              }}
            >
              Ashmit Gupta
            </span>
            <span className="ascii-bracket">/&gt;</span>
          </a>
        </Magnet>

        <ul className="nav-menu glass-pill-nav" id="nav-menu" ref={navMenuRef} onMouseLeave={handleMenuLeave}>
          {/* Floating spring indicator pill */}
          <motion.div
            className="nav-indicator-pill"
            animate={{ left: pillStyle.left, width: pillStyle.width, opacity: pillStyle.opacity }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <Magnet padding={20} magnetStrength={4}>
                  <a
                    href={href}
                    className={`nav-link${activeSection === id ? ' active' : ''}`}
                    ref={(el) => (linkRefs.current[id] = el)}
                    onMouseEnter={() => handlePillHover(href)}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </Magnet>
              </li>
            );
          })}
        </ul>

        {/* Mobile Slide-down Glass Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="mobile-drawer-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="mobile-drawer"
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <ul className="mobile-drawer-list">
                  {navLinks.map(({ href, label }, idx) => {
                    const id = href.replace('#', '');
                    const num = `0${idx + 1}`;
                    return (
                      <li key={href}>
                        <a
                          href={href}
                          className={`mobile-drawer-link${activeSection === id ? ' active' : ''}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="mobile-drawer-num">{num}</span>
                          <span className="mobile-drawer-label">{label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="mobile-drawer-cta">
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="nav-actions">
          {/* Pull The Cord Switch */}
          <PullCord theme={theme} toggleTheme={toggleTheme} />

          <Magnet padding={40} magnetStrength={3}>
            <a href="#contact" className="btn btn-secondary nav-cta" id="nav-cta-btn">Contact Me</a>
          </Magnet>

          {/* Dedicated Glassmorphic Mobile Burger Button */}
          <button
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

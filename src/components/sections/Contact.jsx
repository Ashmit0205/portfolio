import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import Magnet from '../bits/Magnet';
import GlareButton from '../bits/GlareButton';
import SpotlightCard from '../bits/SpotlightCard';
import BlurText from '../bits/BlurText';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback('');
    setTimeout(() => {
      setFeedback(`Thanks, ${form.name}! Your message has been sent successfully.`);
      setForm({ name: '', email: '', message: '' });
      setSending(false);
      setTimeout(() => setFeedback(''), 5000);
    }, 1000);
  };

  return (
    <section className="contact section container" id="contact">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 06 :: COMMUNICATION PROTOCOL ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="Get In Touch & Collaborate" delay={70} animateBy="words" />
        </h2>
        <p className="section-subtitle-description">
          Open to software engineering roles, automated systems architecture, and technical collaborations.
        </p>
        <div className="section-header-divider" />
      </div>

      <div className="contact-wrapper">
        <SpotlightCard
          className="contact-info-block"
          spotlightColor="rgba(99, 102, 241, 0.2)"
          borderColor="rgba(168, 85, 247, 0.4)"
        >
          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1rem' }}>
            Let's Engineer Together
          </h3>
          <p>
            Interested in discussing systems architecture, API automation pipelines, or looking to collaborate? Reach out via the channel or check my social coordinates.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail /> <span>ashmit0205@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <MapPin /> <span>Bangalore</span>
            </div>
          </div>
          <div className="social-links">
            {[
              { href: 'https://github.com/Ashmit0205', icon: <GithubIcon />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/ashmit-gupta-386560343/', icon: <LinkedinIcon />, label: 'LinkedIn' },
            ].map((s) => (
              <Magnet key={s.label} padding={30} magnetStrength={3}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              </Magnet>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="contact-form"
          spotlightColor="rgba(6, 182, 212, 0.2)"
          borderColor="rgba(99, 102, 241, 0.4)"
        >
          <form className="contact-form-el" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE PAYLOAD</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Let's build scalable systems and automated workflows..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* React Bits: Magnet + Glare Button */}
            <div style={{ marginTop: '0.5rem' }}>
              <GlareButton
                type="submit"
                disabled={sending}
                style={{ padding: '0.85rem 2rem', fontSize: '1rem', fontWeight: 700 }}
              >
                <span>{sending ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                <Send size={16} />
              </GlareButton>
            </div>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  className="form-feedback success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  {feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}

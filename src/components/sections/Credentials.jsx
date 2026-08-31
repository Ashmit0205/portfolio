import { Award, GraduationCap, CheckCircle2, Shield } from 'lucide-react';
import CardSwap from '../bits/CardSwap';
import SpotlightCard from '../bits/SpotlightCard';
import BlurText from '../bits/BlurText';

const CREDENTIAL_CARDS = [
  {
    id: 1,
    tag: 'GLOBAL CERTIFICATION',
    title: 'Nutanix Certification',
    issuer: 'Nutanix Cloud Platform',
    meta: 'Credential ID: [ADD CREDENTIAL ID]',
    icon: <Award size={24} color="#6366f1" />,
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
    desc: 'Demonstrated proficiency in hyperconverged infrastructure, enterprise cloud operations, and distributed storage systems.'
  },
  {
    id: 2,
    tag: 'MACHINE LEARNING SPECIALIZATION',
    title: 'Supervised Machine Learning Course',
    issuer: 'DeepLearning.AI / Coursera',
    meta: 'Linear Regression • Classification • Gradient Descent',
    icon: <CheckCircle2 size={24} color="#06b6d4" />,
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
    desc: 'Mastered mathematical algorithms for gradient descent, cost functions, regularized logistic regression, and model evaluation.'
  },
  {
    id: 3,
    tag: 'NATIONAL ACHIEVEMENT',
    title: 'JEE Advanced Qualified',
    issuer: 'National Testing Agency / IITs',
    meta: 'Top Engineering Entrance Examination in India',
    icon: <GraduationCap size={24} color="#ec4899" />,
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))',
    desc: 'Qualified the highly competitive JEE Advanced exam, proving strong analytical, mathematical, and abstract logical problem-solving abilities.'
  }
];

export default function Credentials() {
  return (
    <section className="credentials section container" id="credentials">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 04 :: CREDENTIALS & COMPETENCIES ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="Academic & Professional Credentials" delay={70} animateBy="words" />
        </h2>
        <p className="section-subtitle-description">
          Verified industry certifications, academic achievements, and problem-solving benchmarks.
        </p>
        <div className="section-header-divider" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
        {/* React Bits: Card Swap 3D Stacking Deck */}
        <div>
          <h3 className="credential-deck-title" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
            Interactive Credential Deck
          </h3>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1rem' }}>
            Click or watch the cards cycle through verified credentials
          </p>

          <CardSwap
            items={CREDENTIAL_CARDS}
            interval={4500}
            pauseOnHover={true}
            renderCard={(card, isTop) => (
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.25)"
                borderColor="rgba(168, 85, 247, 0.6)"
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: 'var(--card-shadow)',
                  minHeight: '220px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px'
                    }}
                  >
                    {card.tag}
                  </span>
                  <div>{card.icon}</div>
                </div>

                <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {card.title}
                </h4>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.65rem' }}>
                  {card.issuer}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {card.desc}
                </p>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>
                  {card.meta}
                </div>
              </SpotlightCard>
            )}
          />
        </div>

        {/* Credentials Details Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {CREDENTIAL_CARDS.map((card) => (
            <SpotlightCard
              key={card.id}
              spotlightColor="rgba(6, 182, 212, 0.15)"
              borderColor="rgba(99, 102, 241, 0.3)"
              style={{
                padding: '1.5rem',
                borderRadius: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    padding: '0.65rem',
                    borderRadius: '10px',
                    background: 'var(--tag-bg, rgba(255, 255, 255, 0.04))',
                    border: '1px solid var(--glass-border)'
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{card.title}</h4>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {card.issuer}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

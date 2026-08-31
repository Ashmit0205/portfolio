import { Layers, Package, Database, BarChart3 } from 'lucide-react';
import SpotlightCard from '../bits/SpotlightCard';
import BlurText from '../bits/BlurText';

const MODULES = [
  {
    icon: <Layers size={22} color="#6366f1" />,
    title: 'Data Structures & Algorithms (DSA)',
    intro: 'Core algorithmic thinking & memory efficiency:',
    bullets: [
      'Linear & Non-Linear Structures (Trees, Graphs, Queues)',
      'Sorting, Searching, & Divide-and-Conquer methods',
      'Dynamic Programming, Greedy Algorithms, & Recursion',
      'Time and Space Complexity Analysis (Big-O)'
    ]
  },
  {
    icon: <Package size={22} color="#a855f7" />,
    title: 'Object-Oriented Programming (OOPs)',
    intro: 'Modular, reusable, and scalable software design:',
    bullets: [
      'Encapsulation, Abstraction, Inheritance, & Polymorphism',
      'Class Modeling, Object Lifecycles, & Interfaces',
      'Design Patterns & SOLID Architecture Principles',
      'Exception Handling & Memory Management'
    ]
  },
  {
    icon: <Database size={22} color="#06b6d4" />,
    title: 'Database Management Systems (DBMS)',
    intro: 'Structured data storage, integrity, & retrieval:',
    bullets: [
      'Relational Data Modeling & ER Diagram Schema Design',
      'Complex SQL Queries, Joins, & Subquery Optimization',
      'Normalization (1NF–BCNF) & Integrity Constraints',
      'ACID Properties, Transactions, Indexing, & Concurrency'
    ]
  },
  {
    icon: <BarChart3 size={22} color="#10b981" />,
    title: 'Big Data Analytics',
    intro: 'Large-scale data processing & insights:',
    bullets: [
      'Distributed Storage & Computing Architectures',
      'ETL Pipelines, Data Ingestion, & Transformation',
      'MapReduce Framework Concepts & Large-Scale Processing',
      'Data Mining, Pattern Extraction, & Predictive Analytics'
    ]
  }
];

export default function Education() {
  return (
    <section className="education section container" id="education">
      <div className="section-header">
        <div className="section-ascii-tag">
          {'/* ─── 05 :: ACADEMIC MODULES ─── */'}
        </div>
        <h2 className="section-title">
          <BlurText text="Academic Study Modules" delay={70} animateBy="words" />
        </h2>
        <p className="section-subtitle-description">
          Core university-level computer science subjects completed, supporting my engineering and systems foundation.
        </p>
        <div className="section-header-divider" />
      </div>

      <div className="education-grid">
        {MODULES.map((mod, i) => (
          <SpotlightCard
            key={mod.title}
            className="edu-card"
            spotlightColor="rgba(168, 85, 247, 0.15)"
            borderColor="rgba(6, 182, 212, 0.4)"
            style={{ padding: '1.85rem', borderRadius: '14px' }}
          >
            <div className="edu-card-icon">{mod.icon}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.75rem 0' }}>{mod.title}</h3>
            <p className="edu-card-intro">{mod.intro}</p>
            <ul className="edu-bullets">
              {mod.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

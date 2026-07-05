import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Client info removed — described by domain only
const roles = [
  {
    period: 'Apr 2025 – Present',
    domain: 'Financial Services',
    tag: 'CURRENT',
    bullets: [
      'Refactored legacy enterprise React screens into modular, reusable components with custom hooks — improving code reuse by <b>25%</b> and reducing component complexity.',
      'Adopted <b>Zustand</b> for lightweight app-level state management, cutting Redux boilerplate and improving readability across large feature modules.',
      'Delivered a <b>20% reduction in initial page load time</b> through code splitting, lazy loading, and memoisation (React.memo, useMemo, useCallback).',
      'Maintained <b>80%+ test coverage</b> (Jest + RTL) and Cypress E2E suites, preventing regressions across 10+ sprints.',
      'Built pixel-accurate, responsive UIs from Figma designs with full <b>WCAG 2.1</b> accessibility compliance.',
      'Integrated <b>TypeScript</b> across new modules, improving type safety and eliminating runtime errors in production.',
      'Reduced lint errors by <b>40%</b> via ESLint + Prettier standardisation across the team codebase.',
      'Cut average PR review cycle time by <b>30%</b> through disciplined branching strategy and thorough peer reviews.',
    ],
  },
  {
    period: 'Feb 2022 – Mar 2025',
    domain: 'Telecom',
    tag: '3 YRS',
    bullets: [
      'Built and maintained high-performance Agent Portal UIs using <b>React.js and ES6+</b> with Context API for scalable state and React Router v6 for full client-side navigation.',
      'Integrated <b>RESTful APIs via Axios</b> with Lodash data transformation ensuring seamless frontend–backend communication.',
      'Built a library of reusable custom hooks encapsulating shared business logic — reducing duplicate code by <b>25%</b>.',
      'Boosted application performance by <b>35%</b> through code splitting, lazy loading, and memoisation, significantly cutting initial bundle size.',
      'Achieved <b>80%+ unit test coverage</b> using React Testing Library and Jest, catching defects early across sprints.',
      'Collaborated cross-functionally with designers, backend engineers, and PMs in Agile ceremonies, improving team delivery speed by <b>15%</b>.',
    ],
  },
]

function RoleBlock({ role, index }) {
  const { ref, controls } = useScrollReveal(0.1)
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1, ease: [0.22,1,0.36,1] } } }}
      style={{
        position: 'relative', paddingLeft: '36px',
        marginBottom: index < roles.length - 1 ? '60px' : 0,
      }}
    >
      {/* Timeline line */}
      {index < roles.length - 1 && (
        <div style={{
          position: 'absolute', left: '7px', top: '26px', bottom: '-36px', width: '1px',
          background: 'linear-gradient(to bottom, var(--accent), var(--border))',
        }} />
      )}
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={controls}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 } } }}
        style={{
          position: 'absolute', left: 0, top: '8px',
          width: '16px', height: '16px', borderRadius: '50%',
          background: 'var(--bg)',
          border: '2.5px solid var(--accent)',
          boxShadow: '0 0 12px rgba(79,142,247,0.5)',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
              {role.domain} Domain
            </h3>
            {role.tag === 'CURRENT' && (
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem', padding: '3px 9px',
                background: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.3)',
                borderRadius: '20px', color: 'var(--teal)', letterSpacing: '1px',
              }}>● CURRENT</span>
            )}
            {role.tag !== 'CURRENT' && (
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.65rem', padding: '3px 9px',
                background: 'var(--accent-glow)', border: '1px solid rgba(79,142,247,0.25)',
                borderRadius: '20px', color: 'var(--accent)', letterSpacing: '1px',
              }}>{role.tag}</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--mono)' }}>
            <Calendar size={12} /> {role.period}
          </div>
        </div>
      </div>

      {/* Bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {role.bullets.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={controls}
            variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 + 0.15 + i * 0.05, duration: 0.4 } } }}
            style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)', fontSize: '0.91rem', lineHeight: 1.72 }}
          >
            <ChevronRight size={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
            <span dangerouslySetInnerHTML={{ __html: b.replace(/<b>/g, '<strong style="color:var(--accent-2);font-weight:600">').replace(/<\/b>/g, '</strong>') }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="experience" style={{
      padding: 'clamp(80px,10vw,120px) clamp(24px,8vw,100px)',
      background: 'var(--bg)',
    }}>
      <SectionHeading
        tag="Work Experience"
        title="Where I've Built Things"
        subtitle="4+ years at TCS, delivering for enterprise clients across two industry verticals."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '14px',
          padding: '18px 24px', marginBottom: '56px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: '14px',
        }}
      >
        <div style={{
          width: '42px', height: '42px', borderRadius: '10px',
          background: 'var(--accent-glow)', border: '1px solid rgba(79,142,247,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)',
        }}>
          <Briefcase size={20} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>Tata Consultancy Services (TCS)</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '3px' }}>ReactJS Developer · Feb 2022 – Present</div>
        </div>
      </motion.div>

      <div>
        {roles.map((role, i) => <RoleBlock key={i} role={role} index={i} />)}
      </div>
    </section>
  )
}

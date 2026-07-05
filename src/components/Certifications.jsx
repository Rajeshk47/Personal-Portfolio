import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certs = [
  { icon: '⚛️', name: 'React – The Complete Guide', sub: 'Hooks, React Router, Redux', provider: 'Udemy', color: 'rgba(79,142,247,0.15)', border: 'rgba(79,142,247,0.3)' },
  { icon: '🟨', name: 'The Complete JavaScript Course 2023', sub: 'From Zero to Expert', provider: 'Udemy', color: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  { icon: '🎓', name: 'Bachelor of Technology', sub: 'Electrical & Electronics Engineering', provider: 'Sir CRR College of Engineering · 2020', color: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)' },
]

export default function Certifications() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="certifications" style={{
      padding: 'clamp(80px,10vw,120px) clamp(24px,8vw,100px)',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg) 100%)',
    }}>
      <SectionHeading
        tag="Education & Certifications"
        title="Learning &amp; Credentials"
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {certs.map((c, i) => (
          <motion.div
            key={i}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, y: 28, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] } } }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{
              background: 'var(--bg-card)', border: `1px solid ${c.border}`,
              borderRadius: '16px', padding: '28px',
              display: 'flex', gap: '18px', alignItems: 'flex-start',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'default',
            }}
          >
            <div style={{
              width: '52px', height: '52px', borderRadius: '12px', flexShrink: 0,
              background: c.color, border: `1px solid ${c.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
            }}>
              {c.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.35, marginBottom: '4px' }}>{c.name}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-2)', marginBottom: '6px' }}>{c.sub}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{c.provider}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

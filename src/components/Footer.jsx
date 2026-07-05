import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px clamp(24px,8vw,100px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
        © 2025 Rajesh Kokkiripati
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
        Built with <span style={{ color: 'var(--accent)' }}>React</span> + <span style={{ color: 'var(--purple)' }}>Framer Motion</span> · Hyderabad, India
      </span>
    </footer>
  )
}

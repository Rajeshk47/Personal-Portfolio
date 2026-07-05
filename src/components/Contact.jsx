import { motion } from 'framer-motion'
import { Mail, Phone, ExternalLink, GitBranch, Download, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

const links = [
  { icon: <Mail size={18} />, label: 'Email', val: 'rajesh.kokkiripati369@gmail.com', href: 'mailto:rajesh.kokkiripati369@gmail.com' },
  { icon: <Phone size={18} />, label: 'Phone', val: '+91 98853 12874', href: 'tel:+919885312874' },
  { icon: <ExternalLink size={18} />, label: 'LinkedIn', val: 'linkedin.com/in/rajesh-kokkiripati', href: 'https://linkedin.com/in/rajesh-kokkiripati' },
  { icon: <GitBranch size={18} />, label: 'GitHub', val: 'github.com/rajesh-kokkiripati', href: 'https://github.com/rajesh-kokkiripati' },
]

export default function Contact() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="contact" style={{
      padding: 'clamp(80px,10vw,120px) clamp(24px,8vw,100px)',
      background: 'var(--bg)',
    }}>
      <SectionHeading
        tag="Contact"
        title="Let's Build Something"
        subtitle="Open to React Developer / Lead roles in Hyderabad, Bangalore, or Chennai. If you're hiring or just want to talk frontend, reach out."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '64px',
        alignItems: 'start',
      }}>
        {/* Links */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
              variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
              whileHover={{ x: 4, borderColor: 'var(--accent)', background: 'var(--accent-glow)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px 18px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '12px', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{l.icon}</span>
              <span style={{ flex: 1, fontFamily: 'var(--display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{l.label}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>{l.val}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={controls}
          variants={{ hidden: { opacity: 0, y: 32, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '20px', padding: '44px 36px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Glow bg */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,142,247,0.07), transparent)',
            pointerEvents: 'none',
          }} />

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}
          >
            📄
          </motion.div>
          <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '10px' }}>
            Download My Resume
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '32px' }}>
            Full details on experience, skills, and accomplishments — ready to share with your hiring team.
          </p>

          <motion.a
            href="/Rajesh_Kokkiripati_Frontend.pdf"
            download
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(79,142,247,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--display)', fontWeight: 700, fontSize: '0.95rem',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, var(--accent), var(--purple))',
              color: '#fff', borderRadius: '12px', textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(79,142,247,0.35)',
              transition: 'all 0.25s',
            }}
          >
            <Download size={17} /> Download PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

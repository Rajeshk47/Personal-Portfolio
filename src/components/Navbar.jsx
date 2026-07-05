import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '14px 60px' : '22px 60px',
        background: scrolled ? 'rgba(7,11,22,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,39,68,0.8)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.2rem',
          color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.5px',
        }}
      >
        RK<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.a>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0 }}
        className="nav-desktop">
        {links.map(l => (
          <li key={l}>
            <motion.a
              href={`#${l.toLowerCase()}`}
              whileHover={{ color: 'var(--text)' }}
              style={{
                fontFamily: 'var(--body)', fontWeight: 500, fontSize: '0.875rem',
                color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.2px',
                transition: 'color 0.2s',
              }}
            >
              {l}
            </motion.a>
          </li>
        ))}
      </ul>

      <motion.a
        href="/Rajesh_Kokkiripati_Frontend.pdf"
        download
        whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(79,142,247,0.4)' }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          fontFamily: 'var(--display)', fontWeight: 600, fontSize: '0.8rem',
          letterSpacing: '0.4px', padding: '9px 18px',
          border: '1.5px solid var(--accent)', borderRadius: '8px',
          color: 'var(--accent)', textDecoration: 'none', transition: 'all 0.2s',
        }}
        className="nav-desktop"
      >
        <Download size={13} /> Resume
      </motion.a>

      <button
        onClick={() => setOpen(!open)}
        className="nav-mobile-btn"
        style={{
          background: 'none', border: 'none', color: 'var(--text)',
          cursor: 'pointer', padding: '4px',
        }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(7,11,22,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontFamily: 'var(--display)', fontWeight: 600, fontSize: '1.1rem',
                }}
              >{l}</a>
            ))}
            <a href="/Rajesh_Kokkiripati_Frontend.pdf" download
              style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--display)', fontWeight: 600 }}>
              ↓ Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}

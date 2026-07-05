import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionHeading({ tag, title, subtitle }) {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
      style={{ marginBottom: '72px' }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          color: 'var(--accent)',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        <span style={{
          display: 'inline-block', width: '24px', height: '1.5px',
          background: 'linear-gradient(90deg, var(--accent), var(--purple))',
          borderRadius: '2px'
        }} />
        {tag}
        <span style={{
          display: 'inline-block', width: '24px', height: '1.5px',
          background: 'linear-gradient(90deg, var(--purple), transparent)',
          borderRadius: '2px'
        }} />
      </motion.div>

      <motion.h2
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-1.5px',
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: subtitle ? '16px' : 0,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.7 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import ParticleField from "./ParticleField";

const roles = ["Senior React.js Developer"];

function TypeWriter() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 38 : 72;
    const timer = setTimeout(() => {
      if (!deleting) {
        setChars((c) => c + 1);
        if (chars + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        setChars((c) => c - 1);
        if (chars - 1 === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [chars, deleting, idx]);

  return (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontSize: "clamp(1rem,2.2vw,1.3rem)",
        color: "var(--accent-2)",
      }}
    >
      {roles[idx].slice(0, chars)}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "var(--accent)",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "80%+", label: "Test Coverage" },
  { num: "35%", label: "Perf Gains" },
  { num: "2", label: "Enterprise Domains" },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(100px,12vw,160px) clamp(24px,8vw,100px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.6);opacity:0} }
      `}</style>

      <ParticleField />

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(79,142,247,0.1) 0%, transparent 70%)",
          top: "-100px",
          left: "-200px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          bottom: "0",
          right: "100px",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(26,39,68,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(26,39,68,0.3) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 20% 50%, black 20%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            marginBottom: "28px",
            background: "rgba(45,212,191,0.08)",
            border: "1px solid rgba(45,212,191,0.25)",
            borderRadius: "20px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--teal)",
              boxShadow: "0 0 6px var(--teal)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.72rem",
              color: "var(--teal)",
              letterSpacing: "1.5px",
            }}
          >
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(3rem,7vw,5.5rem)",
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 0.95,
            color: "var(--text)",
            marginBottom: "18px",
          }}
        >
          Rajesh
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--purple) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kokkiripati
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginBottom: "24px" }}
        >
          <TypeWriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          style={{
            fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: "500px",
            marginBottom: "44px",
          }}
        >
          4+ years building scalable, performance-driven React applications for
          enterprise clients in telecom and financial services. Clean code.
          Tested thoroughly. Shipped on time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <motion.a
            href="#experience"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(79,142,247,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "var(--display)",
              fontWeight: 700,
              fontSize: "0.92rem",
              boxShadow: "0 4px 24px rgba(79,142,247,0.3)",
              transition: "all 0.25s",
            }}
          >
            View My Work <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              background: "var(--accent-glow)",
              borderColor: "var(--accent)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              border: "1.5px solid var(--border-hi)",
              color: "var(--text)",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "var(--display)",
              fontWeight: 700,
              fontSize: "0.92rem",
              transition: "all 0.25s",
            }}
          >
            Let's Connect
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.1, color: "var(--accent)" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              border: "1.5px solid var(--border-hi)",
              borderRadius: "10px",
              color: "var(--text-muted)",
              transition: "all 0.2s",
            }}
          >
            <ExternalLink size={18} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.1, color: "var(--accent)" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              border: "1.5px solid var(--border-hi)",
              borderRadius: "10px",
              color: "var(--text-muted)",
              transition: "all 0.2s",
            }}
          >
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "14px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            color: "var(--text-dim)",
            letterSpacing: "2px",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--accent)", opacity: 0.6 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Zap,
  TestTube2,
  Accessibility,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    icon: <Zap size={22} />,
    title: "Performance-First",
    desc: "Code splitting, lazy loading, and memoisation baked in from the start — not bolt-ons. Consistently delivered 20–35% load time improvements.",
  },
  {
    icon: <TestTube2 size={22} />,
    title: "Test-Driven Quality",
    desc: "80%+ coverage with Jest, RTL, and Cypress E2E. Ship with confidence, not hope.",
  },
  {
    icon: <Accessibility size={22} />,
    title: "Accessible by Default",
    desc: "WCAG 2.1 standards embedded at component level from Figma handoff to production — never retrofitted.",
  },
];

export default function About() {
  const { ref, controls } = useScrollReveal();

  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px,10vw,120px) clamp(24px,8vw,100px)",
        background: "var(--bg)",
      }}
    >
      <SectionHeading
        tag="About Me"
        title="Crafting enterprise-grade<br/>frontend experiences"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Text */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.85,
              fontSize: "1.02rem",
              marginBottom: "20px",
            }}
          >
            I'm a{" "}
            <strong style={{ color: "var(--accent-2)", fontWeight: 600 }}>
              React.js Developer
            </strong>{" "}
            with 4+ years at Tata Consultancy Services, building and scaling
            frontend systems for large enterprise organisations across the
            telecom and financial services sectors.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.85,
              fontSize: "1.02rem",
              marginBottom: "20px",
            }}
          >
            My work lives at the intersection of performance, accessibility, and
            developer experience. I care about code that's{" "}
            <strong style={{ color: "var(--accent-2)", fontWeight: 600 }}>
              maintainable, tested, and readable
            </strong>{" "}
            — for the engineers who come next.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.85,
              fontSize: "1.02rem",
              marginBottom: "36px",
            }}
          >
            Currently deepening expertise in TypeScript, micro-frontend
            architecture, and system design for complex frontend applications.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              { icon: <MapPin size={15} />, text: "Hyderabad, India" },
              {
                icon: <Mail size={15} />,
                text: "rajeshkokkiripati047@gmail.com",
              },
              { icon: <Phone size={15} />, text: "+91 98853 12874" },
              {
                icon: <GraduationCap size={15} />,
                text: "B.Tech EEE — Sir CRR College of Engineering (2020)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 + i * 0.08, duration: 0.5 },
                  },
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                  {item.icon}
                </span>
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 + i * 0.12,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{ scale: 1.02, borderColor: "var(--accent)" }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "24px 28px",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                transition: "border-color 0.2s",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  flexShrink: 0,
                  background: "var(--accent-glow)",
                  border: "1px solid rgba(79,142,247,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 600,
                    color: "var(--text)",
                    fontSize: "1rem",
                    marginBottom: "6px",
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

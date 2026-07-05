import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";

const groups = [
  {
    icon: "⚛️",
    label: "Frontend Core",
    chips: [
      { name: "React.js", primary: true },
      { name: "JavaScript ES6+", primary: true },
      { name: "TypeScript", primary: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    icon: "🗄️",
    label: "State Management",
    chips: [
      { name: "Redux Toolkit", primary: true },
      { name: "Zustand", primary: true },
      { name: "Context API" },
    ],
  },
  {
    icon: "🎨",
    label: "Styling & UI",
    chips: [
      { name: "Tailwind CSS", primary: true },
      { name: "Ant Design" },
      { name: "Framer Motion" },
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Responsive Design" },
    ],
  },
  {
    icon: "🧪",
    label: "Testing",
    chips: [
      { name: "Jest", primary: true },
      { name: "React Testing Library", primary: true },
      { name: "Cypress E2E" },
    ],
  },
  {
    icon: "🔌",
    label: "API & Routing",
    chips: [
      { name: "REST APIs", primary: true },
      { name: "React Router v5/v6", primary: true },
      { name: "Axios" },
      { name: "Lodash" },
    ],
  },
  {
    icon: "🔧",
    label: "Tooling & DevOps",
    chips: [
      { name: "Git", primary: true },
      { name: "GitLab CI/CD" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "ESLint" },
      { name: "Prettier" },
    ],
  },
  {
    icon: "📐",
    label: "Methodologies",
    chips: [
      { name: "Agile / Scrum", primary: true },
      { name: "Micro-Frontend" },
      { name: "Code Reviews" },
      { name: "WCAG 2.1" },
    ],
  },
  {
    icon: "🌐",
    label: "Other",
    chips: [
      { name: "Node.js (Basic)" },
      { name: "Bitbucket" },
      { name: "NPM" },
      { name: "Cross-Browser Compat." },
    ],
  },
];

function SkillCard({ group, delay }) {
  const { ref, controls } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 32, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -4, borderColor: "rgba(79,142,247,0.5)" }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "26px 24px",
        transition: "border-color 0.25s, transform 0.25s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <span style={{ fontSize: "1.1rem" }}>{group.icon}</span>
        <span
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, var(--accent), var(--purple))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {group.label}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {group.chips.map((chip, i) => (
          <motion.span
            key={chip.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: delay + 0.05 * i, duration: 0.3 },
              },
            }}
            whileHover={{
              scale: 1.06,
              background: "rgba(79,142,247,0.18)",
              borderColor: "var(--accent)",
              color: "var(--accent-2)",
            }}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.76rem",
              padding: "5px 11px",
              background: chip.primary
                ? "rgba(79,142,247,0.12)"
                : "var(--bg-subtle)",
              border: `1px solid ${chip.primary ? "rgba(79,142,247,0.35)" : "var(--border)"}`,
              borderRadius: "5px",
              color: chip.primary ? "var(--accent-2)" : "var(--text-muted)",
              cursor: "default",
              transition: "all 0.2s",
            }}
          >
            {chip.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(80px,10vw,120px) clamp(24px,8vw,100px)",
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-card) 100%)",
      }}
    >
      <SectionHeading
        tag="Tech Stack"
        title="Skills &amp; Technologies"
        subtitle="The tools I reach for every day — and a few I'm still sharpening."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {groups.map((g, i) => (
          <SkillCard key={g.label} group={g} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}

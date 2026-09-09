import { motion } from "framer-motion";

export default function Testimonials({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="testimonials" style={{ background: "var(--ink-2)" }}>
      <div className="wrap">

        <h2>Colleague & Client Reviews</h2>
        <p className="section-sub">
          Feedback from project managers and lead developers I've had the pleasure of working with.
        </p>
        
        <div className="proj-grid">
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="proj-card glass-panel"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ borderLeft: "4px solid var(--violet)" }}
            >
              <p style={{ fontStyle: "italic", marginBottom: "16px", color: "var(--paper)" }}>
                "{item.text}"
              </p>
              <div>
                <h4 style={{ margin: 0, color: "var(--amber)" }}>{item.name}</h4>
                <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Blog({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="blog">
      <div className="wrap">
        <div className="eyebrow">
          <span className="method get">GET</span>
          <span>/api/blog</span>
        </div>
        <h2>Technical Writing</h2>
        <p className="section-sub">
          Sharing knowledge and deep dives into frontend architecture, Node.js best practices, and performance optimization.
        </p>
        
        <div className="proj-grid">
          {data.map((post, i) => (
            <motion.a
              href={post.url}
              key={i}
              className="proj-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <h3 style={{ margin: 0, color: "var(--neon-cyan)" }}>{post.title}</h3>
              </div>
              <p style={{ color: "var(--teal)", fontSize: "12px", fontFamily: "var(--mono)", marginBottom: "12px" }}>
                {post.date}
              </p>
              <p>{post.summary}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

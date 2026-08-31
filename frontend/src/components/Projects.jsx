import Reveal from "./Reveal.jsx";

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;
  return (
    <section className="wrap" id="projects">
      <Reveal className="eyebrow">
        <span className="method get">GET</span> /projects
      </Reveal>
      <Reveal as="h2">Selected work</Reveal>
      <Reveal as="p" className="section-sub">
        Four production systems across four different domains.
      </Reveal>

      <Reveal className="proj-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

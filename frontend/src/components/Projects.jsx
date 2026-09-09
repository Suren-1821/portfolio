import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function Projects({ projects }) {
  const [visibleCount, setVisibleCount] = useState(2);
  const [expanded, setExpanded] = useState({});

  if (!projects || projects.length === 0) return null;

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  const handleShowLess = () => {
    setVisibleCount(2);
    setExpanded({});
  };

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="wrap" id="projects">

      <Reveal as="h2">Selected work</Reveal>
      <Reveal as="p" className="section-sub">
        Production systems developed across various enterprise domains.
      </Reveal>

      <div className="proj-grid">
        {projects.slice(0, visibleCount).map((p) => {
          const isExpanded = expanded[p.name];
          return (
            <Reveal className="proj-card" key={p.name}>
              <h3>{p.name}</h3>
              
              {p.skills && (
                <div className="proj-skills">
                  {p.skills.map((s) => (
                    <span className="proj-chip" key={s}>{s}</span>
                  ))}
                </div>
              )}
              
              <div className={`proj-content ${isExpanded ? "expanded" : ""}`}>
                <p><strong>Details:</strong> {p.description}</p>
                {isExpanded && p.role && (
                  <p className="proj-role"><strong>Role:</strong> {p.role}</p>
                )}
              </div>

              <button className="btn-text" onClick={() => toggleExpand(p.name)}>
                {isExpanded ? "- View Less" : "+ View Details"}
              </button>
            </Reveal>
          );
        })}
      </div>

      {projects.length > 2 && (
        <Reveal className="proj-actions">
          {visibleCount < projects.length ? (
            <button className="btn btn-ghost" onClick={handleLoadMore}>
              Load More Projects
            </button>
          ) : (
            <button className="btn btn-ghost" onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </Reveal>
      )}
    </section>
  );
}

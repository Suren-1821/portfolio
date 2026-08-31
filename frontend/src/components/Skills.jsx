import Reveal from "./Reveal.jsx";

const GROUPS = [
  { key: "frontend", label: "FRONTEND", cls: "grp-frontend" },
  { key: "backend", label: "BACKEND", cls: "grp-backend" },
  { key: "database", label: "DATABASES", cls: "grp-db" },
  { key: "tools", label: "TOOLS", cls: "grp-tools" },
];

export default function Skills({ skills }) {
  if (!skills) return null;
  return (
    <section className="wrap" id="stack">
      <Reveal className="eyebrow">
        <span className="method get">GET</span> /stack
      </Reveal>
      <Reveal as="h2">What I build with</Reveal>
      <Reveal as="p" className="section-sub">
        Color-coded by layer — the same way I organize a codebase.
      </Reveal>

      <Reveal className="skill-groups">
        {GROUPS.map((g) => (
          <div className={`skill-group ${g.cls}`} key={g.key}>
            <div className="skill-group-label">{g.label}</div>
            <div className="chip-row">
              {(skills[g.key] || []).map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

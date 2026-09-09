import Reveal from "./Reveal.jsx";

export default function Education({ education }) {
  if (!education || education.length === 0) return null;
  return (
    <section className="wrap" id="education">

      <Reveal as="h2">Education</Reveal>
      <Reveal>
        {education.map((e) => (
          <div className="edu-row" key={e.school}>
            <div className="school">
              {e.degree} — {e.school}
            </div>
            <div className="meta">{e.meta}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

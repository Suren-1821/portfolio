import Reveal from "./Reveal.jsx";

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;
  return (
    <section className="wrap" id="experience">

      <Reveal as="h2">Experience</Reveal>

      {experience.map((job) => (
        <Reveal className="record" key={job.company}>
          <div className="record-head">
            <div>
              <h3>{job.company}</h3>
              <div className="role">{job.role}</div>
            </div>
            <div className="period">{job.period.toUpperCase()}</div>
          </div>

          {job.fields.map((f) => (
            <div className="record-field" key={f.key}>
              <div className="k">{f.key}</div>
              <div className="v">{f.value}</div>
            </div>
          ))}
        </Reveal>
      ))}
    </section>
  );
}

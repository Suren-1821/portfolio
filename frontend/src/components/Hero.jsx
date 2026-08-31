import Terminal from "./Terminal.jsx";

export default function Hero({ profile }) {
  if (!profile) return null;
  return (
    <header className="hero wrap">
      <div>
        <div className="hero-eyebrow">
          <span className="dot"></span> AVAILABLE FOR NEW ROLES · {profile.location.toUpperCase()}
        </div>
        <h1>
          {profile.name} —<br />
          building <span className="accent">full-stack</span> systems that hold up in production.
        </h1>
        <p className="tagline">
          {profile.subtitle}. {profile.experienceYears} years turning enterprise requirements into secure, scalable
          applications for clients in the US and Malaysia.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email me →
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            View LinkedIn
          </a>
        </div>
      </div>

      <Terminal profile={profile} />
    </header>
  );
}

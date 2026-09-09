import Reveal from "./Reveal.jsx";

export default function Architecture() {
  return (
    <section className="wrap">

      <Reveal as="h2">How data moves through what I build</Reveal>
      <Reveal as="p" className="section-sub">
        The typical shape of a project I ship: a React client, an Express API guarding routes with JWT and RBAC, and
        a relational store tuned for concurrency.
      </Reveal>

      <Reveal className="arch">
        <div className="arch-row">
          <div className="arch-node fe">
            React.js<span className="tag">client</span>
          </div>
          <div className="arch-link">
            <div className="pulse"></div>
          </div>
          <div className="arch-node be">
            Node · Express<span className="tag">JWT / RBAC</span>
          </div>
          <div className="arch-link">
            <div className="pulse" style={{ animationDelay: ".8s" }}></div>
          </div>
          <div className="arch-node db">
            PostgreSQL · MySQL<span className="tag">indexed queries</span>
          </div>
        </div>
        <div className="arch-caption">
          GitHub Actions CI/CD wraps the whole pipeline — deploys 40% faster, zero manual release steps.
        </div>
      </Reveal>
    </section>
  );
}

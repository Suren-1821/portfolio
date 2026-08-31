import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal.js";

function Counter({ target, prefix = "", suffix = "" }) {
  const [n, setN] = useState(0);
  const [ref, visible] = useReveal(0.4);

  useEffect(() => {
    if (!visible) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setN(target);
      return;
    }
    const step = Math.max(1, Math.round(target / 40));
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      setN(cur);
    }, 25);
    return () => clearInterval(t);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      <span className="u">{suffix}</span>
    </span>
  );
}

export default function Stats({ stats }) {
  if (!stats || stats.length === 0) return null;
  return (
    <section className="wrap">
      <div className="stats reveal in">
        {stats.map((s) => (
          <div className="stat" key={s.id}>
            <div className="num">
              <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

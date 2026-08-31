import { useEffect, useRef, useState } from "react";

// Builds the mock `curl` JSON response lines from the live profile data
// fetched from the Node API, so the animation always reflects /api/profile.
function buildLines(profile) {
  if (!profile) return [];
  return [
    { text: `$ curl api.surendar.dev/profile`, cls: "prompt-line", delay: 18 },
    { text: `{`, delay: 8 },
    { text: `  "name": "${profile.name}",`, delay: 8, kv: true },
    { text: `  "role": "${profile.title}",`, delay: 8, kv: true },
    { text: `  "experience_years": ${profile.experienceYears},`, delay: 8, kv: true },
    { text: `  "stack": ["React", "Node", "PostgreSQL"],`, delay: 8, kv: true },
    { text: `  "clients": ["US", "Malaysia"],`, delay: 8, kv: true },
    { text: `  "status": "${profile.status}"`, delay: 8, kv: true },
    { text: `}`, delay: 8 },
  ];
}

// Very small syntax highlighter for the lines above: colors keys, strings, numbers.
function highlight(line) {
  return line
    .replace(/"(.*?)"(?=:)/g, '<span class="key">"$1"</span>')
    .replace(/: "(.*?)"/g, ': <span class="str">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="num">$1</span>')
    .replace(/^\$ (.*)$/, '<span class="prompt">$</span> <span class="path">$1</span>');
}

export default function Terminal({ profile }) {
  const [rendered, setRendered] = useState("");
  const [done, setDone] = useState(false);
  const startedFor = useRef(null);

  useEffect(() => {
    if (!profile || startedFor.current === profile.name) return;
    startedFor.current = profile.name;

    const lines = buildLines(profile);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setRendered(lines.map((l) => highlight(l.text)).join("\n"));
      setDone(true);
      return;
    }

    let cancelled = false;
    let builtLines = [];

    async function run() {
      for (let li = 0; li < lines.length; li++) {
        const { text, delay } = lines[li];
        let current = "";
        for (let ci = 0; ci <= text.length; ci++) {
          if (cancelled) return;
          current = text.slice(0, ci);
          const preview = [...builtLines, current].join("\n");
          setRendered(highlightMultiline(preview));
          await sleep(delay);
        }
        builtLines.push(text);
      }
      if (!cancelled) setDone(true);
    }

    function highlightMultiline(str) {
      return str
        .split("\n")
        .map((l) => highlight(l))
        .join("\n");
    }

    function sleep(ms) {
      return new Promise((r) => setTimeout(r, ms));
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [profile]);

  return (
    <div className="terminal reveal in">
      <div className="terminal-bar">
        <span className="r"></span>
        <span className="y"></span>
        <span className="g"></span>
        <span className="fname">profile.sh</span>
      </div>
      <div className="terminal-body">
        <span dangerouslySetInnerHTML={{ __html: rendered }} />
        {done && <span className="cursor"></span>}
      </div>
    </div>
  );
}

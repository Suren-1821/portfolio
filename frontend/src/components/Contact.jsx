import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { submitContact } from "../api.js";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContact(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  if (!profile) return null;

  return (
    <footer className="wrap" id="contact">
      <Reveal className="eyebrow">
        <span className="method post">POST</span> /contact
      </Reveal>
      <Reveal as="h2">Let's build something.</Reveal>
      <Reveal as="p" className="section-sub">
        Open to full-stack, React, and Node.js roles — happy to walk through any of the projects above in more depth.
      </Reveal>

      <Reveal className="contact-grid">
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <span className="k">EMAIL</span> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            <span className="k">PHONE</span> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="k">LINKEDIN</span> /in/surendar-r1821
          </a>
          <a href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
            <span className="k">WHATSAPP</span> Chat with me
          </a>
          <span>
            <span className="k">LOCATION</span> {profile.location}
          </span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={update("email")}
            required
          />
          <textarea
            placeholder="Say hello..."
            rows="4"
            value={form.message}
            onChange={update("message")}
            required
          ></textarea>
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <div className="form-note ok">Message received — thanks, I'll reply soon.</div>}
          {status === "error" && (
            <div className="form-note err">Something went wrong. Try emailing me directly instead.</div>
          )}
        </form>
      </Reveal>

      <div className="foot-note">© 2026 {profile.name}. Built with React + Node/Express.</div>
    </footer>
  );
}

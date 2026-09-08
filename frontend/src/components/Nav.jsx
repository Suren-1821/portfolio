import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="wrap navbar">
        <div className="logo">
          SR<span>.</span>dev
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#stack">/stack</a>
          <a href="#experience">/experience</a>
          <a href="#projects">/projects</a>
          <a href="#education">/education</a>
          <a href="#contact">/contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#stack" onClick={() => setIsOpen(false)}>/stack</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>/experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>/projects</a>
        <a href="#education" onClick={() => setIsOpen(false)}>/education</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>/contact</a>
      </div>
    </nav>
  );
}

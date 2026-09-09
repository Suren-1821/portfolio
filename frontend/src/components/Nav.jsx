import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`modern-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap navbar">
        <a href="#" className="logo">
          SR<span>.</span>dev
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#stack" className="nav-link">Stack</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-btn">Let's Talk</a>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu open"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          >
            <a href="#stack" onClick={() => setIsOpen(false)}>Stack</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="mobile-btn">Let's Talk</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

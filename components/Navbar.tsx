"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.className = savedTheme === "dark" ? "dark-mode" : "light-mode";
    } else {
      document.body.className = "dark-mode"; // default
    }
  }, []);

  // 🔹 Apply and save theme when toggled
  useEffect(() => {
    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    document.body.className = themeClass;
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // 🔹 Smooth scroll to sections
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (!targetId) return;

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close menu on mobile after click
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- Title --- */}
        <div className="navbar-title">Prakhar Shrivastava</div>

        {/* --- Hamburger for Mobile --- */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* --- Navigation Menu --- */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={handleScroll}>Home</a></li>
          <li><a href="#experience" onClick={handleScroll}>Experience</a></li>
          <li><a href="#projects" onClick={handleScroll}>Projects</a></li>
          <li><a href="#skills" onClick={handleScroll}>Skills</a></li>
          <li><a href="#education" onClick={handleScroll}>Education</a></li>
          <li><a href="#certifications" onClick={handleScroll}>Certifications</a></li>
          <li><a href="#contact" onClick={handleScroll}>Contact</a></li>

        {/* --- Resume Button --- */}
<a
  href="https://drive.google.com/uc?export=download&id=1fcBKAzVFoo4jd7LKt8SxGPyXkLw--F21"
  className="resume-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>

        
        </ul>
      </div>
    </nav>
  );
}

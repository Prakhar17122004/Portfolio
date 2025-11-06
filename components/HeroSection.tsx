"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = ["AI Engineer", "Software Developer", "Full Stack Developer"];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[index];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 80 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index]);

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="highlight">Prakhar Shrivastava</span>
        </h1>
        <h2 className="typewriter">{currentText}</h2>
        <p className="summary">
          I'm Prakhar, a passionate Full Stack and AI/ML Developer pursuing
          B.Tech CSE with specialisation in AIML at UPES Dehradun.
          <br />
          <br />
          I love building data-driven applications, solving DSA problems, and
          integrating intelligent systems into modern web apps.
        </p>
      </div>

      <div className="hero-right">
        <div className="photo-container">
          <img
            src="/prakhar-photo.jpg"
            alt="Prakhar Shrivastava"
            className="hero-image"
          />
          <div className="circle top-right"></div>
          <div className="circle bottom-left"></div>

          {/* 👇 Social icons block */}
          <div className="social-icons">
            <a
              href="mailto:prakharshrivastava2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/Prakhar17122004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/prakhar-shrivastavva-47b031252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

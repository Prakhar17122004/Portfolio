"use client";

import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-name">Prakhar Shrivastava</h3>
          <p className="footer-desc">
            Software Engineer with a passion for creating innovative, scalable,
            and high-performance AI-driven solutions.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4 className="footer-heading">Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/prakharshrivastava/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Prakhar17122004"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <FaGithub />
            </a>
            <a href="mailto:prakharshrivastava@example.com" className="footer-icon-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prakhar Shrivastava. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

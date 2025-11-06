"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "SmartLog",
    period: "October 2025",
    description: [
      "Developed a full-stack intelligent log analysis platform leveraging AI to detect anomalies in real-time.",
      "Implemented AI-driven algorithms to automatically identify patterns and unusual behavior in log data.",
      "Designed a responsive and interactive UI for seamless log visualization and monitoring.",
      "Integrated Firebase for secure authentication, real-time database management, and backend services.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    codeLink: "https://github.com/Prakhar17122004/SmartLogs",
    demoLink: "#",
  },
  {
    title: "AI-Powered Notes Management (NerdNotes)",
    period: "September 2025",
    description: [
      "Built a full-stack notes management app with pinning, auto-tagging, and search features for better usability.",
      "Integrated NLP-based summarization for automatic concise summaries of lengthy notes.",
      "Developed secure backend APIs (Node.js, Express, MongoDB) with authentication and CRUD operations.",
      "Implemented real-time translation for multilingual note accessibility and scalability.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "NLP"],
    codeLink: "https://github.com/Prakhar17122004/vercel-frontend",
    demoLink: "https://vercel-frontend-1-3npf.onrender.com",
  },
  {
    title: "Sign Language Translator (Team Project)",
    period: "May 2025",
    description: [
      "Developed real-time sign language translation using deep learning and webcam integration.",
      "Implemented user authentication system using JWT for secure session handling.",
      "Built signup/login pages with real-time validation and password hashing.",
      "Integrated MongoDB for user storage and secure backend-frontend communication.",
    ],
    tech: ["React", "Express", "MongoDB", "JWT", "Flask"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "SkyCast App",
    period: "March 2025",
    description: [
      "Built an interactive weather forecasting web app using HTML, CSS, and JavaScript.",
      "Integrated OpenWeatherMap API to fetch real-time weather data based on city name or user’s geolocation.",
      "Dynamically updated the DOM to display temperature, humidity, and weather icons with conditional rendering for various weather conditions.",
      "Implemented event listeners, fetch API, and error handling for a smooth and responsive user experience.",
      "Designed a clean, intuitive UI with toggle functionality between input form and weather display sections.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    codeLink: "https://github.com/Prakhar17122004/WEATHER_FORECAST",
    demoLink: "https://subtle-paletas-afbfe5.netlify.app/",
  },
  {
    title: "Plant Care For Living",
    period: "February 2025",
    description: [
      "Developed a full-stack plant-care web application using React (Vite) and deployed via Netlify for fast performance.",
      "Created interactive UI components that allow users to browse plant care guides, watering schedules, and plant-type recommendations.",
      "Integrated responsive design to ensure seamless experience across mobile, tablet and desktop devices.",
      "Implemented client-side routing and optimized bundle size for improved load time and user experience.",
    ],
    tech: ["React (Vite)", "JavaScript", "CSS3", "Netlify"],
    codeLink: "#",
    demoLink: "https://plant-care-for-living.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="projects-heading"
      >
        Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glow-dot"></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-period">
              <strong>Period:</strong> {project.period}
            </p>

            <ul className="project-description">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                <FaCode /> View Code
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="project-btn demo"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiFirebase, SiGooglecloud } from "react-icons/si";
import "./Skills.css";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    level: 90,
    category: "Frontend",
    description:
      "Built dynamic, responsive UIs using reusable components and hooks for state management.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: 85,
    category: "Backend",
    description:
      "Developed REST APIs and handled server logic with Express.js ensuring scalability and security.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: 80,
    category: "Database",
    description:
      "Designed schema, managed CRUD operations, and implemented efficient data modeling.",
  },
  {
    name: "Python",
    icon: <FaPython />,
    level: 90,
    category: "Programming",
    description:
      "Used for AI/ML model training, data analysis, and automation tasks.",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    level: 75,
    category: "AI/ML",
    description:
      "Worked with deep learning models and neural networks for AI projects.",
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud />,
    level: 80,
    category: "Cloud",
    description:
      "Deployed AI solutions using Vertex AI, App Engine, and Cloud Functions.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    level: 78,
    category: "Cloud",
    description:
      "Integrated authentication, database, and real-time features into full-stack apps.",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: 85,
    category: "Tools",
    description:
      "Used Git & GitHub for version control, collaboration, and CI/CD workflows.",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    level: 80,
    category: "Database",
    description:
      "Wrote optimized queries and managed relational database design and integration.",
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud />,
    level: 75,
    category: "Cloud",
    description:
      "Worked on deployment and maintenance of cloud-based applications and AI systems.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-card-inner">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p className="skill-category">{skill.category}</p>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Hover Description */}
              <div className="skill-hover">
                <p>{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

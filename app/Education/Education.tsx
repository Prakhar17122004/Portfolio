"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    icon: <FaGraduationCap />,
    degree: "B.Tech in Computer Science (AI & ML)",
    institution: "University of Petroleum and Energy Studies, Dehradun",
    duration: "Aug 2022 – May 2026",
    result: "CGPA: 8.31",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Developed multiple AI-integrated full-stack projects and participated in hackathons and coding contests.",
  },
  {
    icon: <FaSchool />,
    degree: "Class 12 – CBSE",
    institution: "St. Thomas Sr. Sec. School",
    duration: "2021",
    result: "Percentage: 85%",
    description:
      "Focused on Physics, Chemistry, and Mathematics with Computer Science. Built strong problem-solving and analytical skills.",
  },
  {
    icon: <FaSchool />,
    degree: "Class 10 – CBSE",
    institution: "St. Thomas Sr. Sec. School",
    duration: "2019",
    result: "Percentage: 93.4%",
    description:
      "Excelled in academics and participated in science and technology fairs.",
  },
];

const Education = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 10%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="edu-section">
      <h2 className="edu-heading">Education</h2>

      <div className="edu-timeline" ref={timelineRef}>
        {/* Animated filling line */}
        <motion.div
          className="edu-line"
          style={{ height: lineHeight }}
        ></motion.div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`edu-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="edu-dot"
              whileInView={{
                scale: [0.5, 1.2, 1],
                boxShadow: "0 0 18px rgba(34,211,238,0.9)",
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <div className="edu-card">
              <div className="edu-icon">{edu.icon}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-result">{edu.result}</p>
              <p className="edu-desc">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

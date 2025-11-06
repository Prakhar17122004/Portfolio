"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import "./Certifications.css";

const certifications = [
  { title: "Java Advanced DSA", issuer: "Apna College", date: "July 2023" },
  { title: "Hackathon 2.O", issuer: "United Latino Students Association", date: "April 2023" },
  { title: "Java Basics", issuer: "HackerRank", date: "April 2024" },
  { title: "SQL Basics", issuer: "HackerRank", date: "April 2024" },
  { title: "Hackathon 8.O", issuer: "UPES", date: "April 2024" },
  { title: "Certificate of Participation in Level 1: E-Commerce ", issuer: "Unstop", date: "Aug 2024" },
  { title: "Mern Stack Developer with Angela Yu", issuer: "Udemy", date: "September 2025" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="cert-section">
      <h2 className="cert-heading">Certifications</h2>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

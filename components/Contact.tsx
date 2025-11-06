"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "./Contact.css";

const Contact = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await res.json();

  if (result.success) {
    alert("Message sent successfully ✅");
    (e.target as HTMLFormElement).reset();
  } else {
    alert("Something went wrong ❌");
  }
};

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-container">
        {/* ===== Left Side: Info ===== */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="contact-subtitle">Get In Touch</h3>
          <p className="contact-text">
            Feel free to contact me for any collaboration, project discussion, or suggestions.
          </p>

          <div className="contact-links">
            <a href="mailto:prakharshrivastava2004@gmail.com" className="contact-link">
              <FaEnvelope className="contact-icon" /> Mail Me
            </a>

            <a
              href="www.linkedin.com/in/prakhar-shrivastavva-47b031252"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="contact-icon" /> My Linkdin Profile
            </a>

            <a
              href="https://github.com/Prakhar17122004"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub className="contact-icon" />My Github
            </a>

            <a
              href="https://leetcode.com/u/prakhar_2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
            <SiLeetcode className="contact-icon si-leetcode" /> My LeetCode

</a>

          </div>
        </motion.div>

        {/* ===== Right Side: Form ===== */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Your message" required />
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

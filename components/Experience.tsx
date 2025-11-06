"use client";
import "./Experience.css";
import { useEffect, useRef } from "react";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👇 Play animation when section comes into view
            section?.classList.add("visible");
          } else {
            // 👇 Remove class so it can re-trigger next time
            section?.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of the section is visible
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="experience-section hidden"
    >
      <h1 className="experience-title">Work Experience</h1>

      <div className="timeline">
        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="job-title">Virtual Internship</h3>
            <h4 className="company">Nasscom,Remote</h4>
            <span className="duration">June 2025 – July 2025</span>
            <ul className="Content">
              <li>
Proficient in Google Cloud technologies, specializing in Gemini for Google Cloud and Generative AI with both Beginner and Advanced certifications. Skilled in designing, deploying, and optimizing AI-driven applications using Vertex AI, Cloud Functions, and App Engine.              </li>
              <li>
                DAF Certified, demonstrating strong expertise in implementing scalable, production-grade AI solutions on GCP. Experienced in integrating custom ML models, building automated data pipelines, and leveraging LLM APIs to enhance cloud-based intelligent systems.
              </li>
              <li>
               Hands-on experience includes developing text generation, image classification, and data analysis workflows, utilizing Google Cloud’s end-to-end MLOps capabilities for efficient model training, deployment, and monitoring.
              </li>
             
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="job-title">Social Intern</h3>
            <h4 className="company">Shree Dev Charitable Trust (NGO),Onsite</h4>
            <span className="duration">May 2023 – June 2023</span>
            <ul className="content">
              <li>Contributed to rural community development by conducting field visits to local households and organizing interactive sessions focused on digital literacy and technology awareness.</li>
              <li>
                Educated villagers about the practical use of emerging technologies — including smartphones, digital payments, and online government services — to promote digital empowerment and financial inclusion.
              </li>
              <li>
                Collaborated with local volunteers and educators to design awareness programs and demonstrations that simplified complex technical concepts for rural audiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

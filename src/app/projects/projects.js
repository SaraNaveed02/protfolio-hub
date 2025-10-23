"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styleComponent/projects.css";
import { motion } from "framer-motion";
const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };
  return (
    <div className="projects-containers" id="projects">
      {/* projects */}
      <div className="project-section">
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="head-tag"
        >
          <span className="circle"></span>
          Projects
        </motion.h2>

       <motion.div
          className="project-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              id: 1,
              href: "https://my-kababjees.netlify.app/",
              img: "/image/kababjees-com.png",
              title: "Kababjess.com",
              desc: "HTML • CSS • JavaScript • Responsive",
            },
            {
              id: 2,
              href: "https://saranaveed02.github.io/IMTIZA/",
              img: "/image/imtiaz.png",
              title: "Imtiaz",
              desc: "HTML • CSS • JavaScript • Responsive",
            },
            {
              id: 3,
              href: "https://health-and-wealth-ten.vercel.app/",
              img: "/image/health.png",
              title: "Health & Wealth",
              desc: "HTML • CSS • Responsive",
            },
          ].map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              custom={i}
              className="project-card-wrapper"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                target="_blank"
                className="project-link"
                href={project.href}
              >
                <Image
                  className="project-img"
                  src={project.img}
                  alt={project.title}
                  width={250}
                  height={350}
                  style={{
                    width: "200px",
                    height: "300px",
                    objectFit: "fill",
                  }}
                />
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Show more button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="more-btn"
      >
        <Link href="/projects" className="show-more-btn">
          Show More
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;

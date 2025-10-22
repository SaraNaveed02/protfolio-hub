"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styleComponent/projects.css";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="projects-containers">
      {/* projects */}
      <div className="project-section">
        <motion.h2
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="head-tag"
        >
          <span className="circle"></span>
          Projects
        </motion.h2>

        <div className="project-container">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
          >
            <Link
            target="_blank"
              className="project-link"
              href="https://my-kababjees.netlify.app/"
            >
              <Image
                className="project-img"
                src="/image/kababjees-com.png"
                alt="projects"
                width={200}
                height={200}
                style={{ width: "200px", height: "300px", objectFit: "fill" }}
              />
              {/* blue over-lay */}
              <div className="project-card">
                <h3>Kababjess.com</h3>
                <p>HTML • CSS • JavaScript • Responsive</p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.7, ease: "easeOut", delay: 0.9 }}
          >
               <Link
                        className="project-link"
                        href="https://saranaveed02.github.io/IMTIZA/"  target="_blank"
                      >
                        <Image
                          className="project-img"
                          src="/image/imtiaz.png"
                          alt="projects"
                          width={200}
                          height={300}
                          style={{ width: "200px", height: "300px", objectFit: "fill" }}
                        />
                        <div className="project-card">
                          <h3>imtiaz</h3>
                          <p>HTML • CSS • JavaScript • Responsive</p>
                        </div>
                      </Link>
          
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.9, ease: "easeOut", delay: 1 }}
          >
            <Link
             target="_blank"
              className="project-link"
              href="https://health-and-wealth-ten.vercel.app/"
            >
              <Image
                className="project-img"
                src="/image/health.png"
                alt="projects"
                width={250}
                height={350}
              />
              <div className="project-card">
                <h3>Health & Wealth</h3>
                <p className="project-tech">HTML • CSS • Responsive</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.1, ease: "easeOut", delay: 1 }}
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

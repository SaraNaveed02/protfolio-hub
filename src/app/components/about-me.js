"use client";
import "../styleComponent/aboutme.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="About-contianers " id="about">
      {/* about me */}
      <section className="about-me-section">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="head"
        >
          <h2 className="about-head">
            <span className="circle">.</span>About-Me
          </h2>
        </motion.div>

        <motion.div
          className="about-me-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <p className="about-text">
            I’m a detail-oriented and curious frontend developer who enjoys
            turning designs into smooth, responsive web interfaces. I’m
            passionate about learning new technologies, improving my code
            quality, and exploring better ways to enhance user experience. My
            goal is to grow as a developer by contributing to projects that
            challenge me and make a difference.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;

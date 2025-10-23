"use client"
import Image from "next/image";
import React from "react";
import "../styleComponent/skills.css";
import { motion } from "framer-motion";
const Skills = () => {
    const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <div className="skills-containers " id="skills">
      <div className="skills-section">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{once:false, amount:0.3}}
          className="skill-head"
        >
          <span className="circle"></span>skills
        </motion.h2>
        <div className="skills-container">
          <motion.div  initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{once:false }} className="big-cricle">
            <small className="text">
              important <p className="quality-text">qualities</p>
            </small>
            <motion.div  initial={{ width: 0 }}
             whileInView={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              viewport={{once:false}} className="color-line"></motion.div>
            <p className="web-text">web developmnet</p>
          </motion.div>
          <motion.div
            className="qualities"
            initial="hidden"
           whileInView="visible"
            viewport={{once:false,amount:0.4}}
          >
            {[
              "html",
              "css",
              "javascript",
              "react",
              "nextjs",
              "framer motion (basic)",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                className="skills"
                variants={fadeInUp}
                custom={i}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

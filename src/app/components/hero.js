"use client";
import Image from "next/image";
import "../styleComponent/hero.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Heroleft from "./heroleft";
const Hero = () => {
  const name = "Sara Naveedd";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    let currentText = "";
    let deleting = false;
    const TypeEffect = () => {
      if (!deleting) {
        currentText = name.slice(0, i + 1);
        i++;
        if (i === name.length) {
          deleting = true;
          setTimeout(TypeEffect, 1000);
          return;
        }
      } else {
        currentText = name.slice(0, i - 1);
        i--;
        if (i === 0) {
          deleting = false;
        }
      }
      setDisplayedText(currentText);
      setTimeout(TypeEffect, deleting ? 150 : 200);
    };
    TypeEffect();
  }, [name]);
  return (
    <div>
      <div className="hero-section" id="home">
        <Navbar />
        <Heroleft />
        <div className="hero background">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >{`Hello, I'm ${displayedText}`}</motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          >
            I’m passionate about turning ideas into responsive, user-friendly
            websites and web apps. I love working with modern tools like HTML,
            CSS, JavaScript, React, Next.js, and Tailwind CSS to build clean,
            efficient, and accessible interfaces.
          </motion.p>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;

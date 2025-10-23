"use client";
import Link from "next/link";
import React from "react";
import "../styleComponent/navbar.css";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => {
  const containerVariants = {
    hidden: { y: -25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 8 },
    },
  };

  return (
    <motion.div
   className="navbar-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      <motion.div  variants={itemVariants}  className="navbar list-none">
        
        <Link className="nav-img" href="#home">
          
          <Image
            src="/logos/home.png"
            alt="home"
            height={25}
            width={25}
            className="nav-img"
          />
        </Link>
    
        <Link className="img" href="#projects">
          
          <Image
            src="/logos/self-development.png"
            alt="projects"
            height={25}
            width={25}
            className="nav-img"
          />
        </Link>
            <Link className="img" href="#about">
          
          <Image
            src="/logos/project-management.png"
            alt="about"
            height={25}
            width={25}
            className="nav-img"
          />
        </Link>
        <Link className="img" href="#skills">
          
          <Image
            src="/logos/profile.png"
            alt="skills"
            height={25}
            width={25}
            className="nav-img"
          />
        </Link>
        <Link className="img" href="#contact">
          
          <Image
            src="/logos/email.png"
            alt="contact"
            height={25}
            width={25}
            className="nav-img"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import "../styleComponent/navbar.css";
import { motion } from "framer-motion";
import Image from "next/image";
const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar-section max-w-screen-lg mx-auto h-full px-4 py-3"
    >
      <div className="navbar list-none">
        <Link className="img" href="#home">
          <Image
            src="/logos/home.png"
            alt="home"
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
        <Link className="img" href="#projects">
          <Image
            src="/logos/self-development.png"
            alt="projects"
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
      </div>
    </motion.div>
  );
};

export default Navbar;

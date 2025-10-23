"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import "../styleComponent/heroleft.css";
const Heroleft = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * .5 },
    }),
  };
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="left-side">
        <div className="availability">
          <h2 className="h2">
            <span className="orange-cricle"></span>Available
          </h2>
        </div>
        <motion.div variants={itemVariants} custom={1}>
          <Image
            className="main-image"
            src="/image/imag.jpeg"
            alt="heroimg"
            height={150}
            width={200}
          />
        </motion.div>

        <motion.div variants={itemVariants} custom={2}>
          <Link className="email" href="mailto:saranaveed@gmail.com">
            saranaveed@gmail.com
          </Link>
        </motion.div>

     <motion.p className="p" variants={itemVariants} custom={3}>
          Frontend Developer
        </motion.p>
        <motion.div
          className="social-links"
          variants={itemVariants}
          custom={4}>
          <Link
            className="links"
            href="https://www.linkedin.com/in/sara-naveed-2102a42b6/"
            target="_blank"
          >
            <Image
              src="/logos/linkedin.png"
              alt="linkdin"
              height={20}
              width={20}
            />
          </Link>
          <Link
            className="links"
            href="https://github.com/SaraNaveed02"
            target="_blank"
          >
            <Image
              src="/logos/github-logo.png"
              alt="github"
              height={20}
              width={20}
            />
          </Link>
          <Link
            className="links"
            href="https://www.facebook.com/sara.naveed.828167"
            target="_blank"
          >
            <Image
              src="/logos/facebook-logo.png"
              alt="facebook"
              height={20}
              width={20}
            />
          </Link>
          <Link
            className="links"
            href="https://www.instagram.com/sara_naveed_3/"
            target="_blank"
          >
            <Image
              src="/logos/instagram.png"
              alt="instagram"
              height={20}
              width={20}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Heroleft;

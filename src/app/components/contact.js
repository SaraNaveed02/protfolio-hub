"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "../styleComponent/contact.css";
const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);
  return (
    <motion.div
      id="contact"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      className="contact-containers"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.8 }}
        className="contact-head"
      >
        <span className="circle">.</span>Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="contact-container"
      >
        <div className="contact-form">
          <form action="https://formspree.io/f/xvgwyqyo" method="POST">
            <label className="contact-text">
              Name
              <input type="text" placeholder="Full Name" name="name" required />
            </label>
            <label className="contact-text">
              Email
              <input type="email" placeholder="Email" name="email" required />
            </label>
            <label className="contact-text">
              Message
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </label>
            {/* <!-- your other form fields go here --> */}
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Contact;

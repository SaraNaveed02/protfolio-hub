import React from "react";
import "../styleComponent/footer.css";
import { FaFacebook, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="sociallinks">
        <Link href="https://www.facebook.com/sara.naveed.828167" target="_blank">
          <FaFacebook color="white"  />
        </Link>
        <Link href="https://www.instagram.com/sara_naveed_3/"  target="_blank">
          <FaInstagramSquare color="white"  />
        </Link>
        <Link href="https://www.linkedin.com/in/sara-naveed-2102a42b6/"  target="_blank">
          <FaLinkedin color="white" />
        </Link>
        <Link href="https://github.com/SaraNaveed02"  target="_blank">
          <FaGithubSquare color="white"  />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

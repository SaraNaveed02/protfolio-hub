import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styleComponent/heroleft.css";
const Heroleft = () => {
 
  return (
    <div className="container ">
      <div className="left-side">
        <div className="availability">
          <h2 className="h2">
            <span className="orange-cricle"></span>Available
          </h2>
        </div>

        <Image
        className="main-image"
          src="/image/imag.jpeg"
          alt="heroimg"
          height={150}
          width={200}
        />

        <Link className="email" href="">saranaveed@gmail.com</Link>
        <p className="p">frontend developer</p>
        <div className="social-links">
          <Link  className="links" href="https://www.linkedin.com/in/sara-naveed-2102a42b6/" target="_blank">
            <Image
              src="/logos/linkedin.png"
              alt="linkdin"
              height={20}
              width={20}
            />
          </Link>
          <Link className="links" href="https://github.com/SaraNaveed02" target="_blank">
            <Image
              src="/logos/github-logo.png"
              alt="github"
              height={20}
              width={20}
            />
          </Link>
          <Link className="links" href="https://www.facebook.com/sara.naveed.828167" target="_blank">
            <Image
              src="/logos/facebook-logo.png"
              alt="facebook"
              height={20}
              width={20}
            />
          </Link>
          <Link className="links" href="https://www.instagram.com/sara_naveed_3/" target="_blank">
            <Image
              src="/logos/instagram.png"
              alt="instagram"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroleft;

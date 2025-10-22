import Image from "next/image";
import "../styleComponent/aboutme.css";
const AboutMe = () => {
  return (
<div className="About-contianers ">
  {/* about me */}
      <section className="about-me-section">
      <div className="head">
        <h2 className="about-head">
          <span className="circle">.</span>About-Me
        </h2>
      </div>

      <div className="about-me-content">
        <p className="about-text">
          I’m a detail-oriented and curious frontend developer who enjoys
          turning designs into smooth, responsive web interfaces. I’m passionate
          about learning new technologies, improving my code quality, and
          exploring better ways to enhance user experience. My goal is to grow
          as a developer by contributing to projects that challenge me and make
          a difference.
        </p>
      </div>
    </section>

</div>
  );
};

export default AboutMe;

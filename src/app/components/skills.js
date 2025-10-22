import Image from "next/image";
import React from "react";
import "../styleComponent/skills.css";
const Skills = () => {

  return (
   <div className="skills-containers ">
     <div className="skills-section">
      <h2 className="skill-head">
        <span className="circle"></span>skills
      </h2>
      <div className="skills-container">
     <div className="big-cricle">
          <small className="text">
            important <p className="quality-text">qualities</p>
          </small>
          <div className="color-line"></div>
          <p className="web-text">web developmnet</p>
        </div>
        <div className="qualities">
          <span className="skills ">html</span>
          <span className="skills ">css</span>
          <span className="skills ">javascript</span>
          <span className="skills ">react</span>
          <span className="skills ">nextjs</span>
          <span className="skills ">framer motion(basic)</span>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Skills;

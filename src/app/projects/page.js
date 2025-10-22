"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styleComponent/projects.css";
import Heroleft from "../components/heroleft";
import Navbar from "../components/navbar";

const Htmlprojects = () => {
  return (
    <div className="projects-section">
      {/* PROJECTS */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          src="/videos/video 1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <Heroleft/>
      <Navbar/>
      {/* html projects */}
      <div className="">
        <h2 className="head-tag text-amber-50 relative left-96 w-fit ">
       <span className="circle"></span>     projects <span className="forntend-project ">(htlm and css)</span>
        </h2>
        <div className="project-container inner-projects">
          <Link className="project-link" href="https://my-kfc.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/kfc.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>KFC</h3>
              <p>•HTML • CSS •Responsive</p>
            </div>
          </Link>
          <Link className="project-link" href="https://porfolio-web-page.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/portfolio.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>Protfolio-web</h3>
              <p>•HTML • CSS •Responsive</p>
            </div>
          </Link>
          <Link
            className="project-link"
            href="https://bootstarp-layout.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/bootstrap.png"
              alt="projects"
              width={200}
              height={200}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            {/* blue over-lay */}
            <div className="project-card">
              <h3>bootstrap</h3>
              <p>HTML • CSS • JavaScript •Bootstrap •Non-Responsive</p>
            </div>
          </Link>
          <Link
            className="project-link projectli"
            href="https://fam-hack.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/famhack.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>FamHack</h3>
              <p>HTML • CSS •Non-Responsive</p>
            </div>
          </Link>

          <Link className="project-link" href="https://brandname2.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/practice.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>brand Name </h3>
              <p>HTML • CSS •Non-Responsive</p>
            </div>
          </Link>
         <Link
             target="_blank"
              className="project-link"
              href="https://kababjees2.netlify.app/"
            >
              <Image
                className="project-img"
                src="/image/kababjees.webp"
                alt="projects"
                width={200}
                height={300}
              />
              <div className="project-card">
                <h3>Kababjees Fried</h3>
                <p>HTML • CSS • JavaScript • Responsive</p>
              </div>
            </Link>
          <Link
            className="project-link"
            href="https://star-marketing.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/starmarketing.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>Star Marketing</h3>
              <p>HTML • CSS •Non-Responsive</p>
            </div>
          </Link>
        </div>
      </div>
      {/* javascript projects */}
      <div>
        <h2 className="head-tag text-amber-50  relative left-96 w-fit mt-7">
     <span className="circle"></span>     projects <span className="forntend-project ">(javascript small projects)</span>
        </h2>
        <div className="project-container inner-projects">
          <Link className="project-link" href="https://pass-generat.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/password.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3 className="margin">password Generator</h3>
              <p>•HTML • CSS  • Responsive • JavaScript </p>
            </div>
          </Link>
          <Link className="project-link" href="https://mark-sheett.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/marksheet.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3 className="margin">Marksheet Generator</h3>
              <p>• HTML • CSS • Responsive • JavaScript</p>
            </div>
          </Link>
          <Link
            className="project-link"
            href="https://my-calculat.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/cal.png"
              alt="projects"
              width={200}
              height={200}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            {/* blue over-lay */}
            <div className="project-card">
              <h3>CAlculator</h3>
              <p>HTML • CSS • JavaScript • Responsive</p>
            </div>
          </Link>
          <Link
            className="project-link "
            href="https://my-quizy.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/quiz.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>Quiz</h3>
              <p>HTML • CSS • Responsive • JavaScript</p>
            </div>
          </Link>

          <Link className="project-link" href="https://my-ramzadan.netlify.app/"  target="_blank">
            <Image
              className="project-img"
              src="/image/countdown.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3 className="margin">Ramadan countdown </h3>
              <p>HTML • CSS • Responsive • JavaScript </p>
            </div>
          </Link>
          <Link
            className="project-link"  target="_blank"
            href="https://mmytodoapp.netlify.app/"
          >
            <Image
              className="project-img"
              src="/image/todo.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>Todo app</h3>
              <p>HTML • CSS • JavaScript • Responsive</p>
            </div>
          </Link>
          <Link
            className="project-link"
            href="https://mmy-weather-app.netlify.app/"  target="_blank"
          >
            <Image
              className="project-img"
              src="/image/weather.png"
              alt="projects"
              width={200}
              height={300}
              style={{ width: "200px", height: "300px", objectFit: "fill" }}
            />
            <div className="project-card">
              <h3>weather app</h3>
              <p>HTML • CSS • Responsive • JavaScript</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Htmlprojects;

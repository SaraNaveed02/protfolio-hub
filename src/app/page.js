import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Projects from "./projects/projects";

export default function Home() {
  return (
   <div className="">
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
        
    <Hero/>
    <Projects/>
    <AboutMe/>
    <Skills/>
    <Contact/>
    <Footer/>
   </div>
  );
}

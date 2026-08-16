import { useRef } from "react";
import { Slider } from "react-tech-slider";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { projects } from "../data/projects";
import { techStack } from "../data/techStack";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";

export const AppRoutes = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <Home homeRef={homeRef} contactRef={contactRef} />
      <Projects projectsRef={projectsRef} projects={projects} />
      <div className="slider-container">
        <Slider brandsList={techStack} borderColor="gray" durationMs={30000} />
      </div>
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
      />
    </>
  );
};

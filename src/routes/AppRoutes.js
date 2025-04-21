import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects"
import { Slider } from "../components/Slider";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { techStack } from "../data/techStack";

export const AppRoutes = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Home homeRef={homeRef} contactRef={contactRef} />
      <Projects projectsRef={projectsRef} />
      <Slider technologies={techStack} borderColor="gray" isPaused={false} durationMs={30000}/>
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
    </>
  )
}

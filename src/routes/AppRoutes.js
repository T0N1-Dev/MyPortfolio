import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects"
import { Slider } from "../components/Slider";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { useRef } from "react";

export const AppRoutes = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Home homeRef={homeRef} />
      <Projects projectsRef={projectsRef} />
      <Slider />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
    </>
  )
}

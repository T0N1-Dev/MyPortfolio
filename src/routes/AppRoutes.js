import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects"
import { Slider } from "../components/Slider";
import { About } from "../pages/About";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Slider />
      <About />
      <Footer />
    </>
  )
}

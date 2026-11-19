import { MotionConfig } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FreelanceForm from "./components/FreelanceForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import EnquiryProvider from "./context/EnquiryProvider";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <EnquiryProvider>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Process />
          <FreelanceForm />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </EnquiryProvider>
    </MotionConfig>
  );
}

import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Offer from "./components/Offer";

function App()
{
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const howItWorksRef = useRef(null);
  const opinionsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) =>
    {
    const navbarHeight = 77;
    const offset = ref.current.offsetTop - navbarHeight;
    window.scrollTo({
        top: offset,
        behavior: 'smooth',
    });
  }
  return (
    <>
      <Navbar 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef} 
        offerRef={offerRef} 
        howItWorksRef={howItWorksRef} 
        opinionsRef={opinionsRef} 
        contactRef={contactRef} 
      />
      <Home 
        scrollToSection={scrollToSection} 
        aboutRef={aboutRef}
      />
      <About 
        aboutRef={aboutRef} 
        howItWorksRef={howItWorksRef} 
        scrollToSection={scrollToSection} 
      />
      <HowItWorks 
        howItWorksRef={howItWorksRef} 
        offerRef={offerRef} 
        scrollToSection={scrollToSection} 
      />
      <Offer 
        offerRef={offerRef} 
        scrollToSection={scrollToSection} 
        opinionsRef={opinionsRef} 
      />
    </>
  );
}

export default App;

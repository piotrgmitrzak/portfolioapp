import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function MainPage() {
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const howItWorksRef = useRef(null);
  const opinionsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const navbarHeight = 77;
    const offset = ref.current.offsetTop - navbarHeight;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
  

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
      <Home scrollToSection={scrollToSection} aboutRef={aboutRef} contactRef={contactRef} />
      <About aboutRef={aboutRef} howItWorksRef={howItWorksRef} scrollToSection={scrollToSection} />
      <HowItWorks howItWorksRef={howItWorksRef} offerRef={offerRef} scrollToSection={scrollToSection} />
      <Offer offerRef={offerRef} opinionsRef={opinionsRef} scrollToSection={scrollToSection} />
      <Testimonials opinionsRef={opinionsRef} contactRef={contactRef} scrollToSection={scrollToSection} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;

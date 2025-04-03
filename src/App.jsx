import Navbar from "./components/Navbar"
import { useRef } from "react";

function App()
{
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const howItWorksRef = useRef(null);
  const opinionsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
  return(
    <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} offerRef={offerRef} howItWorksRef={howItWorksRef} opinionsRef={opinionsRef} contactRef={contactRef}/>
  );
}

export default App

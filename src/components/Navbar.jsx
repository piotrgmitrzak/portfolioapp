import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({
  scrollToSection,
  aboutRef,
  offerRef,
  howItWorksRef,
  opinionsRef,
  contactRef,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (ref, label) => {
    scrollToSection(ref);
    setIsOpen(false);
    setActiveSection(label);
  };

  const navLinks = [
    { label: "O mnie 👋", ref: aboutRef },
    { label: "Jak wyglądają zajęcia ❓", ref: howItWorksRef },
    { label: "Oferta 📚", ref: offerRef },
    { label: "Opinie ⭐", ref: opinionsRef },
    { label: "Kontakt ☎️", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const total = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollProgress(total);

      const sectionOffsets = navLinks.map(({ ref }) =>
        ref.current ? ref.current.offsetTop : 0
      );

      const scrollPosition = window.scrollY + winHeight / 2;
      const activeIndex = sectionOffsets.findIndex((offset, index) => {
        const nextOffset = sectionOffsets[index + 1] || Infinity;
        return scrollPosition >= offset && scrollPosition < nextOffset;
      });

      if (activeIndex !== -1) {
        setActiveSection(navLinks[activeIndex].label);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-white z-[60] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-xl flex items-center justify-between px-6 sm:px-8 lg:px-10 z-50 font-poppins"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-sm"
        >
          Piotr Gmitrzak Trening Językowy
        </motion.h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden lg:flex space-x-6 xl:space-x-8 text-white font-semibold text-sm sm:text-base md:text-lg"
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors duration-200 ${
                activeSection === link.label ? "text-yellow-200" : ""
              }`}
            >
              <button
                onClick={() => handleClick(link.ref, link.label)}
                onMouseDown={(e) => e.preventDefault()}
                onBlur={(e) => e.target.blur()}
                className="hover:text-yellow-100 focus:outline-none"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%", scale: 0.95 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                x: "100%",
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-br from-[#5b4c91] to-[#8675bb] drop-shadow-2xl ring-2 ring-white/20 flex flex-col items-start pt-20 px-6 space-y-6 z-40"
            >
              <motion.button
                onClick={toggleMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="self-end mr-4 mb-4 hover:opacity-80"
              >
                <X size={32} className="text-black" />
              </motion.button>

              {navLinks.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleClick(link.ref, link.label)}
                  onMouseDown={(e) => e.preventDefault()}
                  onBlur={(e) => e.target.blur()}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-lg font-medium text-white transition text-left focus:outline-none inline-flex items-center space-x-2 ${
                    activeSection === link.label ? "text-yellow-200" : "hover:text-yellow-200"
                  }`}
                >
                  <span>{link.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;

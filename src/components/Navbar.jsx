import React from "react";
import { motion } from "framer-motion";

function Navbar({ scrollToSection, aboutRef, offerRef, howItWorksRef, opinionsRef, contactRef }) {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-700 via-teal-700 to-green-700 shadow-xl flex items-center justify-between px-10 z-50 font-poppins"
        >
            <h1 className="text-3xl font-bold text-white drop-shadow-sm">Piotr Gmitrzak Trening Językowy</h1>
            <ul className="flex space-x-8 text-white font-semibold text-lg">
                <li>
                    <button onClick={() => scrollToSection(aboutRef)} className="hover:text-yellow-100 transition-colors duration-200">O mnie</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(offerRef)} className="hover:text-yellow-100 transition-colors duration-200">Oferta</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(howItWorksRef)} className="hover:text-yellow-100 transition-colors duration-200">Jak to działa?</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(opinionsRef)} className="hover:text-yellow-100 transition-colors duration-200">Opinie</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-100 transition-colors duration-200">Kontakt</button>
                </li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({ scrollToSection, aboutRef, offerRef, howItWorksRef, opinionsRef, contactRef }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleClick = (ref) => {
        scrollToSection(ref);
        setIsOpen(false);
    };

    const navLinks = [
        { label: "O mnie 👋", ref: aboutRef },
        { label: "Na czym polegają zajęcia? ❓", ref: howItWorksRef },
        { label: "Oferta 📚", ref: offerRef },
        { label: "Opinie ⭐", ref: opinionsRef },
        { label: "Kontakt ☎️", ref: contactRef },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-xl flex items-center justify-between px-10 z-50 font-poppins"
        >
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">Piotr Gmitrzak Trening Językowy</h1>
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
                </button>
            </div>
            <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
                {navLinks.map((link, i) => (
                    <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button onClick={() => handleClick(link.ref)} className="hover:text-yellow-100 transition-colors duration-200">{link.label}</button>
                    </motion.li>
                ))}
            </ul>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 w-3/4 h-screen bg-white/30 backdrop-blur-lg shadow-xl flex flex-col items-center justify-center space-y-6 z-40"
                    >
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={i}
                                onClick={() => handleClick(link.ref)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-2xl font-semibold text-white drop-shadow hover:text-yellow-100 transition"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;

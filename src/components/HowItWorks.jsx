import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faBookOpen, faUser, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";

function HowItWorks({ howItWorksRef, scrollToSection, offerRef }) {
    const methods = [
        {
            title: "Komunikacja",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing...",
            icon: <FontAwesomeIcon icon={faVolumeUp} className="h-8 w-8 text-indigo-600 mb-4" />
        },
        {
            title: "Gramatyka w praktyce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing...",
            icon: <FontAwesomeIcon icon={faBookOpen} className="h-8 w-8 text-indigo-600 mb-4" />
        },
        {
            title: "Personalizacja",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing...",
            icon: <FontAwesomeIcon icon={faUser} className="h-8 w-8 text-indigo-600 mb-4" />
        },
        {
            title: "Motywacja i wsparcie",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing...",
            icon: <FontAwesomeIcon icon={faHandsHelping} className="h-8 w-8 text-indigo-600 mb-4" />
        }
    ];

    return (
        <motion.section
            ref={howItWorksRef}
            className="py-24 px-8 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="parallax-background"></div>
            <h2 className="text-5xl font-semibold mb-12 text-indigo-700 text-center">Jak wyglądają zajęcia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {methods.map((method, i) => (
                    <motion.div
                        key={i}
                        className="bg-gradient-to-r from-indigo-50 via-pink-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        whileHover={{
                            scale: 1.05, 
                            y: -6, 
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        {method.icon}
                        <h3 className="text-2xl font-bold mb-4 text-indigo-600">{method.title}</h3>
                        <p className="text-gray-700 text-sm">{method.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center">
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition w-fit self-start"
                    onClick={() => scrollToSection(offerRef)}
                >
                    Sprawdź ofertę 📋
                </motion.button>
            </div>
        </motion.section>
    );
}

export default HowItWorks;

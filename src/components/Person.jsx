import { motion } from "framer-motion";

function Person({ scrollToSection, contactRef }) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col justify-center items-center text-center pt-24"
        >
            <h2 className="text-5xl font-bold mb-4 text-purple-700">Zacznij mówić po angielsku pewnie!</h2>
            <p className="text-lg max-w-xl mb-6 text-gray-600">Indywidualne lekcje online przez Skype lub Discord, wsparcie na platformie edukacyjnej i praktyczne podejście do języka.</p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:brightness-110 transition shadow-lg"
                onClick={() => scrollToSection(contactRef)}
            >
                Umów się na lekcję
            </motion.button>
        </motion.section>
    );
}

export default Person;

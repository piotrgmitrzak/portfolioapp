import { motion } from "framer-motion";

function Home({ scrollToSection, aboutRef, contactRef }) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col justify-center items-center text-center px-4 gap-4"
        >
            <h2 className="text-5xl font-bold mb-4 text-indigo-700">
                🎓 Poczuj się pewnie w rozmowie po angielsku! ✨
            </h2>
            <p className="text-lg max-w-2xl mb-4 text-gray-700 leading-relaxed">
                👋 Cześć! Nazywam się <strong>Piotr Gmitrzak</strong> 🧑‍🏫 i pomagam uczniom osiągać ich cele językowe w przyjaznej atmosferze 😊.<br/>
                🖥️ Uczę online przez <strong>Skype</strong> lub <strong>Discord</strong>, zapewniam wsparcie na platformie edukacyjnej 🗂️ i skupiam się na praktycznym użyciu języka 💬.
            </p>
            <p className="text-md max-w-xl mb-6 text-gray-700 leading-relaxed">
                ✅ Indywidualne podejście <br/>
                ✅ Przyjazna atmosfera <br/>
                ✅ Skuteczne przygotowanie do egzaminów, pracy i podróży ✈️
            </p>

            <div className="flex flex-wrap justify-center gap-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 py-4 rounded-2xl hover:brightness-105 transition shadow-lg"
                    onClick={() => scrollToSection(contactRef)}
                >
                    ✍️ Zapisz się już teraz! 📞
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 py-4 rounded-2xl hover:brightness-105 transition shadow-lg"
                    onClick={() => scrollToSection(aboutRef)}
                >
                    👀 Poznaj mnie bliżej ⬇️
                </motion.button>
            </div>
        </motion.section>
    );
}

export default Home;

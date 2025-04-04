import { motion } from "framer-motion";

function Home({ scrollToSection, aboutRef, contactRef }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10 pt-24 gap-6 sm:gap-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700 leading-snug sm:leading-snug md:leading-tight mb-2 sm:mb-4">
        🎓 Poczuj się pewnie w rozmowie po angielsku! ✨
      </h2>

      <p className="text-base sm:text-lg max-w-2xl text-gray-700 leading-relaxed sm:leading-relaxed">
        👋 Cześć! Nazywam się <strong>Piotr Gmitrzak</strong> i pomagam uczniom osiągać ich cele językowe w przyjaznej atmosferze 😊.<br />
        🖥️ Uczę online przez <strong>Skype</strong> lub <strong>Discord</strong>, zapewniam wsparcie na platformie edukacyjnej 🗂️ i skupiam się na praktycznym użyciu języka.
      </p>

      <p className="text-sm sm:text-md max-w-xl text-gray-700 leading-relaxed sm:leading-relaxed">
        ✅ Indywidualne podejście <br />
        ✅ Przyjazna atmosfera <br />
        ✅ Skuteczne przygotowanie do egzaminów, pracy i podróży ✈️
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:brightness-105 transition shadow-lg text-sm sm:text-base"
          onClick={() => scrollToSection(contactRef)}
        >
          ✍️ Zapisz się już teraz! 📞
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:brightness-105 transition shadow-lg text-sm sm:text-base"
          onClick={() => scrollToSection(aboutRef)}
        >
          👀 Poznaj mnie bliżej ⬇️
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Home;
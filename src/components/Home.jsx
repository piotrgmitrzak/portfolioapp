import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home({ scrollToSection, aboutRef, contactRef }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center px-4"
    >
      {/* Efekt paralaksy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.1), transparent 80%)`,
        }}
      />

      <div className="z-10 max-w-5xl text-center flex flex-col items-center gap-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-700 leading-tight drop-shadow-lg"
        >
          Twój osobisty <br />
          <span className="bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
            Trening Językowy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 text-lg sm:text-xl max-w-2xl leading-relaxed"
        >
          Prowadzę intensywne kursy językowe dla młodzieży szkół średnich i osób dorosłych, nastawione na praktyczne użycie języka w <strong>codziennych sytuacjach</strong>. 
          Koncentrujemy się na rozwijaniu płynności w mówieniu, budowaniu dyscypliny w nauce oraz kształtowaniu nawyku systematycznej pracy. U nas liczy się rozmowa, zaangażowanie i realny postęp.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl hover:brightness-110 transition text-base sm:text-lg"
            onClick={() => scrollToSection(contactRef)}
          >
            Zapisz się teraz ✍️
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-2xl shadow-sm hover:bg-indigo-50 transition text-base sm:text-lg"
            onClick={() => scrollToSection(aboutRef)}
          >
            Poznaj mnie bliżej 🤝
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white/80 border border-indigo-200 rounded-xl px-4 py-3 text-sm sm:text-base text-gray-800 shadow-md backdrop-blur-sm"
        >
          ❗ Pierwsza lekcja bez ryzyka: <strong>nie pasuje? Oddaję Ci pieniądze!</strong>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,80 1080,0 1440,60 L1440,100 L0,100 Z"
            fill="#7dd3fc"
          />
        </svg>
      </div>
    </motion.section>
  );
}

export default Home;

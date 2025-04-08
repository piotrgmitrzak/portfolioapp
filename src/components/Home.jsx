import { motion } from "framer-motion";

function Home({ scrollToSection, aboutRef, contactRef }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4 py-20 sm:py-28">
      
      <div className="bubbles-container">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
        <div className="bubble bubble6"></div>
      </div>

      <div className="z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-indigo-700 drop-shadow-lg"
        >
          Twój osobisty <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Trening Językowy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg"
        >
          Prowadzę <strong>intensywne kursy językowe</strong> dla młodzieży szkół średnich i osób dorosłych, nastawione na praktyczne użycie języka w <strong>codziennych sytuacjach.</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg"
        >
          Koncentrujemy się na rozwijaniu płynności w mówieniu, budowaniu dyscypliny w nauce oraz kształtowaniu nawyku systematycznej pracy. U nas liczy się <strong>rozmowa, zaangażowanie i realny postęp.</strong>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="rounded-xl border border-indigo-200 bg-white/80 px-4 py-3 text-sm text-gray-800 shadow-md backdrop-blur-sm sm:text-base"
        >
          Lekcja próbna bez żadnych opłat! 🎁
        </motion.div>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs sm:w-fit bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-5 py-2.5 rounded-2xl shadow-lg hover:brightness-110 transition text-sm sm:text-base"
            onClick={() => scrollToSection(contactRef)}
          >
            Zapisz się już teraz ✍️
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs sm:w-fit bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-5 py-2.5 rounded-2xl shadow-lg hover:brightness-110 transition text-sm sm:text-base"
            onClick={() => scrollToSection(aboutRef)}
          >
            Poznaj mnie bliżej 🤝
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="wave-animation relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b0e2f9" />
              <stop offset="50%" stopColor="#a7d9f3" />
              <stop offset="100%" stopColor="#9fcee8" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
            fill="url(#aboutWaveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}

export default Home;

import { motion } from "framer-motion";
import zdjecie from "../assets/zdjeciePortfoli.png";
import "../About.css";

function About({ aboutRef, howItWorksRef, scrollToSection }) {
  return (
    <motion.section
      ref={aboutRef}
      className="relative w-full pt-12 pb-24 px-4 sm:px-6 md:px-8 flex flex-col items-center animated-gradient"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <h2 className="text-5xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-[#2C3E50] text-center">
          O mnie 🧑‍🏫
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        <div className="perspective-container mt-1 sm:mt-2 md:mt-3">
        <motion.img
          src={zdjecie}
          alt="zdjeciePortfolio"
          className="hover-optimized object-cover rounded-3xl shadow-2xl w-52 sm:w-64 md:w-full md:max-w-md z-10"
          initial={{ y: 0, scale: 1 }}
          whileHover={{
            y: -6,
            scale: 1.04,
            boxShadow: "0 10px 24px rgba(0,0,0,0.15)"
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        </div>
          <div className="flex flex-col text-center md:text-left items-center md:items-start max-w-xl">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
              Cześć! Nazywam się EMEK i jestem pasjonatką nauki języków, kotów i dobrej kawy.
              Od kilku lat pomagam innym w nauce angielskiego w sposób przyjazny i praktyczny.
              Na co dzień tworzę materiały edukacyjne, uczę online i staram się, aby każda lekcja
              była nie tylko skuteczna, ale i przyjemna.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-5 py-2.5 rounded-2xl shadow-lg hover:brightness-110 transition w-fit self-center md:self-start text-sm sm:text-base"
              onClick={() => scrollToSection(howItWorksRef)}
            >
              Jak wyglądają zajęcia? 💬
            </motion.button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="wave-animation relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </motion.section>
  );
}
export default About;
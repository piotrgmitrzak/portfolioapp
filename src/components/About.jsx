import { motion } from "framer-motion";
import personWithCat from "../assets/476657017_987129602998403_6825080812416126678_n-removebg-preview.png";
import "../About.css";

function About({ aboutRef }) {
  return (
    <motion.section
      ref={aboutRef}
      className="relative w-full pt-20 pb-12 px-8 flex items-center justify-center overflow-hidden animated-gradient"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl w-full mx-auto relative z-10 mt-0">
        <h2 className="text-6xl font-extrabold mb-8 text-purple-700 text-center mt-20">
          O mnie 🧑‍🏫
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={personWithCat}
              alt="Osoba z kotem"
              className="object-contain"
              style={{
                transform: "translateY(-120px) translateX(-70px) scale(1.2)",
              }}
            />
          </div>
          <p className="max-w-lg text-gray-800 text-xl leading-8 text-left -mt-10">
            Cześć! Nazywam się EMEK i jestem pasjonatką nauki języków, kotów i dobrej kawy.
            Od kilku lat pomagam innym w nauce angielskiego w sposób przyjazny i praktyczny.
            Na co dzień tworzę materiały edukacyjne, uczę online i staram się, aby każda lekcja
            była nie tylko skuteczna, ale i przyjemna.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="wave-animation relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </motion.section>
  );
}

export default About;

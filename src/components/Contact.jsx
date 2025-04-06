import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "../offer.css";

function Contact({ contactRef }) {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState(null);

  const launchConfetti = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
  
    const colors = ["#bb0000", "#ffffff", "#00bb00", "#0000bb", "#fbbf24", "#ec4899"];
  
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 20;
  
      confetti({
        particleCount,
        origin: { x: 0, y: Math.random() },
        angle: 60,
        spread: 80,
        startVelocity: 45,
        colors,
      });
  
      confetti({
        particleCount,
        origin: { x: 1, y: Math.random() },
        angle: 120,
        spread: 80,
        startVelocity: 45,
        colors,
      });
    }, 200);
  };  

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);

    emailjs
      .sendForm(
        "service_u2ltxem",
        "template_h6egcbw",
        formRef.current,
        "Vya7kSvlmI5yh0ixq"
      )
      .then(
        () => {
          setShowOverlay(true);
          setSent(true);
          launchConfetti();
          formRef.current.reset();
          setTimeout(() => {
            setShowOverlay(false);
            setSent(false);
          }, 4000);
        },
        () => {
          setError("Wystąpił błąd podczas wysyłania wiadomości.");
        }
      );
  };

  return (
    <>
      <motion.section
        ref={contactRef}
        className="w-full min-h-screen py-24 px-0 offer-gradient flex flex-col items-center space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-4xl px-6 space-y-8">
          <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-4">Jeśli jesteś zainteresowany(-a), napisz!</p>
          {error && <p className="text-red-500">{error}</p>}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full"
          >
            <div className="flex flex-col space-y-4 w-full">
              <div className="w-full">
                <label className="text-gray-700">
                  Imię i nazwisko<span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Wpisz swoje imię"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-gray-700">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Wpisz swój e-mail"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-gray-700">
                  Temat <span className="text-red-500">*</span>
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Podaj temat"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-gray-700">
                  Twoja wiadomość <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Wpisz swoją wiadomość"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Wyślij Wiadomość
            </button>
          </form>
        </div>
        <div className="w-full max-w-4xl px-6 space-y-8 mt-12">
          <h3 className="text-3xl font-semibold text-indigo-700">Dane Kontaktowe</h3>
          <p className="text-lg text-gray-700">📞 Tel: 531-904-909</p>
          <p className="text-lg text-gray-700">📧 Email: piotr.gmitrzak@gmail.com</p>
          <p className="text-lg text-gray-700">
            🌍 Platforma Edukacyjna:{" "}
            <a
              href="https://www.studentcampus.pl"
              className="text-indigo-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.studentcampus.pl
            </a>
          </p>
        </div>
      </motion.section>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center text-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-green-400 mb-6"
              >
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-3xl font-semibold text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Wiadomość wysłana!
              </motion.h3>
              <p className="text-lg text-gray-300 mt-2">Dziękujemy za kontakt 😊</p>
              <p className="text-lg text-gray-300 mt-2">Odezwiemy się wkrótce!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;

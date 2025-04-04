import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact({ contactRef }) {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2ltxem",
        "template_h6egcbw",
        formRef.current,
        "Vya7kSvlmI5yh0ixq"
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          setShowOverlay(true);
          setSent(true);
          formRef.current.reset();
          setTimeout(() => {
            setShowOverlay(false);
            setSent(false);
          }, 4000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Wystąpił błąd podczas wysyłania wiadomości.");
        }
      );
  };

  return (
    <>
      <motion.section
        ref={contactRef}
        className="w-full min-h-screen py-24 px-0 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 flex flex-wrap lg:flex-nowrap justify-between space-x-0 lg:space-x-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-[800px] ml-0 sm:ml-auto px-6 lg:pl-48 xl:pl-64 space-y-8">
          <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-4">
            Jeśli jesteś zainteresowany(-a), napisz!
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <label className="text-gray-700">
                  Imię <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Wpisz swoje imię"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-gray-700">
                  Nazwisko <span className="text-red-500">*</span>
                </label>
                <input
                  name="surname"
                  type="text"
                  placeholder="Wpisz swoje nazwisko"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Wpisz swój e-mail"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="text-gray-700">
                Temat <span className="text-red-500">*</span>
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Podaj temat"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="text-gray-700">
                Twoja wiadomość <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Wpisz swoją wiadomość"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Wyślij Wiadomość
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 px-6 space-y-8">
          <h3 className="text-2xl font-semibold text-indigo-600">Dane Kontaktowe</h3>
          <p className="text-lg text-gray-700">📞 Tel: 123-456-789</p>
          <p className="text-lg text-gray-700">📧 Email: kontakt@example.com</p>
          <p className="text-lg text-gray-700">
            🌐 Platforma Edukacyjna:{" "}
            <a
              href="https://www.google.com"
              className="text-indigo-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.platforma.edu
            </a>
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-indigo-600">Social Media</h4>
            <div className="flex justify-start space-x-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={35} className="text-blue-600 hover:text-blue-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35} className="text-pink-500 hover:text-pink-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={35} className="text-blue-700 hover:text-blue-600" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={35} className="text-blue-500 hover:text-blue-400" />
              </a>
            </div>
          </div>
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-green-400 mb-6"
              >
                <svg
                  className="w-24 h-24 mx-auto"
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
                transition={{ delay: 0.3 }}
              >
                Wiadomość wysłana!
              </motion.h3>
              <p className="text-lg text-gray-300 mt-2">Dziękuję za kontakt 😊</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;

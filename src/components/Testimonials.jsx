import { motion } from "framer-motion";

const opinions = [
    { name: "Monika", text: "Zajęcia z Piotrem to zupełnie inne podejście niż w szkole. Wszystko po angielsku, ale bez stresu. Polecam każdemu!" },
    { name: "Dariusz", text: "Bardzo cenię sobie to, że każda lekcja jest dopasowana do moich tematów i realnych potrzeb zawodowych." },
    { name: "Bartosz", text: "Zrozumiałem, że nauka języka może być logiczna i przyjemna, jeśli ktoś pokaże Ci, jak robić to z głową. Piotr to potrafi." },
    { name: "Anna", text: "Piotrek pokazuje, że codzienna praktyka i konkretny cel są ważniejsze niż podręczniki. Dzięki niemu robię szybkie postępy." },
    { name: "Julia", text: "Zajęcia są przemyślane, dynamiczne i dobrze zorganizowane. Czuję, że wykorzystuję każdą minutę efektywnie." }
  ];  

  function Testimonials({ opinionsRef, contactRef, scrollToSection }){
    return (
        <section
            ref={opinionsRef}
            className="py-24 px-6 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 overflow-hidden"
        >
            <motion.h2
                className="text-5xl font-semibold mb-16 text-indigo-700 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Opinie kursantów
            </motion.h2>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex gap-8 w-max pointer-events-none pb-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 120, ease: "linear", repeat: Infinity }}
                >
                    {[...opinions, ...opinions].map((opinion, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[300px] max-w-[300px] bg-[#FFFCF2] rounded-2xl p-6 shadow-lg text-gray-800 flex flex-col justify-between border border-white/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.04 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-sm italic mb-4 leading-relaxed">"{opinion.text}"</p>
                            <div className="mt-auto">
                                <h3 className="text-md font-bold text-indigo-700">{opinion.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition"
                    onClick={() => scrollToSection(contactRef)}
                >
                    Czekam na Twoją wiadomość! 📩
                </motion.button>
            </motion.div>
        </section>
    );}
export default Testimonials;

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function Offer({ offerRef, opinionsRef, scrollToSection }) {
    const offers = [
        {
            title: "Indywidualne zajęcia",
            description: "Zajęcia 1:1 dostosowane w 100% do Twoich potrzeb. Mówienie, gramatyka i słownictwo w praktyce.",
            price: "od 120 zł / 60 min"
        },
        {
            title: "Zajęcia w parach",
            description: "Świetna opcja dla znajomych, par lub współpracowników. Uczysz się i motywujesz razem.",
            price: "od 80 zł / osoba / 60 min"
        },
        {
            title: "Kurs intensywny",
            description: "Dla osób, które potrzebują szybkiego postępu. Idealny przed wyjazdem, egzaminem lub awansem.",
            price: "od 100 zł / 60 min"
        }
    ];

    return (
        <motion.section
            ref={offerRef}
            className="relative py-24 px-8 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 rounded-t-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="wave-animation relative block w-[calc(100%+1.3px)] h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="white"></path>
                </svg>
            </div>

            <h2 className="text-4xl font-semibold mb-12 text-indigo-700 text-center drop-shadow-sm">Oferta</h2>
            <div className="flex flex-col gap-8 max-w-3xl mx-auto mb-12">
                {offers.map((offer, i) => (
                    <motion.div
                        key={i}
                        className="flex items-start gap-4 bg-white/50 backdrop-blur-md p-4 rounded-xl hover:scale-[1.02] transition-transform"
                        whileHover={{ x: 5 }}
                    >
                        <CheckCircle className="text-indigo-600 w-8 h-8 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-600 mb-1">{offer.title}</h3>
                            <p className="text-gray-700">{offer.description}</p>
                            <p className="text-indigo-600 font-semibold mt-1">{offer.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition w-fit self-start"
                    onClick={() => scrollToSection(opinionsRef)}
                >
                    🗣️ Zobacz opinie 🙌
                </motion.button>
            </div>
        </motion.section>
    );
}

export default Offer;

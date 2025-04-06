import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../offer.css";

function Offer({ offerRef, opinionsRef, scrollToSection }) {
    const offers = [
        {
            title: "Indywidualne zajęcia",
            description: "Zajęcia 1:1 dostosowane w 100% do Twoich potrzeb. Mówienie, gramatyka i słownictwo w praktyce.",
            price: "od 198 zł / 55 min",
            icon: (
                <CheckCircle className="w-8 h-8 text-indigo-600" />
            )
        },
        {
            title: "Indywidualne zajęcia - Zniżka dla dwóch osób",
            description: "Zapisz się razem ze znajomym, partnerem lub współpracownikiem. Każda osoba otrzyma zniżkę na indywidualne, 		spersonalizowane lekcje. Uczycie się osobno, ale motywujecie razem!",
            price: "od 175 zł / osoba / 55 min",
            icon: (
                <CheckCircle className="w-8 h-8 text-indigo-600" />
            )
        },
        {
            title: "Kurs dla firm",
            description: "Przy grupie od 5 osób oferujemy atrakcyjne zniżki. Każdy uczestnik otrzymuje indywidualny, spersonalizowany kurs dostosowany do swoich potrzeb i celów.",
            price: "Zadzwoń, aby poznać ofertę dopasowaną do Twojej firmy.",
            icon: (
                <CheckCircle className="w-8 h-8 text-indigo-600" />
            )
        }
    ];

    return (
        <motion.section
            ref={offerRef}
            className="relative py-24 px-8 offer-gradient overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 -mt-[1px]">
                <svg
                    className="wave-animation relative block w-[calc(100%+1.3px)] h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="white"></path>
                </svg>
            </div>

            <h2 className="text-5xl font-semibold mb-12 text-indigo-700 text-center drop-shadow-sm">Oferta</h2>
            <div className="flex flex-col gap-8 max-w-3xl mx-auto mb-12">
                {offers.map((offer, i) => (
                    <motion.div
                        key={i}
                        className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:scale-[1.05] transition-transform"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="flex items-center justify-center">
                            {offer.icon}
                        </div>
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
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition w-fit self-start"
                    onClick={() => scrollToSection(opinionsRef)}
                >
                     Zobacz opinie 🙌
                </motion.button>
            </div>
        </motion.section>
    );
}

export default Offer;
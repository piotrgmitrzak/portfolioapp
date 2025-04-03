import { motion } from "framer-motion";

function HowItWorks({ howItWorksRef, scrollToSection, offerRef }) {
    const methods = [
        {
            title: "Komunikacja",
            description: "Stawiamy na mówienie od pierwszych zajęć. Realne sytuacje, przydatne zwroty i płynność w rozmowie."
        },
        {
            title: "Gramatyka w praktyce",
            description: "Bez suchej teorii! Uczysz się gramatyki w kontekście, dzięki czemu szybciej ją zapamiętujesz."
        },
        {
            title: "Personalizacja",
            description: "Program dostosowany do Twoich potrzeb - praca, podróże, życie codzienne? Ty wybierasz!"
        },
        {
            title: "Motywacja i wsparcie",
            description: "Zajęcia w pozytywnej atmosferze, stałe wsparcie i praktyczne wskazówki, jak się uczyć skutecznie."
        }
    ];

    return (
        <motion.section
            ref={howItWorksRef}
            className="py-24 px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div ref={howItWorksRef} className="relative -top-40"></div>
            <h2 className="text-4xl font-semibold mb-12 text-indigo-700 text-center">Jak wyglądają zajęcia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {methods.map((method, i) => (
                    <motion.div
                        key={i}
                        className="bg-gradient-to-r from-indigo-50 via-pink-50 to-purple-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-indigo-600">{method.title}</h3>
                        <p className="text-gray-700 text-sm">{method.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition w-fit self-start"
                    onClick={() => scrollToSection(offerRef)}
                >
                     Sprawdź ofertę 📋
                </motion.button>
            </div>
        </motion.section>
    );
}

export default HowItWorks;

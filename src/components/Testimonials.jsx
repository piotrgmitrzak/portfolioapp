import { motion } from "framer-motion";

const opinions = [
    { name: "Monika Wakuła", job: "Piękne PHUDU", avatar: "https://randomuser.me/api/portraits/women/11.jpg", text: "Piotr to świetny trener! Lekcje są zawsze dynamiczne i dobrze przemyślane." },
    { name: "Jakub Kotkiewicz", job: "Frontend Developer", avatar: "https://randomuser.me/api/portraits/men/12.jpg", text: "Dzięki Piotrowi w końcu przestałem bać się mówić po angielsku!" },
    { name: "Marcin Kurcewicz", job: "Studentka Filologii Angielskiej", avatar: "https://randomuser.me/api/portraits/women/13.jpg", text: "Rewelacyjne podejście do ucznia i ogrom cierpliwości. Polecam!" },
    { name: "Schabu 13", job: "Marketing Specialist", avatar: "https://randomuser.me/api/portraits/men/14.jpg", text: "Piotr ma ogromną wiedzę i potrafi ją przekazać w prosty sposób." },
    { name: "Beata Kotkiewicz", job: "Project Manager", avatar: "https://randomuser.me/api/portraits/women/15.jpg", text: "Zajęcia są ciekawe, różnorodne i dostosowane do moich potrzeb." },
    { name: "Robert Drogi", job: "Inżynier", avatar: "https://randomuser.me/api/portraits/men/16.jpg", text: "Piotr motywuje do działania i pomaga przełamać barierę językową." },
    { name: "Cipek Grochowski", job: "Graphic Designer", avatar: "https://randomuser.me/api/portraits/women/17.jpg", text: "Super atmosfera, świetne materiały i widoczne efekty nauki!" },
    { name: "Łukasz Radomyski", job: "Konsultant Biznesowy", avatar: "https://randomuser.me/api/portraits/men/18.jpg", text: "Polecam każdemu, kto chce nauczyć się mówić bez stresu." },
    { name: "Klaudia Strawa", job: "Studentka Informatyki", avatar: "https://randomuser.me/api/portraits/women/19.jpg", text: "Nigdy wcześniej nauka nie była dla mnie tak przyjemna jak z Piotrem!" },
    { name: "Cipek Radomyski", job: "Analityk Finansowy", avatar: "https://randomuser.me/api/portraits/men/20.jpg", text: "Piotr potrafi idealnie dobrać tematykę do mojej branży. Mega profesjonalizm!" },
    { name: "Martyna Szymańska", job: "UX Designer", avatar: "https://randomuser.me/api/portraits/women/21.jpg", text: "Każda lekcja z Piotrem to czysta przyjemność. Polecam z całego serca!" },
    { name: "Adrian Zawadzki", job: "Specjalista ds. Sprzedaży", avatar: "https://randomuser.me/api/portraits/men/22.jpg", text: "Lekcje są intensywne, ale efekty widać już po kilku tygodniach." },
    { name: "Julia Baran", job: "Tłumaczka", avatar: "https://randomuser.me/api/portraits/women/23.jpg", text: "Piotr to nie tylko trener, ale i świetny motywator. Dziękuję!" },
    { name: "Paweł Michalski", job: "Prawnik", avatar: "https://randomuser.me/api/portraits/men/24.jpg", text: "Dzięki Piotrowi zdałem egzamin językowy na 5! Polecam!" },
];

function Testimonials({ opinionsRef, contactRef, scrollToSection }) {
    return (
        <section
            ref={opinionsRef}
            className="py-24 px-8 relative overflow-hidden bg-white"
        >
            <motion.h2
                className="text-5xl font-semibold mb-12 text-indigo-700 text-center relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Opinie kursantów
            </motion.h2>

            <div className="relative w-full overflow-hidden z-10">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 80, ease: "linear", repeat: Infinity }}
                >
                    {[...opinions, ...opinions].map((opinion, i) => (
                        <motion.div
                            key={i}
                            className={`min-w-[280px] max-w-[280px] bg-[#FFFCF2] rounded-2xl p-6 shadow-md flex flex-col items-center gap-3 ${i === 0 ? 'border-4 border-indigo-600' : ''}`}
                            style={{
                                paddingBottom: "40px",
                                marginBottom: "15px",
                            }}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <motion.img
                                src={opinion.avatar}
                                alt={opinion.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <h3 className="text-md font-semibold text-indigo-600">{opinion.name}</h3>
                            <p className="text-sm text-gray-700">{opinion.job}</p>
                            <p className="text-gray-700 text-sm text-center italic">"{opinion.text}"</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:brightness-110 transition"
                    onClick={() => scrollToSection(contactRef)}
                >
                    😎 Czekam na Twoją wiadomość! 📩
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Testimonials;

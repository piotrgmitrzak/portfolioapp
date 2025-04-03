import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact({ contactRef }) {
    return (
        <motion.section 
            ref={contactRef} 
            className="py-24 px-8 bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 flex justify-between space-x-48"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Kontakt</h2>
                <p className="text-lg text-gray-700 mb-4">Jeśli jesteś zainteresowany, napisz do nas!</p>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="relative w-1/2">
                            <label className="text-gray-700">Imię <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                placeholder="Wpisz swoje imię" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="relative w-1/2">
                            <label className="text-gray-700">Nazwisko <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                placeholder="Wpisz swoje nazwisko" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label className="text-gray-700">E-mail <span className="text-red-500">*</span></label>
                        <input 
                            type="email" 
                            placeholder="Wpisz swój e-mail" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="text-gray-700">Temat <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            placeholder="Podaj temat" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="text-gray-700">Twoja wiadomość <span className="text-red-500">*</span></label>
                        <textarea 
                            placeholder="Wpisz swoją wiadomość" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 px-6 bg-indigo-700 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Wyślij Wiadomość
                    </button>
                </form>
            </div>
            <div className="flex-1 space-y-8">
                <h3 className="text-2xl font-semibold text-indigo-600">Dane Kontaktowe</h3>
                <p className="text-lg text-gray-700">📞 Tel: 123-456-789</p>
                <p className="text-lg text-gray-700">📧 Email: kontakt@example.com</p>
                <p className="text-lg text-gray-700">🌐 Platforma Edukacyjna: <a href="https://www.google.com" className="text-indigo-700 hover:underline" target="_blank" rel="noopener noreferrer">www.platforma.edu</a></p>

                <div className="mt-6">
                    <h4 className="text-xl font-semibold text-indigo-600">Social Media</h4>
                    <div className="flex justify-start space-x-6 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={35} className="text-blue-600 hover:text-blue-500"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={35} className="text-pink-500 hover:text-pink-400"/>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={35} className="text-blue-700 hover:text-blue-600"/>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={35} className="text-blue-500 hover:text-blue-400"/>
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white py-8 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Piotr Gmitrzak Trening Językowy | Wszystkie prawa zastrzeżone</p>
                <p className="text-sm mt-4">
                    <a href="/polityka-prywatnosci" className="underline hover:text-yellow-100 transition-colors duration-200">
                        Polityka prywatności
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;

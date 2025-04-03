function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white py-4 text-center rounded-t-2xl">
            <p>&copy; {new Date().getFullYear()} Piotr Gmitrzak Trening Językowy | Wszystkie prawa zastrzeżone</p>
            <p className="text-sm mt-1">
                <a href="/polityka-prywatnosci" className="underline hover:text-yellow-100 transition-colors duration-200">
                    Polityka prywatności
                </a>
            </p>
        </footer>
    );
}

export default Footer;

function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 font-poppins">
            <h1 className="text-3xl font-bold mb-6">Polityka prywatności</h1>

            <p className="mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przez Piotra Gmitrzaka w związku z
                prowadzeniem strony internetowej i świadczeniem usług językowych online.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Administrator danych osobowych</h2>
            <p className="mb-4">
                Administratorem danych jest Piotr Gmitrzak, prowadzący działalność edukacyjną w zakresie treningu językowego.
                Kontakt: <a href="mailto:piotrgmitrzak@gmail.pl" className="underline">piotrgmitrzak@gmail.pl</a>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Zakres i cel zbierania danych</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Imię i adres e-mail – w celu odpowiedzi na zapytanie przesłane przez formularz kontaktowy.</li>
                <li>Dane techniczne (adres IP, przeglądarka) – w celach analitycznych, jeśli używane są narzędzia typu Google Analytics.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Podstawy prawne przetwarzania danych</h2>
            <p className="mb-4">
                Dane są przetwarzane na podstawie art. 6 ust. 1 lit. a (zgoda) oraz f (prawnie uzasadniony interes administratora) RODO.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Czas przechowywania danych</h2>
            <p className="mb-4">
                Dane są przechowywane przez okres niezbędny do realizacji celu, w którym zostały zebrane, lub do momentu wycofania zgody.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Prawa użytkownika</h2>
            <ul className="list-disc pl-6 mb-4">
                <li>Prawo dostępu do danych</li>
                <li>Prawo do ich sprostowania</li>
                <li>Usunięcia lub ograniczenia przetwarzania</li>
                <li>Wycofania zgody</li>
                <li>Wniesienia skargi do Prezesa UODO</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Pliki cookies</h2>
            <p className="mb-4">
                Strona może wykorzystywać pliki cookies w celu poprawy działania i analizowania ruchu. Użytkownik może zarządzać cookies w ustawieniach przeglądarki.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Zmiany w polityce</h2>
            <p className="mb-4">
                Polityka prywatności może być okresowo aktualizowana. Wszelkie zmiany będą publikowane na tej stronie.
            </p>

            <p className="text-sm text-gray-600 mt-10">Data ostatniej aktualizacji: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default PrivacyPolicy;

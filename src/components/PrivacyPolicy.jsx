function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 font-poppins bg-white/90 rounded-2xl shadow-xl backdrop-blur-md">
            <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">
                Polityka prywatności
            </h1>

            <p className="mb-6 text-[#3a3a3a]">
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przez Piotra Gmitrzaka w związku z prowadzeniem strony internetowej i świadczeniem usług językowych online.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§1. Administrator danych osobowych</h2>
            <p className="mb-6 text-[#3a3a3a]">
                Administratorem danych jest Piotr Gmitrzak, prowadzący działalność edukacyjną w zakresie treningu językowego.
                Kontakt: <a href="mailto:piotrgmitrzak@gmail.pl" className="text-blue-600 underline">piotrgmitrzak@gmail.pl</a>. Administrator nie wyznaczył inspektora ochrony danych.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§2. Zakres i cel zbierania danych</h2>
            <ul className="list-disc pl-6 mb-6 text-[#3a3a3a] space-y-2">
                <li>Imię, nazwisko, adres e-mail i numer telefonu – w celu realizacji zapisów, kontaktu oraz świadczenia usług językowych online.</li>
                <li>Dane rozliczeniowe (adres, NIP) – w celu wystawienia faktur i spełnienia obowiązków podatkowych.</li>
                <li>Dane techniczne (adres IP, przeglądarka) – w celach analitycznych i poprawy działania strony, jeśli używane są narzędzia takie jak Google Analytics.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§3. Podstawy prawne przetwarzania danych</h2>
            <ul className="list-disc pl-6 mb-6 text-[#3a3a3a] space-y-2">
                <li>Art. 6 ust. 1 lit. a RODO – zgoda użytkownika (np. kontakt przez formularz).</li>
                <li>Art. 6 ust. 1 lit. b RODO – wykonanie umowy (np. zapis na zajęcia).</li>
                <li>Art. 6 ust. 1 lit. c RODO – obowiązki prawne (np. podatkowe).</li>
                <li>Art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora (np. analiza ruchu na stronie).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§4. Czas przechowywania danych</h2>
            <ul className="list-disc pl-6 mb-6 text-[#3a3a3a] space-y-2">
                <li>Dane kontaktowe – do czasu zakończenia korespondencji lub wycofania zgody.</li>
                <li>Dane usługowe i rozliczeniowe – przez czas trwania współpracy oraz do 6 lat po jej zakończeniu (w celach podatkowych).</li>
                <li>Dane analityczne – zgodnie z polityką narzędzi takich jak Google Analytics.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§5. Prawa użytkownika</h2>
            <ul className="list-disc pl-6 mb-6 text-[#3a3a3a] space-y-2">
                <li>Prawo dostępu do swoich danych.</li>
                <li>Prawo do ich sprostowania, usunięcia lub ograniczenia przetwarzania.</li>
                <li>Prawo do przenoszenia danych.</li>
                <li>Prawo do wycofania zgody w dowolnym momencie.</li>
                <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
                <li>Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>

            <p className="mb-6 text-[#3a3a3a]">
                W celu realizacji swoich praw, użytkownik może skontaktować się z administratorem za pośrednictwem adresu e-mail podanego w punkcie 1.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§6. Pliki cookies</h2>
            <p className="mb-6 text-[#3a3a3a]">
                Strona może wykorzystywać pliki cookies w celu prawidłowego działania oraz analizy statystyk odwiedzin. Użytkownik może zarządzać cookies w ustawieniach swojej przeglądarki. Strona może również korzystać z narzędzi analitycznych takich jak Google Analytics, które mogą zbierać dane techniczne (np. adres IP, informacje o urządzeniu).
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§7. Odbiorcy danych</h2>
            <p className="mb-6 text-[#3a3a3a]">
                Dane osobowe mogą być przekazywane zaufanym podmiotom przetwarzającym dane w imieniu Administratora, takim jak dostawcy usług IT, hostingu, poczty elektronicznej, platformy płatności lub platformy do spotkań online (np. Zoom, Google Meet) – wyłącznie w zakresie niezbędnym do realizacji usług. Wszystkie te podmioty są zobowiązane do zapewnienia odpowiednich środków ochrony danych.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-3 text-[#3a3a3a]">§8. Zmiany w polityce prywatności</h2>
            <p className="mb-6 text-[#3a3a3a]">
                Polityka prywatności może być okresowo aktualizowana. Nowa wersja będzie publikowana na tej stronie. W przypadku istotnych zmian użytkownicy mogą zostać poinformowani dodatkowo e-mailem lub poprzez komunikat na stronie.
            </p>

            <p className="text-sm text-gray-500 mt-12">Data ostatniej aktualizacji: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default PrivacyPolicy;

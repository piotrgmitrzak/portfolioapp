import { useCallback } from "react";

export function useScrollTo(navbarSelector = 'nav', extraOffset = 20) {
    return useCallback((ref) => {
        if (!ref?.current) return;

        const navbar = document.querySelector(navbarSelector);
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const y = ref.current.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }, [navbarSelector, extraOffset]);
}

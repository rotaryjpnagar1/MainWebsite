"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        toggleVisibility();
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className={`fixed bottom-36 lg:bottom-24 right-4 lg:right-8 z-40 bg-rotary-navy hover:bg-rotary-blue text-rotary-gold hover:text-white p-3 sm:p-3.5 rounded-full shadow-2xl border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group ${
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <FaArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="sr-only">Scroll to top</span>
        </button>
    );
}

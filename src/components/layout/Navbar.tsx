"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/projects", label: "Our Projects" },
    { href: "/#join-us", label: "Join Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-gradient-to-r from-gray-900 to-rotary-blue/90 text-gray-300 text-sm py-2 hidden lg:block border-b border-rotary-gold/20">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 text-gray-200">
                            <span className="text-rotary-gold">📍</span> JP Nagar, Bangalore, India
                        </span>
                        <a
                            href="mailto:rotarybangalorejpnagardist3191@gmail.com"
                            className="flex items-center gap-2 hover:text-white transition-colors group"
                        >
                            <span className="text-rotary-gold group-hover:scale-110 transition-transform">✉</span> Contact Us
                        </a>
                    </div>
                    <div className="flex items-center gap-5">
                        <a
                            href="https://www.facebook.com/rotaryjpnagar.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/rotaryjpnagar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href="https://www.youtube.com/@rotaryjpnagar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/85 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-2 border-b border-gray-100"
                    : "bg-white/95 backdrop-blur-sm shadow-sm py-4"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/images/icons/RotaryJPNagarLogo.png"
                                alt="Rotary Bangalore JP Nagar"
                                width={320}
                                height={90}
                                className="h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href ||
                                    (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                                                ? "bg-rotary-blue text-white shadow-md shadow-rotary-blue/20"
                                                : "text-gray-600 hover:text-rotary-blue hover:bg-rotary-blue/5"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2.5 rounded-full text-gray-700 hover:text-rotary-blue hover:bg-gray-100 transition-all"
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-2xl pb-6 px-6 animate-slide-up">
                        <ul className="flex flex-col gap-2 mt-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-5 py-3.5 rounded-xl text-base font-semibold transition-all ${isActive
                                                ? "bg-rotary-blue text-white shadow-md"
                                                : "text-gray-700 hover:bg-gray-50 hover:text-rotary-blue"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

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
            <div className="bg-gray-900 text-gray-300 text-sm py-2 hidden lg:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1">
                            <span>📍</span> JP Nagar, Bangalore, India
                        </span>
                        <a
                            href="mailto:rotarybangalorejpnagardist3191@gmail.com"
                            className="flex items-center gap-1 hover:text-rotary-gold transition-colors"
                        >
                            <span>✉</span> Contact Us
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/rotaryjpnagar.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rotary-gold transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={16} />
                        </a>
                        <a
                            href="https://www.instagram.com/rotaryjpnagar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rotary-gold transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="https://www.youtube.com/@rotaryjpnagar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rotary-gold transition-colors"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/icons/RotaryJPNagarLogo.png"
                                alt="Rotary Bangalore JP Nagar"
                                width={180}
                                height={50}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href ||
                                    (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                                    ? "text-rotary-green font-semibold border-b-2 border-rotary-green rounded-none"
                                                    : "text-gray-700 hover:text-rotary-green"
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
                            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-rotary-green hover:bg-gray-100 transition-colors"
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white pb-4 px-4 animate-fade-in">
                        <ul className="flex flex-col gap-1 mt-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive
                                                    ? "bg-rotary-green/10 text-rotary-green font-semibold"
                                                    : "text-gray-700 hover:bg-gray-50 hover:text-rotary-green"
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

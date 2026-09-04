"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { rotaryConfig } from "@/config/rotary-year";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Leadership" },
    { href: "/projects", label: "Projects" },
    { href: "/explore-rotary", label: "Explore Rotary" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change & lock scroll when open
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Info Bar */}
            <div className="bg-rotary-navy text-gray-300 text-xs py-2 hidden lg:block border-b border-white/10">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-gray-300 font-light">
                            <span className="text-rotary-gold">📍</span> {rotaryConfig.contact.address.locality}, Bengaluru
                        </span>
                        <a
                            href={`mailto:${rotaryConfig.contact.email}`}
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <span className="text-rotary-gold">✉</span> {rotaryConfig.contact.email}
                        </a>
                        <span className="text-rotary-gold font-medium bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                            RY {rotaryConfig.activeRotaryYear} • {rotaryConfig.presidentialMessage}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href={rotaryConfig.contact.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-rotary-gold transition-colors"
                            aria-label="Rotary JP Nagar on Facebook"
                        >
                            <FaFacebook size={15} />
                        </a>
                        <a
                            href={rotaryConfig.contact.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-rotary-gold transition-colors"
                            aria-label="Rotary JP Nagar on Instagram"
                        >
                            <FaInstagram size={15} />
                        </a>
                        <a
                            href={rotaryConfig.contact.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-rotary-gold transition-colors"
                            aria-label="Rotary JP Nagar on YouTube"
                        >
                            <FaYoutube size={15} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                aria-label="Main Navigation"
                className={`transition-all duration-300 ${
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
                        : "bg-white shadow-sm py-4"
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Club Logo & Brand */}
                        <Link id="navbar-brand-logo" href="/" className="flex items-center gap-3 group" aria-label="Rotary Bangalore JP Nagar Homepage">
                            <Image
                                src="/images/icons/RotaryJPNagarLogo.png"
                                alt="Rotary Bangalore JP Nagar Logo"
                                width={320}
                                height={95}
                                className="h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            <ul className="flex items-center gap-1">
                                {navLinks.map((link) => {
                                    const isActive =
                                        link.href === "/"
                                            ? pathname === "/"
                                            : pathname.startsWith(link.href);
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                id={`navlink-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                                                href={link.href}
                                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                                                    isActive
                                                        ? "text-rotary-blue bg-rotary-blue/5 font-bold"
                                                        : "text-gray-700 hover:text-rotary-blue hover:bg-gray-50"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Prominent Join CTA Button */}
                            <Link
                                id="navbar-join-btn"
                                href="/join"
                                className="ml-4 bg-rotary-blue text-white hover:bg-rotary-dark-blue font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                Join Rotary
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:text-rotary-blue hover:bg-gray-100 transition-colors"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        >
                            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl px-6 py-6 transition-all">
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(link.href);
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                                                isActive
                                                    ? "bg-rotary-blue text-white font-bold"
                                                    : "text-gray-700 hover:bg-gray-50 hover:text-rotary-blue"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
                            <Link
                                href="/join"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center bg-rotary-gold text-gray-900 font-bold py-3.5 rounded-xl shadow hover:bg-rotary-blue hover:text-white transition-colors"
                            >
                                Join Rotary Bangalore JP Nagar
                            </Link>
                            <div className="flex justify-center gap-6 pt-2 text-gray-500">
                                <a href={rotaryConfig.contact.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook size={20} />
                                </a>
                                <a href={rotaryConfig.contact.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram size={20} />
                                </a>
                                <a href={rotaryConfig.contact.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <FaYoutube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

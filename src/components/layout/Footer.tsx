import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
            {/* Subtle top ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-rotary-gold/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Google Map */}
                    <div className="lg:col-span-1">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-white/5 p-1 backdrop-blur-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.824334170543!2d77.58933427507553!3d12.919009387391517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzA4LjQiTiA3N8KwMzUnMzAuOSJF!5e0!3m2!1sen!2sin!4v1723758147778!5m2!1sen!2sin"
                                width="100%"
                                height="260"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Rotary Bangalore JP Nagar Location"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6 border-b border-white/10 pb-4 inline-block">Contact Information</h3>
                        <ul className="space-y-5 text-sm font-light text-gray-400">
                            <li>
                                <a href="tel:+919035051122" className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                                    <FaPhone className="text-rotary-gold shrink-0 mt-1 transform group-hover:rotate-12 transition-transform" />
                                    <span>+91 9035051122</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919035051122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                                    <FaWhatsapp className="text-rotary-gold shrink-0 mt-1 transform group-hover:scale-110 transition-transform" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:rotarybangalorejpnagardist3191@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                                    <FaEnvelope className="text-rotary-gold shrink-0 mt-1 transform group-hover:-translate-y-0.5 transition-transform" />
                                    <span>rotarybangalorejpnagardist3191@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-4 leading-relaxed">
                                <FaMapMarkerAlt className="text-rotary-gold shrink-0 mt-1" />
                                <span>
                                    No.538, Balaji housing Layout, Vajrahalli,<br />
                                    Off Kanakapura road, Bangalore<br />
                                    Karnataka 560062, India
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links + Social */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6 border-b border-white/10 pb-4 inline-block">Explore</h3>
                        <ul className="space-y-3 text-sm font-light text-gray-400 mb-8 flex-1">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/team", label: "Our Team" },
                                { href: "/projects", label: "Our Projects" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-white transition-all duration-300 inline-flex items-center group">
                                        <span className="text-rotary-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:mr-2 group-hover:ml-0 transition-all duration-300 font-bold">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <h4 className="text-white font-bold tracking-wider uppercase text-xs mb-4">Connect With Us</h4>
                            <div className="flex items-center gap-3">
                                <a href="https://www.facebook.com/rotaryjpnagar.org/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-rotary-gold hover:text-gray-900 hover:border-rotary-gold hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(247,168,27,0.3)] transition-all duration-300" aria-label="Facebook">
                                    <FaFacebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/rotaryjpnagar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-rotary-gold hover:text-gray-900 hover:border-rotary-gold hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(247,168,27,0.3)] transition-all duration-300" aria-label="Instagram">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="https://www.youtube.com/@rotaryjpnagar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-rotary-gold hover:text-gray-900 hover:border-rotary-gold hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(247,168,27,0.3)] transition-all duration-300" aria-label="YouTube">
                                    <FaYoutube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-6 relative z-10 bg-black/50">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light tracking-wide text-gray-500">
                    <p>Copyright © {new Date().getFullYear()} Rotary Bangalore JP Nagar</p>
                    <p>
                        Created & Maintained By{" "}
                        <a href="https://www.samarthv.me" target="_blank" rel="noopener noreferrer" className="text-rotary-gold hover:text-white font-semibold transition-colors duration-300">
                            Rtn. Rtr. Samarth Viswanath
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

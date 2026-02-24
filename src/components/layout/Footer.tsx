import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Google Map */}
                    <div className="lg:col-span-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.824334170543!2d77.58933427507553!3d12.919009387391517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzA4LjQiTiA3N8KwMzUnMzAuOSJF!5e0!3m2!1sen!2sin!4v1723758147778!5m2!1sen!2sin"
                            width="100%"
                            height="240"
                            style={{ border: 0, borderRadius: "8px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Rotary Bangalore JP Nagar Location"
                        />
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="tel:+919035051122" className="flex items-center gap-3 hover:text-rotary-gold transition-colors">
                                    <FaPhone className="text-rotary-gold shrink-0" />
                                    +91 9035051122
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919035051122" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-rotary-gold transition-colors">
                                    <FaWhatsapp className="text-rotary-gold shrink-0" />
                                    Chat on WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="mailto:rotarybangalorejpnagardist3191@gmail.com" className="flex items-center gap-3 hover:text-rotary-gold transition-colors">
                                    <FaEnvelope className="text-rotary-gold shrink-0" />
                                    rotarybangalorejpnagardist3191@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-rotary-gold shrink-0 mt-0.5" />
                                <span>
                                    #1813, 1st Floor, 41st Cross, 22nd Main,<br />
                                    Jayanagar 9th Block, Opp - Jain College,<br />
                                    Bangalore - 560 069
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links + Social */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm mb-6">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/team", label: "Our Team" },
                                { href: "/projects", label: "Our Projects" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-rotary-gold transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/rotaryjpnagar.org/" target="_blank" rel="noopener noreferrer" className="hover:text-rotary-gold transition-colors" aria-label="Facebook">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/rotaryjpnagar/" target="_blank" rel="noopener noreferrer" className="hover:text-rotary-gold transition-colors" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/@rotaryjpnagar" target="_blank" rel="noopener noreferrer" className="hover:text-rotary-gold transition-colors" aria-label="YouTube">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 py-4">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
                    <p>Copyright © {new Date().getFullYear()} Rotary Bangalore JP Nagar</p>
                    <p>
                        Created & maintained by{" "}
                        <a href="https://www.samarthv.me" target="_blank" rel="noopener noreferrer" className="text-rotary-gold hover:underline">
                            Rtr. Samarth Viswanath
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

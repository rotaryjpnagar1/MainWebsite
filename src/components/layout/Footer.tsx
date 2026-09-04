import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { rotaryConfig } from "@/config/rotary-year";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-rotary-navy text-gray-300 border-t border-white/10 relative">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Club Profile */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-bold text-white tracking-tight">
                                {rotaryConfig.clubName}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                            Chartered on January 4, 1989. Serving the community through sustainable healthcare, educational infrastructure, environmental projects, and youth leadership across Bengaluru.
                        </p>
                        <div className="pt-2">
                            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rotary-gold bg-white/5 border border-rotary-gold/30 px-3 py-1.5 rounded-full">
                                RY {rotaryConfig.activeRotaryYear} • {rotaryConfig.presidentialMessage}
                            </span>
                        </div>
                    </div>

                    {/* Verified Contact Details */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                            Contact & Meetings
                        </h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li>
                                <a
                                    href={`tel:${rotaryConfig.contact.phone}`}
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FaPhone className="text-rotary-gold shrink-0" />
                                    <span>{rotaryConfig.contact.phoneDisplay}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={rotaryConfig.contact.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-white transition-colors"
                                >
                                    <FaWhatsapp className="text-rotary-gold shrink-0 text-base" />
                                    <span>Connect on WhatsApp</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${rotaryConfig.contact.email}`}
                                    className="flex items-start gap-3 hover:text-white transition-colors break-all"
                                >
                                    <FaEnvelope className="text-rotary-gold shrink-0 mt-1" />
                                    <span>{rotaryConfig.contact.email}</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 leading-relaxed">
                                <FaMapMarkerAlt className="text-rotary-gold shrink-0 mt-1" />
                                <span>
                                    {rotaryConfig.contact.address.locality}, {rotaryConfig.contact.address.city},<br />
                                    Karnataka {rotaryConfig.contact.address.postalCode}, India
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Navigation & Explore */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                            Explore & Get Involved
                        </h3>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Rotary JP Nagar" },
                                { href: "/team", label: "Leadership (Board 2026-27)" },
                                { href: "/projects", label: "Community Projects" },
                                { href: "/explore-rotary", label: "Rotary Knowledge Hub" },
                                { href: "/join", label: "Join Our Club" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-rotary-gold transition-colors inline-block py-0.5">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Connect With Us</h4>
                            <div className="flex items-center gap-3">
                                <a
                                    href={rotaryConfig.contact.socials.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gray-900 hover:bg-rotary-gold hover:border-rotary-gold transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={16} />
                                </a>
                                <a
                                    href={rotaryConfig.contact.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gray-900 hover:bg-rotary-gold hover:border-rotary-gold transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={16} />
                                </a>
                                <a
                                    href={rotaryConfig.contact.socials.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gray-900 hover:bg-rotary-gold hover:border-rotary-gold transition-colors"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Location */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                            Location
                        </h3>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                            <iframe
                                src="https://maps.google.com/maps?q=VGGQ%2B3C%20Vajarahalli,%20Karnataka,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="180"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Rotary Bangalore JP Nagar Location Map"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-2 font-light">
                            JP Nagar, Bengaluru
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 py-6 bg-black/40 text-xs text-gray-500 font-light">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>
                        © {currentYear} {rotaryConfig.clubName} • Rotary District {rotaryConfig.districtNumber}
                    </p>
                    <p>
                        Created & Maintained By{" "}
                        <a
                            href="https://www.samarthv.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-rotary-gold hover:text-white font-medium transition-colors"
                        >
                            Rtn. Rtr. Samarth Viswanath
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { rotaryConfig } from "@/config/rotary-year";

export default function JoinCta() {
    return (
        <section className="py-24 bg-rotary-blue text-white relative overflow-hidden" id="join-us">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-rotary-gold bg-white/10 border border-rotary-gold/30 px-4 py-1.5 rounded-full mb-6">
                        Membership & Fellowship
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Make a Meaningful Impact
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-100 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                        Whether you are an experienced professional, entrepreneur, or community leader, Rotary offers the platform to channel your skills into impactful local initiatives and lifelong friendships.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Link
                            href="/join"
                            className="bg-rotary-gold hover:bg-white text-gray-900 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-3"
                        >
                            <span>Explore Membership & Register Interest</span>
                            <FaArrowRight size={14} />
                        </Link>
                        <a
                            href={rotaryConfig.contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white hover:text-rotary-navy text-white border border-white/20 font-semibold text-base px-6 py-4 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                        >
                            <FaWhatsapp size={18} className="text-rotary-gold" />
                            <span>Quick Chat on WhatsApp</span>
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-xs text-blue-200 font-light">
                        {rotaryConfig.clubName} • Rotary District {rotaryConfig.districtNumber}
                    </div>
                </div>
            </div>
        </section>
    );
}

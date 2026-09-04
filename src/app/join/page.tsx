import type { Metadata } from "next";
import Image from "next/image";
import { FaUsers, FaHandsHelping, FaGlobeAmericas, FaAward, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import JoinForm from "@/components/join/JoinForm";
import { rotaryConfig } from "@/config/rotary-year";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";

export const metadata: Metadata = {
    title: "Join Rotary – Membership Expression of Interest",
    description: `Join Rotary Bangalore JP Nagar (District ${rotaryConfig.districtNumber}). Connect with ethical professionals, make a measurable impact in healthcare and education, and experience global Rotary fellowship.`,
    alternates: {
        canonical: "/join",
    },
};

export default function JoinPage() {
    return (
        <>
            <BreadcrumbsJsonLd items={[{ name: "Join Rotary", path: "/join" }]} />
            {/* Header Banner */}
            <section className="relative py-20 bg-rotary-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/slide/Rotary JP Nagar Logo.webp"
                        alt="Join Rotary JP Nagar"
                        fill
                        priority
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rotary-navy via-rotary-navy/95 to-rotary-navy/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-rotary-gold bg-white/10 border border-rotary-gold/30 px-3.5 py-1.5 rounded-full mb-4">
                            Rotary Year {rotaryConfig.activeRotaryYear} • Membership
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Join Rotary Bangalore JP Nagar
                        </h1>
                        <p className="text-lg text-gray-200 font-light leading-relaxed">
                            Connect with fellow leaders and professionals in Bengaluru dedicated to impactful community service, vocational excellence, and lasting friendships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join & Benefits */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3.5 py-1.5 rounded-full">
                            Why Rotary?
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                            What It Means to Be a Rotarian
                        </h2>
                        <p className="text-gray-600 mt-2 text-base font-light">
                            Rotary is a global network of 1.4 million leaders who see a world where people unite and take action to create lasting change.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            {
                                icon: <FaHandsHelping className="text-rotary-blue text-2xl" />,
                                title: "Hands-on Service",
                                desc: "Lead meaningful community projects in government school transformation, dialysis care, and literacy."
                            },
                            {
                                icon: <FaUsers className="text-rotary-gold text-2xl" />,
                                title: "Professional Fellowship",
                                desc: "Build trusted professional relationships and lifelong friendships with leaders from diverse vocations."
                            },
                            {
                                icon: <FaAward className="text-rotary-green text-2xl" />,
                                title: "Leadership Growth",
                                desc: "Hone public speaking, project management, and board leadership skills within our club and District 3191."
                            },
                            {
                                icon: <FaGlobeAmericas className="text-rotary-blue text-2xl" />,
                                title: "Global Network",
                                desc: "Visit and connect with over 46,000 Rotary clubs worldwide whenever you travel for business or leisure."
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* How Membership Works - Simple Steps */}
                    <div className="bg-rotary-navy rounded-3xl p-8 sm:p-10 text-white mb-16">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-rotary-gold">Simple Enquiry Process</span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">How It Works</h3>
                            <p className="text-sm text-gray-300 font-light mt-2">
                                Joining is straightforward. Simply fill out the form below, and someone from the club will reach out and guide you further.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <span className="text-2xl font-black text-rotary-gold block mb-2">01</span>
                                <h4 className="text-base font-bold text-white mb-1">Fill the Enquiry Form</h4>
                                <p className="text-xs text-gray-300 font-light leading-relaxed">
                                    Submit your contact details and interests in the form below.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <span className="text-2xl font-black text-rotary-gold block mb-2">02</span>
                                <h4 className="text-base font-bold text-white mb-1">Club Reachout & Guidance</h4>
                                <p className="text-xs text-gray-300 font-light leading-relaxed">
                                    Someone from our club will reach out to connect with you and guide you further.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Registration Form & Direct Contact */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="register">
                        <div className="lg:col-span-8">
                            <JoinForm />
                        </div>

                        {/* Sidebar: Direct Contact Alternatives */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                                    Prefer to Speak First?
                                </h3>
                                <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">
                                    Feel free to contact our club leadership directly for any enquiries.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href={rotaryConfig.contact.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold text-xs hover:border-rotary-blue transition-colors group shadow-sm"
                                    >
                                        <FaWhatsapp className="text-green-600 text-lg group-hover:scale-110 transition-transform" />
                                        <span>Chat on WhatsApp ({rotaryConfig.contact.phoneDisplay})</span>
                                    </a>

                                    <a
                                        href={`tel:${rotaryConfig.contact.phone}`}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold text-xs hover:border-rotary-blue transition-colors group shadow-sm"
                                    >
                                        <FaPhone className="text-rotary-blue text-base group-hover:scale-110 transition-transform" />
                                        <span>Call {rotaryConfig.contact.phoneDisplay}</span>
                                    </a>

                                    <a
                                        href={`mailto:${rotaryConfig.contact.email}`}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold text-xs hover:border-rotary-blue transition-colors group shadow-sm break-all"
                                    >
                                        <FaEnvelope className="text-rotary-gold text-base shrink-0" />
                                        <span>{rotaryConfig.contact.email}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

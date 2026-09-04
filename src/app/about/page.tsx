import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { rotaryConfig } from "@/config/rotary-year";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";

export const metadata: Metadata = {
    title: "About Us – History, Mission & Values",
    description: `Discover the 37+ year history of ${rotaryConfig.clubName}, chartered on January 4, 1989. Learn about our mission, Rotary District ${rotaryConfig.districtNumber} affiliation, and community initiatives in Bengaluru.`,
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <BreadcrumbsJsonLd items={[{ name: "About Us", path: "/about" }]} />
            {/* Hero Header */}
            <section className="relative py-20 bg-rotary-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/slide/Rotary JP Nagar Logo.webp"
                        alt={`${rotaryConfig.clubName} History`}
                        fill
                        priority
                        className="object-cover opacity-25"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rotary-navy via-rotary-navy/95 to-rotary-navy/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-rotary-gold bg-white/10 border border-rotary-gold/30 px-3.5 py-1.5 rounded-full mb-4">
                            Chartered January 4, 1989 • Club ID: {rotaryConfig.clubId}
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            About Rotary Bangalore JP Nagar
                        </h1>
                        <p className="text-lg text-gray-200 font-light leading-relaxed">
                            Serving the community of Bengaluru for over {rotaryConfig.yearsOfService} years through high-impact healthcare projects, government school development, and vocational leadership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Club History & Overview */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                        <div className="lg:col-span-5">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md p-8 flex items-center justify-center">
                                <Image
                                    src="/images/icons/Rotary Mark of Excellence.webp"
                                    alt="Rotary Mark of Excellence"
                                    width={320}
                                    height={320}
                                    className="object-contain drop-shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3 py-1 rounded-md">
                                Our Origin Story
                            </span>
                            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                                Over 37 Years of Purposeful Community Service
                            </h2>
                            <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed">
                                Chartered on <strong>January 4, 1989</strong>, Rotary Bangalore JP Nagar was established by a group of forward-thinking professionals and entrepreneurs committed to bringing Rotary International’s global motto of <em>&ldquo;Service Above Self&rdquo;</em> into actionable local change.
                            </p>
                            <p className="text-gray-600 font-light text-base leading-relaxed">
                                As an active club in <strong>Rotary District {rotaryConfig.districtNumber}</strong>, our members have led transformative initiatives in dialysis healthcare access at CDSIMER Hospital, Happy School transformations in Tumkur and Bengaluru, Thalassemia patient support, and annual youth leadership camps.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-rotary-blue text-white flex items-center justify-center text-sm font-bold">M</span>
                                <span>Our Mission</span>
                            </h3>
                            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                                To volunteer our vocational skills, time, and community resources to address critical local needs in healthcare, literacy, and environmental sustainability with transparency and compassion.
                            </p>
                            <ul className="space-y-2.5 text-sm text-gray-700">
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-green font-bold">✓</span> Support quality education in government schools
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-green font-bold">✓</span> Expand life-saving healthcare and dialysis access
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-green font-bold">✓</span> Foster young leaders through Rotaract and Interact
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-rotary-gold text-gray-900 flex items-center justify-center text-sm font-bold">V</span>
                                <span>Our Vision</span>
                            </h3>
                            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
                                To be a vibrant, inclusive, and forward-looking Rotary club that inspires sustainable community action, creates lasting goodwill, and fosters lifelong professional fellowship.
                            </p>
                            <ul className="space-y-2.5 text-sm text-gray-700">
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-gold font-bold">✓</span> Uphold high ethical standards in all vocations
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-gold font-bold">✓</span> Deliver measurable, enduring community impact
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="text-rotary-gold font-bold">✓</span> Create lasting impact across Bengaluru
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The 4-Way Test Feature */}
                    <div className="bg-rotary-navy rounded-3xl p-8 sm:p-12 text-white">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="text-xs font-bold uppercase tracking-widest text-rotary-gold">Rotary Guiding Principles</span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">The 4-Way Test</h3>
                            <p className="text-xs sm:text-sm text-gray-300 font-light mt-2">
                                Of the things we think, say, or do:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { num: "1", title: "Is it the TRUTH?" },
                                { num: "2", title: "Is it FAIR to all concerned?" },
                                { num: "3", title: "Will it build GOODWILL and BETTER FRIENDSHIPS?" },
                                { num: "4", title: "Will it be BENEFICIAL to all concerned?" },
                            ].map((item) => (
                                <div key={item.num} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-rotary-gold text-gray-900 font-extrabold flex items-center justify-center text-lg mb-3">
                                        {item.num}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-100">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <Link
                            href="/team"
                            className="inline-block bg-rotary-blue hover:bg-rotary-dark-blue text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors mr-4"
                        >
                            Meet the 2026-27 Board
                        </Link>
                        <Link
                            href="/join"
                            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-sm px-8 py-3.5 rounded-full transition-colors"
                        >
                            Join Our Club
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

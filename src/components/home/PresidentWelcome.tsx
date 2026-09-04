import Image from "next/image";
import Link from "next/link";
import clubData from "@/content/2026-27/club.json";
import { rotaryConfig } from "@/config/rotary-year";

export default function PresidentWelcome() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/60 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* President Emblem / Badge */}
                        <div className="lg:col-span-4 flex flex-col items-center text-center">
                            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-md border-4 border-white mb-4 bg-white p-6 flex items-center justify-center">
                                <Image
                                    src="/images/icons/Rotary Mark of Excellence.webp"
                                    alt="Rotary Mark of Excellence"
                                    width={180}
                                    height={180}
                                    className="object-contain"
                                />
                            </div>
                            <h3 id="president-name" className="text-xl font-bold text-gray-900 tracking-tight">
                                {clubData.president.name}
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-wider text-rotary-blue mt-1">
                                {clubData.president.role}
                            </p>
                            <span className="mt-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
                                Rotary District {rotaryConfig.districtNumber}
                            </span>
                        </div>

                        {/* Welcome Message Text */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="inline-block">
                                <span id="president-badge" className="text-xs font-bold uppercase tracking-widest text-rotary-gold bg-rotary-light-gold border border-rotary-gold/30 px-3 py-1 rounded-md">
                                    RY {rotaryConfig.activeRotaryYear} Presidential Message
                                </span>
                            </div>
                            <h2 id="president-quote" className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                                &ldquo;{clubData.president.quote}&rdquo;
                            </h2>
                            <p id="president-message" className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                                {clubData.president.message}
                            </p>
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/about"
                                    className="text-sm font-semibold text-rotary-blue hover:text-rotary-dark-blue flex items-center gap-1.5 group"
                                >
                                    <span>Learn more about our club history</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                                <span className="text-gray-300">•</span>
                                <Link
                                    href="/team"
                                    className="text-sm font-semibold text-gray-600 hover:text-rotary-blue"
                                >
                                    Meet the 2026-27 Board
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

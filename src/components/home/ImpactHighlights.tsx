import Image from "next/image";
import clubData from "@/content/2026-27/club.json";

export default function ImpactHighlights() {
    return (
        <section className="py-20 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3.5 py-1.5 rounded-full">
                        Avenues of Service
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                        How We Create Sustainable Impact
                    </h2>
                    <p className="text-gray-600 mt-3 text-base sm:text-lg font-light leading-relaxed">
                        Rotary members channel their skills, time, and resources into verified community projects across healthcare, literacy, environmental care, and youth empowerment.
                    </p>
                </div>

                {/* 4 Service Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {clubData.servicePillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-rotary-light-gold flex items-center justify-center mb-6">
                                    <Image
                                        src={`/images/icons/${pillar.icon}.png`}
                                        alt={pillar.title}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-light leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Verified Metrics Strip */}
                <div className="bg-rotary-navy rounded-3xl p-8 sm:p-12 text-white">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                        {clubData.impactHighlights.map((stat, i) => (
                            <div key={i} className={`${i > 0 ? 'pt-6 lg:pt-0' : ''} px-4`}>
                                <div className="text-4xl sm:text-5xl font-extrabold text-rotary-gold tracking-tight mb-2">
                                    {stat.number}{stat.suffix}
                                </div>
                                <div className="text-base font-semibold text-white mb-1">
                                    {stat.label}
                                </div>
                                <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";
import { rotaryConfig } from "@/config/rotary-year";

export default function Hero() {
    return (
        <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-rotary-navy text-white overflow-hidden">
            {/* Background Image with Crisp Gradient Overlays */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/slide/Rotary JP Nagar Logo.webp"
                    alt={`${rotaryConfig.clubName} Community Service in Bengaluru`}
                    fill
                    priority
                    className="object-cover object-center opacity-30 scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rotary-navy via-rotary-navy/90 to-rotary-navy/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-rotary-navy via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="max-w-3xl">

                    {/* Single Semantic H1 */}
                    <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                        Service Above Self
                    </h1>

                    <p id="hero-description" className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-10 max-w-2xl">
                        For over {rotaryConfig.yearsOfService} years, {rotaryConfig.clubName} has united leaders and volunteers to advance healthcare access, transform government schools, protect our environment, and empower youth.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            id="hero-cta-projects"
                            href="/projects"
                            className="bg-rotary-gold text-gray-900 hover:bg-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Explore Our Projects
                        </Link>
                        <Link
                            id="hero-cta-join"
                            href="/join"
                            className="bg-white/10 hover:bg-white hover:text-rotary-navy border border-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200"
                        >
                            Join Our Club
                        </Link>
                    </div>

                    {/* Fast Credibility Badges */}
                    <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-left">
                        <div>
                            <div className="text-2xl lg:text-3xl font-bold text-rotary-gold">{rotaryConfig.yearsOfService}+ Years</div>
                            <div className="text-xs text-gray-300 font-light mt-1">Continuous Service (Est. 1989)</div>
                        </div>
                        <div>
                            <div className="text-2xl lg:text-3xl font-bold text-white">45+</div>
                            <div className="text-xs text-gray-300 font-light mt-1">Annual Impact Projects</div>
                        </div>
                        <div>
                            <div className="text-2xl lg:text-3xl font-bold text-white">District {rotaryConfig.districtNumber}</div>
                            <div className="text-xs text-gray-300 font-light mt-1">Rotary International</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";
import CounterStat from "@/components/ui/CounterStat";

export default function AboutTeaser() {
    return (
        <section className="py-24 bg-rotary-blue text-white relative overflow-hidden" id="about">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rotary-gold/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-rotary-dark-green/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image / Glass Card */}
                    <div className="flex justify-center relative group">
                        <div className="absolute inset-0 bg-rotary-gold/10 transform rotate-3 rounded-3xl transition-transform duration-500 group-hover:rotate-6 scale-95" />
                        <div className="relative bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
                            <Image
                                src="/images/icons/Rotary Mark of Excellence.webp"
                                alt="Rotary Mark of Excellence"
                                width={400}
                                height={400}
                                className="object-contain max-h-[380px] w-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-rotary-gold uppercase mb-3">
                                Our Story
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-sm">
                                Rotary Bangalore JP Nagar
                            </h3>
                            <p className="text-gray-300 font-light text-lg leading-relaxed mb-8">
                                Founded on January 4, 1989, Rotary Bangalore JP Nagar is a dedicated
                                group of professionals and community members committed to serving
                                society through charitable initiatives. We strive to make a meaningful
                                impact in our community and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 pt-8 border-t border-white/10">
                            {/* Mission */}
                            <div>
                                <h4 className="text-base font-bold text-rotary-gold uppercase tracking-wider mb-4">
                                    Our Mission
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Solve community issues",
                                        "Promote charitable activities",
                                        "Foster development"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-base text-gray-200 font-light group">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rotary-gold/20 flex items-center justify-center text-rotary-gold group-hover:bg-rotary-gold group-hover:text-gray-900 transition-colors">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-col justify-center gap-8">
                                <CounterStat to={37} label="Years of Service" numberColor="text-rotary-gold" labelColor="text-gray-300" />
                                <CounterStat to={50} suffix="K+" label="Lives Impacted" numberColor="text-white" labelColor="text-gray-300" />
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/about"
                                className="inline-block bg-rotary-gold text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-white hover:-translate-y-1 shadow-[0_10px_30px_rgba(247,168,27,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transition-all duration-300"
                            >
                                Discover More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

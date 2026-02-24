import Image from "next/image";
import Link from "next/link";
import CounterStat from "@/components/ui/CounterStat";

export default function AboutTeaser() {
    return (
        <section className="py-16 bg-gray-50" id="about">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/icons/Rotary Mark of Excellence.webp"
                            alt="Rotary Mark of Excellence"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-xl object-contain max-h-[380px] w-auto"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Our Story
                        </h2>
                        <h3 className="text-xl text-rotary-green font-semibold mb-4">
                            Rotary Bangalore JP Nagar
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Founded on January 4, 1989, Rotary Bangalore JP Nagar is a dedicated
                            group of professionals and community members committed to serving
                            society through charitable initiatives. We strive to make a meaningful
                            impact in our community and beyond.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            {/* Mission */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                    Our Mission
                                </h4>
                                <p className="text-gray-600 text-sm mb-3">
                                    To volunteer our skills and resources to solve community issues
                                    and address local needs.
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Promote charitable activities",
                                        "Foster community development",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-rotary-green font-bold">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-col gap-6">
                                <CounterStat to={36} label="Years of Service" />
                                <CounterStat to={50} suffix="K+" label="Lives Impacted" />
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="inline-block bg-rotary-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-rotary-dark-green transition-colors duration-200"
                        >
                            Know More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

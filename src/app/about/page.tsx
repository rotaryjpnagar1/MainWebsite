import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Rotary Bangalore JP Nagar's history, mission, and vision. Founded in 1989, we are committed to community service as part of Rotary District 3191.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/slide/Rotary JP Nagar Logo.webp"
                    alt="About Rotary JP Nagar"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
                    <p className="text-gray-300 mt-2">Rotary Bangalore JP Nagar</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-14">
                        <Image
                            src="/images/icons/Rotary Mark of Excellence.webp"
                            alt="Rotary Mark of Excellence"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-lg object-contain w-full"
                        />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Story</h2>
                            <h3 className="text-xl text-rotary-green font-semibold mb-4">
                                Rotary Bangalore JP Nagar
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded on January 4, 1989, Rotary Bangalore JP Nagar is a dedicated
                                group of professionals and community members committed to serving
                                society through charitable initiatives. We strive to make a meaningful
                                impact in our community and beyond.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                As part of Rotary International District 3191, our club embodies the
                                Rotary motto of&nbsp;<em>&ldquo;Service Above Self&rdquo;</em>&nbsp;through
                                healthcare projects, educational support, environmental initiatives,
                                and professional development programmes.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-4">
                                To volunteer our skills and resources to solve community issues and
                                address local needs.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Promote charitable activities",
                                    "Foster community development",
                                    "Support education and youth",
                                    "Advance healthcare access",
                                    "Protect the environment",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                                        <span className="text-rotary-green font-bold mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="bg-rotary-green/5 rounded-2xl p-8 shadow-sm border border-rotary-green/20">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be a club that inspires, creates hope, and opens pathways to
                                opportunities for all — building a world where people unite and take
                                action to create lasting change.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-rotary-green">37+</div>
                                    <div className="text-sm text-gray-500 mt-1">Years of Service</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-rotary-green">50K+</div>
                                    <div className="text-sm text-gray-500 mt-1">Lives Impacted</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

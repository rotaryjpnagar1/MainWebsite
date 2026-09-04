import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { rotaryConfig } from "@/config/rotary-year";

export const metadata: Metadata = {
    title: "Explore Rotary – The Complete Guide to Rotary in Bengaluru",
    description: "Learn what Rotary is, how Rotary clubs operate in Bengaluru, membership requirements in District 3191, service projects, CSR partnerships, and youth programs.",
    alternates: {
        canonical: "/explore-rotary",
    },
};

const topics = [
    {
        id: "what-is-rotary",
        title: "What is Rotary & How Does It Work?",
        summary: "Rotary is a global network of 1.4 million volunteer leaders across 46,000+ clubs in 200+ countries, dedicated to addressing pressing humanitarian challenges under the motto 'Service Above Self'.",
        details: `Founded in 1905 in Chicago by Paul Harris, Rotary brings together business, professional, and community leaders. In Bengaluru, Rotary clubs execute grassroots projects ranging from government school modernization and dialysis healthcare support to lake rejuvenation and tree planting. Rotary Bangalore JP Nagar, chartered on January 4, 1989 (District 3191), has served Bengaluru for over 37 years.`,
        faq: {
            question: "What is the primary mission of a Rotary Club?",
            answer: "Rotary's mission is to provide service to others, promote integrity, and advance world understanding, goodwill, and peace through its fellowship of business, professional, and community leaders."
        }
    },
    {
        id: "how-to-join",
        title: "How to Join Rotary in Bengaluru: Simple Enquiry Process",
        summary: "Membership in Rotary is open to ethical professionals, entrepreneurs, and active community members who wish to contribute their skills and time to service and fellowship.",
        details: `Joining Rotary Bangalore JP Nagar is a simple membership enquiry step: fill out the form online, and someone from the club will reach out to connect with you and guide you further.`,
        faq: {
            question: "How do I enquire about joining Rotary Bangalore JP Nagar?",
            answer: "Simply submit your details using the online membership enquiry form. A club representative will reach out directly to introduce our community projects, answer questions, and guide you through the next steps."
        }
    },
    {
        id: "district-3191",
        title: "Rotary International District 3191 Context",
        summary: "Rotary District 3191 encompasses leading Rotary clubs across Bengaluru and surrounding Karnataka regions, coordinating large-scale healthcare and humanitarian grants.",
        details: `District 3191 coordinates flagship programs including Pulse Polio immunization, Thalassemia support, mega blood donation drives, and disaster relief. Rotary Bangalore JP Nagar actively collaborates with district leadership, hosting district assemblies and participating in multi-club service grants.`,
        faq: {
            question: "What is the role of Rotary District 3191?",
            answer: "Rotary District 3191 supports and connects dozens of Rotary, Rotaract, and Interact clubs across Bengaluru, facilitating Rotary Foundation global grants and district-wide service initiatives."
        }
    },
    {
        id: "trf-csr",
        title: "The Rotary Foundation (TRF) & CSR Partnerships",
        summary: "The Rotary Foundation transforms donations into sustainable service projects that fight disease, promote peace, support education, and grow local economies.",
        details: `Rotary Foundation Global Grants have funded high-capacity dialysis machines at CDSIMER, RO water purification plants in rural schools, and specialized medical equipment across Karnataka. Rotary Bangalore JP Nagar also works with corporate CSR partners (such as TMEIC and CDSIMER) to execute auditable, high-impact community infrastructure.`,
        faq: {
            question: "Can corporations partner with Rotary Bangalore JP Nagar under CSR mandates?",
            answer: "Yes, Rotary Bangalore JP Nagar partners with corporations to execute compliant, high-impact Corporate Social Responsibility (CSR) projects in education infrastructure, healthcare, sanitation, and environmental care."
        }
    },
    {
        id: "rotaract-interact",
        title: "Youth Leadership: Rotaract & Interact",
        summary: "Rotary empowers young changemakers through Interact clubs (ages 12-18) in schools and Rotaract clubs (ages 18+) in universities and communities.",
        details: `Rotary Bangalore JP Nagar proudly sponsors the Rotaract Club of Bangalore JP Nagar and multiple school Interact clubs, providing mentorship, Rotary Youth Leadership Awards (RYLA) training, and youth community service opportunities across Bengaluru.`,
        faq: {
            question: "What is the difference between Rotary and Rotaract?",
            answer: "Rotary is primarily for working professionals and community leaders, while Rotaract is designed for young adults and university students (ages 18+) to develop professional skills and lead community service."
        }
    }
];

import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";

export default function ExploreRotaryPage() {
    const lastReviewedDate = "2026-09-05";

    // Build FAQPage schema for search engines & AI
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: topics.map((t) => ({
            "@type": "Question",
            name: t.faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: t.faq.answer,
            },
        })),
    };

    return (
        <>
            <BreadcrumbsJsonLd items={[{ name: "Explore Rotary", path: "/explore-rotary" }]} />
            <JsonLd schema={faqSchema} />

            {/* Header Hero */}
            <section className="relative py-20 bg-rotary-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/slide/Rotary JP Nagar Logo.webp"
                        alt="Explore Rotary in Bengaluru"
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
                            Knowledge Hub • Rotary District {rotaryConfig.districtNumber}
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Explore Rotary: The Definitive Guide
                        </h1>
                        <p className="text-lg text-gray-200 font-light leading-relaxed mb-6">
                            Everything you need to know about Rotary International, how Rotary operates in Bengaluru, community impact avenues, and how to become a member.
                        </p>

                        <div className="text-xs text-gray-400 font-light">
                            Published & Reviewed by: <strong>Rotary Bangalore JP Nagar Public Image Team</strong> • Last Updated: September 2026
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic Clusters */}
            <section className="py-20 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-16">
                        {topics.map((topic, i) => (
                            <article
                                key={topic.id}
                                id={topic.id}
                                className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm scroll-mt-24"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-rotary-blue text-white flex items-center justify-center text-xs font-bold">
                                        0{i + 1}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-rotary-gold">
                                        Rotary Guide & Insight
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                                    {topic.title}
                                </h2>

                                <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed mb-4">
                                    {topic.summary}
                                </p>

                                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
                                    {topic.details}
                                </p>

                                {/* Quick FAQ Callout Box */}
                                <div className="p-6 bg-white rounded-2xl border border-gray-200">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-rotary-blue mb-2">
                                        Q: {topic.faq.question}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-light leading-relaxed">
                                        {topic.faq.answer}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Conversion Footer */}
                    <div className="mt-20 bg-rotary-navy rounded-3xl p-8 sm:p-12 text-white text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Experience Rotary in Action?</h3>
                        <p className="text-gray-300 font-light text-base max-w-xl mx-auto mb-8">
                            Join us as a guest at our upcoming fellowship meeting or connect with our membership team.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/join"
                                className="bg-rotary-gold text-gray-900 hover:bg-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors"
                            >
                                Register Interest to Join
                            </Link>
                            <Link
                                href="/projects"
                                className="bg-white/10 hover:bg-white hover:text-rotary-navy text-white border border-white/20 font-semibold text-sm px-8 py-3.5 rounded-full transition-colors"
                            >
                                View Our Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

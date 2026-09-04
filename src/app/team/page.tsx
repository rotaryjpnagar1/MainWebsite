import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadershipTable from "@/components/team/LeadershipTable";
import { getLeadership } from "@/lib/team.server";
import { rotaryConfig } from "@/config/rotary-year";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import LeadershipJsonLd from "@/components/seo/LeadershipJsonLd";

export const metadata: Metadata = {
    title: `Leadership – Board of Directors ${rotaryConfig.activeRotaryYear}`,
    description: `Meet the Board of Directors for Rotary Year ${rotaryConfig.activeRotaryYear} at ${rotaryConfig.clubName} led by President ${rotaryConfig.presidentName} and Secretary ${rotaryConfig.secretaryName}.`,
    alternates: {
        canonical: "/team",
    },
};

export default function TeamPage() {
    const leadershipData = getLeadership();

    return (
        <>
            <BreadcrumbsJsonLd items={[{ name: "Leadership", path: "/team" }]} />
            <LeadershipJsonLd data={leadershipData} />
            {/* Header Title Section */}
            <section className="relative py-16 bg-rotary-navy text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-rotary-gold bg-white/10 border border-rotary-gold/30 px-3.5 py-1.5 rounded-full mb-4">
                            Rotary Year {rotaryConfig.activeRotaryYear} • {rotaryConfig.presidentialMessage}
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Board of Directors (2026–2027)
                        </h1>
                        <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed mb-6">
                            Dedicated leaders guiding Rotary Bangalore JP Nagar in fellowship, ethical vocation, and community stewardship.
                        </p>

                        {/* Quick Jump Links */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {leadershipData.groups.map((group) => (
                                <a
                                    key={group.id}
                                    href={`#${group.id}`}
                                    className="text-xs font-semibold bg-white/10 hover:bg-rotary-gold hover:text-gray-900 text-gray-200 border border-white/20 px-3.5 py-1.5 rounded-full transition-colors"
                                >
                                    {group.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Official 2026-27 Board Group Photo Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 relative group">
                        <div className="relative aspect-[16/9] w-full">
                            <Image
                                src="/images/team/board-group-2026-27.jpg"
                                alt={`Rotary Bangalore JP Nagar Board of Directors 2026-27`}
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1200px) 100vw, 1024px"
                            />
                        </div>
                        <div className="p-4 sm:p-5 bg-gray-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
                                Official Board of Directors – Rotary Bangalore JP Nagar (RY {rotaryConfig.activeRotaryYear})
                            </p>
                            <span className="text-[11px] font-bold text-rotary-gold uppercase tracking-wider">
                                Rotary District {rotaryConfig.districtNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Roster in Table Format */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <LeadershipTable data={leadershipData} />

                    <div className="mt-20 p-8 rounded-2xl bg-white border border-gray-200 text-center max-w-2xl mx-auto shadow-sm">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in Fellowship & Service?</h3>
                        <p className="text-sm text-gray-600 font-light mb-6">
                            Rotary provides immense opportunities for professional networking, leadership development, and hands-on community service.
                        </p>
                        <Link
                            href="/join"
                            className="bg-rotary-blue hover:bg-rotary-dark-blue text-white text-sm font-bold px-8 py-3.5 rounded-full transition-colors inline-block shadow-sm"
                        >
                            Explore Membership
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

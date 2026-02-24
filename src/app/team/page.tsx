import type { Metadata } from "next";
import Image from "next/image";
import BoardList from "@/components/team/BoardList";
import { getTeam } from "@/lib/team.server";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the dedicated Board of Directors 2025-26 behind Rotary Bangalore JP Nagar. Learn about our leaders driving our mission forward.",
};

export default function TeamPage() {
    const members = getTeam();

    return (
        <>
            {/* Hero photo */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden group">
                <Image
                    src="/images/slide/Z62_6528.JPG"
                    alt="Rotary JP Nagar Board of Directors 2025-26"
                    fill
                    className="object-cover object-[center_30%] transition-transform duration-1000 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute bottom-20 left-0 right-0 text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-4">Meet Our Team</h1>
                    <p className="text-gray-200 mt-2 text-xl font-light max-w-2xl mx-auto drop-shadow-lg">
                        Discover the dedicated individuals who make Rotary Bangalore JP Nagar
                        a driving force for change.
                    </p>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-rotary-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-1/3" />

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-rotary-gold uppercase mb-3 text-center">
                            Board of Directors
                        </h2>
                        <h3 className="text-center text-gray-900 font-extrabold text-4xl tracking-tight">
                            2025 – 2026
                        </h3>
                    </div>

                    <BoardList members={members} />
                </div>
            </section>
        </>
    );
}

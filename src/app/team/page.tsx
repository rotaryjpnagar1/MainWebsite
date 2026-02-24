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
            <section className="relative h-72 overflow-hidden">
                <Image
                    src="/images/team/board-of-directors-2025-26.jpg"
                    alt="Rotary JP Nagar Board of Directors 2025-26"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-10 left-0 right-0 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Meet Our Team</h1>
                    <p className="text-gray-200 mt-2 text-lg">
                        Discover the dedicated individuals who make Rotary Bangalore JP Nagar
                        a driving force for change.
                    </p>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Board of Directors
                    </h2>
                    <p className="text-center text-rotary-green font-semibold text-lg mb-10">
                        2025 – 2026
                    </p>

                    <BoardList members={members} />

                    <p className="text-center text-sm text-gray-400 mt-8">
                        To update the team list, edit{" "}
                        <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                            src/data/team-2025-26.csv
                        </code>{" "}
                        and redeploy.
                    </p>
                </div>
            </section>
        </>
    );
}

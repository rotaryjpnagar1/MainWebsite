import Image from "next/image";
import Link from "next/link";
import leadershipContent from "@/content/2026-27/leadership.json";
import type { LeadershipData, LeadershipMember } from "@/lib/team";
import { rotaryConfig } from "@/config/rotary-year";

const leadershipData = leadershipContent as unknown as LeadershipData;

export default function LeadershipTeaser() {
    const coreGroup = leadershipData.groups.find((g) => g.id === "core-officers");
    const topLeaders: LeadershipMember[] = coreGroup ? coreGroup.members.slice(0, 5) : [];

    return (
        <section className="py-20 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3.5 py-1.5 rounded-full">
                        Club Leadership
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                        Board of Directors ({rotaryConfig.activeRotaryYear})
                    </h2>
                    <p className="text-gray-600 mt-3 text-base font-light">
                        Meet the dedicated leaders guiding Rotary Bangalore JP Nagar in fellowship, ethical vocation, and community stewardship.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
                    {/* Left: 2026-27 Board Group Photo */}
                    <div className="lg:col-span-6">
                        <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200/80 bg-white group">
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src="/images/team/board-group-2026-27.jpg"
                                    alt="Rotary Bangalore JP Nagar Board of Directors 2026-27"
                                    fill
                                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 550px"
                                />
                            </div>
                            <div className="p-4 bg-gray-900 text-white text-xs flex justify-between items-center">
                                <span className="font-semibold text-gray-200">Board of Directors (RY {rotaryConfig.activeRotaryYear})</span>
                                <span className="text-rotary-gold font-bold uppercase">{rotaryConfig.presidentialMessage}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Key Officers Table Preview */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm">
                            <div className="bg-rotary-navy px-6 py-4 border-b border-white/10 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                                    Core Office Bearers
                                </h3>
                                <span className="text-[11px] text-rotary-gold font-semibold">2026–2027</span>
                            </div>
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                                    {topLeaders.map((leader, i) => (
                                        <tr key={i} className="hover:bg-gray-50/75 transition-colors">
                                            <td className="px-6 py-3.5 font-semibold text-rotary-blue w-2/5">
                                                {leader.role}
                                            </td>
                                            <td className="px-6 py-3.5 font-bold text-gray-900">
                                                {leader.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 text-center lg:text-left">
                            <Link
                                href="/team"
                                className="inline-flex items-center gap-2 bg-rotary-blue hover:bg-rotary-dark-blue text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                            >
                                <span>View Full Board Table (All 29 Directors)</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

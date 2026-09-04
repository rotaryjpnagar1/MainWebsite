import Image from "next/image";
import type { LeadershipData } from "@/lib/team";

interface LeadershipGridProps {
    data: LeadershipData;
}

export default function LeadershipGrid({ data }: LeadershipGridProps) {
    return (
        <div className="space-y-20">
            {data.groups.map((group) => (
                <section key={group.id} className="scroll-mt-24" id={group.id}>
                    {/* Section Header */}
                    <div className="mb-10 pb-4 border-b border-gray-200">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                            {group.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 font-light mt-1">
                            {group.description}
                        </p>
                    </div>

                    {/* Members Grid */}
                    {group.id === "core-officers" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {group.members.map((member, i) => {
                                const isPrimary = member.isPrimary;
                                return (
                                    <div
                                        key={i}
                                        className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                                            isPrimary
                                                ? "border-rotary-gold/50 bg-gradient-to-b from-rotary-light-gold/20 to-white ring-1 ring-rotary-gold/30"
                                                : "border-gray-200/80"
                                        }`}
                                    >
                                        <div>
                                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100 border border-gray-200">
                                                <Image
                                                    src={member.image || "/images/avatar/portrait-young-redhead-bearded-male.jpg"}
                                                    alt={`${member.name}, ${member.role}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                                />
                                                {isPrimary && (
                                                    <span className="absolute top-3 left-3 bg-rotary-navy text-rotary-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                                                        Executive
                                                    </span>
                                                )}
                                            </div>

                                            <span className="text-xs font-bold uppercase tracking-wider text-rotary-blue block mb-1">
                                                {member.role}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                                                {member.name}
                                            </h3>

                                            {member.bio && (
                                                <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
                                                    {member.bio}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.members.map((member, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue font-bold text-base shrink-0 border border-rotary-blue/20">
                                        {member.name.replace(/^(PP|PHF|Rtn|\.|\s)+/g, '').charAt(0) || "R"}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 tracking-tight">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-rotary-gold uppercase tracking-wider mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            ))}
        </div>
    );
}

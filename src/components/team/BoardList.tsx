import type { TeamMember } from "@/lib/team";
import { isAdditionalDirector } from "@/lib/team";

interface BoardListProps {
    members: TeamMember[];
}

export default function BoardList({ members }: BoardListProps) {
    const mainMembers = members.filter((m) => !isAdditionalDirector(m));
    const additionalDirectors = members.filter((m) => isAdditionalDirector(m));

    return (
        <div className="space-y-12">
            {/* Main Board */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-rotary-blue text-white text-xs tracking-wider uppercase">
                            <th className="px-8 py-5 font-bold w-1/3">Position</th>
                            <th className="px-8 py-5 font-bold">Name</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {mainMembers.map((member, i) => (
                            <tr
                                key={i}
                                className="bg-white hover:bg-gray-50/50 transition-colors duration-200"
                            >
                                <td className="px-8 py-5 font-semibold text-rotary-gold text-sm">
                                    {member.position}
                                </td>
                                <td className="px-8 py-5 text-gray-900 font-bold tracking-tight">
                                    {member.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Additional Directors */}
            {additionalDirectors.length > 0 && (
                <div className="pt-8">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-6 px-2">
                        Additional Directors
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalDirectors.map((member, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100/50 rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <p className="font-bold text-gray-900 tracking-tight group-hover:text-rotary-blue transition-colors">{member.name}</p>
                                <p className="text-sm text-rotary-gold font-semibold mt-2">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

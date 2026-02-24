import type { TeamMember } from "@/lib/team";
import { isAdditionalDirector } from "@/lib/team";

interface BoardListProps {
    members: TeamMember[];
}

export default function BoardList({ members }: BoardListProps) {
    const mainMembers = members.filter((m) => !isAdditionalDirector(m));
    const additionalDirectors = members.filter((m) => isAdditionalDirector(m));

    return (
        <div className="space-y-8">
            {/* Main Board */}
            <div className="overflow-hidden rounded-2xl shadow-md">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-rotary-green text-white">
                            <th className="text-left px-6 py-3 font-semibold">Position</th>
                            <th className="text-left px-6 py-3 font-semibold">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainMembers.map((member, i) => (
                            <tr
                                key={i}
                                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                                <td className="px-6 py-3 font-medium text-gray-700">
                                    {member.position}
                                </td>
                                <td className="px-6 py-3 text-gray-800 font-semibold">
                                    {member.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Additional Directors */}
            {additionalDirectors.length > 0 && (
                <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-4">
                        Additional Directors
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {additionalDirectors.map((member, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <p className="font-bold text-gray-800">{member.name}</p>
                                <p className="text-sm text-rotary-green font-medium">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

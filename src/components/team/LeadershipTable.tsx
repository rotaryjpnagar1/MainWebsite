import type { LeadershipData } from "@/lib/team";

interface LeadershipTableProps {
    data: LeadershipData;
}

export default function LeadershipTable({ data }: LeadershipTableProps) {
    return (
        <div className="space-y-12">
            {data.groups.map((group) => (
                <div
                    key={group.id}
                    id={group.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 scroll-mt-24"
                >
                    {/* Category Header */}
                    <div className="bg-rotary-navy px-6 sm:px-8 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                {group.title}
                            </h2>
                            <p className="text-xs text-gray-300 font-light mt-0.5">
                                {group.description}
                            </p>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rotary-gold bg-white/10 px-3 py-1 rounded-full w-fit">
                            {group.members.length} Members
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/80 text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                                    <th className="px-6 sm:px-8 py-3.5 w-1/2 sm:w-2/5">Position</th>
                                    <th className="px-6 sm:px-8 py-3.5">Name</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {group.members.map((member, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-gray-50/75 transition-colors"
                                    >
                                        <td className="px-6 sm:px-8 py-4 text-xs sm:text-sm font-semibold text-rotary-blue">
                                            {member.role}
                                        </td>
                                        <td className="px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold text-gray-900 tracking-tight">
                                            {member.name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}

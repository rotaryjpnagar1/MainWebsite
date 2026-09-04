// Server-only utility for fetching structured 2026-27 leadership data
import leadershipContent from "@/content/2026-27/leadership.json";
import type { LeadershipData, LeadershipMember } from "./team";

export function getLeadership(): LeadershipData {
    return leadershipContent as LeadershipData;
}

export function getAllLeaders(): LeadershipMember[] {
    const data = getLeadership();
    return data.groups.flatMap((g) => g.members);
}

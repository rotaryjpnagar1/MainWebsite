// Types for projects - safe for both client and server
export type ProjectCategory =
    | "community"
    | "vocational"
    | "international"
    | "club"
    | "other";

export type ProjectStatus = "upcoming" | "ongoing" | "completed";

export interface Project {
    id: string;
    name: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    images?: string[];
    category: ProjectCategory;
    categoryLabel: string;
    status: ProjectStatus;
    statusLabel: string;
    startDate?: string;
    rotaryYear?: string;
    volunteers?: number;
    hours?: number;
    budget?: string;
    location?: string;
    url?: string;
}

export function formatCategory(category: ProjectCategory): string {
    const labels: Record<ProjectCategory, string> = {
        community: "Community Service",
        vocational: "Vocational Service",
        international: "International Service",
        club: "Club Service",
        other: "Other",
    };
    return labels[category] || "Other";
}

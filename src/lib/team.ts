// Leadership data types for Rotary Bangalore JP Nagar

export interface LeadershipMember {
    name: string;
    role: string;
    category: "core" | "advisory" | "director" | "chair" | "additional";
    isPrimary?: boolean;
    image?: string;
    bio?: string;
}

export interface LeadershipGroup {
    id: string;
    title: string;
    description: string;
    members: LeadershipMember[];
}

export interface LeadershipData {
    rotaryYear: string;
    presidentialMessage: string;
    groups: LeadershipGroup[];
}

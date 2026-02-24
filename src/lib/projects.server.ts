import type { Project, ProjectCategory, ProjectStatus } from "./projects";

function slugify(str: string): string {
    return (str || "project")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "project";
}

// Fallback logic for categorizing projects based on Rotary structured data or text
function mapCategory(value: string): [ProjectCategory, string] {
    const s = (value || "").toLowerCase();
    if (s.includes("community")) return ["community", "Community Service"];
    if (s.includes("vocational")) return ["vocational", "Vocational Service"];
    if (s.includes("international")) return ["international", "International Service"];
    if (s.includes("club")) return ["club", "Club Service"];
    return ["other", "Other"];
}

// Fetch projects directly from the public Rotary Showcase (SPC) API
export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch("https://spc.rotary.org/api/Search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "subscriptionkey": "ROTARY_API_KEY",
            },
            body: JSON.stringify({
                clubId: "26141", // Exact Rotary Club ID for Bangalore JP Nagar
                limit: "500",    // Ensure we fetch all historical projects
                variation: "en",
            }),
            // Next.js rate-limiting safeguard: Cache this exact API request for 1 hour.
            // Even under heavy traffic, Rotary's servers are only hit once per hour.
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.error("Failed to fetch from Rotary SPC API:", res.status);
            return []; // Return empty array or throw, depending on how you want to handle errors
        }

        const data = await res.json();
        if (!data || !Array.isArray(data)) {
            return [];
        }

        // Filter for any projects from July 2025 onwards safely avoiding JS Timezone offsets
        const currentYearProjects = data.filter((item: any) => {
            const dateStr = item.startDate || item.endDate || item.addDate;
            if (!dateStr) return false;

            // Extract YYYY and MM from "YYYY-MM-DDThh:mm:ss" strictly
            const datePart = dateStr.split("T")[0];
            const [yearStr, monthStr] = datePart.split("-");
            const y = parseInt(yearStr, 10);
            const m = parseInt(monthStr, 10);

            // Any project from July 2025 onwards
            if (y === 2025 && m >= 7) return true;
            if (y > 2025) return true;
            return false;
        });

        // Map the SPC API response to our Project interface
        return currentYearProjects.map((item: any) => {
            const name = item.title || "Untitled Project";
            const [category, categoryLabel] = mapCategory(item.summary + " " + item.description);

            // Generate a placeholder or SPC image URL if possible
            // We use the SPC project details page as the read-more link
            const spcUrl = item.nfKey ? `https://spc.rotary.org/Project/Details/${item.nfKey}` : "#";

            // Map the SPC project status to our types
            let status: ProjectStatus = "completed";
            if (item.completedFlag === "0" || item.projectStatus === "Project Not Started") {
                status = "upcoming";
            } else if (item.projectStatus === "Work In Progress") {
                status = "ongoing";
            }

            // Use the exact CDN domain for the actual Rotary Showcase images
            const imageUrl = item.url ? `https://spc.rotary.org/azureImages/${item.url}` : "/images/causes/project-hero.jpg";

            return {
                id: item.nfKey || slugify(name),
                name,
                slug: slugify(name),
                shortDescription: (item.summary || "").trim(),
                fullDescription: `${(item.description || "").trim()}\n\n[View on Rotary Showcase](${spcUrl})`,
                image: imageUrl, // Fixed Image URL
                category,
                categoryLabel,
                status,
                statusLabel: status === "completed" ? "Completed" : status === "ongoing" ? "Ongoing" : "Upcoming",
                url: spcUrl,
            };
        });
    } catch (error) {
        console.error("Error fetching projects from Rotary SPC:", error);
        return [];
    }
}

export async function getProjectsPreview(count = 3): Promise<Project[]> {
    const allProjects = await getProjects();
    return allProjects.slice(0, count);
}

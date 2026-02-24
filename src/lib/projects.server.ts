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
    return ["other", value || "Other"];
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
                keyword: "Rotary Bangalore JP Nagar",
                limit: "100", // Fetch up to 100 projects
                variation: "en",
            }),
            // Revalidate the cache every hour (3600 seconds)
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

        // Map the SPC API response to our Project interface
        return data.map((item: any) => {
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

            // You can prepend the Rotary blob storage URL if you know the exact path.
            // For now, we use a fallback image if we don't know the exact CDN domain.
            const imageUrl = item.url ? `/images/causes/aarohana.webp` : "/images/causes/aarohana.webp"; // Using placeholder for now to avoid broken images

            return {
                id: item.nfKey || slugify(name),
                name,
                slug: slugify(name),
                shortDescription: (item.summary || "").trim(),
                fullDescription: `${(item.description || "").trim()}\n\n[View on Rotary Showcase](${spcUrl})`,
                image: imageUrl, // Placeholder or actual URL if known
                category,
                categoryLabel,
                status,
                statusLabel: status === "completed" ? "Completed" : status === "ongoing" ? "Ongoing" : "Upcoming",
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

import type { Project, ProjectCategory, ProjectStatus } from "./projects";
import { rotaryConfig } from "@/config/rotary-year";
import fallbackData from "@/content/2026-27/featured-projects.json";

function slugify(str: string): string {
    return (str || "project")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "project";
}

function mapCategory(value: string): [ProjectCategory, string] {
    const s = (value || "").toLowerCase();
    if (s.includes("health") || s.includes("dialysis") || s.includes("medical") || s.includes("polio")) {
        return ["community", "Disease Prevention & Healthcare"];
    }
    if (s.includes("school") || s.includes("education") || s.includes("literacy") || s.includes("student") || s.includes("book")) {
        return ["vocational", "Basic Education & Literacy"];
    }
    if (s.includes("youth") || s.includes("ryla") || s.includes("rotaract") || s.includes("interact")) {
        return ["club", "Youth & Leadership Development"];
    }
    if (s.includes("environment") || s.includes("water") || s.includes("tree") || s.includes("plastic")) {
        return ["community", "Water, Sanitation & Environment"];
    }
    if (s.includes("vocational") || s.includes("award") || s.includes("career")) {
        return ["vocational", "Vocational Service"];
    }
    if (s.includes("international") || s.includes("peace")) {
        return ["international", "International Service"];
    }
    return ["community", "Community Service"];
}

export async function getProjects(rotaryYear = rotaryConfig.activeRotaryYear): Promise<Project[]> {
    try {
        const res = await fetch("https://spc.rotary.org/api/Search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "subscriptionkey": "ROTARY_API_KEY",
            },
            body: JSON.stringify({
                clubId: rotaryConfig.clubId,
                limit: "500",
                variation: "en",
            }),
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.warn(`Rotary SPC API returned ${res.status}. Using cached/fallback projects.`);
            return fallbackData.fallbackProjects as Project[];
        }

        const data = await res.json();
        if (!data || !Array.isArray(data)) {
            return fallbackData.fallbackProjects as Project[];
        }

        // Determine year boundary based on requested Rotary Year (e.g. "2026-27" -> 2026-07-01 to 2027-06-30, "2025-26" -> 2025-07-01 to 2026-06-30)
        const [startYearStr] = rotaryYear.split("-");
        const startY = parseInt(startYearStr, 10);
        const endY = startY + 1;

        const filtered = data.filter((item: any) => {
            const dateStr = item.startDate || item.endDate || item.addDate;
            if (!dateStr) return false;

            const datePart = dateStr.split("T")[0];
            const [yearStr, monthStr] = datePart.split("-");
            const y = parseInt(yearStr, 10);
            const m = parseInt(monthStr, 10);

            // Active Rotary Year: July 1 of start year to June 30 of end year
            if (y === startY && m >= 7) return true;
            if (y === endY && m <= 6) return true;
            return false;
        });

        // Sort all projects by date descending (newest first)
        const projectsList = [...data];
        projectsList.sort((a: any, b: any) => {
            const dateA = new Date(a.startDate || a.addDate || 0).getTime();
            const dateB = new Date(b.startDate || b.addDate || 0).getTime();
            return dateB - dateA;
        });

        return projectsList.map((item: any) => {
            const name = (item.title || "Rotary Community Project").trim();
            const [category, categoryLabel] = mapCategory(name + " " + (item.summary || "") + " " + (item.description || ""));

            let status: ProjectStatus = "completed";
            if (item.completedFlag === "0" || item.projectStatus === "Project Not Started") {
                status = "upcoming";
            } else if (item.projectStatus === "Work In Progress") {
                status = "ongoing";
            }

            const imageUrl = item.url ? `https://spc.rotary.org/azureImages/${item.url}` : "/images/causes/1.webp";

            // Calculate Rotary Year from project date (July 1 to June 30)
            const dateStr = item.startDate || item.addDate || "";
            let ry = "Past Years";
            if (dateStr) {
                const parts = dateStr.split("T")[0].split("-");
                const y = parseInt(parts[0], 10);
                const m = parseInt(parts[1], 10);
                if (!isNaN(y) && !isNaN(m)) {
                    if (m >= 7) {
                        ry = `${y}-${(y + 1).toString().slice(2)}`;
                    } else {
                        ry = `${y - 1}-${y.toString().slice(2)}`;
                    }
                }
            }

            return {
                id: item.nfKey || slugify(name),
                name,
                slug: slugify(name),
                shortDescription: (item.summary || "").trim() || "Dedicated community service initiative by Rotary Bangalore JP Nagar.",
                fullDescription: (item.description || item.summary || "").trim(),
                image: imageUrl,
                category,
                categoryLabel,
                status,
                statusLabel: status === "completed" ? "Completed" : status === "ongoing" ? "Ongoing" : "Upcoming",
                startDate: dateStr ? dateStr.split("T")[0] : undefined,
                rotaryYear: ry,
                budget: item.totalBudget ? `$${Number(item.totalBudget).toLocaleString()}` : undefined,
                location: item.countryName || "Bengaluru, India",
            };
        });
    } catch (error) {
        console.error("Error fetching projects from Rotary SPC:", error);
        return fallbackData.fallbackProjects as Project[];
    }
}

export async function getProjectsPreview(count = 3): Promise<Project[]> {
    const allProjects = await getProjects();
    return allProjects.slice(0, count);
}

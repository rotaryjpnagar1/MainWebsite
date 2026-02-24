// Server-only utility for parsing projects CSV
import Papa from "papaparse";
import { readFileSync } from "fs";
import { join } from "path";
import type { Project, ProjectCategory, ProjectStatus } from "./projects";

interface CsvRow {
    ID?: string;
    Name?: string;
    "Short Description"?: string;
    "Full Description"?: string;
    Image?: string;
    Category?: string;
    Status?: string;
}

function slugify(str: string): string {
    return (str || "project")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "project";
}

function mapCategory(value: string): [ProjectCategory, string] {
    const s = (value || "").toLowerCase();
    if (s.includes("community")) return ["community", "Community Service"];
    if (s.includes("vocational")) return ["vocational", "Vocational Service"];
    if (s.includes("international")) return ["international", "International Service"];
    if (s.includes("club")) return ["club", "Club Service"];
    return ["other", value || "Other"];
}

export function getProjects(): Project[] {
    const csvPath = join(process.cwd(), "src/data/projects-2025-26.csv");
    const csv = readFileSync(csvPath, "utf-8");
    const { data } = Papa.parse<CsvRow>(csv, {
        header: true,
        skipEmptyLines: true,
    });

    return data.map((row) => {
        const name = (row.Name || "Untitled Project").trim();
        const [category, categoryLabel] = mapCategory(row.Category || "");
        const statusRaw = (row.Status || "completed").toLowerCase();
        const status: ProjectStatus = ["upcoming", "ongoing", "completed"].includes(statusRaw)
            ? (statusRaw as ProjectStatus)
            : "completed";

        return {
            id: row.ID || slugify(name),
            name,
            slug: slugify(name),
            shortDescription: (row["Short Description"] || "").trim(),
            fullDescription: (row["Full Description"] || "").trim(),
            image: (row.Image || "").trim(),
            category,
            categoryLabel,
            status,
            statusLabel: status === "completed" ? "Completed" : status === "ongoing" ? "Ongoing" : "Upcoming",
        };
    });
}

export function getProjectsPreview(count = 3): Project[] {
    return getProjects().slice(0, count);
}

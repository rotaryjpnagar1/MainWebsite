// Server-only utility for parsing team CSV
import Papa from "papaparse";
import { readFileSync } from "fs";
import { join } from "path";
import type { TeamMember } from "./team";

interface CsvRow {
    Position?: string;
    Name?: string;
}

export function getTeam(): TeamMember[] {
    const csvPath = join(process.cwd(), "src/data/team-2025-26.csv");
    const csv = readFileSync(csvPath, "utf-8");
    const { data } = Papa.parse<CsvRow>(csv, {
        header: true,
        skipEmptyLines: true,
    });

    return data
        .filter((row) => row.Position && row.Name)
        .map((row) => ({
            position: (row.Position || "").trim(),
            name: (row.Name || "").trim(),
        }));
}

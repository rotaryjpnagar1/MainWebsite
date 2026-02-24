"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
    projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Extract unique categories dynamically from the fetched projects
    const categories = useMemo(() => {
        const uniqueLabels = new Set(projects.map(p => p.categoryLabel));
        // Sort alphabetically but always keep "All" at the front in the render
        return ["All", ...Array.from(uniqueLabels).sort()];
    }, [projects]);

    // Filter projects based on the selected category
    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return projects;
        return projects.filter(p => p.categoryLabel === selectedCategory);
    }, [projects, selectedCategory]);

    if (projects.length === 0) {
        return (
            <p className="text-center text-gray-500 py-12">
                No projects available yet. Check back soon!
            </p>
        );
    }

    return (
        <div>
            {/* Filter Bar */}
            {categories.length > 2 && (
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? "bg-rotary-blue text-white shadow-md"
                                    : "bg-white text-gray-600 border border-gray-200 hover:border-rotary-blue hover:text-rotary-blue"
                                }`}
                        >
                            {category}
                            <span className="ml-2 px-2 py-0.5 rounded-full bg-black/10 text-xs">
                                {category === "All" ? projects.length : projects.filter(p => p.categoryLabel === category).length}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Empty State for Filters */}
            {filteredProjects.length === 0 && (
                <p className="text-center text-gray-500 py-12">
                    No projects found for {selectedCategory}.
                </p>
            )}
        </div>
    );
}

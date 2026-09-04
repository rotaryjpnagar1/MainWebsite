"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";

interface ProjectsListProps {
    projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState<string>("All");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(12);

    // Available years extracted dynamically
    const yearOptions = useMemo(() => {
        const years = new Set<string>();
        projects.forEach((p) => {
            if (p.rotaryYear) years.add(p.rotaryYear);
        });
        const sorted = Array.from(years).sort().reverse();
        return ["All", ...sorted];
    }, [projects]);

    // Available categories extracted dynamically
    const categoryOptions = useMemo(() => {
        const uniqueLabels = new Set(projects.map((p) => p.categoryLabel).filter(Boolean));
        return ["All", ...Array.from(uniqueLabels).sort()];
    }, [projects]);

    // Multi-criteria filtering: Search query + Year + Category
    const filteredProjects = useMemo(() => {
        return projects.filter((p) => {
            // 1. Search Query
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const matchName = p.name.toLowerCase().includes(q);
                const matchDesc = (p.shortDescription || "").toLowerCase().includes(q) ||
                    (p.fullDescription || "").toLowerCase().includes(q);
                const matchCategory = p.categoryLabel.toLowerCase().includes(q);
                const matchLocation = (p.location || "").toLowerCase().includes(q);
                if (!matchName && !matchDesc && !matchCategory && !matchLocation) {
                    return false;
                }
            }

            // 2. Year Filter
            if (selectedYear !== "All" && p.rotaryYear !== selectedYear) {
                return false;
            }

            // 3. Category Filter
            if (selectedCategory !== "All" && p.categoryLabel !== selectedCategory) {
                return false;
            }

            return true;
        });
    }, [projects, searchQuery, selectedYear, selectedCategory]);

    const displayedProjects = useMemo(() => {
        return filteredProjects.slice(0, visibleCount);
    }, [filteredProjects, visibleCount]);

    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedYear("All");
        setSelectedCategory("All");
        setVisibleCount(12);
    };

    return (
        <div className="space-y-8">
            {/* Filter & Search Bar */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
                {/* Search Input & Active Filter Summary */}
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                    <div className="relative flex-1 max-w-lg">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setVisibleCount(12);
                            }}
                            placeholder="Search projects by keyword, school, health camp..."
                            className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-rotary-blue focus:ring-1 focus:ring-rotary-blue transition-colors bg-gray-50/50"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label="Clear search"
                            >
                                <FaTimes size={13} />
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500 font-light justify-between sm:justify-end">
                        <span>
                            Showing <strong className="text-gray-900 font-bold">{filteredProjects.length}</strong> of {projects.length} initiatives
                        </span>
                        {(searchQuery || selectedYear !== "All" || selectedCategory !== "All") && (
                            <button
                                onClick={handleResetFilters}
                                className="text-rotary-blue hover:underline font-semibold text-xs flex items-center gap-1"
                            >
                                <FaTimes size={10} /> Reset
                            </button>
                        )}
                    </div>
                </div>

                {/* Year Filter Tabs */}
                {yearOptions.length > 2 && (
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                            <FaFilter size={10} /> Filter by Rotary Year
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {yearOptions.map((year) => {
                                const isSelected = selectedYear === year;
                                const count =
                                    year === "All"
                                        ? projects.length
                                        : projects.filter((p) => p.rotaryYear === year).length;
                                return (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            setSelectedYear(year);
                                            setVisibleCount(12);
                                        }}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                            isSelected
                                                ? "bg-rotary-blue text-white shadow-sm"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        <span>{year === "All" ? "All Years" : `RY ${year}`}</span>
                                        <span
                                            className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                                                isSelected ? "bg-white/25 text-white" : "bg-white text-gray-500"
                                            }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Category Pills */}
                {categoryOptions.length > 2 && (
                    <div className="pt-2 border-t border-gray-100">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                            Focus Area
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {categoryOptions.map((cat) => {
                                const isSelected = selectedCategory === cat;
                                const count =
                                    cat === "All"
                                        ? projects.length
                                        : projects.filter((p) => p.categoryLabel === cat).length;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setVisibleCount(12);
                                        }}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                            isSelected
                                                ? "bg-rotary-gold text-gray-900 shadow-sm"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        <span>{cat}</span>
                                        <span
                                            className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                                                isSelected ? "bg-black/10 text-gray-900" : "bg-white text-gray-500"
                                            }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 max-w-lg mx-auto p-8 shadow-sm">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No matching initiatives found</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                        We couldn&apos;t find any projects matching your search criteria. Try resetting the filters to view all club projects.
                    </p>
                    <button
                        onClick={handleResetFilters}
                        className="bg-rotary-blue text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-rotary-dark-blue transition-colors shadow-sm"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}

            {/* Load More Button */}
            {visibleCount < filteredProjects.length && (
                <div className="text-center pt-8">
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 12)}
                        className="bg-white hover:bg-rotary-blue hover:text-white text-gray-800 border-2 border-rotary-blue font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center gap-2"
                    >
                        <span>Load More Projects ({filteredProjects.length - visibleCount} remaining)</span>
                    </button>
                </div>
            )}
        </div>
    );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            {/* Image */}
            <div className="relative h-52">
                <Image
                    src={project.image || "/images/causes/aarohana.webp"}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Status badge */}
                <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${project.status === "ongoing"
                            ? "bg-rotary-gold text-white"
                            : project.status === "upcoming"
                                ? "bg-rotary-blue text-white"
                                : "bg-rotary-green text-white"
                        }`}
                >
                    {project.statusLabel}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-medium text-rotary-green bg-rotary-green/10 px-2 py-0.5 rounded-full inline-block mb-2 w-fit">
                    {project.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {project.shortDescription}
                </p>

                {/* Full description */}
                {project.fullDescription && (
                    <>
                        {expanded && (
                            <p className="text-gray-600 text-sm leading-relaxed mt-3 border-t pt-3">
                                {project.fullDescription}
                            </p>
                        )}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="mt-4 w-full bg-rotary-green text-white text-sm font-semibold py-2 rounded-lg hover:bg-rotary-dark-green transition-colors"
                        >
                            {expanded ? "Read Less" : "Read More"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

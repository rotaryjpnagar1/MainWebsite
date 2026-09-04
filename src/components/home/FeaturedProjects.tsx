import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { rotaryConfig } from "@/config/rotary-year";

interface FeaturedProjectsProps {
    projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3.5 py-1.5 rounded-full">
                            Featured Initiatives
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                            Key Projects & Community Action
                        </h2>
                        <p className="text-gray-600 mt-2 text-base font-light">
                            Live synchronization with Rotary International Showcase (SPC) for RY {rotaryConfig.activeRotaryYear}.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-bold text-rotary-blue hover:text-rotary-dark-blue group shrink-0"
                    >
                        <span>View all club projects</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                {/* 3 Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                        >
                            <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src={project.image || "/images/causes/1.webp"}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm ${
                                        project.status === "ongoing"
                                            ? "bg-rotary-gold text-gray-900"
                                            : project.status === "upcoming"
                                                ? "bg-rotary-blue text-white"
                                                : "bg-rotary-green text-white"
                                    }`}>
                                        {project.statusLabel}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-rotary-gold mb-2 block">
                                        {project.categoryLabel}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-rotary-blue transition-colors line-clamp-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3 mb-6">
                                        {project.shortDescription || "Dedicated community service initiative under Rotary District 3191."}
                                    </p>
                                </div>

                                <Link
                                    href="/projects"
                                    className="text-xs font-bold uppercase tracking-wider text-rotary-blue hover:text-rotary-dark-blue inline-flex items-center gap-1 mt-auto"
                                >
                                    <span>Learn more on Projects page</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

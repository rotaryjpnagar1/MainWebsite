import type { Metadata } from "next";
import Image from "next/image";
import ProjectsList from "@/components/projects/ProjectsList";
import { getProjects } from "@/lib/projects.server";

export const metadata: Metadata = {
    title: "Our Projects",
    description:
        "Explore the community service projects and initiatives completed by Rotary Bangalore JP Nagar in 2025-26.",
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            {/* Hero */}
            <section className="relative h-56 bg-gray-900 flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/slide/Rotary JP Nagar Logo.webp"
                    alt="Our Projects"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Our Projects</h1>
                    <p className="text-gray-300 mt-2">Our Key Service Initiatives – 2025-26</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {projects.length === 0 ? (
                        <p className="text-center text-gray-500 py-12">
                            No projects available yet. Check back soon!
                        </p>
                    ) : (
                        <ProjectsList projects={projects} />
                    )}

                    <p className="text-center text-sm text-gray-400 mt-10">
                        To add or update projects, please update them on{" "}
                        <a href="https://spc.rotary.org/" target="_blank" rel="noopener noreferrer" className="text-rotary-blue underline">
                            Rotary Showcase (Service Project Center)
                        </a>. This page syncs automatically.
                    </p>
                </div>
            </section>
        </>
    );
}

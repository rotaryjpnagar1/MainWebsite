import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectsPreviewProps {
    projects: Project[];
}

export default function ProjectsPreview({ projects }: ProjectsPreviewProps) {
    return (
        <section className="py-16 bg-white" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                    Our Key Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image || "/images/causes/aarohana.webp"}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                                <p className="text-gray-600 text-sm flex-1">{project.shortDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/projects"
                        className="inline-block bg-rotary-green text-white font-semibold px-8 py-3 rounded-lg hover:bg-rotary-dark-green transition-colors duration-200 shadow-md"
                    >
                        Know More About Our Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

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
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-rotary-gold uppercase mb-3">Our Work</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Key Projects
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col group border border-gray-100/50"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-rotary-blue/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src={project.image || "/images/causes/aarohana.webp"}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1 bg-white relative z-20">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-rotary-blue transition-colors">{project.name}</h3>
                                <p className="text-gray-500 font-light leading-relaxed text-sm flex-1">{project.shortDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/projects"
                        className="inline-block bg-rotary-gold text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-rotary-blue hover:text-white hover:-translate-y-1 shadow-[0_10px_30px_rgba(247,168,27,0.2)] hover:shadow-[0_15px_40px_rgba(23,69,143,0.3)] transition-all duration-300"
                    >
                        Explore All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

import type { Metadata } from "next";
import Image from "next/image";
import ProjectsList from "@/components/projects/ProjectsList";
import { getProjects } from "@/lib/projects.server";
import { rotaryConfig } from "@/config/rotary-year";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";

export const metadata: Metadata = {
    title: `Our Projects & Community Action – RY ${rotaryConfig.activeRotaryYear}`,
    description: `Explore community service initiatives by ${rotaryConfig.clubName} in healthcare, education, environment, and youth leadership for Rotary Year ${rotaryConfig.activeRotaryYear}.`,
    alternates: {
        canonical: "/projects",
    },
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <>
            <BreadcrumbsJsonLd items={[{ name: "Community Projects", path: "/projects" }]} />
            {/* Header Hero */}
            <section className="relative py-20 bg-rotary-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/slide/Rotary JP Nagar Logo.webp"
                        alt={`${rotaryConfig.clubName} Projects`}
                        fill
                        priority
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rotary-navy via-rotary-navy/95 to-rotary-navy/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="text-xs font-bold uppercase tracking-widest text-rotary-gold mb-3">
                            Rotary Year {rotaryConfig.activeRotaryYear} • Service Projects
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Our Projects & Community Action
                        </h1>
                        <p className="text-lg text-gray-200 font-light leading-relaxed">
                            Discover our hands-on service initiatives across Bengaluru. Synced directly with the Rotary International Service Project Center (Showcase).
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <ProjectsList projects={projects} />

                    <div className="mt-20 pt-8 border-t border-gray-200 text-center max-w-2xl mx-auto">
                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                            Project records are synchronized with{" "}
                            <a
                                href="https://spc.rotary.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rotary-blue font-medium underline hover:text-rotary-dark-blue"
                            >
                                Rotary International Showcase (SPC)
                            </a>
                            . To partner with our club on CSR initiatives or sponsor a school/dialysis project, please{" "}
                            <a href="/join" className="text-rotary-blue font-medium underline">contact our CSR committee</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

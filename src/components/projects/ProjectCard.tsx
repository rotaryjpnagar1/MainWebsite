"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Project } from "@/lib/projects";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Prevent scrolling on the body when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleReadMore = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Card (Preview) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group border border-gray-100/50">
                <div className="relative h-56 cursor-pointer overflow-hidden" onClick={handleReadMore}>
                    <div className="absolute inset-0 bg-rotary-blue/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                        src={project.image || "/images/causes/aarohana.webp"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status badge */}
                    <span
                        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 uppercase tracking-wider ${project.status === "ongoing"
                            ? "bg-rotary-gold text-gray-900"
                            : project.status === "upcoming"
                                ? "bg-rotary-blue text-white"
                                : "bg-rotary-green text-white"
                            }`}
                    >
                        {project.statusLabel}
                    </span>
                </div>

                <div className="p-8 flex flex-col flex-1 bg-white relative z-20">
                    <span className="text-xs font-bold text-rotary-gold bg-rotary-gold/10 px-3 py-1.5 rounded-full mb-4 inline-block tracking-wider uppercase border border-rotary-gold/20 w-fit">
                        {project.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3 line-clamp-2 cursor-pointer group-hover:text-rotary-blue transition-colors" title={project.name} onClick={handleReadMore}>
                        {project.name}
                    </h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
                        {project.shortDescription || "No summary available."}
                    </p>

                    <button
                        onClick={handleReadMore}
                        className="w-full bg-gray-50 text-gray-900 border border-gray-200 text-sm font-bold py-3 rounded-xl hover:bg-rotary-gold hover:border-rotary-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Read Detail</span>
                    </button>
                </div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-300"
                        onClick={handleCloseModal}
                        aria-hidden="true"
                    />

                    {/* Modal Content */}
                    <div
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up duration-300 border border-white/20"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        {/* Header Area with Image */}
                        <div className="relative h-72 sm:h-96 w-full shrink-0 bg-gray-900 overflow-hidden group">
                            <Image
                                src={project.image || "/images/causes/aarohana.webp"}
                                alt={project.name}
                                fill
                                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 800px"
                                priority
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent flex flex-col justify-end p-8 sm:p-12">
                                <span className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4 inline-block w-fit shadow-lg border border-white/20 ${project.status === "ongoing"
                                    ? "bg-rotary-gold text-gray-900"
                                    : project.status === "upcoming"
                                        ? "bg-rotary-blue text-white"
                                        : "bg-rotary-green text-white"
                                    }`}>
                                    {project.statusLabel}
                                </span>
                                <h2 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-extrabold text-white leading-tight drop-shadow-xl">
                                    {project.name}
                                </h2>
                            </div>

                            {/* Close button inside image top right */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 backdrop-blur-md bg-black/20 hover:bg-rotary-gold text-white hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center transition-all z-10 hover:scale-110 shadow-lg border border-white/20"
                                aria-label="Close modal"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        {/* Body Scrollable Details */}
                        <div className="p-8 sm:p-12 overflow-y-auto w-full bg-gray-50 flex-1 relative">
                            {/* Decorative background blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rotary-gold/5 rounded-full blur-3xl pointer-events-none" />

                            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 p-8 relative z-10">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-center text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm">
                                        <span className="font-bold text-gray-400 uppercase tracking-widest text-xs mr-3">Category</span>
                                        <span className="font-semibold text-rotary-blue">{project.categoryLabel}</span>
                                    </div>

                                    {project.url && project.url !== "#" && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-white text-rotary-blue border border-rotary-blue hover:bg-rotary-blue hover:text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            <FaExternalLinkAlt className="mr-2 text-xs" />
                                            View on Rotary Showcase
                                        </a>
                                    )}
                                </div>

                                <div className="prose prose-lg max-w-none text-gray-600 font-light">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-5 border-l-4 border-rotary-gold pl-4">Project Details</h3>
                                    <p className="leading-relaxed whitespace-pre-wrap">
                                        {/* Remove the markdown link that was previously injected in the server utility as we have a real button now */}
                                        {project.fullDescription ? project.fullDescription.replace(/\[View on Rotary Showcase\]\(.*?\)/g, '') : project.shortDescription}
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-100 flex justify-end">
                                    <button
                                        onClick={handleCloseModal}
                                        className="bg-gray-100 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-bold tracking-wide text-sm"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { Project } from "@/lib/projects";
import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaUsers,
    FaClock,
    FaMapMarkerAlt,
    FaHandHoldingHeart,
    FaCalendarAlt,
    FaImages,
} from "react-icons/fa";

interface ProjectCardProps {
    project: Project;
}

interface ProjectDetailData {
    images: string[];
    volunteers?: number | null;
    hours?: number | null;
    budget?: string | null;
    sponsor?: string | null;
    location?: string | null;
    fullDescription?: string | null;
    summary?: string | null;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detailData, setDetailData] = useState<ProjectDetailData | null>(null);
    const [isLoadingDetail, setIsLoadingDetail] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    // Fetch full project details (including gallery photos & metrics) on demand
    const handleOpenModal = () => {
        setIsModalOpen(true);
        setActiveImageIndex(0);

        if (!detailData && project.id && project.id.includes("-")) {
            setIsLoadingDetail(true);
            fetch(`/api/projects/${project.id}`)
                .then((res) => (res.ok ? res.json() : null))
                .then((data) => {
                    if (data) {
                        setDetailData(data);
                    }
                })
                .catch((err) => console.error("Could not fetch project details:", err))
                .finally(() => setIsLoadingDetail(false));
        }
    };

    // Handle Escape key and body scroll locking
    useEffect(() => {
        if (!isModalOpen) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleCloseModal();
            } else if (e.key === "ArrowLeft") {
                setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === "ArrowRight") {
                setActiveImageIndex((prev) => {
                    const max = (detailData?.images?.length || 1) - 1;
                    return prev < max ? prev + 1 : prev;
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen, handleCloseModal, detailData]);

    // Consolidate gallery images
    const galleryImages =
        detailData?.images && detailData.images.length > 0
            ? detailData.images
            : [project.image || "/images/causes/1.webp"];

    const currentImage = galleryImages[activeImageIndex] || galleryImages[0];

    const displayDescription =
        detailData?.fullDescription ||
        project.fullDescription ||
        project.shortDescription;

    const displayLocation = detailData?.location || project.location;
    const displayBudget = detailData?.budget || project.budget;
    const displayVolunteers = detailData?.volunteers || project.volunteers;
    const displayHours = detailData?.hours || project.hours;

    return (
        <>
            {/* Project Card */}
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div
                    className="relative h-60 w-full cursor-pointer overflow-hidden bg-gray-100"
                    onClick={handleOpenModal}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenModal()}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${project.name}`}
                >
                    <Image
                        src={project.image || "/images/causes/1.webp"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Status Badge */}
                    <span
                        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider ${
                            project.status === "ongoing"
                                ? "bg-rotary-gold text-gray-900"
                                : project.status === "upcoming"
                                  ? "bg-rotary-blue text-white"
                                  : "bg-rotary-green text-white"
                        }`}
                    >
                        {project.statusLabel}
                    </span>

                    {/* Rotary Year Badge */}
                    {project.rotaryYear && (
                        <span className="absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                            RY {project.rotaryYear}
                        </span>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-medium inline-flex items-center gap-1.5 bg-rotary-blue/90 px-3 py-1.5 rounded-full">
                            <FaImages size={12} /> Click to View Story & Photos
                        </span>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-rotary-gold uppercase tracking-wider">
                                {project.categoryLabel}
                            </span>
                            {project.startDate && (
                                <span className="text-[11px] text-gray-400 font-light flex items-center gap-1">
                                    <FaCalendarAlt size={10} />
                                    {project.startDate}
                                </span>
                            )}
                        </div>

                        <h3
                            className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 cursor-pointer group-hover:text-rotary-blue transition-colors tracking-tight leading-snug"
                            title={project.name}
                            onClick={handleOpenModal}
                        >
                            {project.name}
                        </h3>

                        <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-3 mb-6">
                            {project.shortDescription || "Dedicated community service initiative by Rotary Bangalore JP Nagar."}
                        </p>
                    </div>

                    <button
                        onClick={handleOpenModal}
                        className="w-full bg-gray-50 hover:bg-rotary-blue text-gray-700 hover:text-white border border-gray-200 hover:border-rotary-blue text-xs font-bold py-3 rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                        <span>View Photos & Impact</span>
                    </button>
                </div>
            </article>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-rotary-navy/80 backdrop-blur-md transition-opacity"
                        onClick={handleCloseModal}
                        aria-hidden="true"
                    />

                    {/* Dialog Box */}
                    <div
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden z-10 border border-gray-200 animate-in fade-in zoom-in-95 duration-200"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-project-title"
                    >
                        {/* Gallery / Header Area */}
                        <div className="relative h-72 sm:h-96 w-full shrink-0 bg-gray-950 overflow-hidden select-none">
                            <Image
                                key={currentImage}
                                src={currentImage}
                                alt={project.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 900px"
                                priority
                            />

                            {/* Gradient overlay for title reading */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/30 pointer-events-none" />

                            {/* Gallery Navigation Arrows (if multiple photos) */}
                            {galleryImages.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImageIndex((prev) =>
                                                prev > 0 ? prev - 1 : galleryImages.length - 1
                                            );
                                        }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-rotary-gold text-white hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-lg z-20"
                                        aria-label="Previous photo"
                                    >
                                        <FaChevronLeft size={16} />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImageIndex((prev) =>
                                                prev < galleryImages.length - 1 ? prev + 1 : 0
                                            );
                                        }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-rotary-gold text-white hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-lg z-20"
                                        aria-label="Next photo"
                                    >
                                        <FaChevronRight size={16} />
                                    </button>

                                    {/* Photo Counter Badge */}
                                    <div className="absolute top-4 left-4 z-20 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                                        <FaImages size={12} className="text-rotary-gold" />
                                        <span>
                                            Photo {activeImageIndex + 1} of {galleryImages.length}
                                        </span>
                                    </div>
                                </>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-rotary-gold text-white hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-lg"
                                aria-label="Close project details"
                            >
                                <FaTimes size={16} />
                            </button>

                            {/* Title & Category on Bottom of Photo */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-rotary-gold bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {project.categoryLabel}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {project.statusLabel}
                                    </span>
                                    {project.rotaryYear && (
                                        <span className="text-xs font-bold uppercase tracking-wider text-rotary-gold bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm">
                                            RY {project.rotaryYear}
                                        </span>
                                    )}
                                </div>
                                <h2
                                    id="modal-project-title"
                                    className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
                                >
                                    {project.name}
                                </h2>
                            </div>
                        </div>

                        {/* Thumbnail Strip (if multiple photos) */}
                        {galleryImages.length > 1 && (
                            <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-2 overflow-x-auto border-b border-gray-800">
                                {galleryImages.map((img, idx) => (
                                    <button
                                        key={img + idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative h-14 w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                                            activeImageIndex === idx
                                                ? "border-rotary-gold scale-105 shadow-md"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Content Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
                            {/* Key Impact Stats Bar */}
                            {(displayVolunteers || displayHours || displayBudget || displayLocation) && (
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 rounded-2xl p-4 border border-gray-200/80">
                                    {displayVolunteers && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-blue-100 text-rotary-blue flex items-center justify-center shrink-0">
                                                <FaUsers size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold text-gray-500">Volunteers</div>
                                                <div className="text-sm font-extrabold text-gray-900">{displayVolunteers}</div>
                                            </div>
                                        </div>
                                    )}

                                    {displayHours && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-gold-100 text-rotary-gold flex items-center justify-center shrink-0">
                                                <FaClock size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold text-gray-500">Service Hours</div>
                                                <div className="text-sm font-extrabold text-gray-900">{displayHours} hrs</div>
                                            </div>
                                        </div>
                                    )}

                                    {displayBudget && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                                                <FaHandHoldingHeart size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase font-bold text-gray-500">Project Value</div>
                                                <div className="text-sm font-extrabold text-gray-900">{displayBudget}</div>
                                            </div>
                                        </div>
                                    )}

                                    {displayLocation && (
                                        <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                                            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                                                <FaMapMarkerAlt size={16} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-[10px] uppercase font-bold text-gray-500">Location</div>
                                                <div className="text-xs font-bold text-gray-900 truncate" title={displayLocation}>
                                                    {displayLocation}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Full Project Description */}
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-rotary-blue mb-2.5">
                                    About This Initiative
                                </h4>
                                <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base whitespace-pre-line">
                                    {displayDescription}
                                </p>
                            </div>

                            {/* Sponsor & Partner Credit */}
                            {detailData?.sponsor && (
                                <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-center gap-2">
                                    <span className="font-bold">Community Partner / Sponsor:</span>
                                    <span>{detailData.sponsor}</span>
                                </div>
                            )}
                        </div>

                        {/* Footer Controls */}
                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-light">
                                Rotary Bangalore JP Nagar • District 3191
                            </span>
                            <button
                                onClick={handleCloseModal}
                                className="bg-rotary-blue hover:bg-rotary-dark-blue text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors shadow-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

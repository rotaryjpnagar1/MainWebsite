"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import EmblaCarousel from "embla-carousel";
import type { EmblaCarouselType } from "embla-carousel";

const slides = [
    {
        src: "/images/slide/Rotary JP Nagar Logo.webp",
        alt: "We are Rotary",
        title: "We are Rotary",
        description:
            "Discover how Rotary Bangalore JP Nagar impacts lives through dedicated service and community initiatives. Together, we can make a difference.",
    },
    {
        src: "/images/slide/Slide_1.webp",
        alt: "We are Change",
        title: "We are Change",
        description:
            "At Rotary Bangalore JP Nagar, we believe in the power of education to transform lives. Learn about our efforts to empower youth and foster brighter futures.",
    },
    {
        src: "/images/slide/WhatsApp Image 2024-07-23 at 2.12.47 PM.webp",
        alt: "We are Community",
        title: "We are Community",
        description:
            "Join us in making a difference through service and community initiatives.",
    },
];

export default function HeroCarousel() {
    const viewportRef = useRef<HTMLDivElement>(null);
    const emblaRef = useRef<EmblaCarouselType | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaRef.current) return;
        setSelectedIndex(emblaRef.current.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!viewportRef.current) return;
        const embla = EmblaCarousel(viewportRef.current, {
            loop: true,
            duration: 30,
        });
        emblaRef.current = embla;
        embla.on("select", onSelect);
        onSelect();

        const autoplay = setInterval(() => embla.scrollNext(), 5000);
        return () => {
            clearInterval(autoplay);
            embla.destroy();
        };
    }, [onSelect]);

    return (
        <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
            <div ref={viewportRef} className="h-full overflow-hidden">
                <div className="flex h-full">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="relative flex-[0_0_100%] h-full min-w-0"
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                                priority={i === 0}
                                sizes="100vw"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            {/* Caption */}
                            <div className="absolute bottom-16 left-0 right-0 text-center text-white px-6 animate-slide-up">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-xl max-w-2xl mx-auto text-gray-100 drop-shadow">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaRef.current?.scrollTo(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === selectedIndex
                                ? "bg-rotary-gold w-6"
                                : "bg-white/60 hover:bg-white/90"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Prev/Next arrows */}
            <button
                onClick={() => emblaRef.current?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Previous slide"
            >
                ‹
            </button>
            <button
                onClick={() => emblaRef.current?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Next slide"
            >
                ›
            </button>
        </section>
    );
}

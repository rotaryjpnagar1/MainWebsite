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
        src: "/images/slide/slider-1.jpg",
        alt: "We are Change",
        title: "We are Change",
        description:
            "At Rotary Bangalore JP Nagar, we believe in the power of education to transform lives. Learn about our efforts to empower youth and foster brighter futures.",
    },
    {
        src: "/images/slide/slider-2.jpg",
        alt: "We are Community",
        title: "We are Community",
        description:
            "Join us in making a difference through service and community initiatives.",
    }
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
        <section className="relative h-[80vh] min-h-[500px] overflow-hidden group">
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
                                className="object-cover object-[center_30%]"
                                priority={i === 0}
                                sizes="100vw"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                            {/* Caption */}
                            <div className="absolute bottom-20 left-0 right-0 text-center text-white px-6">
                                <div className={`transition-all duration-700 delay-300 ${i === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl text-white">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 drop-shadow-lg font-light leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaRef.current?.scrollTo(i)}
                        className={`transition-all duration-500 rounded-full ${i === selectedIndex
                            ? "bg-rotary-gold w-10 h-3 shadow-[0_0_15px_rgba(247,168,27,0.5)]"
                            : "bg-white/50 hover:bg-white w-3 h-3 backdrop-blur-sm"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Prev/Next arrows - Visible on hover, hidden on mobile logic */}
            <button
                onClick={() => emblaRef.current?.scrollPrev()}
                className="absolute left-6 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full w-14 h-14 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                aria-label="Previous slide"
            >
                ‹
            </button>
            <button
                onClick={() => emblaRef.current?.scrollNext()}
                className="absolute right-6 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full w-14 h-14 hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                aria-label="Next slide"
            >
                ›
            </button>
        </section>
    );
}

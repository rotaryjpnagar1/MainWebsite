"use client";

import { useEffect, useRef, useState } from "react";

interface CounterStatProps {
    to: number;
    suffix?: string;
    label: string;
    duration?: number;
}

export default function CounterStat({
    to,
    suffix = "",
    label,
    duration = 2000,
}: CounterStatProps) {
    const [count, setCount] = useState(0);
    const hasStarted = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    const start = performance.now();
                    const animate = (now: number) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                        setCount(Math.round(eased * to));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [to, duration]);

    return (
        <div ref={containerRef} className="text-center">
            <div className="flex items-end justify-center gap-1">
                <span className="text-5xl font-bold text-rotary-green">{count}</span>
                {suffix && (
                    <span className="text-3xl font-bold text-rotary-gold mb-1">{suffix}</span>
                )}
            </div>
            <p className="text-gray-600 font-medium mt-1">{label}</p>
        </div>
    );
}

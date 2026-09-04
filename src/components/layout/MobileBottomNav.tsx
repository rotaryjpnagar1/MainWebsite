"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUsers, FaThList, FaCompass, FaUserPlus } from "react-icons/fa";

const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/team", label: "Board", icon: FaUsers },
    { href: "/projects", label: "Projects", icon: FaThList },
    { href: "/explore-rotary", label: "Explore", icon: FaCompass },
    { href: "/join", label: "Join", icon: FaUserPlus, highlight: true },
];

export default function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Mobile Navigation"
            className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 transition-transform duration-300"
            style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 8px)" }}
        >
            <ul className="flex items-center justify-around">
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    const Icon = item.icon;

                    if (item.highlight) {
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex flex-col items-center justify-center px-3 py-1 rounded-2xl transition-all active:scale-95 ${
                                        isActive
                                            ? "bg-rotary-blue text-white shadow-md scale-105"
                                            : "bg-rotary-blue/10 text-rotary-blue hover:bg-rotary-blue hover:text-white"
                                    }`}
                                >
                                    <Icon size={16} />
                                    <span className="text-[10px] font-bold mt-0.5 tracking-tight">{item.label}</span>
                                </Link>
                            </li>
                        );
                    }

                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-2 rounded-xl transition-all active:scale-95 ${
                                    isActive
                                        ? "text-rotary-blue font-bold"
                                        : "text-gray-500 hover:text-gray-900"
                                }`}
                            >
                                <Icon size={18} className={isActive ? "text-rotary-blue scale-110" : "text-gray-400"} />
                                <span className={`text-[10px] mt-1 font-medium ${isActive ? "text-rotary-blue font-bold" : "text-gray-500"}`}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-rotary-blue mt-0.5" />
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

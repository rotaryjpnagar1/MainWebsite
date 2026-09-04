import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "/about", src: "/images/icons/receive.png", label: "About Our Club", description: "History, charter, and 37+ years of service in Bangalore" },
    { href: "/team", src: "/images/icons/team.png", label: "Leadership (2026-27)", description: "Meet the Board of Directors and committee chairs" },
    { href: "/projects", src: "/images/icons/heart.png", label: "Our Projects", description: "Health, literacy, environment, and community action" },
    { href: "/explore-rotary", src: "/images/icons/hands.png", label: "Explore Rotary", description: "What Rotary is, membership, and how to get involved" },
];

export default function QuickLinks() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-rotary-blue bg-rotary-blue/5 border border-rotary-blue/20 px-3.5 py-1.5 rounded-full">
                        Welcome to Rotary
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                        Rotary Bangalore JP Nagar
                    </h2>
                    <p className="text-gray-600 mt-2 text-base font-light">
                        Discover our leadership, explore active service projects, or get involved in our community initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex flex-col items-center text-center bg-gray-50 hover:bg-white border border-gray-200/80 hover:border-rotary-blue/30 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-rotary-blue transition-colors mb-2 tracking-tight">
                                {item.label}
                            </h3>
                            <p className="text-xs text-gray-500 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

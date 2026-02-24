import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "/about", src: "/images/icons/receive.png", label: "About", strong: "Us" },
    { href: "/team", src: "/images/icons/team.png", label: "Our", strong: "Team" },
    { href: "/projects", src: "/images/icons/heart.png", label: "Our", strong: "Projects" },
    { href: "/#join-us", src: "/images/icons/hands.png", label: "Join", strong: "Us" },
];

export default function QuickLinks() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle decorative blob */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-rotary-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-rotary-gold uppercase mb-3">Welcome To</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Rotary Bangalore JP Nagar
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex flex-col items-center justify-center bg-white border border-gray-100/50 hover:border-rotary-gold/30 rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                        >
                            {/* Hover gradient sweep */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rotary-gold/0 to-rotary-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <Image
                                src={item.src}
                                alt={`${item.label} ${item.strong}`}
                                width={80}
                                height={80}
                                className="mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-sm"
                            />
                            <p className="text-gray-500 group-hover:text-rotary-blue font-medium text-lg transition-colors">
                                {item.label} <strong className="text-gray-900 group-hover:text-rotary-blue block sm:inline mt-1 sm:mt-0">{item.strong}</strong>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

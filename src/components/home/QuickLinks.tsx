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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                    Welcome to Rotary Bangalore JP Nagar
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex flex-col items-center justify-center bg-gray-50 hover:bg-rotary-green transition-all duration-300 rounded-2xl p-8 shadow-sm hover:shadow-lg"
                        >
                            <Image
                                src={item.src}
                                alt={`${item.label} ${item.strong}`}
                                width={64}
                                height={64}
                                className="mb-4 group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="text-gray-700 group-hover:text-white font-medium text-lg transition-colors">
                                {item.label} <strong>{item.strong}</strong>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

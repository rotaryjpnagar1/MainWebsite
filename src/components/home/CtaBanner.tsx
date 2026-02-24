import Link from "next/link";

export default function CtaBanner() {
    return (
        <section className="py-14 bg-rotary-green">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
                        Make an impact. <br className="hidden md:block" /> Save lives.
                    </h2>
                    <Link
                        href="/#join-us"
                        className="inline-block bg-white text-rotary-green font-bold px-8 py-3 rounded-full hover:bg-rotary-gold hover:text-white transition-all duration-300 shadow-lg whitespace-nowrap"
                    >
                        Become a Member
                    </Link>
                </div>
            </div>
        </section>
    );
}

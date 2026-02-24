"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function JoinUs() {
    useEffect(() => {
        // EmbedSocial form initialization for SPA
        const id = "EmbedSocialFormsScript";
        if (!document.getElementById(id)) {
            const script = document.createElement("script");
            script.src = "https://embedsocial.com/cdn/ef.js";
            script.id = id;
            script.async = true;
            document.head.appendChild(script);
        } else if ((window as any).EmbedSocialForms) {
            // Re-initialize if the script is already there but the DOM was refreshed
            (window as any).EmbedSocialForms.init();
        }
    }, []);

    return (
        <section className="py-16 bg-gray-900" id="join-us">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Image
                            src="/images/icons/Rotary Mark of Excellence.webp"
                            alt="Rotary Mark of Excellence"
                            width={200}
                            height={200}
                            className="rounded-xl mb-6 object-contain"
                        />
                        <h2 className="text-3xl font-bold text-white mb-3">About Membership</h2>
                        <p className="text-gray-300 leading-relaxed md:text-lg">
                            Become a member of Rotary Bangalore JP Nagar to make a positive
                            impact in the community. Whether you have a few hours a week or
                            want to be deeply involved, your help is valuable!
                        </p>
                    </div>

                    {/* Right: EmbedSocial Form */}
                    <div className="w-full bg-white rounded-xl overflow-hidden min-h-[500px] shadow-2xl">
                        <div
                            className="embedsocial-forms-iframe"
                            data-ref="652524c32815a5d0625af6cd3b1b5fd8bc97c693"
                            data-widget="true"
                            data-height="auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

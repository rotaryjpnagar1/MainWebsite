"use client";

import { rotaryConfig } from "@/config/rotary-year";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const message = encodeURIComponent(
        `Hello Rotary Bangalore JP Nagar, I would like to connect regarding community service and membership for RY ${rotaryConfig.activeRotaryYear}.`
    );

    return (
        <aside aria-label="Quick WhatsApp Contact">
            <a
                href={`${rotaryConfig.contact.whatsappUrl}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with ${rotaryConfig.clubName} on WhatsApp`}
                className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
            >
                <FaWhatsapp size={26} className="transition-transform group-hover:rotate-12" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
                    Chat on WhatsApp
                </span>
            </a>
        </aside>
    );
}

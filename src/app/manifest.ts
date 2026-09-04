import type { MetadataRoute } from "next";
import { rotaryConfig } from "@/config/rotary-year";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: rotaryConfig.clubName,
        short_name: rotaryConfig.shortClubName,
        description: `Official website of ${rotaryConfig.clubName} – Rotary District ${rotaryConfig.districtNumber}`,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#17458f",
        icons: [
            {
                src: "/images/icons/Rotary Mark of Excellence.webp",
                sizes: "192x192",
                type: "image/webp",
            },
            {
                src: "/images/icons/Rotary Mark of Excellence.webp",
                sizes: "512x512",
                type: "image/webp",
            },
        ],
    };
}

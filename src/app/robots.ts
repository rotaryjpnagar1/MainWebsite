import type { MetadataRoute } from "next";
import { rotaryConfig } from "@/config/rotary-year";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: [
                    "Googlebot",
                    "Bingbot",
                    "OAI-SearchBot",
                    "ChatGPT-User",
                    "PerplexityBot",
                    "Claude-Web",
                    "Applebot",
                ],
                allow: "/",
            },
        ],
        sitemap: `${rotaryConfig.siteUrl}/sitemap.xml`,
    };
}

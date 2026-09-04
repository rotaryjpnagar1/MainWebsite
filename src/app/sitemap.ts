import type { MetadataRoute } from "next";
import { rotaryConfig } from "@/config/rotary-year";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = rotaryConfig.siteUrl;
    const now = new Date();

    const routes = [
        "",
        "/about",
        "/team",
        "/projects",
        "/join",
        "/explore-rotary",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: route === "" || route === "/projects" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/join" || route === "/projects" ? 0.9 : 0.8,
    }));
}

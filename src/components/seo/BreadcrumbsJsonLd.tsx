import { rotaryConfig } from "@/config/rotary-year";

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface BreadcrumbsJsonLdProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbsJsonLd({ items }: BreadcrumbsJsonLdProps) {
    const itemListElement = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: rotaryConfig.siteUrl,
        },
        ...items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 2,
            name: item.name,
            item: `${rotaryConfig.siteUrl}${item.path}`,
        })),
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}

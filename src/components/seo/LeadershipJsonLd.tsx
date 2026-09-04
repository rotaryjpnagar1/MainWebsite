import { rotaryConfig } from "@/config/rotary-year";
import type { LeadershipData } from "@/lib/team";

interface LeadershipJsonLdProps {
    data: LeadershipData;
}

export default function LeadershipJsonLd({ data }: LeadershipJsonLdProps) {
    let positionCounter = 1;
    const items: any[] = [];

    data.groups.forEach((group) => {
        group.members.forEach((member) => {
            items.push({
                "@type": "ListItem",
                position: positionCounter++,
                item: {
                    "@type": "Person",
                    name: member.name,
                    jobTitle: `${member.role} (RY ${data.rotaryYear})`,
                    worksFor: {
                        "@type": "NGO",
                        name: rotaryConfig.clubName,
                        url: rotaryConfig.siteUrl,
                    },
                },
            });
        });
    });

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Board of Directors & Club Leaders (RY ${data.rotaryYear}) – ${rotaryConfig.clubName}`,
        description: `Official leadership roster of ${rotaryConfig.clubName} for Rotary Year ${data.rotaryYear}.`,
        itemListElement: items,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

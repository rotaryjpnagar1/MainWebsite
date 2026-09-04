import { rotaryConfig } from "@/config/rotary-year";

interface JsonLdProps {
    schema?: Record<string, any>;
}

export default function JsonLd({ schema }: JsonLdProps) {
    const defaultOrgSchema = {
        "@context": "https://schema.org",
        "@type": ["NGO", "Organization"],
        "@id": `${rotaryConfig.siteUrl}#organization`,
        name: rotaryConfig.clubName,
        alternateName: [rotaryConfig.shortClubName, "Rotary Club of Bangalore JP Nagar", "RC JP Nagar"],
        url: rotaryConfig.siteUrl,
        logo: `${rotaryConfig.siteUrl}/images/icons/RotaryJPNagarLogo.png`,
        image: `${rotaryConfig.siteUrl}/images/slide/Rotary%20JP%20Nagar%20Logo.webp`,
        description: `Rotary Bangalore JP Nagar is a premier community service and leadership club in Bengaluru, part of Rotary District 3191. Chartered on January 4, 1989.`,
        foundingDate: rotaryConfig.charterDate,
        telephone: rotaryConfig.contact.phone,
        email: rotaryConfig.contact.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: `${rotaryConfig.contact.address.street}, ${rotaryConfig.contact.address.locality}`,
            addressLocality: rotaryConfig.contact.address.city,
            addressRegion: rotaryConfig.contact.address.state,
            postalCode: rotaryConfig.contact.address.postalCode,
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: rotaryConfig.contact.geo.latitude,
            longitude: rotaryConfig.contact.geo.longitude,
        },
        parentOrganization: {
            "@type": "NGO",
            name: "Rotary International",
            url: "https://www.rotary.org",
        },
        memberOf: {
            "@type": "NGO",
            name: "Rotary District 3191",
            url: "https://www.rotaryjpnagar.org",
        },
        sameAs: [
            rotaryConfig.contact.socials.facebook,
            rotaryConfig.contact.socials.instagram,
            rotaryConfig.contact.socials.youtube,
        ],
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Bengaluru, Karnataka, India",
        },
        knowsAbout: [
            "Community Service",
            "Healthcare Initiatives",
            "Government School Infrastructure",
            "Rotary Youth Leadership Awards",
            "Rotaract",
            "Interact",
            "PolioPlus",
            "The Rotary Foundation",
        ],
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${rotaryConfig.siteUrl}/#website`,
        url: rotaryConfig.siteUrl,
        name: rotaryConfig.clubName,
        alternateName: rotaryConfig.shortClubName,
        publisher: {
            "@id": `${rotaryConfig.siteUrl}#organization`,
        },
        inLanguage: "en-IN",
    };

    const graphSchema = {
        "@context": "https://schema.org",
        "@graph": [defaultOrgSchema, webSiteSchema],
    };

    const schemaToRender = schema || graphSchema;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
        />
    );
}

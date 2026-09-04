import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: "Missing project id" }, { status: 400 });
    }

    try {
        const res = await fetch(`https://spc.rotary.org/api/Project/ProjectDetail/en/${encodeURIComponent(id)}`, {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                "subscriptionkey": "ROTARY_API_KEY",
            },
            next: { revalidate: 86400 },
        });

        if (!res.ok) {
            return NextResponse.json({ error: "Project details not found" }, { status: 404 });
        }

        const data = await res.json();
        const profile = data.profile || {};
        const partners = data.partners || [];
        const fundingSources = data.fundingSources || [];
        const medias = data.medias || [];

        // Extract unique, valid image URLs
        const images: string[] = [];
        for (const m of medias) {
            if (m.url) {
                const fullUrl = `https://spc.rotary.org/azureImages/${m.url}`;
                if (!images.includes(fullUrl)) {
                    images.push(fullUrl);
                }
            }
        }

        const primaryPartner = partners[0] || {};
        const primaryFunding = fundingSources[0] || {};

        const locationParts = [
            profile.locationName,
            profile.address1,
            profile.locationCity,
            profile.locationProv,
        ].filter(Boolean);

        return NextResponse.json({
            id,
            images,
            volunteers: primaryPartner.numberOfVolunteer || null,
            hours: primaryPartner.numberOfHours || null,
            budget: primaryFunding.fundingAmount || profile.totalEstimatedBudget || null,
            sponsor: primaryFunding.fundingOtherName || null,
            location: locationParts.join(", ") || null,
            fullDescription: profile.description || null,
            summary: profile.summary || null,
            projectImpact: profile.projectImpactTxt || null,
            communityNeed: profile.communityNeedTxt || null,
            startDate: profile.startDate || null,
        });
    } catch (err) {
        console.error("Error fetching project detail for", id, err);
        return NextResponse.json({ error: "Failed to load project details" }, { status: 500 });
    }
}

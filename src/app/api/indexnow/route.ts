import { NextResponse } from "next/server";
import { rotaryConfig } from "@/config/rotary-year";

const INDEXNOW_KEY = "rotaryjpnagar2026indexnowkey78";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const urlList = body.urlList || [
            rotaryConfig.siteUrl,
            `${rotaryConfig.siteUrl}/about`,
            `${rotaryConfig.siteUrl}/team`,
            `${rotaryConfig.siteUrl}/projects`,
            `${rotaryConfig.siteUrl}/explore-rotary`,
            `${rotaryConfig.siteUrl}/join`,
        ];

        const payload = {
            host: new URL(rotaryConfig.siteUrl).host,
            key: INDEXNOW_KEY,
            keyLocation: `${rotaryConfig.siteUrl}/${INDEXNOW_KEY}.txt`,
            urlList,
        };

        const res = await fetch("https://api.indexnow.org/indexnow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(payload),
        });

        return NextResponse.json({
            status: "success",
            indexNowStatus: res.status,
            notifiedUrls: urlList.length,
        });
    } catch (err: any) {
        return NextResponse.json(
            { status: "error", message: err?.message || "IndexNow notification failed" },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        service: "IndexNow Submitter for Rotary Bangalore JP Nagar",
        keyLocation: `${rotaryConfig.siteUrl}/${INDEXNOW_KEY}.txt`,
        host: new URL(rotaryConfig.siteUrl).host,
    });
}

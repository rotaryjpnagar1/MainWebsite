// Central Rotary Year and Club Configuration
// Single source of truth for annual rollovers

export interface RotaryYearConfig {
    activeRotaryYear: string;           // e.g. "2026-27"
    startDate: string;                  // "2026-07-01"
    endDate: string;                    // "2027-06-30"
    presidentialMessage: string;        // "Create Lasting Impact" (RI Presidential Message)
    messageTagline: string;
    presidentName: string;
    presidentRole: string;
    secretaryName: string;
    secretaryRole: string;
    districtNumber: string;
    clubId: string;
    clubName: string;
    shortClubName: string;
    charterDate: string;
    charterYear: number;
    yearsOfService: number;
    siteUrl: string;
    contact: {
        phone: string;
        phoneDisplay: string;
        whatsappUrl: string;
        email: string;
        meetingInfo: string;
        address: {
            street: string;
            locality: string;
            landmark: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        socials: {
            facebook: string;
            instagram: string;
            youtube: string;
        };
    };
    forms: {
        membershipGoogleScriptUrl: string;
    };
}

export const rotaryConfig: RotaryYearConfig = {
    activeRotaryYear: "2026-27",
    startDate: "2026-07-01",
    endDate: "2027-06-30",
    presidentialMessage: "Create Lasting Impact",
    messageTagline: "Uniting leaders and communities to take action and generate sustainable change.",
    presidentName: "Rtn. PHF G M Ravi",
    presidentRole: "President (RY 2026-27)",
    secretaryName: "Rtn. Veerabasanagouda",
    secretaryRole: "Club Secretary (RY 2026-27)",
    districtNumber: "3191",
    clubId: "26141",
    clubName: "Rotary Bangalore JP Nagar",
    shortClubName: "Rotary JP Nagar",
    charterDate: "1989-01-04",
    charterYear: 1989,
    yearsOfService: new Date().getFullYear() - 1989, // 37+ years
    siteUrl: "https://www.rotaryjpnagar.org",
    contact: {
        phone: "+919845518342",
        phoneDisplay: "+91 98455 18342",
        whatsappUrl: "https://wa.me/919845518342",
        email: "rotarybangalorejpnagardist3191@gmail.com",
        meetingInfo: "JP Nagar, Bengaluru",
        address: {
            street: "JP Nagar",
            locality: "JP Nagar",
            landmark: "JP Nagar",
            city: "Bengaluru",
            state: "Karnataka",
            postalCode: "560078",
            country: "India",
        },
        geo: {
            latitude: 12.911562,
            longitude: 77.585278,
        },
        socials: {
            facebook: "https://www.facebook.com/rotaryjpnagar.org/",
            instagram: "https://www.instagram.com/rotaryjpnagar/",
            youtube: "https://www.youtube.com/@rotaryjpnagar",
        },
    },
    forms: {
        membershipGoogleScriptUrl:
            process.env.NEXT_PUBLIC_MEMBERSHIP_SHEET_URL ||
            "https://script.google.com/macros/s/AKfycbw7Vwh5Mr7Pv9XGY0gMoI2_9ENUapEbSziFmsk8hSxbltcyLqNjerEaJdA75J1Znmoejg/exec",
    },
};

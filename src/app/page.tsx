import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PresidentWelcome from "@/components/home/PresidentWelcome";
import QuickLinks from "@/components/home/QuickLinks";
import ImpactHighlights from "@/components/home/ImpactHighlights";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LeadershipTeaser from "@/components/home/LeadershipTeaser";
import JoinCta from "@/components/home/JoinCta";
import { getProjectsPreview } from "@/lib/projects.server";
import { rotaryConfig } from "@/config/rotary-year";

export const metadata: Metadata = {
  title: "Home",
  description: `${rotaryConfig.clubName} (District ${rotaryConfig.districtNumber}) – Serving Bengaluru since 1989 through health, education, and youth empowerment under the 2026-27 Presidential Message "${rotaryConfig.presidentialMessage}".`,
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const projects = await getProjectsPreview(3);

  return (
    <>
      <Hero />
      <PresidentWelcome />
      <QuickLinks />
      <ImpactHighlights />
      <FeaturedProjects projects={projects} />
      <LeadershipTeaser />
      <JoinCta />
    </>
  );
}

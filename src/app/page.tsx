import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import QuickLinks from "@/components/home/QuickLinks";
import AboutTeaser from "@/components/home/AboutTeaser";
import CtaBanner from "@/components/home/CtaBanner";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import JoinUs from "@/components/home/JoinUs";
import { getProjectsPreview } from "@/lib/projects.server";

export const metadata: Metadata = {
  title: "Rotary Bangalore JP Nagar – Rotary District 3191",
  description:
    "Rotary Bangalore JP Nagar is a leading rotary club in Bangalore, part of Rotary District 3191, committed to community service, professional development, and impactful projects.",
};

export default async function HomePage() {
  const projects = await getProjectsPreview(3);

  return (
    <>
      <HeroCarousel />
      <QuickLinks />
      <AboutTeaser />
      <CtaBanner />
      <ProjectsPreview projects={projects} />
      <JoinUs />
    </>
  );
}

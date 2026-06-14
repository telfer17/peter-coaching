import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { WhyICoach } from "@/components/sections/WhyICoach";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Peter",
  description:
    "Peter “Spoonsy” Weatherson — Greenock Morton Hall of Fame striker, now coaching the next generation of players in Renfrewshire.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <WhyICoach />
      <StatsStrip />
      <ContactCTA />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Programmes } from "@/components/sections/Programmes";
import { About } from "@/components/sections/About";
// TODO: add real testimonials once available — invented quotes removed (must not ship).
// import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Programmes />
      <About />
      {/* TODO: add real testimonials once available — section hidden until we have real quotes. */}
      <ContactCTA />
    </>
  );
}

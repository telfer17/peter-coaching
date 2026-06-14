import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Momentum Coaching to arrange 1-2-1 or small-group football coaching with Peter Weatherson in the Renfrewshire area.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactCTA />
    </>
  );
}

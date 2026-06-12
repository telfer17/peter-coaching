import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Meet the Coach",
};

const sections = [
  {
    title: "Playing Career",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Coaching Career",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Approach",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

export default function About() {
  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Meet the Coach
      </h1>

      {/* Placeholder portrait — replace with a real photo via next/image later */}
      <div className="mt-10 flex aspect-[4/5] max-w-xs items-center justify-center rounded-lg bg-neutral-200">
        <span className="text-sm text-neutral-500">Portrait placeholder</span>
      </div>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-neutral-900">
              {section.title}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

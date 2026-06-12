import Button from "@/components/Button";
import Section from "@/components/Section";

const offers = [
  {
    title: "One-to-One Coaching",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Group Sessions",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Match Analysis",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className="mt-10">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      {/* What I offer */}
      <Section title="What I Offer">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-lg border border-neutral-200 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {offer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {offer.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing CTA band */}
      <section className="bg-neutral-900">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Excepteur sint occaecat cupidatat?
          </h2>
          <p className="max-w-xl text-neutral-300">
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="border-transparent"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}

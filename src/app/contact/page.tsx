import type { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
};

const inputClasses =
  "mt-2 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none";

export default function Contact() {
  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 max-w-xl text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/*
          TODO: Connect this form to Formspree.
          1. Create a form at https://formspree.io and copy its endpoint.
          2. Add action="https://formspree.io/f/<form-id>" and method="POST" below.
          Until then, submitting does nothing.
        */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="How can I help?"
              className={inputClasses}
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        {/* Placeholder contact details — replace with real ones later */}
        <div className="space-y-6 text-sm text-neutral-600">
          <div>
            <h2 className="font-semibold text-neutral-900">Email</h2>
            <a
              href="mailto:hello@example.com"
              className="mt-1 block hover:text-neutral-900"
            >
              hello@example.com
            </a>
          </div>
          <div>
            <h2 className="font-semibold text-neutral-900">Phone</h2>
            <a
              href="tel:+440000000000"
              className="mt-1 block hover:text-neutral-900"
            >
              +44 0000 000000
            </a>
          </div>
          <div>
            <h2 className="font-semibold text-neutral-900">Social</h2>
            <ul className="mt-1 space-y-1">
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

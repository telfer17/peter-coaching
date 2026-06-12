import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Peter Weatherson Coaching
        </p>
        <ul className="flex gap-6 text-sm text-neutral-500">
          <li>
            <Link href="/" className="hover:text-neutral-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-neutral-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-neutral-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

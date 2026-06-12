import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-700",
  secondary:
    "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
};

export default function Button({
  href,
  variant = "primary",
  type = "button",
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

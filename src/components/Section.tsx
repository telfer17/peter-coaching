type SectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {title && (
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

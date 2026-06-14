import * as React from "react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading icon node (e.g. a Lucide <svg>). */
  icon?: React.ReactNode;
  /** Programme name, e.g. "1-2-1 Coaching". */
  name: React.ReactNode;
  /** One-line description. */
  description?: React.ReactNode;
  /** Price value, e.g. "£40". */
  price?: React.ReactNode;
  /** Small note after the price, e.g. "/ session". */
  priceNote?: React.ReactNode;
  /** Feature bullets (each gets a check). */
  features?: React.ReactNode[];
  /** Optional <Badge> shown top-right, e.g. "Most popular". */
  badge?: React.ReactNode;
  /** Dark featured treatment. */
  featured?: boolean;
  /** Footer call-to-action, typically a <Button fullWidth>. */
  cta?: React.ReactNode;
}

/**
 * Programme / pricing card for a coaching service.
 *
 * @startingPoint section="Surfaces" subtitle="Programme & pricing card" viewport="380x460"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;

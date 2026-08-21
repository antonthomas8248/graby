import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-2 rounded-full bg-primary animate-pulse-dot" />
      <span className="font-display text-xs font-medium uppercase tracking-[0.28em] text-primary">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
      )}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}

export function Band({
  id,
  children,
  className,
  tone = "base",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-20 overflow-hidden px-6 py-24 md:py-32",
        tone === "raised" && "bg-surface/40",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

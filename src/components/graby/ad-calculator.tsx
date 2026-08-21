import { useMemo, useState } from "react";
import { Monitor, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  { id: "starter", label: "Starter", days: 7, slotSeconds: 10, loopsPerHour: 6 },
  { id: "growth", label: "Growth", days: 15, slotSeconds: 15, loopsPerHour: 8 },
  { id: "prime", label: "Prime", days: 30, slotSeconds: 20, loopsPerHour: 10 },
];

export function AdCalculator() {
  const [index, setIndex] = useState(1);
  const [footfall, setFootfall] = useState(3500);
  const pkg = packages[index]!;

  const stats = useMemo(() => {
    const plays = pkg.loopsPerHour * 18 * pkg.days;
    const impressions = Math.round(footfall * pkg.days * 0.42);
    const screenSeconds = plays * pkg.slotSeconds;
    return { plays, impressions, screenMinutes: Math.round(screenSeconds / 60) };
  }, [pkg, footfall]);

  return (
    <div className="surface-card p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Monitor className="size-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">Reach estimator</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Two 43-inch outdoor LED screens, running 18 hours a day in high-footfall public space.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {packages.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "rounded-full border px-4 py-2 font-display text-xs font-medium transition-all duration-300",
              i === index
                ? "border-primary bg-accent text-accent-foreground glow-ring"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {p.label} · {p.days} days
          </button>
        ))}
      </div>

      <label className="mt-7 block">
        <span className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
          Daily footfall at site
          <span className="font-display text-sm font-semibold text-primary">
            {footfall.toLocaleString("en-IN")}
          </span>
        </span>
        <input
          type="range"
          min={500}
          max={15000}
          step={500}
          value={footfall}
          onChange={(e) => setFootfall(Number(e.target.value))}
          className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
        />
      </label>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Estimated views", value: stats.impressions.toLocaleString("en-IN") },
          { label: "Ad plays", value: stats.plays.toLocaleString("en-IN") },
          { label: "Screen minutes", value: stats.screenMinutes.toLocaleString("en-IN") },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background/60 p-4">
            <p className="font-display text-2xl font-semibold text-gradient-mint">{s.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <TrendingUp className="mt-0.5 size-3.5 shrink-0 text-primary" />
        Indicative figures for illustration. Final packages and pricing are shared on request and may be
        revised to reflect market conditions and platform performance.
      </p>
    </div>
  );
}

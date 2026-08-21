import { useEffect, useState } from "react";
import { Landmark, Megaphone, Palmtree, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

type Channel = {
  id: string;
  label: string;
  icon: typeof Radio;
  kicker: string;
  headline: string;
  sub: string;
  tone: "mint" | "sky" | "ember";
};

const channels: Channel[] = [
  {
    id: "civic",
    label: "Civic notice",
    icon: Landmark,
    kicker: "City corporation",
    headline: "Segregate waste at source",
    sub: "Green bin · dry waste · Tuesdays",
    tone: "mint",
  },
  {
    id: "tourism",
    label: "Tourism",
    icon: Palmtree,
    kicker: "Visit Kerala",
    headline: "Backwaters, 40 min away",
    sub: "Poovar · Veli · Kovalam",
    tone: "sky",
  },
  {
    id: "brand",
    label: "Brand campaign",
    icon: Megaphone,
    kicker: "Featured brand",
    headline: "Cold. Crisp. Right here.",
    sub: "Scan on the machine to grab one",
    tone: "ember",
  },
  {
    id: "alert",
    label: "Emergency alert",
    icon: Radio,
    kicker: "Public safety",
    headline: "Heavy rain advisory",
    sub: "Avoid low-lying roads after 8 PM",
    tone: "mint",
  },
];

const toneClass: Record<Channel["tone"], string> = {
  mint: "from-primary/35 via-primary/10 to-transparent",
  sky: "from-sky/35 via-sky/10 to-transparent",
  ember: "from-ember/35 via-ember/10 to-transparent",
};

function Panel({ channel, side }: { channel: Channel; side: "left" | "right" }) {
  const Icon = channel.icon;
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[1.25rem] border border-border bg-background/80",
        side === "left" ? "origin-right" : "origin-left",
      )}
    >
      <div
        key={channel.id + side}
        className={cn(
          "absolute inset-0 animate-panel-in bg-gradient-to-b",
          toneClass[channel.tone],
        )}
      />
      <div className="absolute inset-0 led-grain" />
      <div
        key={channel.id + side + "-c"}
        className="relative flex h-full animate-panel-in flex-col justify-between p-3 sm:p-4"
      >
        <div className="flex items-center gap-1.5">
          <Icon className="size-3.5 text-foreground" />
          <span className="font-display text-[9px] uppercase tracking-[0.18em] text-foreground/80">
            {channel.kicker}
          </span>
        </div>
        <div>
          <p className="font-display text-[13px] font-semibold leading-tight text-foreground sm:text-base">
            {channel.headline}
          </p>
          <p className="mt-1 text-[9px] leading-snug text-foreground/70 sm:text-[11px]">{channel.sub}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-[8px] uppercase tracking-[0.2em] text-foreground/60">On air</span>
        </div>
      </div>
    </div>
  );
}

export function LedUnit() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % channels.length), 3800);
    return () => clearInterval(t);
  }, [auto]);

  const active = channels[index]!;

  return (
    <div className="surface-card p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold">One unit, three faces</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            The LED panels are mounted on the machine — left and right of the vending bay.
          </p>
        </div>
        <span className="rounded-full border border-border px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Live preview
        </span>
      </div>

      {/* Unit elevation: panel · machine · panel */}
      <div className="mt-6 grid grid-cols-[1fr_1.15fr_1fr] items-stretch gap-2 sm:gap-3">
        <div className="aspect-[9/16]">
          <Panel channel={active} side="left" />
        </div>

        <div className="relative flex aspect-[9/16] flex-col overflow-hidden rounded-[1.25rem] border border-border bg-secondary/70">
          <div className="flex items-center justify-center gap-1.5 border-b border-border/70 py-2">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="font-display text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              GraBy
            </span>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-[3px] p-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="rounded-[3px] border border-border/60 bg-background/70"
                style={{ animationDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
          <div className="mx-2 mb-2 rounded-lg border border-primary/40 bg-background/80 p-2 text-center">
            <span className="font-display text-[9px] uppercase tracking-[0.18em] text-primary">
              Tap to buy
            </span>
          </div>
          <div className="mx-2 mb-3 h-2 rounded-full bg-background/80" />
        </div>

        <div className="aspect-[9/16]">
          <Panel channel={active} side="right" />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {channels.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              setIndex(i);
              setAuto(false);
            }}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 font-display text-xs font-medium transition-all duration-300",
              i === index
                ? "border-primary bg-accent text-accent-foreground glow-ring"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            <c.icon className="size-3.5" />
            {c.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Both panels play the same loop, so the unit reads from either direction of foot traffic.
      </p>
    </div>
  );
}

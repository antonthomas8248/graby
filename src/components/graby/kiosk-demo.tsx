import { useEffect, useState } from "react";
import { Check, Loader2, QrCode, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Product = { id: string; name: string; price: number; emoji: string; slot: string };

const products: Product[] = [
  { id: "water", name: "Mineral Water", price: 20, emoji: "💧", slot: "A1" },
  { id: "cola", name: "Soft Drink", price: 40, emoji: "🥤", slot: "A2" },
  { id: "juice", name: "Fruit Juice", price: 35, emoji: "🧃", slot: "A3" },
  { id: "energy", name: "Energy Drink", price: 99, emoji: "⚡", slot: "B1" },
  { id: "chips", name: "Chips", price: 20, emoji: "🍟", slot: "B2" },
  { id: "biscuit", name: "Biscuits", price: 10, emoji: "🍪", slot: "B3" },
  { id: "choco", name: "Chocolate", price: 50, emoji: "🍫", slot: "C1" },
  { id: "nuts", name: "Roasted Nuts", price: 30, emoji: "🥜", slot: "C2" },
  { id: "coffee", name: "Cold Coffee", price: 45, emoji: "☕", slot: "C3" },
];

type Stage = "browse" | "pay" | "dispensing" | "done";

export function KioskDemo() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [stage, setStage] = useState<Stage>("browse");

  useEffect(() => {
    if (stage !== "pay" && stage !== "dispensing") return undefined;
    const t = setTimeout(
      () => setStage(stage === "pay" ? "dispensing" : "done"),
      stage === "pay" ? 2200 : 1800,
    );
    return () => clearTimeout(t);
  }, [stage]);


  const reset = () => {
    setStage("browse");
    setSelected(null);
  };

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-glow blur-xl" />
      {/* Machine shell */}
      <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between px-3 pb-3 pt-1">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            GraBy
          </span>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" /> Online 24×7
          </span>
        </div>

        {/* Touchscreen */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background/90 p-4">
          {stage === "browse" ? (
            <>
              <p className="mb-3 font-display text-sm font-medium">Tap to select a product</p>
              <div className="grid grid-cols-3 gap-2">
                {products.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelected(p)}
                    className={cn(
                      "group flex flex-col items-center gap-1 rounded-xl border p-2.5 text-center transition-all duration-300",
                      selected?.id === p.id
                        ? "border-primary bg-accent glow-ring"
                        : "border-border bg-secondary/60 hover:-translate-y-0.5 hover:border-primary/50",
                    )}
                  >
                    <span className="text-xl leading-none transition-transform duration-300 group-hover:scale-110">
                      {p.emoji}
                    </span>
                    <span className="text-[10px] leading-tight text-muted-foreground">{p.name}</span>
                    <span className="font-display text-[11px] font-semibold text-primary">₹{p.price}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={!selected}
                onClick={() => setStage("pay")}
                className="mt-4 w-full rounded-xl bg-primary py-3 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 enabled:hover:brightness-110 disabled:opacity-35"
              >
                {selected ? `Pay ₹${selected.price} · Slot ${selected.slot}` : "Select a product"}
              </button>
            </>
          ) : null}

          {stage === "pay" ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <QrCode className="size-16 text-primary animate-float" />
              <p className="font-display text-sm font-medium">Scan to pay ₹{selected?.price}</p>
              <p className="text-xs text-muted-foreground">UPI · GPay · Paytm · PhonePe</p>
              <span className="flex items-center gap-2 text-xs text-primary">
                <Loader2 className="size-3.5 animate-spin" /> Waiting for payment
              </span>
            </div>
          ) : null}

          {stage === "dispensing" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="text-4xl animate-float">{selected?.emoji}</span>
              <p className="font-display text-sm font-medium">Dispensing from slot {selected?.slot}</p>
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-1/2 animate-marquee rounded-full bg-primary" />
              </div>
            </div>
          ) : null}

          {stage === "done" ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-accent glow-ring">
                <Check className="size-7 text-primary" />
              </span>
              <p className="font-display text-sm font-medium">Collect your {selected?.name}</p>
              <p className="text-xs text-muted-foreground">Receipt sent to your UPI app · 100% cashless</p>
              <button
                type="button"
                onClick={reset}
                className="mt-1 flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <RotateCcw className="size-3.5" /> Try again
              </button>
            </div>
          ) : null}
        </div>

        {/* Dispense tray */}
        <div className="mt-3 flex items-center justify-center rounded-xl border border-border bg-background/60 py-3">
          <span className="h-1 w-24 rounded-full bg-border" />
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Interactive demo — a live preview of the GraBy checkout flow.
      </p>
    </div>
  );
}

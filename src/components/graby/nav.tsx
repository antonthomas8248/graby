import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/d-removebg-preview.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "#concept", label: "Concept" },
  { href: "#machine", label: "The Machine" },
  { href: "#display", label: "Digital Display" },
  { href: "#impact", label: "Impact" },
  { href: "#partner", label: "Partner" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-xl bg-logo-plate p-1.5">
            <img src={logo} alt="GraBy logo" width={48} height={48} className="size-full object-contain" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Gra<span className="text-primary">By</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 font-display text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] md:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {[...links, { href: "#contact", label: "Get in touch" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

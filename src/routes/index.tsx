import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeIndianRupee,
  Clock,
  Cpu,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Recycle,
  Ruler,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import logo from "@/assets/d-removebg-preview.png";
import heroImage from "@/assets/kiosk-hero.jpg";
import touchscreenImage from "@/assets/touchscreen.jpg";
import ledImage from "@/assets/led-unit.jpg";
import streetImage from "@/assets/street-view.jpg";

import { Nav } from "@/components/graby/nav";
import { KioskDemo } from "@/components/graby/kiosk-demo";
import { LedUnit } from "@/components/graby/led-unit";
import { AdCalculator } from "@/components/graby/ad-calculator";
import { ContactForm } from "@/components/graby/contact-form";
import { Band, Reveal, SectionHeading, SectionLabel } from "@/components/graby/section";
import { useCountUp } from "@/hooks/use-reveal";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GraBy — Smart Vending Machines & Digital Displays in Kerala" },
      {
        name: "description",
        content:
          "GraBy builds 24×7 cashless smart vending kiosks with integrated 43-inch LED displays for public spaces, campuses and workplaces across Kerala.",
      },
      { property: "og:title", content: "GraBy — Smart Vending Solution" },
      {
        property: "og:description",
        content:
          "Fully automated, cashless vending kiosks with digital information displays. Installed, stocked and maintained end to end by GraBy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const marqueeItems = [
  "Mineral water",
  "Soft drinks",
  "Fruit juices",
  "Energy drinks",
  "Chips & savouries",
  "Biscuits & cookies",
  "Chocolates",
  "Cold coffee",
  "Daily essentials",
];

const stats = [
  { value: 24, suffix: "×7", label: "Always open" },
  { value: 1320, suffix: "", label: "Products stocked" },
  { value: 100, suffix: "%", label: "Cashless payments" },
  { value: 2, suffix: "×43\"", label: "LED displays" },
];

const pillars = [
  {
    icon: Smartphone,
    title: "Tap, scan, collect",
    body: "A 15.6-inch touchscreen guides selection, UPI QR handles payment, and the product drops in seconds. No cash, no queue, no attendant.",
  },
  {
    icon: Cpu,
    title: "Smart by design",
    body: "Vending computing with live stock monitoring, remote diagnostics and sales reporting — so refills happen before a slot ever runs empty.",
  },
  {
    icon: Megaphone,
    title: "A screen that speaks",
    body: "Twin 43-inch outdoor LED displays carry civic notices, tourism content and brand campaigns in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and supervised",
    body: "Integrated CCTV, tamper-resistant construction, weather-sealed enclosure and scheduled servicing keep the site secure and spotless.",
  },
];

const specs = [
  { label: "Overall size", value: "H 1800 × W 900 × D 850 mm" },
  { label: "Interface", value: "15.6\" touchscreen + vending computing" },
  { label: "Capacity", value: "600 – 1320 products" },
  { label: "Payments", value: "UPI · GPay · Paytm · PhonePe" },
  { label: "Availability", value: "24 × 7, unattended" },
  { label: "LED panels", value: "2 × 43\" on left & right flanks" },
];

const publicBenefits = [
  {
    icon: Clock,
    title: "Round-the-clock convenience",
    body: "Water, snacks and refreshments at any hour — including late evenings when nearby shops are shut.",
  },
  {
    icon: Leaf,
    title: "Hygienic and contact-light",
    body: "Sealed packaged goods behind glass, dispensed automatically. No handling, no exposure.",
  },
  {
    icon: Recycle,
    title: "Cleaner public spaces",
    body: "Bins at the kiosk plus scheduled waste clearance by our team, so the surroundings stay tidy.",
  },
  {
    icon: Sparkles,
    title: "A smarter streetscape",
    body: "A modern, well-lit amenity that upgrades how a public space looks and feels after dark.",
  },
];

const partnerBenefits = [
  {
    icon: BadgeIndianRupee,
    title: "Recurring revenue share",
    body: "A transparent revenue-sharing arrangement, settled on an agreed cycle with clear reporting.",
  },
  {
    icon: Megaphone,
    title: "Free civic airtime",
    body: "A defined share of display time reserved for public-interest messaging, awareness drives and emergency notices at no charge.",
  },
  {
    icon: Wrench,
    title: "Zero operational burden",
    body: "Procurement, installation, power, stocking, content, cleaning and repairs are all borne by GraBy.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance first",
    body: "Statutory approvals, safety standards and local guidelines followed through the full project lifecycle.",
  },
];

function Home() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Concept />
      <Machine />
      <Display />
      <Impact />
      <Partner />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-24 pt-32 md:pb-32 md:pt-40">
      <img
        src={heroImage}
        alt="GraBy smart vending kiosk with glowing LED displays at night"
        width={1600}
        height={1200}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_35%,color-mix(in_oklab,var(--background)_92%,transparent)_100%)]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-7">
          <Reveal>
            <SectionLabel>Smart Vending Solution</SectionLabel>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl">
              Refreshments on tap.
              <br />
              <span className="text-gradient-mint">Information on screen.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              GraBy installs and operates fully automated, cashless vending kiosks with integrated digital
              displays — bringing 24×7 convenience and a modern civic communication channel to the places
              people actually gather.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Host a GraBy kiosk
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#machine"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                See the machine
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-4 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <KioskDemo />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: shown } = useCountUp(value);
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-gradient-mint sm:text-3xl">
        <span ref={ref}>{shown.toLocaleString("en-IN")}</span>
        {suffix}
      </dt>
      <dd className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dd>
    </div>
  );
}

function Marquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface/60 py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-sm uppercase tracking-[0.22em] text-muted-foreground">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-primary/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Concept() {
  return (
    <Band id="concept">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-glow" />
      <SectionHeading
        label="What GraBy is"
        title={
          <>
            One compact kiosk that serves the public and
            <span className="text-gradient-mint"> speaks to the city</span>.
          </>
        }
        intro="A smart self-service vending machine paired with outdoor digital displays — installed, stocked, powered and maintained entirely by us. The host site gets a modern amenity without lifting a finger."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="surface-card h-full p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-accent">
                <p.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}

function Machine() {
  return (
    <Band id="machine" tone="raised">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-glow blur-2xl" />
            <img
              src={touchscreenImage}
              alt="Hand tapping the GraBy vending machine touchscreen"
              width={1200}
              height={1408}
              loading="lazy"
              className="w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            label="The machine"
            title={
              <>
                Built for a street, <span className="text-gradient-mint">not a lobby</span>.
              </>
            }
            intro="Weather-sealed enclosure, toughened glass front, secure locking and a large touchscreen at the heart of the experience. Every transaction is digital and logged."
          />

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {specs.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="h-full bg-surface p-5">
                  <dt className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    <Ruler className="size-3 text-primary" /> {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-sm font-medium">{s.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Band>
  );
}

function Display() {
  return (
    <Band id="display">
      <SectionHeading
        label="Digital display"
        title={
          <>
            One machine, two screens
            <span className="text-gradient-mint"> built into it</span>.
          </>
        }
        intro="The advertising screens are not separate structures. Two 43-inch outdoor LED panels are mounted on the machine itself — one on the left flank, one on the right — so the whole thing lands as a single unit on a Kerala street. They run roughly 18 hours a day, and a defined share of airtime is always reserved, free of charge, for public-interest content: civic notices, awareness campaigns, tourism information and emergency alerts."
      />

      <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <LedUnit />
        </Reveal>
        <Reveal delay={120}>
          <AdCalculator />
        </Reveal>
      </div>

      <div className="mt-8">
        <Reveal>
          <figure className="group relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
          <img
            src={ledImage}
            alt="GraBy kiosk with two 43-inch LED advertising panels mounted on its left and right sides"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6 sm:p-8">
              <p className="font-display text-base font-semibold sm:text-lg">
                Left panel · vending bay · right panel — one structure
              </p>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Single footprint, single power point, single point of maintenance. Nothing extra to
                install on the pavement.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Band>
  );
}

function Impact() {
  return (
    <Band id="impact" tone="raised">
      <SectionHeading
        label="Benefits to the public"
        title={
          <>
            A small footprint with a <span className="text-gradient-mint">daily payoff</span>.
          </>
        }
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {publicBenefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 80}>
            <article className="surface-card flex h-full gap-5 p-7">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent">
                <b.icon className="size-5 text-primary" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border">
          <img
            src={streetImage}
            alt="GraBy kiosk installed on a public art street in Kerala at golden hour"
            width={1600}
            height={1008}
            loading="lazy"
            className="w-full object-cover"
          />
          <p className="bg-surface px-6 py-4 text-xs leading-relaxed text-muted-foreground">
            Concept visual, produced for illustration only. Final appearance, colours and placement are
            confirmed after site survey and approval by the concerned authority.
          </p>
        </div>
      </Reveal>
    </Band>
  );
}

function Partner() {
  return (
    <Band id="partner">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-56 bg-glow" />
      <SectionHeading
        label="For hosts & authorities"
        title={
          <>
            You grant the space. <span className="text-gradient-mint">We do the rest</span>.
          </>
        }
        intro="Municipal corporations, campuses, hospitals, transit hubs, parks, IT parks and commercial complexes — wherever people wait or walk, a GraBy kiosk earns its place."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {partnerBenefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 80}>
            <article className="surface-card h-full p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-accent">
                <b.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}

function Contact() {
  return (
    <Band id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            label="Contact"
            title={
              <>
                Let's put one <span className="text-gradient-mint">where you are</span>.
              </>
            }
            intro="Share a location or a campaign brief and we'll come back with specifics — layout, footfall fit, revenue model and timeline."
          />

          <Reveal delay={120}>
            <ul className="mt-10 flex flex-col gap-4">
              <ContactRow icon={Phone} label="Phone" value="+91 96052 65457" href="tel:+919605265457" />
              <ContactRow
                icon={Mail}
                label="Email"
                value="grabyvendingsolution@gmail.com"
                href="mailto:grabyvendingsolution@gmail.com"
              />
              <ContactRow icon={MapPin} label="Based in" value="Thiruvananthapuram, Kerala" />
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Band>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-primary/50">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent">
        <Icon className="size-4 text-primary" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="block truncate font-display text-sm font-medium">{value}</span>
      </span>
    </span>
  );
  return <li>{href ? <a href={href}>{content}</a> : content}</li>;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GraBy" className="h-16 w-auto object-contain" />
          <p className="text-xs text-muted-foreground">Smart Vending Solution</p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {["concept", "machine", "display", "impact", "partner", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {id}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} GraBy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

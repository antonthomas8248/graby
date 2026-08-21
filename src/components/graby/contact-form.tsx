import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const interests = ["Host a machine", "Advertise on screens", "Civic partnership", "Something else"];

export function ContactForm() {
  const [interest, setInterest] = useState(interests[0]!);

  return (
    <form
      className="surface-card p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        toast.success("Thanks! We'll get back to you shortly.", {
          description: `Enquiry noted: ${interest}`,
        });
        form.reset();
      }}
    >
      <h3 className="font-display text-lg font-semibold">Start a conversation</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us about your location or campaign and we'll respond with a tailored proposal.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" />
        <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" />
        <div className="sm:col-span-2">
          <Field label="Email" name="email" type="email" placeholder="you@example.com" />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-xs uppercase tracking-widest text-muted-foreground">I'm interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              className={
                i === interest
                  ? "rounded-full border border-primary bg-accent px-4 py-2 font-display text-xs font-medium text-accent-foreground glow-ring"
                  : "rounded-full border border-border px-4 py-2 font-display text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              }
            >
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Location, footfall, timeline…"
          className="mt-2 w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
      >
        Send enquiry <Send className="size-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </label>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import hq from "@/assets/contact-hq.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Shield, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Tradexpert Service — Professional Consultations" },
      { name: "description", content: "Reach out to Tradexpert Service. Expert support for all your trademark needs." },
      { property: "og:title", content: "Contact Tradexpert Service" },
      { property: "og:description", content: "Global Trademark Support. Reply within one business day." },
      { property: "og:image", content: hq },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactGrid />
      <Offices />
      <FloatingMap />
    </>
  );
}

function ContactHero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-32">
      <div className="absolute inset-0">
        <img src={hq} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/85 to-background/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Contact</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">
            Begin a <span className="text-gradient-gold">professional</span> consultation.
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
            Tell us about your brand. An expert advisor replies within one business day — usually faster.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl glass-strong p-8 shadow-elegant md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Send a message</div>
            <h2 className="mt-3 font-display text-3xl">We handle every inquiry with care.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" placeholder="John Doe" />
              <Field label="Work email" placeholder="john@brand.com" type="email" />
              <Field label="Company" placeholder="Your Company Name" />
              <Field label="Phone" placeholder="+1 …" />
            </div>
            <div className="mt-5">
              <Label>Service needed</Label>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Registration", "Monitoring", "Legal Advice", "Renewal", "Other"].map((t) => (
                  <label key={t} className="cursor-pointer rounded-full border border-border bg-input/40 px-3.5 py-1.5 text-xs hover:border-primary">
                    <input type="radio" name="ity" className="mr-2 accent-[oklch(0.82_0.14_86)]" />{t}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Label>How can we help?</Label>
              <textarea rows={5} placeholder="Tell us about your trademark requirements..." className="mt-2 w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary" />
            </div>
            <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-gold">
              Submit Inquiry
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">Secure & Confidential · Worldwide Support</p>
          </form>
        </Reveal>

        <div className="space-y-5">
          <Reveal>
            <InfoCard
              tag="Support Desk"
              title="contact@tradexpert.services"
              body="For registration status, general questions and brand advice."
            />
          </Reveal>
          <Reveal delay={1}>
            <InfoCard
              tag="Legal Team"
              title="legal@tradexpert.services"
              body="Trademark disputes, monitoring alerts and legal counsel."
            />
          </Reveal>
          <Reveal delay={2}>
            <InfoCard
              tag="Partnerships"
              title="partners@tradexpert.services"
              body="Agency accounts, law firm partnerships and API access."
            />
          </Reveal>
          <Reveal delay={3}>
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-[oklch(0.82_0.14_86/0.10)] to-transparent p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Status</div>
              <div className="mt-3 font-display text-2xl">Always active, globally responsive.</div>
              <div className="mt-2 text-sm text-muted-foreground">Mon–Fri · 24 Hour Coverage</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface/60 p-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{tag}</div>
      <div className="mt-3 font-display text-2xl">{title}</div>
      <div className="mt-2 text-sm text-muted-foreground">{body}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{children}</label>;
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary" />
    </div>
  );
}

function Offices() {
  const offices = [
    { c: "New York", a: "Financial District, Manhattan", t: "Global HQ", tz: "EST -5:00" },
    { c: "London", a: "Bishopsgate, City of London", t: "European Desk", tz: "BST +1:00" },
    { c: "Tokyo", a: "Chiyoda City, Tokyo", t: "Asia Desk", tz: "JST +9:00" },
  ];
  return (
    <section className="relative border-y border-border bg-[oklch(0.10_0.02_260)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Global support. <span className="text-gradient-gold">Local expertise.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={o.c} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <div className="h-full bg-surface p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{o.t}</div>
                <div className="mt-4 font-display text-4xl">{o.c}</div>
                <div className="mt-2 text-sm text-muted-foreground">{o.a}</div>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{o.tz}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingMap() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <div className="aspect-[16/8] w-full bg-[oklch(0.12_0.02_260)]">
              {/* Stylised world map with floating office pins */}
              <svg viewBox="0 0 1200 480" className="h-full w-full">
                <defs>
                  <radialGradient id="px" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 86)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 86)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* dots forming a loose world map */}
                {Array.from({ length: 380 }).map((_, i) => {
                  const x = (i * 53) % 1200;
                  const y = ((i * 31) % 440) + 20;
                  const r = (i % 7 === 0) ? 1.4 : 0.9;
                  return <circle key={i} cx={x} cy={y} r={r} fill="oklch(1 0 0 / 0.18)" />;
                })}
                {/* pins */}
                {[
                  { x: 280, y: 180, label: "New York" },
                  { x: 605, y: 170, label: "London" },
                  { x: 1050, y: 220, label: "Tokyo" },
                ].map((p) => (
                  <g key={p.label}>
                    <circle cx={p.x} cy={p.y} r="22" fill="url(#px)" />
                    <circle cx={p.x} cy={p.y} r="4" fill="oklch(0.82 0.14 86)" />
                    <text x={p.x + 12} y={p.y - 10} fill="oklch(0.97 0.005 240)" fontSize="12" fontFamily="JetBrains Mono">{p.label}</text>
                  </g>
                ))}
                <path d="M280 180 Q 440 130 605 170" stroke="oklch(0.82 0.14 86 / 0.4)" strokeDasharray="3 4" fill="none" />
                <path d="M605 170 Q 830 150 1050 220" stroke="oklch(0.82 0.14 86 / 0.4)" strokeDasharray="3 4" fill="none" />
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

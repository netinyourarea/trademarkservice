import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-analyst.jpg";
import researchProcess from "@/assets/research-process.jpg";
import dataViz from "@/assets/data-viz.jpg";
import portfolio from "@/assets/portfolio-assessment.jpg";
import marketInsights from "@/assets/market-insights.jpg";
import researchArticles from "@/assets/research-articles.jpg";
import contactHq from "@/assets/contact-hq.jpg";
import equity from "@/assets/equity-research.jpg";
import technical from "@/assets/technical-analysis.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tradexpert Service — Protect Your Brand with Confidence" },
      { name: "description", content: "Professional trademark solutions designed to help businesses secure their intellectual property, register brands, and monitor for infringements." },
      { property: "og:title", content: "Tradexpert Service — Brand Protection" },
      { property: "og:description", content: "Expert trademark registration, brand monitoring, and legal protection services." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <CommandCenter />
      <WhyBento />
      <ProcessJourney />
      <OpportunityHub />
      <Philosophy />
      <InsightsMagazine />
      <Faq />
      <ContactCta />
    </>
  );
}

/* ============ 1. CINEMATIC HERO ============ */
function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-12">
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-[oklch(0.30_0.10_80/0.18)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-12">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-bull animate-pulse-gold" />
              Active · Professional Brand Protection
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[0.98] tracking-tight">
              Secure your brand <br />
              with <span className="text-gradient-gold">precision</span> and <span className="italic text-foreground/90">expertise.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Expert trademark solutions designed to help businesses register their marks, monitor for infringements, and maintain global brand integrity.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]">
                Our Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/5">
                Free Consultation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
              {[
                { v: <Counter to={5000} suffix="+" />, l: "Marks Registered" },
                { v: <Counter to={10} suffix=" yrs" />, l: "Legal Expertise" },
                { v: <Counter to={99} suffix="%" />, l: "Success Rate" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Floating hero composition */}
        <div className="relative aspect-[4/5] w-full">
          <div className="absolute inset-0 -m-4 rounded-[32px] bg-gradient-to-br from-[oklch(0.88_0.10_88/0.18)] to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-border shadow-elegant">
            <img src={heroImg} alt="Trademark expert" className="h-full w-full object-cover" width={1920} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          {/* Floating widgets */}
          <div className="absolute -left-6 top-10 w-56 rounded-2xl glass-strong p-4 shadow-elegant animate-float">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">REGISTRATION STATUS</div>
            <div className="mt-1 font-display text-2xl">Pending Approval</div>
            <div className="mt-0.5 text-xs text-bull">Stage 3 of 4 · No Conflicts</div>
            <svg viewBox="0 0 100 30" className="mt-2 h-10 w-full text-bull">
              <path className="animate-draw" fill="none" stroke="currentColor" strokeWidth="1.4" d="M0,22 L10,18 L20,20 L30,12 L40,16 L50,10 L60,14 L70,6 L80,9 L90,4 L100,8" />
            </svg>
          </div>

          <div className="absolute -right-4 top-32 w-52 rounded-2xl glass-strong p-4 shadow-elegant animate-float" style={{ animationDelay: "1.2s" }}>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>Brand Watch</span><span className="text-primary">LIVE</span>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {["#88b","#7a5","#9c4","#67a","#cc7","#5b8","#a64","#7c9","#8a6","#5a9","#b85","#6b7"].map((c, i) => (
                <div key={i} className="h-6 rounded-sm" style={{ backgroundColor: c, opacity: 0.55 + (i % 4) * 0.1 }} />
              ))}
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Monitoring 420+ global databases</div>
          </div>

          <div className="absolute -bottom-2 left-6 w-64 rounded-2xl glass-strong p-4 shadow-elegant animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[oklch(0.88_0.10_88)] to-[oklch(0.65_0.16_70)]" />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Security</div>
                <div className="text-sm">Trademark Protection</div>
              </div>
              <div className="ml-auto rounded-full bg-bull/15 px-2 py-0.5 text-[10px] font-medium text-bull">ACTIVE</div>
            </div>
          </div>

          <div className="absolute right-4 top-2 h-20 w-20 rounded-full border border-primary/30 animate-spin-slow">
            <div className="absolute inset-2 rounded-full border border-primary/20" />
            <div className="absolute left-1/2 top-0 -mt-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 2. SERVICE COMMAND CENTER ============ */
function CommandCenter() {
  const panels = [
    { t: "Global Registration", m: "Direct filings across USPTO, EUIPO, and major Asian jurisdictions.", v: "45+", k: "Countries", color: "from-[oklch(0.82_0.14_86/0.18)]" },
    { t: "Brand Monitoring", m: "24/7 automated scanning for similar marks and potential infringements.", v: "Live", k: "Watch", color: "from-[oklch(0.55_0.18_250/0.18)]" },
    { t: "Search & Clearance", m: "Comprehensive conflict reports with legal risk assessments.", v: "99.9%", k: "Accuracy", color: "from-[oklch(0.50_0.22_290/0.18)]" },
    { t: "Legal Enforcement", m: "Expert support for cease and desist, oppositions, and litigation.", v: "Expert", k: "Counsel", color: "from-[oklch(0.78_0.16_150/0.18)]" },
    { t: "Portfolio Management", m: "Centralized dashboard for all your global IP assets and renewals.", v: "Active", k: "Management", color: "from-[oklch(0.66_0.20_25/0.18)]" },
  ];
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 02 — Command Center</div>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">Full visibility of your <span className="text-gradient-gold">intellectual property.</span></h2>
            </div>
            <div className="hidden font-mono text-xs text-muted-foreground md:block">
              Monitoring active · <span className="text-foreground">Worldwide</span>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-0 -m-8 rounded-[40px] bg-gradient-to-b from-[oklch(0.30_0.10_80/0.10)] to-transparent blur-3xl" />
          <div className="relative grid gap-5 md:grid-cols-12">
            {panels.map((p, i) => {
              const span = i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-4" : i === 3 ? "md:col-span-4" : "md:col-span-4";
              return (
                <Reveal key={p.t} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)} className={span}>
                  <div className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/40`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
                    <div className="relative flex items-start justify-between">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")} / 05</div>
                      <div className="rounded-full glass px-2.5 py-1 font-mono text-[10px] text-primary">{p.k}</div>
                    </div>
                    <h3 className="relative mt-6 font-display text-2xl">{p.t}</h3>
                    <p className="relative mt-2 text-sm text-muted-foreground">{p.m}</p>
                    <div className="relative mt-6 flex items-end justify-between">
                      <div className="font-display text-3xl text-gradient-gold">{p.v}</div>
                      <svg viewBox="0 0 80 24" className="h-6 w-24 text-primary/70">
                        <path fill="none" stroke="currentColor" strokeWidth="1.2" d="M0,18 L10,14 L20,16 L30,8 L40,12 L50,5 L60,9 L70,3 L80,7" />
                      </svg>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 3. WHY TRADEXPERT SERVICE — BENTO ============ */
function WhyBento() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 03 — Why Tradexpert Service</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">Built for brands that refuse to be <em className="text-gradient-gold">copied.</em></h2>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-cols-6">
          {/* Big editorial block */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border">
              <img src={researchProcess} alt="Registration Process" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1100} />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Principle 01</div>
                <h3 className="mt-3 max-w-md font-display text-4xl leading-tight">Expert-Led. Global. Absolute Security.</h3>
                <p className="mt-3 max-w-lg text-sm text-muted-foreground">Every application is reviewed by professional counsel. We don't just file; we protect your legacy.</p>
              </div>
            </div>
          </Reveal>

          {/* Stat */}
          <Reveal delay={1} className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-primary/20 bg-gradient-to-br from-[oklch(0.82_0.14_86/0.12)] to-transparent p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Reach</div>
              <div>
                <div className="font-display text-6xl text-gradient-gold leading-none"><Counter to={5000} suffix="+" /></div>
                <div className="mt-1 text-sm text-muted-foreground">Marks secured worldwide</div>
              </div>
            </div>
          </Reveal>

          {/* Mini panel */}
          <Reveal delay={2} className="md:col-span-2">
            <div className="h-full rounded-3xl border border-border bg-surface/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Precision</div>
              <h3 className="mt-3 font-display text-2xl">0% Filing Errors</h3>
              <p className="mt-1 text-sm text-muted-foreground">Meticulous review process ensuring your mark is filed correctly the first time.</p>
            </div>
          </Reveal>

          {/* Wide stat strip */}
          <Reveal delay={3} className="md:col-span-3">
            <div className="flex h-full items-center justify-around gap-3 rounded-3xl border border-border bg-surface/60 px-6">
              {[
                { v: <Counter to={99} suffix="%" />, l: "Approval" },
                { v: <Counter to={45} />, l: "Countries" },
                { v: <Counter to={15} />, l: "Experts" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Tall block */}
          <Reveal delay={1} className="md:col-span-3 md:row-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border">
              <img src={dataViz} alt="Global Watch" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" width={1600} height={1000} />
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Principle 02</div>
                <h3 className="mt-3 font-display text-3xl">Automated Vigilance.</h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">Our systems monitor thousands of global databases; we alert you before a conflict becomes a problem.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className="md:col-span-3">
            <div className="flex h-full items-center gap-5 rounded-3xl border border-border bg-surface/60 p-6">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.88_0.10_88)] to-[oklch(0.65_0.16_70)] font-display text-2xl text-primary-foreground">T</div>
              <div>
                <div className="font-display text-xl">Absolute protection, simplified.</div>
                <div className="mt-1 text-sm text-muted-foreground">Enterprise-grade IP management, made accessible to all brands.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 4. PROTECTION JOURNEY ============ */
function ProcessJourney() {
  const steps = [
    { n: "01", t: "Search", d: "Comprehensive conflict reports across global databases.", img: researchProcess },
    { n: "02", t: "Clearance", d: "Legal risk assessment and strategy for optimal registration.", img: equity },
    { n: "03", t: "Filing", d: "Precise submission to USPTO, EUIPO, and other authorities.", img: dataViz },
    { n: "04", t: "Monitoring", d: "24/7 scanning for similar marks and potential infringements.", img: portfolio },
    { n: "05", t: "Sustain", d: "Renewal management and ongoing legal enforcement support.", img: marketInsights },
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 04 — Protection Journey</div>
              <h2 className="mt-3 font-display text-5xl md:text-6xl">Five stages. Total security.</h2>
            </div>
            <div className="hidden font-mono text-xs text-muted-foreground md:block">Standard professional method</div>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line */}
          <svg className="pointer-events-none absolute left-0 right-0 top-24 hidden h-px w-full md:block" viewBox="0 0 1200 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="1200" y2="1" stroke="url(#g)" strokeWidth="1" strokeDasharray="4 6" />
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" x2="1200">
                <stop offset="0" stopColor="oklch(0.82 0.14 86)" stopOpacity="0" />
                <stop offset="0.5" stopColor="oklch(0.82 0.14 86)" stopOpacity="0.8" />
                <stop offset="1" stopColor="oklch(0.82 0.14 86)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="group relative">
                  <div className="relative grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary shadow-gold">
                    {s.n}
                    <span className="absolute inset-0 -z-10 rounded-full animate-pulse-gold" />
                  </div>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                    <img src={s.img} alt={s.t} className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 5. GLOBAL HUB ============ */
function OpportunityHub() {
  const sectors = [
    { name: "North America", v: 92, t: "USPTO" },
    { name: "European Union", v: 88, t: "EUIPO" },
    { name: "United Kingdom", v: 85, t: "UKIPO" },
    { name: "China & APAC", v: 72, t: "CNIPA / WIPO" },
    { name: "Middle East", v: 65, t: "Regional" },
    { name: "Global WIPO", v: 80, t: "Madrid Protocol" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-[oklch(0.10_0.02_260)] py-32">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 05 — Global Support</div>
            <h2 className="mt-3 font-display text-5xl leading-[1] md:text-6xl">Secure your brand <span className="text-gradient-gold">across borders.</span></h2>
            <p className="mt-6 max-w-md text-muted-foreground">Unified trademark management across all major global jurisdictions. We handle the complexity of international IP law.</p>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl glass p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Successful filings</div>
                <div className="mt-1 font-display text-4xl text-bull"><Counter to={5000} suffix="+" /></div>
                <div className="text-xs text-muted-foreground">Since foundation</div>
              </div>
              <div className="rounded-2xl glass p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Global Reach</div>
                <div className="mt-1 font-display text-4xl text-gradient-gold"><Counter to={45} />+</div>
                <div className="text-xs text-muted-foreground">Countries covered</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <div className="relative rounded-3xl glass-strong p-6 shadow-elegant">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Regional Coverage</div>
              <div className="font-mono text-[10px] text-muted-foreground">success rate · %</div>
            </div>
            <div className="mt-6 space-y-5">
              {sectors.map((s) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm">{s.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.t} · {s.v}%</div>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.65_0.16_70)] transition-all duration-1000"
                      style={{ width: `${s.v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
              {["Secure +", "Legal ↑", "Risk: Low"].map((t) => (
                <div key={t} className="rounded-xl bg-white/5 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 6. PROTECTION PHILOSOPHY ============ */
function Philosophy() {
  const items = [
    { n: "I", t: "Prevention over Litigation", b: "We focus on bulletproof filings and early-warning monitoring. Solving conflicts before they reach a courtroom is the ultimate efficiency.", img: portfolio },
    { n: "II", t: "Global by Default", b: "In a digital world, your brand is global from day one. Our strategy ensures protection across all relevant digital and physical borders.", img: equity },
    { n: "III", t: "Expertise is the Edge", b: "We combine automated monitoring with professional legal review. Technology finds the signal; experts make the call.", img: marketInsights },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 06 — Protection Philosophy</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">Three convictions that <span className="italic text-gradient-gold">drive us.</span></h2>
          </div>
        </Reveal>

        <div className="mt-24 space-y-32">
          {items.map((it, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={it.n}>
                <div className={`grid items-center gap-12 md:grid-cols-2 ${left ? "" : "md:[direction:rtl]"}`}>
                  <div className="relative [direction:ltr]">
                    <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[oklch(0.88_0.10_88/0.18)] to-transparent blur-2xl" />
                    <div className="relative overflow-hidden rounded-[24px] border border-border">
                      <img src={it.img} alt={it.t} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                      <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-full glass-strong font-display text-xl text-gradient-gold">{it.n}</div>
                    </div>
                  </div>
                  <div className="[direction:ltr]">
                    <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Principle {it.n}</div>
                    <h3 className="mt-3 font-display text-4xl md:text-5xl">{it.t}</h3>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{it.b}</p>
                    <div className="mt-8 inline-flex items-center gap-3 text-sm text-foreground">
                      <span className="h-px w-12 bg-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tradexpert Service Team</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 7. KNOWLEDGE BASE ============ */
function InsightsMagazine() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between border-b border-border pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 07 — Knowledge Base</div>
              <h2 className="mt-2 font-display text-5xl md:text-6xl">Brand Protection Guide</h2>
            </div>
            <Link to="/research" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">View all articles →</Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          {/* Featured */}
          <Reveal className="md:col-span-7">
            <article className="group">
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img src={researchArticles} alt="Featured Article" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute left-5 top-5 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Essential Guide · 2026</div>
              </div>
              <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Strategy</span><span>·</span><span>12 min read</span>
              </div>
              <h3 className="mt-3 font-display text-4xl leading-tight">The Global Trademark Landscape in 2026</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">As digital borders dissolve, protecting your brand requires a multi-jurisdictional approach. We break down the key changes in USPTO and EUIPO regulations.</p>
            </article>
          </Reveal>

          <div className="md:col-span-5">
            <div className="space-y-6">
              {[
                { tag: "Registration", title: "Common Mistakes in Trademark Applications", time: "6 min" },
                { tag: "Legal", title: "How to Handle a Cease & Desist Letter", time: "10 min" },
                { tag: "Monitoring", title: "The Power of Automated Brand Watching", time: "5 min" },
                { tag: "Portfolio", title: "Managing Global Renewals Efficiently", time: "8 min" },
              ].map((a, i) => (
                <Reveal key={i} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                  <article className="group flex gap-5 border-b border-border pb-6">
                    <div className="font-display text-4xl text-gradient-gold w-12 leading-none">0{i + 1}</div>
                    <div className="flex-1">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{a.tag}</div>
                      <h4 className="mt-1 font-display text-xl leading-tight transition-colors group-hover:text-gradient-gold">{a.title}</h4>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{a.time} read</div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 8. FAQ ============ */
function Faq() {
  const faqs = [
    { q: "How long does trademark registration take?", a: "Typically, the process takes 8 to 12 months, depending on the jurisdiction and whether any oppositions are filed. Our team handles all the heavy lifting to ensure the fastest possible approval." },
    { q: "What is brand monitoring?", a: "It's a proactive service where we scan global trademark databases 24/7 for applications that are similar to yours, allowing us to oppose them before they are registered." },
    { q: "Can I protect my brand internationally?", a: "Yes. We use the Madrid Protocol and direct filings with local IP offices to secure your brand in over 45 countries simultaneously." },
    { q: "What happens if someone infringes on my mark?", a: "Our legal desk provides expert support, from sending cease and desist letters to representing your interests in opposition hearings and court proceedings." },
    { q: "Are your experts actual lawyers?", a: "Yes. Every application and legal strategy is reviewed and managed by professional intellectual property counsel." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="md:sticky md:top-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 08 — Frequently Asked</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">Expert answers.<br /><span className="text-gradient-gold">No legal jargon.</span></h2>
            <p className="mt-5 text-muted-foreground">If your question isn't here, our support desk replies within one business day.</p>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-2xl md:text-3xl">{f.q}</span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-all ${isOpen ? "rotate-45 border-primary text-primary" : ""}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-8 pr-16 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 9. CONTACT CTA ============ */
function ContactCta() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src={contactHq} alt="Office" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ 09 — Secure Your Identity</div>
            <h2 className="mt-3 font-display text-5xl leading-[1.02] md:text-7xl">Let's build the <span className="text-gradient-gold">protection</span> your brand deserves.</h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Tell us about your brand. We'll respond with a tailored protection plan within one business day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form className="rounded-3xl glass-strong p-8 shadow-elegant" onSubmit={(e) => e.preventDefault()}>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Request Consultation</div>
            <div className="mt-5 grid gap-4">
              <Field label="Full name" placeholder="John Doe" />
              <Field label="Work email" placeholder="john@brand.com" type="email" />
              <Field label="Service Interest" placeholder="Registration · Monitoring · Legal" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Brand Details</label>
                <textarea rows={3} placeholder="Tell us about the marks you want to protect..." className="mt-2 w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary" />
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]">
              Start Consultation
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">Secure & Confidential · Worldwide Support</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary" />
    </div>
  );
}

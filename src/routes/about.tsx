import { createFileRoute } from "@tanstack/react-router";
import boardroom from "@/assets/about-boardroom.jpg";
import portfolio from "@/assets/portfolio-assessment.jpg";
import research from "@/assets/research-process.jpg";
import equity from "@/assets/equity-research.jpg";
import insights from "@/assets/market-insights.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Tradexpert Service — Professional Trademark Solutions" },
      { name: "description", content: "Learn about Tradexpert Service. Our commitment to protecting your brand and intellectual property." },
      { property: "og:title", content: "About Tradexpert Service" },
      { property: "og:description", content: "Professional trademark solutions for brand protection. Expert guidance on registration and compliance." },
      { property: "og:image", content: boardroom },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <MissionVision />
      <ValuesBento />
      <PhilosophyExperience />
      <Leadership />
      <ExpertiseTimeline />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-32">
      <div className="absolute inset-0">
        <img src={boardroom} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">About Tradexpert Service</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">
            A trademark partner built on <span className="text-gradient-gold">precision.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We provide expert guidance on trademark registration, monitoring, and brand protection to help businesses secure their intellectual property.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    { y: "2015", t: "Service Founded", d: "Established with a focus on simplifying trademark filings for startups." },
    { y: "2018", t: "Global Network", d: "Expanded partnerships to provide international trademark registration." },
    { y: "2020", t: "Brand Monitoring", d: "Launched automated 24/7 monitoring systems for trademark enforcement." },
    { y: "2022", t: "Legal Desk", d: "Introduced dedicated legal support for trademark disputes and litigation." },
    { y: "2025", t: "Milestone Reached", d: "Over 5,000 successful trademark registrations across multiple jurisdictions." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">§ Our story</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">Years of expertise, one goal.</h2>
          </div>
        </Reveal>
        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:block md:left-1/2" />
          <div className="space-y-16">
            {events.map((e, i) => (
              <Reveal key={e.y} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className={`grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="relative pl-12 md:pl-0 md:pr-12 md:text-right [direction:ltr]">
                    <div className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background font-mono text-[10px] text-primary md:left-auto md:right-[-16px]">●</div>
                    <div className="font-display text-5xl text-gradient-gold">{e.y}</div>
                    <h3 className="mt-2 font-display text-2xl">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
        <Reveal>
          <div className="relative h-full bg-surface p-12 md:p-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Mission</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl">Iron-clad protection for your brand's future.</h3>
            <p className="mt-6 text-muted-foreground">We exist to simplify the legal complexities of intellectual property, ensuring that your brand remains yours alone.</p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { v: <Counter to={5000} suffix="+" />, l: "Registrations" },
                { v: <Counter to={45} />, l: "Countries" },
                { v: <Counter to={15} />, l: "Experts" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="relative h-full overflow-hidden bg-[oklch(0.10_0.02_260)] p-12 md:p-16">
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Vision</div>
              <h3 className="mt-4 font-display text-4xl md:text-5xl">A global standard for intellectual property management.</h3>
              <p className="mt-6 text-muted-foreground">We are building a future where trademark protection is accessible, automated, and absolute for every creator and enterprise.</p>
              <blockquote className="mt-12 border-l-2 border-primary pl-5 font-display text-2xl italic">
                "Your brand is your most valuable asset. Protect it with the respect it deserves."
                <div className="mt-3 font-sans text-xs not-italic uppercase tracking-[0.3em] text-muted-foreground">— Tradexpert Service Team</div>
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesBento() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl">Values <span className="text-gradient-gold">we uphold.</span></h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-3 md:row-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-primary/30 bg-gradient-to-br from-[oklch(0.82_0.14_86/0.16)] to-transparent p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">01 · Precision</div>
              <div>
                <h3 className="font-display text-4xl">Every filing, perfect.</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">Accuracy is the foundation of trademark protection.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1} className="md:col-span-3">
            <div className="h-full rounded-3xl border border-border bg-surface/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">02 · Integrity</div>
              <h3 className="mt-3 font-display text-2xl">Ethical guidance in every case.</h3>
            </div>
          </Reveal>
          <Reveal delay={2} className="md:col-span-2">
            <div className="h-full rounded-3xl border border-border bg-surface/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">03 · Vigilance</div>
              <h3 className="mt-3 font-display text-2xl">Always monitoring, always alert.</h3>
            </div>
          </Reveal>
          <Reveal delay={3} className="md:col-span-4">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border">
              <img src={research} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="relative p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">04 · Commitment</div>
                <h3 className="mt-3 max-w-md font-display text-2xl">We stand by your brand through every dispute.</h3>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-3xl border border-border bg-surface/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">05 · Innovation</div>
              <h3 className="mt-3 font-display text-2xl">Technology-driven brand protection.</h3>
            </div>
          </Reveal>
          <Reveal delay={1} className="md:col-span-4">
            <div className="flex h-full items-center justify-between rounded-3xl border border-border bg-surface/60 p-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">06 · Global View</div>
                <h3 className="mt-3 font-display text-2xl">Protecting identities across borders.</h3>
              </div>
              <div className="font-display text-7xl text-gradient-gold leading-none"><Counter to={99} suffix="%" /></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhilosophyExperience() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[oklch(0.09_0.02_260)] py-40">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">A protection philosophy in three words</div>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-baseline justify-center gap-4 md:gap-8">
            {["Search.", "Secure.", "Sustain."].map((w, i) => (
              <span key={w} className="font-display text-[clamp(3rem,10vw,8rem)] leading-none" style={{ color: i === 1 ? "transparent" : undefined, WebkitTextStroke: i === 1 ? "1px oklch(0.82 0.14 86)" : undefined }}>
                {w}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Search to identify conflicts. Secure to finalize legal protection.
            Sustain to monitor and enforce your brand's unique identity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Leadership() {
  const leaders = [
    { n: "David Vance", r: "Founder & Lead Counsel", img: portfolio, b: "Specializing in global intellectual property law for 20 years." },
    { n: "Sarah Chen", r: "Head of Operations", img: insights, b: "Expert in streamlining international filing processes." },
    { n: "Marcus Thorne", r: "Chief Tech Officer", img: equity, b: "Pioneer in automated trademark monitoring systems." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-5xl md:text-6xl">Our experts.</h2>
            <div className="hidden font-mono text-xs text-muted-foreground md:block">New York · London · Tokyo</div>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.n} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
                  <img src={l.img} alt={l.n} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{l.r}</div>
                    <div className="mt-1 font-display text-2xl">{l.n}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{l.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseTimeline() {
  const eras = [
    { y: "USPTO", t: "US Registration", d: "Direct filing and monitoring within the United States." },
    { y: "EUIPO", t: "European Protection", d: "Securing brands across the European Union member states." },
    { y: "WIPO", t: "International Filing", d: "Managing Madrid Protocol applications for global reach." },
    { y: "CHINA", t: "Asian Markets", d: "Navigating the complexities of brand protection in major Asian hubs." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl">Global Coverage.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {eras.map((e, i) => (
            <Reveal key={e.y} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <div className="h-full bg-surface p-8">
                <div className="font-display text-5xl text-gradient-gold">{e.y}</div>
                <h3 className="mt-3 font-display text-xl">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

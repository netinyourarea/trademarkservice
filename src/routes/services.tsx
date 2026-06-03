import { createFileRoute } from "@tanstack/react-router";
import equity from "@/assets/equity-research.jpg";
import technical from "@/assets/technical-analysis.jpg";
import portfolio from "@/assets/portfolio-assessment.jpg";
import risk from "@/assets/risk-management.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Tradexpert Service — Global Brand Protection" },
      { name: "description", content: "Comprehensive trademark services including registration, search, monitoring, and legal enforcement." },
      { property: "og:title", content: "Tradexpert Service - Our Solutions" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    {
      t: "Trademark Registration",
      d: "Direct filing with major intellectual property offices worldwide, ensuring your marks are secured in every market you operate.",
      features: ["USPTO & EUIPO filing", "International Madrid Protocol", "Classification guidance", "Document preparation"],
      img: equity
    },
    {
      t: "Brand Monitoring",
      d: "24/7 automated scanning of global databases for potentially infringing marks, allowing you to take action before damage occurs.",
      features: ["Global database watch", "Similarity reporting", "Infringement alerts", "Marketplace monitoring"],
      img: technical
    },
    {
      t: "Search & Clearance",
      d: "Comprehensive conflict reports and legal risk assessments to ensure your proposed brand is safe to use and register.",
      features: ["Conflict identification", "Risk assessment", "Likelihood of confusion reports", "Strategic advice"],
      img: portfolio
    },
    {
      t: "Legal Enforcement",
      d: "Expert legal support for protecting your registered trademarks, from cease and desist letters to formal opposition hearings.",
      features: ["Cease & Desist letters", "Opposition proceedings", "Cancellation actions", "Litigation support"],
      img: risk
    }
  ];

  return (
    <div className="relative pb-32">
      <section className="relative pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Our Solutions</div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl">Professional Brand <br /><span className="text-gradient-gold">Infrastructure.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 lg:mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div className="flex h-full flex-col bg-surface p-8 md:p-12">
                  <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border">
                    <img src={s.img} alt={s.t} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-display text-3xl">{s.t}</h3>
                  <p className="mt-4 flex-grow text-muted-foreground">{s.d}</p>
                  <ul className="mt-8 space-y-3">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

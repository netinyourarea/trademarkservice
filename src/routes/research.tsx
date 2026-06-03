import { createFileRoute } from "@tanstack/react-router";
import researchArticles from "@/assets/research-articles.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Knowledge Base · Tradexpert Service" },
      { name: "description", content: "Expert insights on trademark law, brand protection, and intellectual property management." },
      { property: "og:title", content: "Tradexpert Service Knowledge Base" },
    ],
  }),
  component: KnowledgeBase,
});

function KnowledgeBase() {
  const articles = [
    {
      t: "Understanding International Classifications",
      d: "A deep dive into the Nice Classification system and how to correctly categorize your goods and services.",
      tag: "Strategy",
      read: "14 min"
    },
    {
      t: "The Madrid Protocol Explained",
      d: "How to leverage international treaties to protect your brand in over 120 countries with a single application.",
      tag: "Legal",
      read: "18 min"
    },
    {
      t: "Common Pitfalls in Trademark Selection",
      d: "Why descriptive names often fail and how to choose a strong, registrable brand identity.",
      tag: "Branding",
      read: "10 min"
    },
    {
      t: "Enforcement in the Digital Age",
      d: "Strategies for protecting your trademarks against domain squatting and social media infringements.",
      tag: "Security",
      read: "12 min"
    }
  ];

  return (
    <div className="relative pb-32">
      <section className="relative pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Knowledge Base</div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl">Expert Insights on <br /><span className="text-gradient-gold">Brand Protection.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 lg:mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl border border-border">
                <img src={researchArticles} alt="Featured" className="aspect-[21/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Featured Article</div>
                  <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">Global Trademark Trends for 2026: What Every Enterprise Needs to Know</h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">Navigating the changing landscape of international IP law in an increasingly digital and decentralized global market.</p>
                </div>
              </div>
            </Reveal>

            {articles.map((a, i) => (
              <Reveal key={a.t} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <article className="group cursor-pointer">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span className="text-primary">{a.tag}</span>
                    <span>·</span>
                    <span>{a.read} read</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl transition-colors group-hover:text-gradient-gold">{a.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{a.d}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Read Article 
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sebiLogo from "@/assets/sebi-logo.jpg";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer · Tradexpert Service" },
      { name: "description", content: "Disclaimer for Tradexpert Service. Important information about our services." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <DisclaimerHero />
      <DisclaimerContent />
    </>
  );
}

function DisclaimerHero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Legal</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">
            <span className="text-gradient-gold">Disclaimer.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Important information about the use of our services and website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function DisclaimerContent() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <Reveal>
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start py-8 border-b border-border">
            <div className="flex items-center justify-center">
              <div className="h-32 w-32 flex items-center justify-center rounded-xl border border-border bg-surface/30 p-4">
                <img src={sebiLogo} alt="SEBI Registered" className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">SEBI Regulated</div>
                <div className="mt-2 font-display text-2xl">MIRZA ARBAAZ BAIG</div>
                <div className="mt-1 text-sm text-muted-foreground">SEBI Registration: ESUPB5062F</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-[oklch(0.82_0.14_86/0.16)] to-transparent p-6 mb-8">
            <div className="text-sm leading-relaxed">
              <strong>IMPORTANT NOTICE:</strong> This disclaimer constitutes an important legal agreement between you and Tradexpert Service. Please read it carefully before using our services or website.
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">1. General Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information provided on this website and through our services is for general informational purposes only. While we strive to provide accurate and current information, Tradexpert Service makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or availability of the information.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">2. Not Legal Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing on this website or in our communications constitutes legal advice. While our team includes professional intellectual property counsel, any advice must be obtained through formal engagement and written consultation agreements. Users should consult with qualified legal professionals for specific legal matters.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">3. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to external websites. Tradexpert Service is not responsible for the content, accuracy, or practices of external websites. Your use of external websites is governed by their respective terms and policies.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">4. Service Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              While Tradexpert Service provides comprehensive trademark services, we cannot guarantee the success of trademark applications or enforcement actions. Trademark registrations depend on various factors including administrative processes, examination decisions, and legal challenges. We provide our professional opinion and expert guidance based on current laws and regulations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">5. No Guarantee of Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tradexpert Service does not guarantee specific results from our services. Trademark registration, enforcement, and monitoring outcomes may be affected by various factors beyond our control, including changes in laws, administrative decisions, and third-party actions. Past performance does not guarantee future results.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">6. Regulatory Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tradexpert Service operates under SEBI regulation. Our services are subject to applicable laws and regulations of India and international jurisdictions. Users are responsible for ensuring their use of our services complies with all applicable laws.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Tradexpert Service shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or use, arising from or in connection with our services or website.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">8. Contact & Support</h2>
            <div className="rounded-2xl border border-border bg-surface/30 p-6">
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Owner</div>
                  <div className="mt-1 font-display">MIRZA ARBAAZ BAIG</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">SEBI Registration</div>
                  <div className="mt-1 font-mono">ESUPB5062F</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Location</div>
                  <div className="mt-1">KARAVE, NERUL, NAVI MUMBAI 400706</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Email</div>
                  <div className="mt-1"><a href="mailto:contact@tradexpert.services" className="text-foreground hover:underline">contact@tradexpert.services</a></div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Phone</div>
                  <div className="mt-1"><a href="tel:+917021551659" className="text-foreground hover:underline">+91 70215 51659</a></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="text-xs text-muted-foreground py-8 border-t border-border">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

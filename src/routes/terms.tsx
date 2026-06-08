import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sebiLogo from "@/assets/sebi-logo.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service · Tradexpert Service" },
      { name: "description", content: "Terms of Service for Tradexpert Service. Read our service terms and conditions." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}

function TermsHero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Legal</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">
            Terms of <span className="text-gradient-gold">Service.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Please read these terms carefully before engaging with our trademark services.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TermsContent() {
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
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Service Provider</div>
                <div className="mt-2 font-display text-2xl">MIRZA ARBAAZ BAIG</div>
                <div className="mt-1 text-sm text-muted-foreground">SEBI Registration: ESUPB5062F</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using Tradexpert Service's website and services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">2. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tradexpert Service provides professional trademark registration, monitoring, clearance reports, and legal enforcement services. All services are provided in accordance with applicable intellectual property laws and SEBI regulations. We make reasonable efforts to provide accurate information, but do not guarantee the accuracy or completeness of any data provided.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">3. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clients are responsible for providing accurate and complete information necessary for trademark services. You warrant that you have the right to apply for the trademarks you request and that such trademarks do not infringe upon the rights of third parties.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              All fees and charges are due upon invoice unless otherwise agreed in writing. Failure to pay may result in suspension of services. Refunds are subject to our refund policy and applicable laws.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Tradexpert Service is not liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services. Our liability is limited to the amount paid for the specific service that caused the claim.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website, including text, graphics, and software, is the property of Tradexpert Service or its content suppliers and is protected by copyright law. You may not reproduce, distribute, or transmit any content without prior written permission.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">7. Regulatory Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tradexpert Service operates under the regulatory oversight of SEBI and complies with all applicable laws and regulations governing intellectual property services in India. Our services are subject to changes in law or regulatory requirements.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">8. Contact Information</h2>
            <div className="rounded-2xl border border-border bg-surface/30 p-6">
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Owner</div>
                  <div className="mt-1 font-display">MIRZA ARBAAZ BAIG</div>
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

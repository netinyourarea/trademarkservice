import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sebiLogo from "@/assets/sebi-logo.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · Tradexpert Service" },
      { name: "description", content: "Privacy Policy for Tradexpert Service. Learn how we protect your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}

function PrivacyHero() {
  return (
    <section className="relative -mt-24 overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">Legal</div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98]">
            Privacy <span className="text-gradient-gold">Policy.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PrivacyContent() {
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
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Regulated Entity</div>
                <div className="mt-2 font-display text-2xl">MIRZA ARBAAZ BAIG</div>
                <div className="mt-1 text-sm text-muted-foreground">SEBI Registration: ESUPB5062F</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you submit forms, request services, or contact us for consultations. This may include your name, email address, phone number, company name, and trademark-related information.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to provide trademark services, respond to inquiries, process registrations, monitor brands, and improve our services. Your information is protected with industry-standard security measures and is never shared with third parties without your consent, except as required by law or regulatory authorities like SEBI.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tradexpert Service implements comprehensive security measures to protect your personal and trademark data. All communications are encrypted, and sensitive information is stored securely in compliance with SEBI regulations and data protection standards.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">4. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. You can also opt out of communications at any time. Contact us at contact@tradexpert.services for any privacy-related inquiries.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-2xl">5. Contact Information</h2>
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

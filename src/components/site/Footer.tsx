import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-[oklch(0.10_0.02_260)]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.88_0.10_88)] to-[oklch(0.65_0.16_70)]" />
                <div className="absolute inset-[3px] rounded-full bg-background" />
                <div className="absolute inset-0 grid place-items-center font-display text-base text-gradient-gold">T</div>
              </div>
              <div className="font-display text-xl">Tradexpert Service</div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Professional trademark solutions for brand protection. We provide expert guidance on registration, monitoring, and legal compliance.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-bull animate-pulse-gold" />
              Service Status · Active / 24-7
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Explore</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/research" className="hover:text-foreground">Knowledge Base</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Services</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>Trademark Registration</li>
              <li>Brand Monitoring</li>
              <li>Legal Consultation</li>
              <li>Portfolio Management</li>
              <li>Enforcement Strategy</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Contact & Address</div>
            <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
              KARAVE<br />
              NERUL<br />
              NAVI MUMBAI 400706
            </address>
            <div className="mt-4 space-y-2">
              <div className="text-sm text-foreground">+91 70215 51659</div>
              <a href="mailto:helpdesk@tradexpertservice.com" className="inline-block text-sm text-foreground underline-offset-4 hover:underline">
                helpdesk@tradexpertservice.com
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Legal</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            <div>© {new Date().getFullYear()} Tradexpert Service. All rights reserved.</div>
            <div className="mt-2 text-[11px]">Registered Owner: <span className="text-foreground font-medium">MIRZA ARBAAZ BAIG</span></div>
            <div className="text-[11px]">SEBI Registration: <span className="text-foreground font-medium">ESUPB5062F</span></div>
          </div>
          <div className="font-mono uppercase tracking-[0.3em]">Protection • Integrity • Vigilance</div>
        </div>
      </div>
    </footer>
  );
}

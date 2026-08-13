import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="w-full px-6 lg:px-12 py-12 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6 max-w-xs">
          <Link to="/" className="flex items-center gap-2">
            <img alt="RedFox" className="w-8 h-8 object-cover rounded" src="/logo.jpg" />
            <span className="font-headline-md text-xl font-bold text-on-surface">RedFox</span>
          </Link>
          
          <p className="font-body-md text-body-md text-on-surface-variant">
            Advanced cybersecurity awareness for the modern enterprise human layer. Engineered by{" "}
            <a
              href="https://bitlabsbuild.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-brand-crimson transition-colors underline underline-offset-2"
            >
              BitLabs Technology PLC
            </a>
            .
          </p>

          <div className="flex items-center gap-3">
            <div className="h-10 bg-surface-container-low border border-outline-variant rounded-sm flex items-center justify-center px-3 opacity-80 hover:opacity-100 transition-all">
              <span className="font-bold text-xs text-brand-crimson uppercase tracking-widest px-2 border border-brand-crimson/30 rounded bg-brand-crimson/10">
                ISO 27001 Certified
              </span>
            </div>
            <div className="h-10 bg-surface-container-low border border-outline-variant rounded-sm flex items-center justify-center px-3 opacity-80 hover:opacity-100 transition-all">
              <span className="font-bold text-xs text-on-surface">SOC2</span>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          
          {/* Platform */}
          <div className="space-y-4">
            <h5 className="font-label-md text-label-md text-on-surface font-bold">Platform</h5>
            <nav className="flex flex-col gap-2">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/platform">
                Simulations
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/platform">
                Training
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/platform">
                Reporting
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h5 className="font-label-md text-label-md text-on-surface font-bold">Company</h5>
            <nav className="flex flex-col gap-2">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                About Us
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                Careers
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/contact">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h5 className="font-label-md text-label-md text-on-surface font-bold">Legal</h5>
            <nav className="flex flex-col gap-2">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                Privacy Policy
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                Terms of Service
              </Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" to="/about">
                Compliance
              </Link>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2026 BitLabs Technology PLC. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/about" aria-label="Global Standards" className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer">public</span>
          </Link>
          <Link to="/contact" aria-label="Contact Us" className="text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer">share</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

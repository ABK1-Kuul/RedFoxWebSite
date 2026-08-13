import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 pt-16 pb-12 px-6 lg:px-12 text-on-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-outline-variant/20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img alt="RedFox" className="w-10 h-10 object-cover rounded shadow-md" src="/logo.jpg" />
              <div>
                <span className="font-headline-md text-xl font-bold text-white tracking-tight block">RedFox</span>
                <span className="text-[11px] font-mono text-brand-crimson uppercase tracking-widest block">Human Risk Management Engine</span>
              </div>
            </Link>
            
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Enterprise cyber-resilience engineered by{" "}
              <a
                href="https://bitlabsbuild.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-brand-crimson transition-colors underline underline-offset-2"
              >
                BitLabs Technology PLC
              </a>
              . Transforming workforce vulnerability into proactive defense across high-risk global sectors.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                SOC Telemetry Active
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-[11px] text-on-surface-variant font-mono">
                99.99% SLA
              </span>
            </div>
          </div>

          {/* Product / Platform */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-brand-crimson uppercase tracking-widest">Platform</h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link to="/platform" className="hover:text-white transition-colors">Adaptive Phishing Drills</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Human Risk Index (HRI)</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Micro-Learning Modules</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">1-Click Threat Reporting</Link></li>
              <li><Link to="/platform" className="hover:text-white transition-colors">Audit Trail Vault</Link></li>
            </ul>
          </div>

          {/* Solutions & Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-brand-crimson uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link to="/solutions" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Healthcare & Life Sciences</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Global Technology</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Public Sector & Defense</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Energy & Critical Infra</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-brand-crimson uppercase tracking-widest">Resources & Company</h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li><Link to="/resources" className="hover:text-white transition-colors">Research & Whitepapers</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Enterprise Pricing</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About BitLabs PLC</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Engineers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request Enterprise Demo</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Security Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 BitLabs Technology PLC. All rights reserved.</span>
            <span className="hidden md:inline text-outline-variant">•</span>
            <span>RedFox is an enterprise cyber-resilience product of BitLabs Technology PLC.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Security Standards</Link>
            <span className="px-2 py-0.5 rounded bg-brand-crimson/10 border border-brand-crimson/30 text-brand-crimson text-[10px] font-bold uppercase tracking-wider">
              ISO 27001 & SOC 2
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

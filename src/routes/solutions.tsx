import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { buildMetaTags, SITE_CONFIG } from "@/lib/seo";

const HTML = `
<!-- Main Content Canvas -->
<main class="min-h-screen pt-24 pb-20">
<!-- Content Area -->
<div class="max-w-[1440px] mx-auto px-6 lg:px-12 pb-xl">
<!-- Hero Section / Bento Grid Start -->
<section class="grid grid-cols-12 gap-gutter mb-xl">
<div class="col-span-12 lg:col-span-8 flex flex-col justify-center">
<div class="inline-flex items-center gap-xs px-sm py-unit rounded bg-brand-crimson/5 border border-brand-crimson/20 text-brand-crimson w-fit mb-md">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">bolt</span>
<span class="font-label-sm text-label-sm uppercase tracking-widest">Enterprise Resilience</span>
</div>
<h2 class="font-display-lg text-display-lg mb-md max-w-2xl">Human-Centric <span class="text-brand-crimson">Security Infrastructure.</span></h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
                        RedFox transforms your weakest link into your strongest defense. Our platform integrates behavioral science with enterprise-grade threat intelligence to quantify and mitigate human risk.
                    </p>
<div class="flex gap-md">
<button class="px-xl py-md bg-brand-crimson text-white font-bold rounded-lg hover:opacity-90 transition-colors">Start Simulation</button>
<button class="px-xl py-md border border-outline-variant text-on-surface font-bold rounded-lg hover:bg-surface-container-high transition-colors">Technical Docs</button>
</div>
</div>
<div class="col-span-12 lg:col-span-4 matte-card p-md relative overflow-hidden group" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<div class="absolute inset-0 bg-gradient-to-br from-brand-crimson/5 to-transparent opacity-50"></div>
<span class="material-symbols-outlined text-brand-crimson text-4xl mb-sm" style="font-variation-settings: 'FILL' 0;">verified_user</span>
<h3 class="font-title-md text-title-md mb-xs">Immutable Compliance</h3>
<p class="text-on-surface-variant text-sm mb-md">Soc2 Type II and HIPAA ready. Automated evidence collection with cryptographically signed logs.</p>
<div class="mt-auto pt-md border-t border-outline-variant/30 flex justify-between items-center">
<span class="text-xs font-label-sm text-brand-crimson">Live Status: Active</span>
<span class="w-2 h-2 rounded-full bg-brand-crimson animate-pulse"></span>
</div>
</div>
</section>
<!-- Product Mockups - Horizontal Layout -->
<section class="space-y-xl">
<!-- Feature 01: Training Dashboard -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl matte-border-b">
<div>
<span class="text-brand-crimson/40 font-black text-6xl opacity-20 block mb-sm">01</span>
<h3 class="font-headline-lg text-headline-lg mb-md">Gamified Training Hub</h3>
<p class="text-on-surface-variant font-body-lg mb-md">
                            Move beyond boring slide decks. Our training modules utilize micro-learning segments and competitive leaderboards to drive engagement.
                        </p>
<ul class="space-y-sm">
<li class="flex items-start gap-sm">
<span class="material-symbols-outlined text-brand-crimson mt-1">check_circle</span>
<span class="">Adaptive difficulty based on user performance.</span>
</li>
<li class="flex items-start gap-sm">
<span class="material-symbols-outlined text-brand-crimson mt-1">check_circle</span>
<span class="">15-minute "Burst Modules" to prevent fatigue.</span>
</li>
</ul>
</div>
<div class="matte-card p-6 rounded-xl border border-outline-variant/30 bg-surface-container-low/80 space-y-4">
  <div class="flex justify-between items-center border-b border-outline-variant/20 pb-3">
    <span class="text-xs font-mono text-brand-crimson font-bold">FINANCIAL & HEALTHCARE SOLUTION</span>
    <span class="text-xs text-green-400 font-mono">HIPAA READY</span>
  </div>
  <div class="space-y-3 font-mono text-xs">
    <div class="p-3 bg-surface-container-high/60 rounded border border-outline-variant/20 flex justify-between items-center">
      <span class="text-white font-medium">FINRA & SEC Compliance Controls</span>
      <span class="text-green-400 font-bold">VERIFIED</span>
    </div>
    <div class="p-3 bg-surface-container-high/60 rounded border border-outline-variant/20 flex justify-between items-center">
      <span class="text-white font-medium">PHII & PII Threat Vectors</span>
      <span class="text-brand-crimson font-bold">PROTECTED</span>
    </div>
  </div>
</div>
</div>
<!-- Feature 02: Phishing Manager -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl matte-border-b">
<div class="order-2 lg:order-1 matte-card p-6 rounded-xl border border-outline-variant/30 bg-surface-container-low/80 space-y-4">
  <div class="flex justify-between items-center border-b border-outline-variant/20 pb-3">
    <span class="text-xs font-mono text-white font-bold">ENTERPRISE THREAT VECTOR DRILLS</span>
    <span class="text-xs text-brand-crimson font-mono font-bold">MULTI-TENANT</span>
  </div>
  <div class="grid grid-cols-2 gap-3 text-center">
    <div class="p-3 bg-surface-container-high/60 rounded border border-outline-variant/20">
      <div class="text-2xl font-extrabold text-white">100%</div>
      <div class="text-[10px] text-on-surface-variant uppercase mt-1">Audit Log Accuracy</div>
    </div>
    <div class="p-3 bg-surface-container-high/60 rounded border border-outline-variant/20">
      <div class="text-2xl font-extrabold text-green-400">0.4s</div>
      <div class="text-[10px] text-on-surface-variant uppercase mt-1">Triage Latency</div>
    </div>
  </div>
</div>
<div class="order-1 lg:order-2">
<span class="text-brand-crimson/40 font-black text-6xl opacity-20 block mb-sm">02</span>
<h3 class="font-headline-lg text-headline-lg mb-md">Phishing Simulation Manager</h3>
<p class="text-on-surface-variant font-body-lg mb-md">
                            Deploy hyper-realistic simulations modeled after real-world active threats. Track click-rates, report-rates, and data entry in real-time.
                        </p>
<div class="grid grid-cols-2 gap-sm">
<div class="bg-surface-container-low p-sm rounded border border-outline-variant/30">
<div class="text-brand-crimson font-bold text-xl mb-unit">89%</div>
<div class="text-[10px] uppercase text-on-surface-variant">Avg Report Rate</div>
</div>
<div class="bg-surface-container-low p-sm rounded border border-outline-variant/30">
<div class="text-brand-crimson font-bold text-xl mb-unit">0.4s</div>
<div class="text-[10px] uppercase text-on-surface-variant">Response Time</div>
</div>
</div>
</div>
</div>
<!-- Feature 03: Compliance Hub -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl">
<div>
<span class="text-brand-crimson/40 font-black text-6xl opacity-20 block mb-sm">03</span>
<h3 class="font-headline-lg text-headline-lg mb-md">The Audit Trail Vault</h3>
<p class="text-on-surface-variant font-body-lg mb-md">
                            Every interaction is recorded in an immutable ledger. Provide auditors with a complete, tamper-proof history of your organization's security posture.
                        </p>
<div class="flex items-center gap-md">
<div class="flex -space-x-3">
<div class="w-8 h-8 rounded-full border border-background bg-secondary-container flex items-center justify-center text-[10px] font-bold">JD</div>
<div class="w-8 h-8 rounded-full border border-background bg-surface-variant flex items-center justify-center text-[10px] font-bold">AS</div>
<div class="w-8 h-8 rounded-full border border-background bg-primary-container flex items-center justify-center text-[10px] font-bold text-background">RK</div>
</div>
<span class="text-xs text-on-surface-variant italic">Audited by 40+ Certified Partners</span>
</div>
</div>
<div class="matte-card p-6 rounded-xl border border-outline-variant/30 bg-surface-container-low/80 space-y-4">
  <div class="flex justify-between items-center border-b border-outline-variant/20 pb-3">
    <span class="text-xs font-mono text-white font-bold">PUBLIC SECTOR & GOVERNMENT</span>
    <span class="text-xs text-green-400 font-mono font-bold">NIST CSF 2.0</span>
  </div>
  <div class="space-y-2 text-xs font-mono">
    <div class="flex justify-between items-center text-on-surface-variant p-2 bg-surface-container-high/50 rounded">
      <span>NIST PR.AT-01 Awareness Training</span>
      <span class="text-green-400 font-bold">COMPLIANT</span>
    </div>
    <div class="flex justify-between items-center text-on-surface-variant p-2 bg-surface-container-high/50 rounded">
      <span>FedRAMP Low / Moderate Alignment</span>
      <span class="text-green-400 font-bold">ALIGNED</span>
    </div>
  </div>
</div>
</div>
</section>
<!-- Technical Detail Grid -->
<section class="mt-xl py-xl border-t border-outline-variant/30">
<h4 class="font-headline-md text-headline-md mb-xl text-center">Engineered for Precision</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="p-md matte-card group cursor-default" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<div class="w-12 h-12 mb-md flex items-center justify-center rounded border border-brand-crimson/20 bg-brand-crimson/5 transition-colors group-hover:bg-brand-crimson/10">
<span class="material-symbols-outlined text-brand-crimson">psychology</span>
</div>
<h5 class="font-title-md text-title-md mb-sm">Behavioral Analysis</h5>
<p class="text-on-surface-variant text-sm">We don't just measure knowledge; we track changes in daily digital habits using proprietary risk modeling.</p>
</div>
<div class="p-md matte-card group cursor-default" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<div class="w-12 h-12 mb-md flex items-center justify-center rounded border border-brand-crimson/20 bg-brand-crimson/5 transition-colors group-hover:bg-brand-crimson/10">
<span class="material-symbols-outlined text-brand-crimson">hub</span>
</div>
<h5 class="font-title-md text-title-md mb-sm">API Integration</h5>
<p class="text-on-surface-variant text-sm">Sync with Okta, Azure AD, and Slack to automate enrollment and push training directly where teams work.</p>
</div>
<div class="p-md matte-card group cursor-default" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<div class="w-12 h-12 mb-md flex items-center justify-center rounded border border-brand-crimson/20 bg-brand-crimson/5 transition-colors group-hover:bg-brand-crimson/10">
<span class="material-symbols-outlined text-brand-crimson">data_exploration</span>
</div>
<h5 class="font-title-md text-title-md mb-sm">Predictive Reporting</h5>
<p class="text-on-surface-variant text-sm">AI-driven forecasting identifies departments at high risk of a breach before a real attack occurs.</p>
</div>
</div>
</section>
</div>
<!-- Footer -->

</main>
<script>
        // Micro-interaction for scroll reveals
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.matte-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(card);
            });
        });
    </script>
`;
export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: buildMetaTags({
      title: "Industry Cybersecurity Solutions — RedFox by BitLabs",
      description:
        "Tailored human risk resilience solutions for Finance, Healthcare, Enterprise, and Public Sector organizations. Compliance automation and custom attack scenarios.",
      path: "/solutions",
    }),
    links: [
      { rel: "canonical", href: `${SITE_CONFIG.domain}/solutions` },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <SiteNav />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}

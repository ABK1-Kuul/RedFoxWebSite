import { createFileRoute } from "@tanstack/react-router";

const HTML = `
<!-- Header Navigation -->
<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-desktop py-4 max-w-container-max-width mx-auto flex justify-between items-center">
<div class="flex items-center gap-2">
<img alt="RedFox" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnwuZmTsCPJXibUoiKy_QhjTNh1zegbxHNPDLmHEko39wJx7_-4D7LFVIWkypJen7M-1zHhBFvReXZ5LxUT2TPihzdczE4ixcrRMuKTq4Ym1SwLhlGCkFc9rQCH6hwIofB01-L8Rwh5_FlICqtZUx-pMLYmBmwwi5g3M7ipaYRNp2il2WEmd3EjvkLQYnZtN7NIeG1VXqUPP1JZZ7SxUb4r27l5nxGPzoyBiNN6duzYdI0asMGu90zoCVlUOtSmS_L8tGnSE9-TQs"/>
<span class="font-headline-md text-headline-md font-bold text-on-surface">RedFox</span>
</div>
<nav class="hidden md:flex gap-8">
<a class="font-label-md text-label-md text-on-surface border-b border-brand-crimson pb-1" href="/solutions">Solutions</a>
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/platform">Platform</a>
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/pricing">Pricing</a>
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/resources">Resources</a>
</nav>
<div class="flex items-center gap-4">
<a href="/contact" class="font-label-md text-label-md text-on-surface hover:text-primary transition-colors">Login</a>
<a href="/contact" class="bg-brand-crimson text-white px-6 py-2 font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all">Request Demo</a>
</div>
</header>
<main class="pt-24">
<!-- Hero Section -->
<section class="relative min-h-[85vh] flex items-center justify-center py-20 px-margin-desktop hero-matte-gradient matte-grid">
<div class="container max-w-container-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div class="space-y-8">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-high border border-outline-variant">
<span class="w-2 h-2 rounded-full bg-brand-crimson"></span>
<span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">Advanced Human Risk Management</span>
</div>
<h1 class="font-display-lg text-display-lg leading-tight">
                    Secure the <span class="text-brand-crimson">Human Layer</span> with Vigilant Awareness.
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Empower your workforce with automated phishing simulations and gamified training designed for the modern enterprise. Turn your weakest link into your strongest defense.
                </p>
<div class="flex flex-wrap gap-4">
<a href="/contact" class="bg-brand-crimson text-white px-8 py-4 font-label-md text-label-md rounded hover:opacity-90 transition-all">Request a Demo</a>
<button class="border border-outline text-on-surface px-8 py-4 font-label-md text-label-md rounded hover:bg-surface-container-low transition-all">See How It Works</button>
</div>
</div>
<div class="relative group">
<div class="relative matte-card p-1 rounded-sm overflow-hidden bg-surface-container-highest border-outline-variant">
<img alt="Dashboard Interface" class="w-full h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2T1GfXyraJzQU-cOyaCDORGUJ_5jA7bhYsT-7HSbZjnoNy4zZEWwqhu8NgcGD2kv6i7D5iWR4mRT22maMUX56NkjSpGjm07snIWlk2EUJ_sqDIz9bRn9DQOb9XdSj3HFATBJJmbkJ_fZ6hTfSqzLoPqsQC6K2PZSJ_rpXKoFK52JKlVwseUye83X2Fb37S0OqX9-3t_-Iu0AoJhNouselsGFjqhZB7WjWLsIs42GwzUgBc8GO8BN_6frAIh2P-miph3eg2yD8eyw"/>
</div>
</div>
</div>
</section>
<!-- Trust Bar -->
<section class="py-12 border-y border-outline-variant bg-surface-container-lowest">
<div class="container max-w-container-max-width mx-auto px-margin-desktop">
<p class="text-center font-label-sm text-label-sm text-on-surface-variant mb-8 uppercase tracking-widest opacity-70">Trusted by 500+ Security Teams Worldwide</p>
<div class="ticker-container overflow-hidden">
<div class="flex gap-20 animate-scroll w-[200%] grayscale opacity-40">
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">FORTUNE 500</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">TECHFLOW</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">CYBERGUARD</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">NEXUS SEC</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">CLOUDSAFE</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">FORTUNE 500</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">TECHFLOW</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">CYBERGUARD</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">NEXUS SEC</div>
<div class="flex items-center gap-2 font-headline-md text-headline-md font-bold text-on-surface">CLOUDSAFE</div>
</div>
</div>
</div>
</section>
<!-- Feature Grid -->
<section class="py-24 px-margin-desktop container max-w-container-max-width mx-auto">
<div class="text-center mb-16 space-y-4">
<h2 class="font-headline-lg text-headline-lg">The RedFox Edge</h2>
<div class="w-16 h-0.5 bg-brand-crimson mx-auto"></div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Uncompromising technology for organizations that demand elite security posture.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="matte-card p-8 rounded-sm border-t-2 border-t-brand-crimson hover:bg-surface-container-high transition-colors duration-300">
<span class="material-symbols-outlined text-brand-crimson text-4xl mb-4" data-icon="alternate_email" style="font-variation-settings: 'FILL' 0;">alternate_email</span>
<h3 class="font-headline-md text-headline-md mb-2">Adaptive Phishing Simulations</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Real-world threat scenarios that evolve based on employee interaction and current global trends.</p>
</div>
<div class="matte-card p-8 rounded-sm border-t-2 border-t-outline hover:bg-surface-container-high transition-colors duration-300">
<span class="material-symbols-outlined text-outline text-4xl mb-4" data-icon="analytics" style="font-variation-settings: 'FILL' 0;">analytics</span>
<h3 class="font-headline-md text-headline-md mb-2">Enterprise Reporting</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Drill down into department-level risk metrics with automated monthly intelligence reports.</p>
</div>
<div class="matte-card p-8 rounded-sm border-t-2 border-t-brand-crimson hover:bg-surface-container-high transition-colors duration-300">
<span class="material-symbols-outlined text-brand-crimson text-4xl mb-4" data-icon="verified_user" style="font-variation-settings: 'FILL' 0;">verified_user</span>
<h3 class="font-headline-md text-headline-md mb-2">Compliance Mastery</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Automate ISO 27001, SOC2, and GDPR training pathways with immutable audit trails.</p>
</div>
<div class="matte-card p-8 rounded-sm border-t-2 border-t-outline hover:bg-surface-container-high transition-colors duration-300">
<span class="material-symbols-outlined text-outline text-4xl mb-4" data-icon="psychology" style="font-variation-settings: 'FILL' 0;">psychology</span>
<h3 class="font-headline-md text-headline-md mb-2">Human Risk Scoring</h3>
<p class="font-body-md text-body-md text-on-surface-variant">AI-driven insights into employee behavior to predict vulnerabilities before they are exploited.</p>
</div>
</div>
</section>
<!-- Interactive Workflow -->
<section class="py-24 bg-surface-container-low border-y border-outline-variant">
<div class="container max-w-container-max-width mx-auto px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div class="max-w-xl">
<h2 class="font-headline-lg text-headline-lg mb-4">Fortify Your Human Firewall</h2>
<p class="font-body-md text-body-md text-on-surface-variant">A continuous cycle of testing, educating, and reinforcing security culture.</p>
</div>
<div class="flex items-center gap-2">
<span class="text-brand-crimson font-label-md">01 Deployment</span>
<div class="w-8 h-px bg-outline-variant"></div>
<span class="text-on-surface-variant font-label-md">02 Analysis</span>
<div class="w-8 h-px bg-outline-variant"></div>
<span class="text-on-surface-variant font-label-md">03 Reinforcement</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter relative">
<div class="relative p-8 matte-card-high rounded-sm group overflow-hidden">
<div class="absolute top-0 right-0 p-4 text-brand-crimson opacity-10">
<span class="font-display-lg text-display-lg">01</span>
</div>
<div class="w-12 h-12 rounded-sm bg-surface-container flex items-center justify-center mb-6 border border-outline-variant">
<span class="material-symbols-outlined text-brand-crimson text-2xl" data-icon="mail_lock">mail_lock</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Deploy Simulated Attacks</h4>
<p class="text-on-surface-variant font-body-md mb-6">Launch sophisticated spear-phishing campaigns tailored to specific job roles and seniority levels.</p>
<div class="accent-line-matte w-full"></div>
</div>
<div class="relative p-8 matte-card-high rounded-sm group overflow-hidden">
<div class="absolute top-0 right-0 p-4 text-outline opacity-10">
<span class="font-display-lg text-display-lg">02</span>
</div>
<div class="w-12 h-12 rounded-sm bg-surface-container flex items-center justify-center mb-6 border border-outline-variant">
<span class="material-symbols-outlined text-outline text-2xl" data-icon="radar">radar</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Identify Vulnerabilities</h4>
<p class="text-on-surface-variant font-body-md mb-6">Track clicks, credential entry, and data disclosure in real-time with anonymous benchmarking.</p>
<div class="accent-line-matte w-full"></div>
</div>
<div class="relative p-8 matte-card-high rounded-sm group overflow-hidden">
<div class="absolute top-0 right-0 p-4 text-brand-crimson opacity-10">
<span class="font-display-lg text-display-lg">03</span>
</div>
<div class="w-12 h-12 rounded-sm bg-surface-container flex items-center justify-center mb-6 border border-outline-variant">
<span class="material-symbols-outlined text-brand-crimson text-2xl" data-icon="shield_with_heart">shield_with_heart</span>
</div>
<h4 class="font-headline-md text-headline-md mb-4">Harden Defenses</h4>
<p class="text-on-surface-variant font-body-md mb-6">Deliver just-in-time micro-training moments that reinforce positive behavior when it matters most.</p>
<div class="accent-line-matte w-full"></div>
</div>
</div>
</div>
</section>
<!-- Pricing Section -->
<section class="py-24 px-margin-desktop container max-w-container-max-width mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg mb-4">Scalable Protection</h2>
<div class="flex items-center justify-center gap-4">
<span class="font-label-md text-on-surface">Monthly</span>
<button class="w-12 h-6 bg-surface-container-highest rounded-full relative p-1 transition-all" id="pricingToggle">
<div class="w-4 h-4 bg-brand-crimson rounded-full transform transition-transform" id="toggleKnob"></div>
</button>
<span class="font-label-md text-on-surface-variant">Yearly <span class="text-on-surface text-label-sm">(Save 20%)</span></span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
<!-- Growth Plan -->
<div class="matte-card p-10 rounded-sm relative border border-outline-variant hover:border-outline transition-colors">
<h3 class="font-headline-md text-headline-md mb-2">Growth</h3>
<p class="text-on-surface-variant mb-8">For mid-market teams needing simulation essentials.</p>
<div class="mb-8">
<span class="font-display-lg text-display-lg">$4.50</span>
<span class="text-on-surface-variant">/user/month</span>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Unlimited Phishing Tests</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Standard Content Library</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Basic Reporting Dashboards</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Active Directory Sync</span>
</li>
</ul>
<button class="w-full py-4 border border-outline text-on-surface font-label-md rounded hover:bg-surface-container-low transition-all">Get Started</button>
</div>
<!-- Enterprise Plan -->
<div class="matte-card p-10 rounded-sm relative bg-surface-container-low border-2 border-brand-crimson">
<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-crimson text-white px-4 py-0.5 rounded-sm text-label-sm font-bold uppercase tracking-widest">Most Popular</div>
<h3 class="font-headline-md text-headline-md mb-2">Enterprise</h3>
<p class="text-on-surface-variant mb-8">For global organizations requiring deep integration.</p>
<div class="mb-8">
<span class="font-display-lg text-display-lg">Custom</span>
</div>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-brand-crimson text-lg" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-body-md font-semibold">Everything in Growth +</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Deep API Integration</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Custom Brand Environments</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">Dedicated Success Manager</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-on-surface text-lg" data-icon="check">check</span>
<span class="font-body-md">SOC2/ISO Compliance Center</span>
</li>
</ul>
<button class="w-full py-4 bg-brand-crimson text-white font-label-md rounded hover:opacity-90 transition-all">Contact Sales</button>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-32 relative overflow-hidden bg-surface-container-lowest border-t border-outline-variant">
<div class="container max-w-container-max-width mx-auto px-margin-desktop text-center relative z-10">
<h2 class="font-display-lg text-display-lg mb-8">Ready to outsmart the attackers?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">Join the world's most resilient organizations in building a culture of security awareness that actually works.</p>
<div class="flex flex-col sm:flex-row justify-center gap-6">
<button class="bg-brand-crimson text-white px-12 py-5 font-label-md text-label-md rounded text-lg hover:opacity-90 transition-all">Start Your Free Pilot</button>
<button class="border border-outline text-on-surface px-12 py-5 font-label-md text-label-md rounded text-lg hover:bg-surface-container-low transition-all">Download Platform Overview</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-start gap-gutter max-w-container-max-width mx-auto bg-surface-container-lowest border-t border-outline-variant">
<div class="space-y-6 max-w-xs">
<div class="flex items-center gap-2">
<img alt="RedFox" class="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnwuZmTsCPJXibUoiKy_QhjTNh1zegbxHNPDLmHEko39wJx7_-4D7LFVIWkypJen7M-1zHhBFvReXZ5LxUT2TPihzdczE4ixcrRMuKTq4Ym1SwLhlGCkFc9rQCH6hwIofB01-L8Rwh5_FlICqtZUx-pMLYmBmwwi5g3M7ipaYRNp2il2WEmd3EjvkLQYnZtN7NIeG1VXqUPP1JZZ7SxUb4r27l5nxGPzoyBiNN6duzYdI0asMGu90zoCVlUOtSmS_L8tGnSE9-TQs"/>
<span class="font-headline-md text-headline-md font-bold text-on-surface">RedFox</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Advanced cybersecurity awareness for the modern enterprise human layer.</p>
<div class="flex gap-4">
<div class="w-12 h-12 bg-surface-container-low border border-outline-variant rounded-sm flex items-center justify-center p-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<img alt="ISO Logo" class="h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOaPJDSt2yFNN89PsomrAT_98Epg2P_49ds_laqCYzuyEPFaAupZQh2DNJ7l9KzedFjtmDiwng1DF6EqUzOSiNI22zpIBDRdH8Li3EwBE1v7ZAo14jLrbIO9RY9qT6tV7sahcV5swcUi3fAG8NKAbcKwDfLuap91FrENLSueJ4izGEjHYkdTJWqOlOfGpqS2gfU0w-UiVvKd_gqASNxz4Q4HWbpZJjlOB0Z9npt9RRJSxHlycZEw5ccF1fT-fNNWlhbgiKj-SlXZQ"/>
</div>
<div class="w-12 h-12 bg-surface-container-low border border-outline-variant rounded-sm flex items-center justify-center p-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<span class="font-bold text-[10px] text-on-surface">SOC2</span>
</div>
</div>
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div class="space-y-4">
<h5 class="font-label-md text-label-md text-on-surface">Platform</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Simulations</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Training</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Reporting</a>
</nav>
</div>
<div class="space-y-4">
<h5 class="font-label-md text-label-md text-on-surface">Company</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Us</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Careers</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Contact Us</a>
</nav>
</div>
<div class="space-y-4">
<h5 class="font-label-md text-label-md text-on-surface">Legal</h5>
<nav class="flex flex-col gap-2">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Compliance</a>
</nav>
</div>
</div>
<div class="w-full pt-12 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-label-sm text-on-surface-variant">© 2024 RedFox Cybersecurity. All rights reserved.</p>
<div class="flex gap-6">
<span class="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer" data-icon="public">public</span>
<span class="material-symbols-outlined text-outline hover:text-on-surface cursor-pointer" data-icon="share">share</span>
</div>
</div>
</footer>
<script>
    const toggle = document.getElementById('pricingToggle');
    const knob = document.getElementById('toggleKnob');
    let isYearly = false;

    toggle.addEventListener('click', () => {
        isYearly = !isYearly;
        knob.style.transform = isYearly ? 'translateX(24px)' : 'translateX(0px)';
    });
</script>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RedFox — Home" },
      { name: "description", content: "RedFox cybersecurity awareness platform — home." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}

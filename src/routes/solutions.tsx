import { createFileRoute } from "@tanstack/react-router";

const HTML = `
<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-desktop py-4 flex justify-between items-center">
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
<!-- Main Content Canvas -->
<main class="min-h-screen pt-32">
<!-- Content Area -->
<div class="max-w-[1280px] mx-auto px-margin-desktop pb-xl">
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
<div class="matte-card p-xs rounded-xl overflow-hidden" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<img alt="Gamified Training Hub Dashboard" class="w-full rounded-lg object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLsv10GOadeMsYdarFh7saY86ESKXdJw_bH7FBjLKbyTfWx-V_Xc8ORjx8sQFZtVxDrF4-1wJFCg3xJGdYzhpZRICmD3mo7bX-ZZgiv81twhwcEL42iCSAybXSpni22djkwkleCvxE7sTfPmaOpAbRtCs7bG1xIX3EbB4uvRP8PJwAy-572WpLxd7YgzjMy4OFyByx9aHIwDOMo9aTOXsTmXDdprK_MOfzsALdHpX_EFRsDCe9rziTuZPWs"/>
</div>
</div>
<!-- Feature 02: Phishing Manager -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center py-xl matte-border-b">
<div class="order-2 lg:order-1 matte-card p-xs rounded-xl overflow-hidden" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<img alt="Phishing Simulation Manager Interface" class="w-full rounded-lg object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLv8Lu8moqGMQf8uxMZ29K0bKwYikzURC8K9r48YOhFD93Qe2PoH626hHisdhdShDDj_mxUZGwO_rghjJSb7pyIzxUEl1sHmjVnVcRHYwZQA5uyGGmAFA330yHtMAt006jwqOW8jR1OIl_b7LjLBiBHJYj2HcKxg0yKpQH0uLkJTqLX2bTYckyoTgWa3Zd_HX6D4LXGlZRh0Y9PdCs3WMjrk3MK95Qc2IUqgeqhzLlMH3W7jlnwmLS63zdg"/>
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
<div class="matte-card p-xs rounded-xl overflow-hidden" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
<img alt="Audit Trail Vault Security Events Feed" class="w-full rounded-lg object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLuzt25QvYtFM7sOwUxaxpOBrfmQsl7VgVvL_vk7p3JF6hDzsGaz_W8XRBSuoJbBKdUWuAWCjm6IK-K23tRaEedRkBEY4VkH8RAX0GajZSySM26aHd_haRIgokb9rQ1owxw6El5b1tBaFxyK2yJ479BXC9ixPROrV84SPb7XYR_PnLdKuuccKdeaUHfzhPS_wmkonf9s74eBbWALPj6zqeEHVMnSHZkoVUtur8_LmFCPsZfDAIHbAn4m2g"/>
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
<footer class="bg-surface-container-lowest border-t border-outline-variant/30 py-xl px-margin-desktop">
<div class="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-xl">
<div class="max-w-xs">
<div class="flex items-center gap-xs mb-md">
<img alt="RedFox" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnwuZmTsCPJXibUoiKy_QhjTNh1zegbxHNPDLmHEko39wJx7_-4D7LFVIWkypJen7M-1zHhBFvReXZ5LxUT2TPihzdczE4ixcrRMuKTq4Ym1SwLhlGCkFc9rQCH6hwIofB01-L8Rwh5_FlICqtZUx-pMLYmBmwwi5g3M7ipaYRNp2il2WEmd3EjvkLQYnZtN7NIeG1VXqUPP1JZZ7SxUb4r27l5nxGPzoyBiNN6duzYdI0asMGu90zoCVlUOtSmS_L8tGnSE9-TQs"/>
<span class="font-headline-md text-headline-md font-bold text-white">RedFox</span>
</div>
<p class="text-on-surface-variant text-sm">Securing the human element of the modern enterprise through precision engineering and tactical awareness.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-xl">
<div>
<h6 class="text-brand-crimson font-bold text-sm mb-md uppercase tracking-widest">Product</h6>
<ul class="space-y-sm text-sm text-on-surface-variant">
<li class=""><a class="hover:text-brand-crimson transition-colors" href="#">Features</a></li>
<li class=""><a class="hover:text-brand-crimson transition-colors" href="/pricing">Pricing</a></li>
<li class=""><a class="hover:text-brand-crimson transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h6 class="text-brand-crimson font-bold text-sm mb-md uppercase tracking-widest">Company</h6>
<ul class="space-y-sm text-sm text-on-surface-variant">
<li class=""><a class="hover:text-brand-crimson transition-colors" href="#">About Us</a></li>
<li class=""><a class="hover:text-brand-crimson transition-colors" href="#">Careers</a></li>
<li class=""><a class="hover:text-brand-crimson transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h6 class="text-brand-crimson font-bold text-sm mb-md uppercase tracking-widest">Status</h6>
<div class="flex items-center gap-xs text-xs text-on-surface-variant">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                            All Systems Operational
                        </div>
</div>
</div>
</div>
<div class="max-w-[1280px] mx-auto mt-xl pt-md border-t border-outline-variant/10 text-xs text-on-surface-variant flex justify-between">
<p class="">© 2024 RedFox Security Systems. All rights reserved.</p>
<div class="flex gap-md">
<a class="hover:text-white" href="#">Privacy Policy</a>
<a class="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>
</main>
<!-- Navigation Shell Mobile -->
<div class="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-high/90 backdrop-blur-xl border-t border-outline-variant/20 flex justify-around items-center z-[70] px-sm">
<a class="flex flex-col items-center gap-unit text-brand-crimson" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shield</span>
<span class="text-[10px]">Home</span>
</a>
<a class="flex flex-col items-center gap-unit text-on-surface-variant" href="#">
<span class="material-symbols-outlined">radar</span>
<span class="text-[10px]">Threats</span>
</a>
<a class="flex flex-col items-center gap-unit text-on-surface-variant" href="#">
<span class="material-symbols-outlined">school</span>
<span class="text-[10px]">Training</span>
</a>
<a class="flex flex-col items-center gap-unit text-on-surface-variant" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="text-[10px]">Stats</span>
</a>
<a class="flex flex-col items-center gap-unit text-on-surface-variant" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px]">Profile</span>
</a>
</div>
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
    meta: [
      { title: "RedFox — Solutions" },
      { name: "description", content: "RedFox cybersecurity awareness platform — solutions." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}

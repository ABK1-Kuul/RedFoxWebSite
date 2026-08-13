import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { buildMetaTags, SITE_CONFIG } from "@/lib/seo";

const HTML = `
<main class="w-full bg-background pt-24">
<!-- Hero Section -->
<section class="px-margin-desktop py-xl">
<div class="max-w-[1280px] mx-auto">
<div class="flex flex-col md:flex-row items-end justify-between gap-gutter hairline-y pb-md mb-xl">
<div class="max-w-2xl">
<span class="inline-block px-3 py-1 bg-brand-crimson/10 border border-brand-crimson/20 text-brand-crimson text-[10px] font-bold tracking-[0.2em] mb-4">KNOWLEDGE BASE</span>
<h1 class="font-display-lg text-display-lg text-primary mb-sm">Advance your <br/>Defensive Strategy</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Access our curated library of industry-leading research, technical analysis, and real-world security transformations.</p>
</div>
<div class="flex gap-4 mb-unit">
<button class="flex items-center gap-2 px-md py-3 bg-primary text-background font-bold rounded-lg transition-all hover:opacity-90 active:scale-95">
<span class="material-symbols-outlined text-[20px]">cloud_download</span>
<span class="font-label-md text-label-md">Bulk Export</span>
</button>
</div>
</div>
<!-- Featured Section (Bento Style) -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
<!-- Featured Case Study -->
<div class="md:col-span-8 group relative overflow-hidden rounded-xl matte-card inner-glow flex flex-col md:flex-row">
<div class="md:w-1/2 p-6 flex flex-col justify-center bg-surface-container-high/40 border-r border-outline-variant/20">
  <span class="text-brand-crimson font-mono text-xs font-bold uppercase tracking-widest mb-2">RESEARCH PAPERS & REPORTS</span>
  <div class="text-3xl font-extrabold text-white mb-2">88%</div>
  <p class="text-xs text-on-surface-variant font-mono">Workforce Phishing Risk Reduction in 90 Days</p>
</div>
<div class="md:w-1/2 p-lg flex flex-col justify-center">
<div class="flex items-center gap-2 text-brand-crimson mb-xs">
<span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-label-sm text-label-sm">FEATURED CASE STUDY</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-stark-white mb-sm">Fortifying Global Fintech Infrastructure</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-md">How RedFox reduced zero-day vulnerability exposure by 74% for a Tier-1 financial institution through proactive AI-driven threat hunting.</p>
<a class="flex items-center gap-2 text-brand-crimson group-hover:gap-4 transition-all" href="#">
<span class="font-label-md text-label-md font-bold underline decoration-brand-crimson/30 underline-offset-4">Read Full Impact Report</span>
<span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>
<!-- Newsletter Inset -->
<div class="md:col-span-4 matte-card inner-glow p-lg flex flex-col justify-between border-primary/10">
<div>
<h4 class="font-title-md text-title-md text-stark-white mb-xs">Intelligence Brief</h4>
<p class="font-body-md text-body-md text-muted-gray mb-md">Get the weekly 'RedFox Alert' with decrypted threat patterns directly in your inbox.</p>
</div>
<div class="space-y-3">
<input class="w-full bg-surface-container-lowest border border-outline-variant/30 p-3 rounded text-body-md focus:ring-1 focus:ring-brand-crimson outline-none" placeholder="professional@email.com" type="email"/>
<button class="w-full py-3 border border-stark-white text-stark-white font-bold rounded-lg hover:bg-stark-white hover:text-background transition-all">Subscribe</button>
</div>
</div>
</div>
<!-- Tabs/Categories Navigation -->
<div class="flex items-center gap-8 hairline-y mb-lg overflow-x-auto no-scrollbar">
<button class="pb-4 border-b-2 border-brand-crimson text-brand-crimson font-bold px-1 whitespace-nowrap">All Resources</button>
<button class="pb-4 border-b-2 border-transparent text-muted-gray hover:text-on-surface transition-colors px-1 whitespace-nowrap">Whitepapers</button>
<button class="pb-4 border-b-2 border-transparent text-muted-gray hover:text-on-surface transition-colors px-1 whitespace-nowrap">Case Studies</button>
<button class="pb-4 border-b-2 border-transparent text-muted-gray hover:text-on-surface transition-colors px-1 whitespace-nowrap">Technical Blog</button>
</div>
<!-- Resource Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Whitepaper 1 -->
<div class="matte-card inner-glow flex flex-col group h-full">
<div class="h-28 bg-surface-container-high/60 border-b border-outline-variant/20 p-4 flex items-center justify-between">
  <span class="material-symbols-outlined text-brand-crimson text-3xl">lock</span>
  <span class="text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-crimson/10 border border-brand-crimson/30 px-2 py-1 rounded">WHITEPAPER</span>
</div>
<div class="p-md flex flex-col flex-1">
<h4 class="font-title-md text-title-md text-stark-white mb-xs group-hover:text-brand-crimson transition-colors">Quantum-Resistant Encryption Standards</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">A deep dive into NIST-approved lattice-based cryptography and the roadmap for enterprise-wide implementation by 2026.</p>
<div class="mt-auto flex items-center justify-between pt-sm border-t border-outline-variant/10">
<span class="text-[11px] text-muted-gray">14 Page PDF • 2.4MB</span>
<button class="flex items-center gap-1 text-brand-crimson hover:opacity-70 transition-opacity">
<span class="font-label-md text-label-md">Download</span>
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
<!-- Blog 1 -->
<div class="matte-card inner-glow flex flex-col group h-full">
<div class="h-28 bg-surface-container-high/60 border-b border-outline-variant/20 p-4 flex items-center justify-between">
  <span class="material-symbols-outlined text-brand-crimson text-3xl">shield</span>
  <span class="text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-crimson/10 border border-brand-crimson/30 px-2 py-1 rounded">BLOG</span>
</div>
<div class="p-md flex flex-col flex-1">
<h4 class="font-title-md text-title-md text-stark-white mb-xs group-hover:text-brand-crimson transition-colors">Zero-Trust: Beyond the Marketing Hype</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">Separating architectural reality from vendor buzzwords. How to actually segment identity-first networks in legacy environments.</p>
<div class="mt-auto flex items-center justify-between pt-sm border-t border-outline-variant/10">
<span class="text-[11px] text-muted-gray">8 min read • Dec 12, 2023</span>
<button class="flex items-center gap-1 text-brand-crimson hover:opacity-70 transition-opacity">
<span class="font-label-md text-label-md">Read More</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
</div>
<!-- Case Study 2 -->
<div class="matte-card inner-glow flex flex-col group h-full">
<div class="h-28 bg-surface-container-high/60 border-b border-outline-variant/20 p-4 flex items-center justify-between">
  <span class="material-symbols-outlined text-brand-crimson text-3xl">precision_manufacturing</span>
  <span class="text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-crimson/10 border border-brand-crimson/30 px-2 py-1 rounded">CASE STUDY</span>
</div>
<div class="p-md flex flex-col flex-1">
<h4 class="font-title-md text-title-md text-stark-white mb-xs group-hover:text-brand-crimson transition-colors">Securing IoT in Smart Manufacturing</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">A retrospective on defending 4,000 industrial sensors against specialized ransomware targeting OT infrastructure.</p>
<div class="mt-auto flex items-center justify-between pt-sm border-t border-outline-variant/10">
<span class="text-[11px] text-muted-gray">Industry: Manufacturing</span>
<button class="flex items-center gap-1 text-brand-crimson hover:opacity-70 transition-opacity">
<span class="font-label-md text-label-md">View Case</span>
<span class="material-symbols-outlined text-[18px]">description</span>
</button>
</div>
</div>
</div>
<!-- Whitepaper 2 -->
<div class="matte-card inner-glow flex flex-col group h-full">
<div class="h-28 bg-surface-container-high/60 border-b border-outline-variant/20 p-4 flex items-center justify-between">
  <span class="material-symbols-outlined text-brand-crimson text-3xl">analytics</span>
  <span class="text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-crimson/10 border border-brand-crimson/30 px-2 py-1 rounded">WHITEPAPER</span>
</div>
<div class="p-md flex flex-col flex-1">
<h4 class="font-title-md text-title-md text-stark-white mb-xs group-hover:text-brand-crimson transition-colors">The 2024 State of Malware Analysis</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">Statistical analysis of polymorphism trends in current Trojan deployments and the efficacy of signature-less detection.</p>
<div class="mt-auto flex items-center justify-between pt-sm border-t border-outline-variant/10">
<span class="text-[11px] text-muted-gray">28 Page PDF • 5.1MB</span>
<button class="flex items-center gap-1 text-brand-crimson hover:opacity-70 transition-opacity">
<span class="font-label-md text-label-md">Download</span>
<span class="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
<!-- Blog 2 -->
<div class="matte-card inner-glow flex flex-col group h-full">
<div class="h-28 bg-surface-container-high/60 border-b border-outline-variant/20 p-4 flex items-center justify-between">
  <span class="material-symbols-outlined text-brand-crimson text-3xl">psychology</span>
  <span class="text-xs font-mono font-bold text-white uppercase tracking-wider bg-brand-crimson/10 border border-brand-crimson/30 px-2 py-1 rounded">BLOG</span>
</div>
<div class="p-md flex flex-col flex-1">
<h4 class="font-title-md text-title-md text-stark-white mb-xs group-hover:text-brand-crimson transition-colors">Psychology of the Phish</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-lg line-clamp-3">Why human firewalls fail. An analysis of social engineering tactics used in recent high-profile spear-phishing campaigns.</p>
<div class="mt-auto flex items-center justify-between pt-sm border-t border-outline-variant/10">
<span class="text-[11px] text-muted-gray">12 min read • Nov 29, 2023</span>
<button class="flex items-center gap-1 text-brand-crimson hover:opacity-70 transition-opacity">
<span class="font-label-md text-label-md">Read More</span>
<span class="material-symbols-outlined text-[18px]">open_in_new</span>
</button>
</div>
</div>
</div>
<!-- CTA Card -->
<div class="bg-brand-crimson p-lg flex flex-col justify-center rounded-xl relative overflow-hidden group">
<div class="absolute -right-10 -bottom-10 opacity-10 transform rotate-12 transition-transform duration-500 group-hover:rotate-0">
<span class="material-symbols-outlined text-[240px] text-background">verified_user</span>
</div>
<h4 class="font-headline-lg text-headline-lg text-background mb-sm relative z-10">Can't find what you need?</h4>
<p class="font-body-md text-body-md text-background/80 mb-md relative z-10">Request a custom technical assessment or tailored threat report for your specific vertical.</p>
<button class="w-fit px-lg py-3 bg-background text-stark-white font-bold rounded-lg relative z-10 hover:opacity-80 transition-all">
                        Contact Intel Team
                    </button>
</div>
</div>
<!-- Footer Pagination -->
<div class="flex items-center justify-center gap-2 mt-xl py-lg hairline-y">
<button class="w-10 h-10 flex items-center justify-center rounded matte-card hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded bg-brand-crimson text-white font-bold">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded matte-card hover:bg-surface-variant transition-all">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded matte-card hover:bg-surface-variant transition-all">3</button>
<span class="px-2 text-muted-gray">...</span>
<button class="w-10 h-10 flex items-center justify-center rounded matte-card hover:bg-surface-variant transition-all">12</button>
<button class="w-10 h-10 flex items-center justify-center rounded matte-card hover:bg-surface-variant transition-all">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</section>
<!-- Footer -->
<footer class="px-margin-desktop py-lg bg-surface-container-lowest mt-xl">
<div class="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
<div class="flex items-center gap-2">
<img alt="RedFox" class="w-10 h-10 object-cover rounded" src="/logo.jpg" />
<span class="font-label-md text-label-md text-stark-white font-bold">RedFox Intelligence Hub</span>
</div>
<p class="text-[12px] text-muted-gray">© 2024 RedFox Cybersecurity. All assets are restricted under ISO 27001 compliance.</p>
<div class="flex gap-6">
<a class="text-[12px] text-muted-gray hover:text-brand-crimson transition-colors" href="#">Privacy</a>
<a class="text-[12px] text-muted-gray hover:text-brand-crimson transition-colors" href="#">Terms</a>
<a class="text-[12px] text-muted-gray hover:text-brand-crimson transition-colors" href="/contact">Contact</a>
</div>
</div>
</footer>
</main>
<script>
    document.querySelectorAll('.matte-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', \`\${x}px\`);
            card.style.setProperty('--mouse-y', \`\${y}px\`);
        });
    });
</script>
`;
export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: buildMetaTags({
      title: "Cybersecurity Awareness Research & Resources — RedFox",
      description:
        "Threat intelligence whitepapers, human risk benchmarks, phishing simulation playbooks, and cybersecurity awareness guides by RedFox security architects.",
      path: "/resources",
    }),
    links: [
      { rel: "canonical", href: `${SITE_CONFIG.domain}/resources` },
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

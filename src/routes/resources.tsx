import { createFileRoute } from "@tanstack/react-router";

const HTML = `
<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-desktop py-4 flex justify-between items-center">
<div class="flex items-center gap-2">
<img alt="RedFox" class="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnwuZmTsCPJXibUoiKy_QhjTNh1zegbxHNPDLmHEko39wJx7_-4D7LFVIWkypJen7M-1zHhBFvReXZ5LxUT2TPihzdczE4ixcrRMuKTq4Ym1SwLhlGCkFc9rQCH6hwIofB01-L8Rwh5_FlICqtZUx-pMLYmBmwwi5g3M7ipaYRNp2il2WEmd3EjvkLQYnZtN7NIeG1VXqUPP1JZZ7SxUb4r27l5nxGPzoyBiNN6duzYdI0asMGu90zoCVlUOtSmS_L8tGnSE9-TQs"/>
<span class="font-headline-md text-headline-md font-bold text-on-surface">RedFox</span>
</div>
<nav class="hidden md:flex gap-8">
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/solutions">Solutions</a>
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/platform">Platform</a>
<a class="font-label-md text-label-md text-outline hover:text-on-surface transition-colors" href="/pricing">Pricing</a>
<a class="font-label-md text-label-md text-on-surface border-b border-brand-crimson pb-1" href="/resources">Resources</a>
</nav>
<div class="flex items-center gap-4">
<a href="/contact" class="font-label-md text-label-md text-on-surface hover:text-primary transition-colors">Login</a>
<a href="/contact" class="bg-brand-crimson text-white px-6 py-2 font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all">Request Demo</a>
</div>
</header>
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
<div class="md:w-1/2 overflow-hidden h-64 md:h-auto">
<img alt="Data Center" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLsGNrJEUm7bWAo_eu2HWgWROivlaxSAgOE0n-K_k2lN5BcP6kIC9eRFTEwQq8aduFO3G4HFJVFEYBdfa0Mb6bk1BgIZD7LVePsuRlLlmg40QVV0ytJqQJ-10IYGUPNCWWpBLCJ81JuAqvyNS1o_K9WC3Vr6tg0OMtxT8Me8aSbmeda7DdifCh4LXvvL1q6kn3cf5YGtFKnHE5OR5a0qyl2l31dRuXJEeBVNvqQ-95WY9hKsR9qJwehBKMk"/>
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
<div class="h-48 relative overflow-hidden">
<img alt="Networking" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLuTJ5CfuREIuZh5mxkdU8YWst8Bcca24UiOjdhsOwqnSWGi0XQt4krX6r6ZxPIVNIrj1S4b-ysDw6YjFmEGTFCQM8Y6BPSGzaNBnVx9T-3fs3cacf9WPoOR8DbXcdLb353F8cGpu1g3Y1g5Yvxz60BhuvZicyv98BYtAjkN3MYxxlRj6Q-PwAcl5WXoUB13zi6BLEQUua8jiP3ZcNBX6mtDxH6cKKwog2bL1nOornb6dWVOpk3vKAzBlBQ"/>
<div class="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-stark-white font-bold border border-white/10">WHITEPAPER</div>
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
<div class="h-48 relative overflow-hidden">
<img alt="Code Review" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLuy_puuVYmgbQV-kHyrqX6icKd9WIvddeZfRpCgsrP5GnwD_qE3Heb5G5MkLMt-8jC0tg_kGsEAF6t0ZWI8-efSr5JdabfFekLDNfWk_CWA7EyrHtNnE-6EpQmzuT863xcDFeIj5VRI3sLBAE5WT4n3fM-8BAgEVrfuHnVPGmrPqUIxLQ-ojXxmUuomdK-0ObMuHk1MZTgtN_LGNUUE6DQtbzMv6a0I-qFCkQkOBbL3osX1orE3Q_7VIWc"/>
<div class="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-stark-white font-bold border border-white/10">BLOG</div>
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
<div class="h-48 relative overflow-hidden">
<img alt="Smart City" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLvGuelcfinKiXjZx6c7xzPdthJpcXSxicvsD5o2JYZL4FbtZjF_E82cwPD-kZIT2wRHuodcMbvdMLiFeU24jerzv-QAQbW99gDaLYhNuvzgfqIJgaW_plHM66_p1L21vuKQnrgH2c9Xes-iOMWwkVra1YlczriZbQKqsHNyJmkK5g-Mu-lUJjalreAP4zdl4OMmWoGaFK5kdG1Ms8HRspfk0fP2q94kBzkmvseKSlTUfaOrNTnos5t-YEk"/>
<div class="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-stark-white font-bold border border-white/10">CASE STUDY</div>
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
<div class="h-48 relative overflow-hidden">
<img alt="Shield Layers" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLsJjSy4CJ35yB2VBT3xnUUot4E9NnOaP58sEJ7QH8DOipnXtzVg4o6ZF3YM18wTD8NfCc_wWCD2ETB-tXMdC5Lsiw2oRMNE1CphPS8yEbt9NTCjhoCP4yLWDEHp24i-hl5YzLZyghXz-KdFoQnZva_-cM1zeDSPPZaYm7K_ObdnpznHMjjvpfbSNQ7l_yRKW75cGxoncovfDJATub948-3bLyU-S5yBEToNpydT09-BFERP14n1nybRRA"/>
<div class="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-stark-white font-bold border border-white/10">WHITEPAPER</div>
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
<div class="h-48 relative overflow-hidden">
<img alt="Hardware" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/AP1WRLvvrwSFHHIAdzBZ3qz3P88hMszYrZpbVfvCpviZPkCL5ybvwTYWLRpOC3B2k2X2XGk5lIHxXRlyrBnRWUsQQnqjvWpY1p2iyY1dyQ4bV_xvaJfBkDPLZ96DT6IP7WyKvk2And6j0Nzrv9w6fkHt0zpqOjG4nsSfNlXkztnhjnrsCoFHOBImkP4sJBtUiIIzNE5uxY2GM5svgYKzagEz_JtLJZqyPnGdA2iGgVscF7o5WiQBrJJ_K0GHNA"/>
<div class="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-stark-white font-bold border border-white/10">BLOG</div>
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
<span class="material-symbols-outlined text-brand-crimson" style="font-variation-settings: 'FILL' 1;">shield</span>
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
    meta: [
      { title: "RedFox — Resources" },
      { name: "description", content: "RedFox cybersecurity awareness platform — resources." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}

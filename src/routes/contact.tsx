import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const HTML = `
<!-- Header Navigation - Matched to SCREEN_3 -->
<main class="pt-32 max-w-full mx-auto px-margin-desktop py-xl">
<!-- Header Section -->
<header class="mb-xl max-w-2xl">
<h1 class="font-display-lg text-display-lg mb-sm">Connect with our <span class="text-primary-fixed-dim italic">Elite Security</span> Architects</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">RedFox is an enterprise cyber-resilience engine engineered by <span class="text-primary font-medium">BitLabs Technology PLC</span>. We provide direct lines for strategic integration and technical consulting.</p>
</header>
<div class="hairline-separator mb-xl"></div>
<!-- Split Layout Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<!-- Left Side: Direct Contact & Info -->
<div class="lg:col-span-5 flex flex-col gap-lg">
<section class="matte-card p-md rounded">
<span class="text-brand-crimson font-label-sm text-label-sm mb-xs block uppercase tracking-widest">PARENT ENTITY</span>
<h2 class="font-title-md text-title-md mb-xs">BitLabs Technology PLC</h2>
<p class="text-on-surface-variant mb-md">Advancing digital sovereignty through infrastructure and intelligence.</p>
<div class="flex flex-col gap-md">
<div class="flex items-center gap-md">
<div class="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-outline-variant/30 rounded">
<span class="material-symbols-outlined text-brand-crimson">mail</span>
</div>
<div>
<p class="text-label-sm font-label-sm text-on-surface-variant">GENERAL INQUIRIES</p>
<a class="text-primary hover:underline" href="mailto:info@bitlabsbuild.com">info@bitlabsbuild.com</a>
</div>
</div>
<div class="flex items-center gap-md">
<div class="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-outline-variant/30 rounded">
<span class="material-symbols-outlined text-brand-crimson">location_on</span>
</div>
<div>
<p class="text-label-sm font-label-sm text-on-surface-variant">HEADQUARTERS</p>
<p class="text-primary">BitLabs Hub, Silicon District, Level 42</p>
</div>
</div>
</div>
</section>
<div class="aspect-video rounded overflow-hidden matte-card group relative">
<div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
<img alt="Corporate architectural building reflecting BitLabs stability" class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida/AP1WRLug05c1zittp0-BcKV5kbRMEknOCtENAaG7Du23CC35yiC0VUwVfjwi10i-1YmxVSNMryLNtAZt8Fxp8DWL5XaLIBQ-AR8LaPpsimRsEzktOmyCnVcZBKevB4IXq9nqxf2Wyw1mZ8qHhVfPlBj003JRf68Bj8bH3KNIFOshdW0_Go-BqpxP5d9G4ubdQ3x8TVY4z_t9Vl-tnly0wxsCeKTbhzz6t3RV1_e3UUYD6l3kKtELhlBFNlNmAxY"/>
<div class="absolute bottom-md left-md z-20">
<p class="font-headline-lg text-headline-lg text-white font-bold tracking-tight">Vigilant Resilience.</p>
</div>
</div>
</div>
<!-- Right Side: Consultation Form -->
<div class="lg:col-span-7">
<div class="matte-card p-lg rounded relative overflow-hidden">
<!-- Decorative subtle glow -->
<div class="absolute -top-24 -right-24 w-64 h-64 bg-brand-crimson/5 blur-[100px]"></div>
<div class="relative z-10">
<h3 class="font-headline-lg text-headline-lg mb-md">Technical Consultation</h3>
<p class="text-on-surface-variant mb-xl">Schedule a session with our security analysts to map your organization's threat landscape.</p>
<form class="space-y-lg" onsubmit="event.preventDefault(); alert('Consultation Request Submitted.');">
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="space-y-xs">
<label class="text-label-sm font-label-sm text-on-surface-variant">FULL NAME</label>
<input class="w-full inner-glow-input text-on-surface py-2 focus:ring-0" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-xs">
<label class="text-label-sm font-label-sm text-on-surface-variant">WORK EMAIL</label>
<input class="w-full inner-glow-input text-on-surface py-2 focus:ring-0" placeholder="j.doe@organization.com" type="email"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="space-y-xs">
<label class="text-label-sm font-label-sm text-on-surface-variant">ORGANIZATION SIZE</label>
<select class="w-full inner-glow-input text-on-surface py-2 bg-transparent focus:ring-0 appearance-none">
<option class="bg-surface-container">1 - 50 Employees</option>
<option class="bg-surface-container">51 - 250 Employees</option>
<option class="bg-surface-container">251 - 1000 Employees</option>
<option class="bg-surface-container">1000+ Employees</option>
</select>
</div>
<div class="space-y-xs">
<label class="text-label-sm font-label-sm text-on-surface-variant">PRIMARY SECURITY GOAL</label>
<select class="w-full inner-glow-input text-on-surface py-2 bg-transparent focus:ring-0 appearance-none">
<option class="bg-surface-container">Threat Intelligence Scaling</option>
<option class="bg-surface-container">Regulatory Compliance</option>
<option class="bg-surface-container">Incident Response Automation</option>
<option class="bg-surface-container">Employee Training</option>
</select>
</div>
</div>
<div class="space-y-xs">
<label class="text-label-sm font-label-sm text-on-surface-variant">PROJECT SCOPE &amp; REQUIREMENTS</label>
<textarea class="w-full inner-glow-input text-on-surface py-2 resize-none focus:ring-0" placeholder="Briefly describe your current security infrastructure..." rows="4"></textarea>
</div>
<div class="pt-md flex flex-col md:flex-row items-center gap-md">
<button class="crimson-button w-full md:w-auto px-xl py-md rounded font-bold text-headline-sm uppercase tracking-wider transition-all active:scale-95" type="submit">
                                Secure Your Organization
                            </button>
<p class="text-label-sm font-label-sm text-on-surface-variant text-center md:text-left italic">
                                Average response time: 2 Business Hours
                            </p>
</div>
</form>
</div>
</div>
</div>
</div>
<!-- Footer Logo Cluster -->
<footer class="mt-xl pt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center opacity-60">
<div class="flex items-center gap-sm mb-md md:mb-0">
<img alt="RedFox" class="w-10 h-10 object-cover rounded" src="/logo.jpg" />
<div>
<span class="font-label-sm text-label-sm tracking-widest uppercase">Proprietary Technology of</span>
<span class="font-headline-md text-title-md font-black text-white">BitLabs</span>
</div>
</div>
<div class="flex gap-lg">
<a class="text-label-sm hover:text-brand-crimson transition-colors" href="#">PRIVACY POLICY</a>
<a class="text-label-sm hover:text-brand-crimson transition-colors" href="#">SECURITY TERMS</a>
<a class="text-label-sm hover:text-brand-crimson transition-colors" href="#">© 2024</a>
</div>
</footer>
</main>
<script>
    // Micro-interaction: Smooth focus states for inputs
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('focus', () => {
            el.parentElement.style.opacity = '1';
        });
        el.addEventListener('blur', () => {
            el.parentElement.style.opacity = '0.9';
        });
    });
</script>
`;
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "RedFox — Contact" },
      { name: "description", content: "RedFox cybersecurity awareness platform — contact." },
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

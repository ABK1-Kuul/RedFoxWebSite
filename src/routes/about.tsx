import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const HTML = `
<main class="relative min-h-screen pt-24">
<!-- Hero Section -->
<section class="relative px-margin-desktop py-xl topo-pattern">
<div class="max-w-4xl">
<p class="font-label-sm text-label-sm text-primary-fixed uppercase tracking-[0.3em] mb-sm">The Engineering Legacy</p>
<h1 class="font-display-lg text-display-lg text-primary mb-md leading-tight">
                    Vigilance Forged in the <span class="italic font-light">Highlands</span>.
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    RedFox was born from the rugged resilience of the Scottish Highlands—a landscape where survival depends on acute awareness and unwavering focus. We translate that instinctual vigilance into the world's most sophisticated cybersecurity architecture.
                </p>
</div>
<div class="mt-xl grid grid-cols-12 gap-gutter">
<div class="col-span-12 md:col-span-8 h-[400px] overflow-hidden matte-card relative group">
<img alt="Highlands landscape" class="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/AP1WRLs-HrZ1eU7baRc7hCpuWBaz9-QFofDWaX4z51bwy7-XSHGwhpaiBvE5-tv70PK1IE_QYVkh0EnMLvNrE6kvG4RbfrbYDvoPdk27PTxaje0fOQUWxEd3wy_PlEwfImqMVSZ6xU09SiDdDDV3CbdcEBxZrP0Uj7S_Qf_Dsr_OxRPy8SWCPAdCVgm1y53aUwu8MHUwooroXfrSISHOcXmZeAe24EhjTExLe3Ci55unXppIuxJC20ECjQslZQ"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div class="absolute bottom-md left-md">
<p class="font-headline-lg text-headline-lg text-stark-white">The Origin Point</p>
<p class="text-on-surface-variant">Inverness, Engineering Hub</p>
</div>
</div>
<div class="col-span-12 md:col-span-4 flex flex-col justify-between p-md matte-card">
<div class="space-y-sm">
<div class="w-12 h-[1px] bg-brand-crimson"></div>
<h3 class="font-title-md text-title-md">BitLabs Heritage</h3>
<p class="text-on-surface-variant font-body-md">
                            Engineered by BitLabs Technology PLC, RedFox leverages decades of high-integrity infrastructure experience.
                        </p>
</div>
<a class="font-label-sm text-label-sm text-brand-crimson hover:tracking-widest transition-all flex items-center gap-xs uppercase" href="#">
                        Visit BitLabs <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
</section>
<!-- Editorial Content -->
<div class="editorial-line"></div>
<section class="px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-2 gap-xl">
<div class="space-y-md">
<h2 class="font-headline-lg text-headline-lg text-primary">Our Mission</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    To provide a digital sanctuary through proactive intelligence. We believe security shouldn't be a reactive chore but a silent, omnipresent layer of protection that allows innovation to thrive without fear.
                </p>
<div class="pt-md space-y-sm">
<div class="flex items-start gap-md group">
<div class="mt-1 w-6 h-6 flex items-center justify-center border border-outline-variant group-hover:bg-brand-crimson group-hover:border-brand-crimson transition-colors">
<span class="material-symbols-outlined text-[16px] group-hover:text-white">check</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-stark-white uppercase">Proactive Hunting</p>
<p class="text-on-surface-variant text-sm">Identifying threats before they breach the perimeter.</p>
</div>
</div>
<div class="flex items-start gap-md group">
<div class="mt-1 w-6 h-6 flex items-center justify-center border border-outline-variant group-hover:bg-brand-crimson group-hover:border-brand-crimson transition-colors">
<span class="material-symbols-outlined text-[16px] group-hover:text-white">check</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-stark-white uppercase">Sovereign Resilience</p>
<p class="text-on-surface-variant text-sm">Ensuring data integrity in the most hostile environments.</p>
</div>
</div>
</div>
</div>
<div class="relative h-full min-h-[300px] matte-card p-xl flex flex-col justify-center border-l border-outline-variant/20">
<div class="absolute top-0 right-0 p-md">
<span class="text-[80px] font-black opacity-[0.03] select-none text-brand-crimson">FOX</span>
</div>
<blockquote class="relative">
<p class="font-headline-lg text-headline-lg italic font-light text-primary-fixed mb-sm">
                        "Security is not a product, it's a state of constant, quiet observation."
                    </p>
<cite class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">— Lead Architect, RedFox</cite>
</blockquote>
</div>
</section>
<!-- Bento Grid: Core Pillars -->
<section class="px-margin-desktop py-xl bg-surface-container-lowest/50">
<h2 class="font-headline-lg text-headline-lg text-primary mb-xl text-center">The Three Pillars</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Pillar 1 -->
<div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-brand-crimson">
<span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">security</span>
<h3 class="font-title-md text-title-md text-stark-white">Engineering Prowess</h3>
<p class="text-on-surface-variant text-sm">Backed by the engineering heavyweight <span class="text-brand-crimson underline cursor-pointer">BitLabs Technology PLC</span>, our code is audited for maximum performance and zero-day resistance.</p>
<div class="mt-auto h-[1px] bg-outline-variant/30"></div>
</div>
<!-- Pillar 2 -->
<div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-outline">
<span class="material-symbols-outlined text-4xl text-outline" style="font-variation-settings: 'FILL' 1;">radar</span>
<h3 class="font-title-md text-title-md text-stark-white">Highland Vigilance</h3>
<p class="text-on-surface-variant text-sm">Adaptive algorithms inspired by natural survival instincts. RedFox doesn't just watch; it anticipates patterns across the global threat landscape.</p>
<div class="mt-auto h-[1px] bg-outline-variant/30"></div>
</div>
<!-- Pillar 3 -->
<div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-2 transition-transform duration-300 border-t-2 border-t-brand-crimson">
<span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">visibility</span>
<h3 class="font-title-md text-title-md text-stark-white">Total Transparency</h3>
<p class="text-on-surface-variant text-sm">In a world of black boxes, we offer clarity. Every action, alert, and automated defense is logged with cryptographically verifiable proof.</p>
<div class="mt-auto h-[1px] bg-outline-variant/30"></div>
</div>
</div>
</section>
<!-- Engineering Heritage Section -->
<section class="px-margin-desktop py-xl">
<div class="matte-card p-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-xl relative overflow-hidden">
<div class="absolute inset-0 opacity-10 topo-pattern pointer-events-none"></div>
<div>
<h2 class="font-headline-lg text-headline-lg text-primary mb-md">Engineering Heritage</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                        RedFox is a flagship product of BitLabs Technology PLC. Our lineage includes building mission-critical systems for aerospace, finance, and global logistics. This "Powerhouse" foundation ensures that while RedFox is agile, it is built on an industrial-grade core.
                    </p>
<div class="grid grid-cols-2 gap-md">
<div>
<p class="text-3xl font-bold text-brand-crimson">150+</p>
<p class="text-xs uppercase tracking-widest text-on-surface-variant">Core Engineers</p>
</div>
<div>
<p class="text-3xl font-bold text-brand-crimson">12ms</p>
<p class="text-xs uppercase tracking-widest text-on-surface-variant">Avg Detection Speed</p>
</div>
</div>
</div>
<div class="relative rounded-lg overflow-hidden h-[350px] shadow-2xl">
<img alt="Engineering laboratory" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLu7b9D3aghE95LuKpLbPPXHQhI0izkXETjOR9LtBU88fFxXhv38LYk5WlSnT3MiCdI56NJ71cjswaGP3I8mks3xfLbaR6o2JsMN3xUpqCtyEcZKjtWIqTyQrK6HqgFsvhl5nOO1al2-E3N12xny1nW-Im2GTawy3hcCfD4OJQ2jWrxkM3V3sJhgHRSBrHpJ30TJ0UpRn3uDJXetRjV4Ue7GzcH7gd7JXfi2YN8yICH6AqYbCU9DZU4i9CU"/>
<div class="absolute inset-0 bg-brand-crimson/5 hover:bg-transparent transition-colors cursor-pointer"></div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="px-margin-desktop py-xl border-t border-outline-variant/20 bg-surface-container-lowest">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
<div>
<p class="font-headline-md text-headline-md font-black tracking-tight text-stark-white mb-xs">RedFox</p>
<p class="text-on-surface-variant text-sm">© 2024 RedFox. A subsidiary of BitLabs Technology PLC.</p>
</div>
<div class="flex gap-md">
<a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="#">Security Standards</a>
<a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="#">Contact Engineering</a>
</div>
</div>
</footer>
</main>
<script>
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.matte-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', \`\${x}px\`);
                    card.style.setProperty('--mouse-y', \`\${y}px\`);
                    
                    // Subtle light tracking effect
                    const xPercent = (x / rect.width) * 100;
                    const yPercent = (y / rect.height) * 100;
                    card.style.borderColor = \`rgba(215, 38, 56, \${0.1 + (yPercent/1000)})\`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.borderColor = '#353534';
                });
            });

            // Smooth scroll anchor behavior
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "RedFox — About" },
      { name: "description", content: "RedFox cybersecurity awareness platform — about." },
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

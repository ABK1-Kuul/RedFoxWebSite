import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import heroImage from "@/assets/redfox-hero.jpg";

const HTML = `
<main class="relative min-h-screen pt-24">
  <!-- Hero Section -->
  <section class="relative px-margin-desktop py-xl topo-pattern">
    <div class="max-w-4xl">
      <p class="font-label-sm text-label-sm text-primary-fixed uppercase tracking-[0.3em] mb-sm">About RedFox · Cybersecurity Awareness Platform</p>
      <h1 class="font-display-lg text-display-lg text-primary mb-md leading-tight">
        A cybersecurity awareness platform built for <span class="italic font-light">enterprise resilience</span>.
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        RedFox turns your workforce into your strongest line of defense. We deliver continuous training, phishing simulations, behavioral analytics, and compliance reporting in one platform — engineered for organizations where mistakes are expensive and attention is the only real defense.
      </p>
    </div>
    <div class="mt-xl grid grid-cols-12 gap-gutter">
      <div class="col-span-12 md:col-span-8 h-[400px] overflow-hidden matte-card relative group">
        <img alt="RedFox cybersecurity network defense visualization" class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="${heroImage}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
        <div class="absolute bottom-md left-md">
          <p class="font-headline-lg text-headline-lg text-stark-white">One platform. Four disciplines.</p>
          <p class="text-on-surface-variant">Training · Simulation · Analytics · Compliance</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 flex flex-col justify-between p-md matte-card">
        <div class="space-y-sm">
          <div class="w-12 h-[1px] bg-brand-crimson"></div>
          <h3 class="font-title-md text-title-md">Engineered by BitLabs</h3>
          <p class="text-on-surface-variant font-body-md">
            A specialized product of BitLabs Technology PLC — built with enterprise-grade scalability and the engineering rigor of a dedicated software studio.
          </p>
        </div>
        <a class="font-label-sm text-label-sm text-brand-crimson hover:tracking-widest transition-all flex items-center gap-xs uppercase" href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer">
          Visit BitLabs <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>

  <div class="editorial-line"></div>

  <!-- What RedFox Offers -->
  <section class="px-margin-desktop py-xl">
    <div class="max-w-3xl mb-xl">
      <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant mb-sm">What RedFox Delivers</p>
      <h2 class="font-headline-lg text-headline-lg text-primary">
        A complete human-risk management stack — not a single tool.
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-brand-crimson">
        <span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">school</span>
        <h3 class="font-title-md text-title-md text-stark-white">Continuous Training</h3>
        <p class="text-on-surface-variant text-sm">Role-based learning paths, micro-lessons, and adaptive content that keep awareness sharp year-round — not just at onboarding.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-outline">
        <span class="material-symbols-outlined text-4xl text-stark-white" style="font-variation-settings: 'FILL' 1;">phishing</span>
        <h3 class="font-title-md text-title-md text-stark-white">Phishing Simulations</h3>
        <p class="text-on-surface-variant text-sm">Realistic, localized phishing campaigns with automated remediation flows that turn every click into a teachable moment.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-outline">
        <span class="material-symbols-outlined text-4xl text-stark-white" style="font-variation-settings: 'FILL' 1;">analytics</span>
        <h3 class="font-title-md text-title-md text-stark-white">Behavioral Analytics</h3>
        <p class="text-on-surface-variant text-sm">Real-time human-risk scoring across departments, roles, and regions — so security leaders know exactly where to focus.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-brand-crimson">
        <span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">verified</span>
        <h3 class="font-title-md text-title-md text-stark-white">Compliance Reporting</h3>
        <p class="text-on-surface-variant text-sm">Audit-ready dashboards mapped to ISO 27001, NIST, GDPR, and local regulatory frameworks — exportable in one click.</p>
      </div>
    </div>
  </section>

  <div class="editorial-line"></div>

  <!-- Why RedFox / Differentiators -->
  <section class="px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
    <div class="space-y-md">
      <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant">Why Security Leaders Choose RedFox</p>
      <h2 class="font-headline-lg text-headline-lg text-primary">Built for regulated, high-trust environments.</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        RedFox isn't a generic, off-the-shelf suite. It's a discipline tuned to organizations operating under regulatory scrutiny — banking, fintech, telecom, healthcare, and public-sector institutions where a single phishing click can trigger a reportable incident.
      </p>
      <ul class="space-y-sm pt-sm">
        <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson mt-[2px]">check_circle</span><span class="text-on-surface-variant"><strong class="text-stark-white">Enterprise SSO & SCIM</strong> — provision thousands of users in minutes.</span></li>
        <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson mt-[2px]">check_circle</span><span class="text-on-surface-variant"><strong class="text-stark-white">Multi-language content</strong> — including Amharic and English.</span></li>
        <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson mt-[2px]">check_circle</span><span class="text-on-surface-variant"><strong class="text-stark-white">Data residency options</strong> — regional hosting for sovereignty requirements.</span></li>
        <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson mt-[2px]">check_circle</span><span class="text-on-surface-variant"><strong class="text-stark-white">Dedicated success engineering</strong> — not a chatbot, a named team.</span></li>
      </ul>
    </div>
    <div class="grid grid-cols-2 gap-gutter">
      <div class="matte-card p-lg">
        <p class="text-4xl font-black text-brand-crimson">85%</p>
        <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Reduction in phishing click-rates within 6 months</p>
      </div>
      <div class="matte-card p-lg">
        <p class="text-4xl font-black text-brand-crimson">3x</p>
        <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Faster incident reporting from trained employees</p>
      </div>
      <div class="matte-card p-lg">
        <p class="text-4xl font-black text-brand-crimson">100+</p>
        <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Pre-built modules across 12 risk categories</p>
      </div>
      <div class="matte-card p-lg">
        <p class="text-4xl font-black text-brand-crimson">24/7</p>
        <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Regional support with named engineers</p>
      </div>
    </div>
  </section>

  <!-- Parent Company / BitLabs Alignment -->
  <section class="px-margin-desktop py-xl">
    <div class="matte-card p-xl grid grid-cols-1 lg:grid-cols-12 gap-xl relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 topo-pattern pointer-events-none"></div>
      <div class="lg:col-span-7 relative">
        <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-brand-crimson mb-sm">A BitLabs Technology PLC Product</p>
        <h2 class="font-headline-lg text-headline-lg text-primary mb-md">A studio building intelligent digital ecosystems for the future.</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-md">
          <a href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer" class="text-brand-crimson underline underline-offset-4 hover:opacity-80">BitLabs Technology PLC</a> develops scalable enterprise systems, educational technologies, cybersecurity platforms, and digital transformation solutions — engineered to help organizations operate smarter, grow faster, and innovate confidently.
        </p>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">
          RedFox sits inside a focused product suite alongside <strong class="text-stark-white">Sinq Authoring Tool</strong> (eLearning authoring with SCORM &amp; cmi5) and <strong class="text-stark-white">Tankua</strong> (digital infrastructure for service ecosystems) — sharing the same engineering backbone, security posture, and design discipline.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div>
            <p class="text-sm font-bold text-brand-crimson uppercase tracking-wider">Enterprise</p>
            <p class="text-xs text-on-surface-variant mt-xs">Scalable systems engineered for long-term impact</p>
          </div>
          <div>
            <p class="text-sm font-bold text-brand-crimson uppercase tracking-wider">EdTech</p>
            <p class="text-xs text-on-surface-variant mt-xs">Learning ecosystems that expand access and outcomes</p>
          </div>
          <div>
            <p class="text-sm font-bold text-brand-crimson uppercase tracking-wider">Cybersecurity</p>
            <p class="text-xs text-on-surface-variant mt-xs">Awareness &amp; protection programs for digital resilience</p>
          </div>
          <div>
            <p class="text-sm font-bold text-brand-crimson uppercase tracking-wider">Cloud</p>
            <p class="text-xs text-on-surface-variant mt-xs">Cloud-native architectures modernizing operations</p>
          </div>
        </div>
      </div>
      <aside class="lg:col-span-5 relative">
        <div class="matte-card-high p-lg h-full flex flex-col justify-between bg-black/40 border border-outline-variant/40">
          <div>
            <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant mb-md">Why BitLabs</p>
            <p class="font-headline-md text-headline-md text-stark-white font-black tracking-tight mb-md">Strategic innovation. Technical depth. Scalable engineering.</p>
            <ul class="space-y-sm text-sm">
              <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson text-[18px] mt-[2px]">insights</span><span class="text-on-surface-variant"><strong class="text-stark-white">Deep industry understanding</strong> — designed for real operational realities.</span></li>
              <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson text-[18px] mt-[2px]">all_inclusive</span><span class="text-on-surface-variant"><strong class="text-stark-white">Full-cycle development</strong> — discovery, architecture, deployment, evolution.</span></li>
              <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson text-[18px] mt-[2px]">trending_up</span><span class="text-on-surface-variant"><strong class="text-stark-white">Enterprise-grade scalability</strong> — systems that grow with you.</span></li>
              <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson text-[18px] mt-[2px]">group</span><span class="text-on-surface-variant"><strong class="text-stark-white">Human-centered design</strong> — workflows that empower, not overwhelm.</span></li>
              <li class="flex gap-sm items-start"><span class="material-symbols-outlined text-brand-crimson text-[18px] mt-[2px]">handshake</span><span class="text-on-surface-variant"><strong class="text-stark-white">Long-term partnership</strong> — client success beyond initial delivery.</span></li>
            </ul>
          </div>
          <a href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer" class="mt-lg inline-flex items-center justify-between gap-sm border border-brand-crimson text-brand-crimson px-md py-sm uppercase text-label-sm tracking-widest hover:bg-brand-crimson hover:text-white transition-colors">
            <span>bitlabsbuild.com</span>
            <span class="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </div>
      </aside>
    </div>
  </section>

  <!-- CTA -->
  <section class="px-margin-desktop py-xl">
    <div class="matte-card p-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
      <div class="max-w-2xl">
        <h2 class="font-headline-lg text-headline-lg text-primary mb-sm">See RedFox in your environment.</h2>
        <p class="text-on-surface-variant font-body-md">Book a 30-minute walkthrough with our solutions team and see how RedFox fits your compliance, language, and scale requirements.</p>
      </div>
      <a href="/contact" class="inline-flex items-center gap-sm bg-brand-crimson text-white px-lg py-md uppercase text-label-sm tracking-widest hover:opacity-90 transition-opacity">
        Request a demo <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="px-margin-desktop py-xl border-t border-outline-variant/20 bg-surface-container-lowest">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
      <div>
        <p class="font-headline-md text-headline-md font-black tracking-tight text-stark-white mb-xs">RedFox</p>
        <p class="text-on-surface-variant text-sm">© 2026 RedFox — A product of <a href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer" class="text-brand-crimson hover:underline">BitLabs Technology PLC</a>.</p>
      </div>
      <div class="flex gap-md">
        <a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="#">Privacy Policy</a>
        <a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="#">Security Standards</a>
        <a class="text-on-surface-variant hover:text-brand-crimson transition-colors text-sm" href="/contact">Contact Engineering</a>
      </div>
    </div>
  </footer>
</main>
`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "RedFox — About | Cybersecurity Awareness Platform by BitLabs" },
      { name: "description", content: "RedFox is an enterprise cybersecurity awareness platform offering continuous training, phishing simulations, behavioral analytics, and compliance reporting — engineered by BitLabs Technology PLC." },
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

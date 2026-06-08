import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const HTML = `
<main class="relative min-h-screen pt-24">
  <!-- Hero Section -->
  <section class="relative px-margin-desktop py-xl topo-pattern">
    <div class="max-w-4xl">
      <p class="font-label-sm text-label-sm text-primary-fixed uppercase tracking-[0.3em] mb-sm">Our Identity · Ethiopian Highlands</p>
      <h1 class="font-display-lg text-display-lg text-primary mb-md leading-tight">
        Named for the <span class="italic font-light">RedFox</span> of the Northern Highlands.
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        High on the Bale and Simien plateaus roams the Ethiopian Wolf — the RedFox — one of the rarest, most specialized predators on earth. It thrives where the air is thin and the terrain unforgiving, surviving through agility, sharp awareness, endurance, and a deep adaptation to a singular environment. We built our cybersecurity awareness platform with the same instincts.
      </p>
    </div>
    <div class="mt-xl grid grid-cols-12 gap-gutter">
      <div class="col-span-12 md:col-span-8 h-[400px] overflow-hidden matte-card relative group">
        <img alt="Ethiopian Highlands at altitude" class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1600&q=80"/>
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
        <div class="absolute bottom-md left-md">
          <p class="font-headline-lg text-headline-lg text-stark-white">Bale Mountains, Ethiopia</p>
          <p class="text-on-surface-variant">Origin of the RedFox metaphor</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 flex flex-col justify-between p-md matte-card">
        <div class="space-y-sm">
          <div class="w-12 h-[1px] bg-brand-crimson"></div>
          <h3 class="font-title-md text-title-md">Engineered by BitLabs</h3>
          <p class="text-on-surface-variant font-body-md">
            A specialized product of BitLabs Technology PLC — a studio dedicated to building intelligent digital ecosystems for organizations that operate under pressure.
          </p>
        </div>
        <a class="font-label-sm text-label-sm text-brand-crimson hover:tracking-widest transition-all flex items-center gap-xs uppercase" href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer">
          Visit BitLabs <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>

  <div class="editorial-line"></div>

  <!-- Metaphor Pillars -->
  <section class="px-margin-desktop py-xl">
    <div class="max-w-3xl mb-xl">
      <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant mb-sm">Four Instincts. One Platform.</p>
      <h2 class="font-headline-lg text-headline-lg text-primary">
        What we learned from a wolf that lives above 3,000 metres.
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-brand-crimson">
        <span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">bolt</span>
        <h3 class="font-title-md text-title-md text-stark-white">Agility</h3>
        <p class="text-on-surface-variant text-sm">Threats move in seconds. Our detection, response, and training loops move faster — without bureaucracy slowing the chase.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-outline">
        <span class="material-symbols-outlined text-4xl text-stark-white" style="font-variation-settings: 'FILL' 1;">visibility</span>
        <h3 class="font-title-md text-title-md text-stark-white">Sharp Awareness</h3>
        <p class="text-on-surface-variant text-sm">We turn employees into sensors. Continuous awareness programs sharpen the human perimeter — the most exploited surface in modern attacks.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-outline">
        <span class="material-symbols-outlined text-4xl text-stark-white" style="font-variation-settings: 'FILL' 1;">timer</span>
        <h3 class="font-title-md text-title-md text-stark-white">Endurance</h3>
        <p class="text-on-surface-variant text-sm">Security is a posture, not a campaign. Our programs are designed to sustain vigilance for years, not quarters.</p>
      </div>
      <div class="matte-card p-lg flex flex-col gap-md hover:-translate-y-1 transition-transform duration-300 border-t-2 border-t-brand-crimson">
        <span class="material-symbols-outlined text-4xl text-brand-crimson" style="font-variation-settings: 'FILL' 1;">hub</span>
        <h3 class="font-title-md text-title-md text-stark-white">Deep Adaptation</h3>
        <p class="text-on-surface-variant text-sm">Every organization has its own altitude. We tune controls, training, and reporting to your regulatory, linguistic, and operational reality.</p>
      </div>
    </div>
  </section>

  <div class="editorial-line"></div>

  <!-- Quote / Editorial -->
  <section class="px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
    <div class="space-y-md">
      <h2 class="font-headline-lg text-headline-lg text-primary">Why a Highland Predator?</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        The Ethiopian RedFox isn't a generalist. It survives by knowing one terrain better than anything else in it. That is the posture we wanted for a cybersecurity awareness platform: not a broad, off-the-shelf suite, but a discipline tuned to high-stakes digital environments where mistakes are expensive and attention is the only real defense.
      </p>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        The RedFox is also endemic — found nowhere else on the planet. That uniqueness is the standard we hold ourselves to: a security culture that belongs to your organization, not borrowed from someone else's playbook.
      </p>
    </div>
    <div class="relative h-full min-h-[320px] matte-card p-xl flex flex-col justify-center">
      <div class="absolute top-0 right-0 p-md">
        <span class="text-[80px] font-black opacity-[0.04] select-none text-brand-crimson">FOX</span>
      </div>
      <blockquote class="relative">
        <p class="font-headline-lg text-headline-lg italic font-light text-primary-fixed mb-md">
          "We didn't want a mascot. We wanted a discipline. The RedFox earns its territory through awareness — and so does every organization we protect."
        </p>
        <cite class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">— Founding Team, RedFox</cite>
      </blockquote>
    </div>
  </section>

  <!-- Parent Company / BitLabs Alignment -->
  <section class="px-margin-desktop py-xl">
    <div class="matte-card p-xl grid grid-cols-1 lg:grid-cols-12 gap-xl relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 topo-pattern pointer-events-none"></div>
      <div class="lg:col-span-7 relative">
        <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-brand-crimson mb-sm">From the Studio of BitLabs Technology PLC</p>
        <h2 class="font-headline-lg text-headline-lg text-primary mb-md">Built inside an engineering company that builds intelligent digital ecosystems.</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-md">
          RedFox is engineered by <a href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer" class="text-brand-crimson underline underline-offset-4 hover:opacity-80">BitLabs Technology PLC</a> — a software studio whose mandate is to simplify complexity for institutions operating in regulated, high-trust environments. RedFox extends that mandate into the security domain: turning cybersecurity awareness into a continuous, measurable program that strengthens digital resilience.
        </p>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">
          What you get is a platform shaped by enterprise-grade scalability, human-centered design, and the same engineering rigor BitLabs brings to every system it ships.
        </p>
        <div class="grid grid-cols-3 gap-md">
          <div>
            <p class="text-2xl font-bold text-brand-crimson">PLC</p>
            <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Parent Company</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-brand-crimson">Endemic</p>
            <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Local DNA</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-brand-crimson">Enterprise</p>
            <p class="text-xs uppercase tracking-widest text-on-surface-variant mt-xs">Grade Engineering</p>
          </div>
        </div>
      </div>
      <aside class="lg:col-span-5 relative">
        <div class="matte-card-high p-lg h-full flex flex-col justify-between bg-black/40 border border-outline-variant/40">
          <div>
            <p class="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant mb-md">Built By</p>
            <p class="font-headline-md text-headline-md text-stark-white font-black tracking-tight mb-sm">BitLabs Technology PLC</p>
            <p class="text-on-surface-variant text-sm mb-lg">
              Building intelligent digital ecosystems — simplifying complexity, and engineering cybersecurity awareness programs that strengthen organizational digital resilience.
            </p>
            <div class="space-y-xs text-sm">
              <div class="flex justify-between border-b border-outline-variant/30 py-xs">
                <span class="text-on-surface-variant">Discipline</span>
                <span class="text-stark-white">Software Engineering</span>
              </div>
              <div class="flex justify-between border-b border-outline-variant/30 py-xs">
                <span class="text-on-surface-variant">Scale</span>
                <span class="text-stark-white">Enterprise-grade</span>
              </div>
              <div class="flex justify-between border-b border-outline-variant/30 py-xs">
                <span class="text-on-surface-variant">Method</span>
                <span class="text-stark-white">Human-centered design</span>
              </div>
            </div>
          </div>
          <a href="https://bitlabsbuild.com/" target="_blank" rel="noopener noreferrer" class="mt-lg inline-flex items-center justify-between gap-sm border border-brand-crimson text-brand-crimson px-md py-sm uppercase text-label-sm tracking-widest hover:bg-brand-crimson hover:text-white transition-colors">
            <span>bitlabsbuild.com</span>
            <span class="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </div>
      </aside>
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
      { title: "RedFox — About | Engineered by BitLabs Technology PLC" },
      { name: "description", content: "RedFox is a cybersecurity awareness platform inspired by the Ethiopian RedFox of the northern highlands, engineered by BitLabs Technology PLC." },
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

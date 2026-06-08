import { createFileRoute } from "@tanstack/react-router";

const HTML = `\`\`\`html

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed": "#e4e2e1",
                        "primary-fixed": "#e2e2e2",
                        "on-surface": "#e5e2e1",
                        "tertiary": "#ffffff",
                        "surface-container-low": "#1c1b1b",
                        "surface-container": "#201f1f",
                        "on-background": "#e5e2e1",
                        "tertiary-container": "#e4e2e1",
                        "on-tertiary": "#303030",
                        "on-primary-container": "#636565",
                        "surface-container-highest": "#353534",
                        "on-primary-fixed": "#1a1c1c",
                        "secondary-fixed-dim": "#c7c6c6",
                        "on-primary": "#2f3131",
                        "primary": "#ffffff",
                        "on-secondary-fixed-variant": "#464747",
                        "error-container": "#93000a",
                        "on-tertiary-container": "#656464",
                        "on-secondary-fixed": "#1a1c1c",
                        "on-error-container": "#ffdad6",
                        "background": "#131313",
                        "surface-container-lowest": "#0e0e0e",
                        "inverse-on-surface": "#313030",
                        "surface-bright": "#393939",
                        "on-secondary-container": "#b8b8b8",
                        "on-tertiary-fixed-variant": "#474747",
                        "surface-tint": "#c6c6c7",
                        "inverse-surface": "#e5e2e1",
                        "error": "#ffb4ab",
                        "surface": "#131313",
                        "surface-container-high": "#2a2a2a",
                        "outline-variant": "#444748",
                        "on-tertiary-fixed": "#1b1c1c",
                        "secondary-fixed": "#e3e2e2",
                        "on-secondary": "#2f3131",
                        "on-primary-fixed-variant": "#454747",
                        "secondary": "#c7c6c6",
                        "on-surface-variant": "#c4c7c8",
                        "tertiary-fixed-dim": "#c8c6c6",
                        "inverse-primary": "#5d5f5f",
                        "surface-dim": "#131313",
                        "on-error": "#690005",
                        "surface-variant": "#353534",
                        "secondary-container": "#484949",
                        "outline": "#8e9192",
                        "primary-fixed-dim": "#c6c6c7",
                        "primary-container": "#e2e2e2",
                        "stark-white": "#F2F2F2",
                        "muted-gray": "#8e9192",
                        "surface-slate": "#1c1b1b",
                        "brand-crimson": "#d72638"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "2.5rem",
                        "unit": "4px",
                        "sm": "1rem",
                        "margin-desktop": "64px",
                        "gutter": "24px",
                        "xs": "0.5rem",
                        "md": "1.5rem",
                        "margin-mobile": "20px",
                        "xl": "4rem",
                        "container-max-width": "1440px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Sora"],
                        "title-md": ["Sora"],
                        "label-sm": ["Sora"],
                        "display-lg": ["Sora"],
                        "body-lg": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "body-md": ["Sora"],
                        "label-md": ["Sora"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                        "title-md": ["20px", {"lineHeight": "1.4", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "300"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "1.2", "fontWeight": "500"}],
                        "body-md": ["14px", {"lineHeight": "1.6", "fontWeight": "300"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .matte-card {
            background-color: #1c1b1b;
            border: 1px solid #353534;
        }
        .glow-hover:hover {
            border-color: #d72638;
            transition: border-color 0.3s ease;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #131313; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .matte-grid {
            background-image: 
                linear-gradient(rgba(229, 226, 225, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(229, 226, 225, 0.03) 1px, transparent 1px);
            background-size: 48px 48px;
        }
    </style>
<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-desktop py-4 flex justify-between items-center max-w-container-max-width mx-auto left-1/2 -translate-x-1/2">
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
<main class="min-h-screen w-full pt-32 pb-xl">
<!-- Header Section -->
<section class="max-w-5xl mx-auto mb-xl text-center px-margin-mobile">
<span class="font-label-sm text-label-sm text-brand-crimson tracking-widest uppercase mb-sm inline-block">Transparent Models</span>
<h2 class="font-display-lg text-display-lg text-primary mb-md">Cybersecurity Scaled to Your Ambition</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                No hidden fees. No complicated modules. Just powerful, automated resilience for teams that refuse to compromise.
            </p>
</section>
<!-- Pricing Grid -->
<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter mb-xl px-margin-mobile md:px-0">
<!-- Growth Tier -->
<div class="matte-card p-lg flex flex-col glow-hover group relative overflow-hidden">
<div class="mb-md">
<h3 class="font-headline-lg text-headline-lg text-stark-white mb-xs">Growth</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Precision security for rapidly scaling mid-market enterprises.</p>
</div>
<div class="mb-lg border-b border-outline-variant/20 pb-md">
<span class="font-display-lg text-display-lg text-primary">$2,450</span>
<span class="text-muted-gray font-label-sm text-label-sm">/ MONTH</span>
</div>
<div class="flex-1 space-y-md mb-xl">
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md">check_circle</span>
<p class="font-body-md text-body-md">Up to 250 Endpoints monitored 24/7</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md">check_circle</span>
<p class="font-body-md text-body-md">Advanced Threat Intelligence Feed</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md">check_circle</span>
<p class="font-body-md text-body-md">Automated Compliance Reporting (SOC2/GDPR)</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md">check_circle</span>
<p class="font-body-md text-body-md">Cloud Infrastructure Scanning</p>
</div>
<div class="flex items-start space-x-3 opacity-40">
<span class="material-symbols-outlined text-md">circle</span>
<p class="font-body-md text-body-md">Dedicated Security Architect</p>
</div>
</div>
<button class="w-full bg-stark-white text-background py-md font-label-sm text-label-sm uppercase tracking-widest hover:bg-brand-crimson hover:text-white transition-all">
                    Start Free Trial
                </button>
</div>
<!-- Enterprise Tier -->
<div class="matte-card p-lg flex flex-col glow-hover border-brand-crimson relative">
<div class="absolute top-0 right-0 bg-brand-crimson text-white px-md py-xs font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    MOST POPULAR
                </div>
<div class="mb-md">
<h3 class="font-headline-lg text-headline-lg text-primary mb-xs">Enterprise</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Global-scale resilience with custom infrastructure hooks.</p>
</div>
<div class="mb-lg border-b border-outline-variant/20 pb-md">
<span class="font-display-lg text-display-lg text-primary">Custom</span>
<span class="text-muted-gray font-label-sm text-label-sm">ANNUAL BILLING</span>
</div>
<div class="flex-1 space-y-md mb-xl">
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md" style="font-variation-settings: 'FILL' 1;">verified</span>
<p class="font-body-md text-body-md">Unlimited Endpoints &amp; Global Clusters</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md" style="font-variation-settings: 'FILL' 1;">verified</span>
<p class="font-body-md text-body-md">Zero-Trust Network Access (ZTNA) Integration</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md" style="font-variation-settings: 'FILL' 1;">verified</span>
<p class="font-body-md text-body-md">Custom SIEM/SOAR API Endpoints</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md" style="font-variation-settings: 'FILL' 1;">verified</span>
<p class="font-body-md text-body-md">Dedicated Security Architect (24/7)</p>
</div>
<div class="flex items-start space-x-3">
<span class="material-symbols-outlined text-brand-crimson text-md" style="font-variation-settings: 'FILL' 1;">verified</span>
<p class="font-body-md text-body-md">Whitelabel Internal Training Modules</p>
</div>
</div>
<button class="w-full bg-brand-crimson text-white py-md font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all">
                    Contact Sales
                </button>
</div>
</div>
<!-- Section Separator Line -->
<div class="w-full h-px bg-white/5 my-xl max-w-6xl mx-auto px-margin-mobile"></div>
<!-- FAQ Section -->
<section class="max-w-4xl mx-auto px-margin-mobile">
<h3 class="font-headline-lg text-headline-lg text-primary mb-xl text-center">Frequently Asked Questions</h3>
<div class="space-y-sm">
<!-- FAQ Item 1 -->
<div class="matte-card overflow-hidden transition-all duration-300">
<button class="w-full flex items-center justify-between p-md hover:bg-surface-variant/30 text-left" onclick="toggleFaq(this)">
<span class="font-title-md text-title-md">How does RedFox handle data privacy and GDPR?</span>
<span class="material-symbols-outlined transform transition-transform duration-300">expand_more</span>
</button>
<div class="max-h-0 overflow-hidden transition-all duration-300 px-md bg-surface-container-lowest/50">
<p class="py-md text-on-surface-variant font-body-md text-body-md">
                            RedFox is built with a "Privacy by Design" architecture. We utilize local-first data processing where possible and encrypt all telemetry at rest using AES-256-GCM. We never store personal identifiable information (PII) of your end-users unless explicitly required for compliance modules.
                        </p>
</div>
</div>
<!-- FAQ Item 2 -->
<div class="matte-card overflow-hidden transition-all duration-300">
<button class="w-full flex items-center justify-between p-md hover:bg-surface-variant/30 text-left" onclick="toggleFaq(this)">
<span class="font-title-md text-title-md">Can we switch from Growth to Enterprise mid-contract?</span>
<span class="material-symbols-outlined transform transition-transform duration-300">expand_more</span>
</button>
<div class="max-h-0 overflow-hidden transition-all duration-300 px-md bg-surface-container-lowest/50">
<p class="py-md text-on-surface-variant font-body-md text-body-md">
                            Absolutely. Scaling is part of the growth process. You can upgrade your tier at any time through the RedFox dashboard. Credits for any remaining time on your Growth plan will be applied pro-rata to your new Enterprise agreement.
                        </p>
</div>
</div>
<!-- FAQ Item 3 -->
<div class="matte-card overflow-hidden transition-all duration-300">
<button class="w-full flex items-center justify-between p-md hover:bg-surface-variant/30 text-left" onclick="toggleFaq(this)">
<span class="font-title-md text-title-md">Is the automated compliance reporting auditor-ready?</span>
<span class="material-symbols-outlined transform transition-transform duration-300">expand_more</span>
</button>
<div class="max-h-0 overflow-hidden transition-all duration-300 px-md bg-surface-container-lowest/50">
<p class="py-md text-on-surface-variant font-body-md text-body-md">
                            Yes. Our reports are formatted specifically for common frameworks like SOC2 Type II, HIPAA, and GDPR. We provide a full audit trail of all security events and remediation steps taken, which significantly reduces the time spent in manual evidence collection during audit periods.
                        </p>
</div>
</div>
</div>
</section>
<!-- Trust Image Section -->
<section class="mt-xl max-w-6xl mx-auto px-margin-mobile">
<div class="relative h-64 w-full matte-card overflow-hidden border-outline-variant">
<img alt="Server Security" class="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale" data-alt="A macro photography shot of a high-tech server room with glowing blue led lights on hardware racks. The image is captured in a minimalist style with a deep black background and sharp focus on the matte metallic textures of the servers. The lighting is cold and clinical, evoking a sense of high-security data protection and advanced technology in a professional environment." src="https://lh3.googleusercontent.com/aida/AP1WRLufx4tVP-_904svuQtro2RdWZi_bcJMt6NlgoxrSgFx2cV-2kAMI0HdHElW7tR7bE2d2nwCNscdXXxqrHZJANDTbkvI5Vlbuw8EKQEnoZg19ZPj05xP-d1YiFO-aj2LyyOwYnFRe5InxDXf5ywoE_uMZ-fWlhn9aOzlKyNmAhdUBhqsbLmY0Fzu52m4ByhPV3PZJxCDicsM0dsRlATS3-KaxsKImonXe41g8V3N12DcTUCdECTyspWn8OQ"/>
<div class="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background via-transparent to-transparent">
<div class="text-center">
<h4 class="font-headline-lg text-headline-lg text-primary">Securing $4B+ in Global Assets</h4>
<p class="text-brand-crimson font-label-sm text-label-sm tracking-widest mt-xs font-bold">TRUSTED BY INDUSTRY TITANS</p>
</div>
</div>
</div>
</section>
</main>
<script>
        function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('span:last-child');
            
            // Close all other FAQs
            document.querySelectorAll('section div.matte-card > div').forEach(item => {
                if (item !== content && item.style.maxHeight) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.querySelector('span:last-child').style.transform = 'rotate(0deg)';
                }
            });

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        }
    </script>


\`\`\``;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "RedFox — Pricing" },
      { name: "description", content: "RedFox cybersecurity awareness platform — pricing." },
    ],
  }),
  component: Page,
});

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}

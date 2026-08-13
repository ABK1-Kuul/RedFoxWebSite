import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { buildMetaTags, getSoftwareApplicationSchema, SITE_CONFIG } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: buildMetaTags({
      title: "Transparent Enterprise Pricing — RedFox Cyber-Resilience Engine",
      description:
        "Flexible licensing tiers for enterprises of all sizes (Starter, Professional, Enterprise). Automated phishing campaigns, micro-learning, and HRI analytics.",
      path: "/pricing",
    }),
    links: [{ rel: "canonical", href: `${SITE_CONFIG.domain}/pricing` }],
    scripts: [
      {
        type: "application/ld+json",
        children: getSoftwareApplicationSchema(),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <SiteNav />
      <main className="pt-28 min-h-screen max-w-full mx-auto px-margin-desktop py-xl">
        {/* Header Section */}
        <header className="mb-xl text-center max-w-3xl mx-auto">
          <span className="text-brand-crimson font-label-sm text-label-sm uppercase tracking-widest block mb-2 font-bold">
            PREDICTABLE ENTERPRISE LICENSING
          </span>
          <h1 className="font-display-lg text-display-lg mb-sm">
            Scalable Security Investment for <span className="text-brand-crimson italic">Every Workforce</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Deploy RedFox across your entire organization with zero hidden fees, full compliance mapping, and transparent per-user tiers.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-surface-container-high p-2 rounded-full border border-outline-variant/30">
            <span
              className={`text-label-md font-bold cursor-pointer transition-colors ${
                !isYearly ? "text-white" : "text-on-surface-variant"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-surface-container-highest rounded-full p-1 relative transition-colors border border-outline-variant/40"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 bg-brand-crimson rounded-full transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span
              className={`text-label-md font-bold cursor-pointer transition-colors flex items-center gap-2 ${
                isYearly ? "text-white" : "text-on-surface-variant"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Annual Billing
              <span className="bg-brand-crimson/20 text-brand-crimson text-xs px-2 py-0.5 rounded-full border border-brand-crimson/40">
                Save 20%
              </span>
            </span>
          </div>
        </header>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-[1280px] mx-auto mb-xl items-stretch">
          {/* Starter Plan */}
          <div className="matte-card p-lg rounded-lg flex flex-col justify-between relative border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
            <div>
              <span className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-widest mb-1">
                FOR GROWING TEAMS
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold mb-2">Starter</h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Essential automated phishing drills and compliance awareness for smaller organizations.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">
                  ${isYearly ? "3.50" : "4.50"}
                </span>
                <span className="text-on-surface-variant text-sm">/ user / month</span>
              </div>
              <hr className="border-outline-variant/20 mb-6" />
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Up to 250 Active Users
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Monthly Phishing Drills
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Core Micro-Learning Library
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Basic Human Risk Score
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Standard Email Support
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="w-full text-center border border-outline text-white py-3 px-6 rounded font-bold hover:bg-surface-container-high transition-all uppercase tracking-wider text-xs"
            >
              Get Started
            </Link>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="matte-card p-lg rounded-lg flex flex-col justify-between relative border-2 border-brand-crimson/80 bg-surface-container-low/80 shadow-2xl scale-[1.02] z-10">
            <div className="absolute -top-3 right-6 bg-brand-crimson text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </div>
            <div>
              <span className="text-brand-crimson font-label-sm text-label-sm block uppercase tracking-widest mb-1 font-bold">
                ENTERPRISE RESILIENCE
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold mb-2 text-white">Professional</h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Advanced threat simulations, workflow-native learning, and 1-click incident reporting.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">
                  ${isYearly ? "6.00" : "7.50"}
                </span>
                <span className="text-on-surface-variant text-sm">/ user / month</span>
              </div>
              <hr className="border-outline-variant/20 mb-6" />
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Up to 1,000 Active Users
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Continuous Adaptive Phishing & Quishing
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Slack & Teams Workflow Integration
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  1-Click Threat Report Button & AI Triage
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Full Human Risk Index (HRI) Analytics
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  SSO & Okta / Azure AD Integration
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="w-full text-center crimson-button py-3 px-6 rounded font-bold text-white uppercase tracking-wider text-xs shadow-lg"
            >
              Start 14-Day Enterprise Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="matte-card p-lg rounded-lg flex flex-col justify-between relative border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
            <div>
              <span className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-widest mb-1">
                UNLIMITED SCALING
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold mb-2">Enterprise</h2>
              <p className="text-on-surface-variant text-sm mb-6">
                Custom threat models, dedicated threat architect, and white-glove SIEM/SOAR integrations.
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">Custom</span>
                <span className="text-on-surface-variant text-sm">annual agreement</span>
              </div>
              <hr className="border-outline-variant/20 mb-6" />
              <ul className="space-y-3 text-sm text-on-surface-variant mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Unlimited Users (1,000+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Dedicated Threat Architect & CISO Reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  Custom Threat Scenario Builder
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  SIEM / SOAR API Integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-crimson text-sm">check_circle</span>
                  24/7 Priority SLA & Custom Mapping
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="w-full text-center border border-outline text-white py-3 px-6 rounded font-bold hover:bg-surface-container-high transition-all uppercase tracking-wider text-xs"
            >
              Contact Security Architects
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <section className="max-w-[1280px] mx-auto mb-xl">
          <h3 className="font-headline-lg text-headline-lg text-center mb-md font-bold">
            Detailed Capability Comparison
          </h3>
          <div className="overflow-x-auto matte-card rounded-lg border border-outline-variant/20 p-md">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-outline-variant/30 text-on-surface">
                  <th className="py-4 px-4 font-bold">Features & Capabilities</th>
                  <th className="py-4 px-4 font-bold text-center">Starter</th>
                  <th className="py-4 px-4 font-bold text-center text-brand-crimson">Professional</th>
                  <th className="py-4 px-4 font-bold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Automated Phishing Simulations</td>
                  <td className="py-3 px-4 text-center">Monthly</td>
                  <td className="py-3 px-4 text-center text-white">Continuous Adaptive</td>
                  <td className="py-3 px-4 text-center text-white">Custom Vectors</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Micro-Learning Duration</td>
                  <td className="py-3 px-4 text-center">2 - 3 Mins</td>
                  <td className="py-3 px-4 text-center text-white">2 - 3 Mins</td>
                  <td className="py-3 px-4 text-center text-white">Custom Lengths</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Human Risk Index (HRI) Analytics</td>
                  <td className="py-3 px-4 text-center">Basic</td>
                  <td className="py-3 px-4 text-center text-white">Advanced Real-time</td>
                  <td className="py-3 px-4 text-center text-white">Executive CISO Suite</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Compliance Mapping (ISO 27001 / SOC 2)</td>
                  <td className="py-3 px-4 text-center">Standard</td>
                  <td className="py-3 px-4 text-center text-white">Full Automation</td>
                  <td className="py-3 px-4 text-center text-white">Custom Frameworks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Single Sign-On (SSO / Azure / Okta)</td>
                  <td className="py-3 px-4 text-center">—</td>
                  <td className="py-3 px-4 text-center text-green-400">Included</td>
                  <td className="py-3 px-4 text-center text-green-400">Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Dedicated Support SLA</td>
                  <td className="py-3 px-4 text-center">Standard</td>
                  <td className="py-3 px-4 text-center text-white">2 Business Hours</td>
                  <td className="py-3 px-4 text-center text-brand-crimson font-bold">24/7 Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


      </main>
    </>
  );
}

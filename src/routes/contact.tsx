import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteNav } from "@/components/SiteNav";
import { sendContactEmail, type ContactFormData } from "@/lib/contact-server";
import { buildMetaTags, SITE_CONFIG } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMetaTags({
      title: "Contact & Technical Consultation — RedFox Security Architects",
      description:
        "Connect directly with RedFox security analysts at BitLabs Technology PLC. Schedule a technical consultation to map your organization's threat landscape.",
      path: "/contact",
    }),
    links: [
      { rel: "canonical", href: `${SITE_CONFIG.domain}/contact` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    workEmail: "",
    orgSize: "1 - 50 Employees",
    primaryGoal: "Threat Intelligence Scaling",
    projectScope: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      const res = await sendContactEmail({ data: formData });
      if (res.success) {
        setSubmitStatus({
          type: "success",
          message: res.message || "Consultation request sent successfully!",
        });
        toast.success("Consultation Request Submitted", {
          description: "Our security architects will contact you within 2 business hours.",
        });
        setFormData({
          fullName: "",
          workEmail: "",
          orgSize: "1 - 50 Employees",
          primaryGoal: "Threat Intelligence Scaling",
          projectScope: "",
        });
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      const errMsg =
        err?.message || "Failed to submit request. Please check your SMTP settings in .env.";
      setSubmitStatus({
        type: "error",
        message: errMsg,
      });
      toast.error("Submission Failed", {
        description: errMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SiteNav />
        <main className="pt-24 min-h-screen max-w-[1440px] mx-auto px-6 lg:px-12 py-xl">
        {/* Header Section */}
        <header className="mb-xl max-w-2xl">
          <h1 className="font-display-lg text-display-lg mb-sm">
            Connect with our{" "}
            <span className="text-primary-fixed-dim italic">Elite Security</span> Architects
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            RedFox is an enterprise cyber-resilience engine engineered by{" "}
            <span className="text-primary font-medium">BitLabs Technology PLC</span>. We provide
            direct lines for strategic integration and technical consulting.
          </p>
        </header>

        <div className="hairline-separator mb-xl"></div>

        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Side: Direct Contact & Info */}
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <section className="matte-card p-md rounded">
              <span className="text-brand-crimson font-label-sm text-label-sm mb-xs block uppercase tracking-widest">
                PARENT ENTITY
              </span>
              <h2 className="font-title-md text-title-md mb-xs">BitLabs Technology PLC</h2>
              <p className="text-on-surface-variant mb-md">
                Advancing digital sovereignty through infrastructure and intelligence.
              </p>
              <div className="flex flex-col gap-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-outline-variant/30 rounded">
                    <span className="material-symbols-outlined text-brand-crimson">mail</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">
                      GENERAL INQUIRIES
                    </p>
                    <a className="text-primary hover:underline" href="mailto:info@bitlabsbuild.com">
                      info@bitlabsbuild.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high border border-outline-variant/30 rounded">
                    <span className="material-symbols-outlined text-brand-crimson">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">
                      HEADQUARTERS
                    </p>
                    <p className="text-primary">BitLabs Hub, Silicon District, Level 42</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="aspect-video rounded overflow-hidden matte-card p-md relative group flex flex-col justify-between border border-outline-variant/30 bg-surface-container-low/80">
              <div className="flex items-center justify-between z-20">
                <span className="bg-brand-crimson/10 border border-brand-crimson/30 text-brand-crimson text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                  SECURITY OPERATIONS CENTER
                </span>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Analyst Response Active
                </span>
              </div>
              <div className="z-20 my-4">
                <p className="text-2xl font-bold text-white tracking-tight mb-1">Vigilant Resilience.</p>
                <p className="text-xs text-on-surface-variant">Direct line to BitLabs senior threat analysts & security architects.</p>
              </div>
              <div className="flex items-center justify-between text-xs text-on-surface-variant border-t border-outline-variant/20 pt-3 z-20">
                <span>Avg Response: &lt; 2 Hours</span>
                <span className="text-white font-bold">24/7 Enterprise SLA</span>
              </div>
            </div>
          </div>

          {/* Right Side: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="matte-card p-lg rounded relative overflow-hidden">
              {/* Decorative subtle glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-crimson/5 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg mb-md">Technical Consultation</h3>
                <p className="text-on-surface-variant mb-xl">
                  Schedule a session with our security analysts to map your organization's threat
                  landscape.
                </p>

                {submitStatus && (
                  <div
                    className={`mb-lg p-md rounded border text-body-md ${
                      submitStatus.type === "success"
                        ? "bg-green-950/40 border-green-500/50 text-green-300"
                        : "bg-red-950/40 border-red-500/50 text-red-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-medium mb-1">
                      <span className="material-symbols-outlined text-lg">
                        {submitStatus.type === "success" ? "check_circle" : "error"}
                      </span>
                      <span>
                        {submitStatus.type === "success"
                          ? "Inquiry Received"
                          : "Submission Error"}
                      </span>
                    </div>
                    <p className="text-sm opacity-90">{submitStatus.message}</p>
                  </div>
                )}

                <form className="space-y-lg" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-xs">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">
                        FULL NAME *
                      </label>
                      <input
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full inner-glow-input text-on-surface py-2 focus:ring-0"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">
                        WORK EMAIL *
                      </label>
                      <input
                        required
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full inner-glow-input text-on-surface py-2 focus:ring-0"
                        placeholder="j.doe@organization.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-xs">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">
                        ORGANIZATION SIZE
                      </label>
                      <select
                        name="orgSize"
                        value={formData.orgSize}
                        onChange={handleChange}
                        className="w-full inner-glow-input text-on-surface py-2 bg-transparent focus:ring-0 appearance-none"
                      >
                        <option className="bg-surface-container" value="1 - 50 Employees">
                          1 - 50 Employees
                        </option>
                        <option className="bg-surface-container" value="51 - 250 Employees">
                          51 - 250 Employees
                        </option>
                        <option className="bg-surface-container" value="251 - 1000 Employees">
                          251 - 1000 Employees
                        </option>
                        <option className="bg-surface-container" value="1000+ Employees">
                          1000+ Employees
                        </option>
                      </select>
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-sm font-label-sm text-on-surface-variant">
                        PRIMARY SECURITY GOAL
                      </label>
                      <select
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleChange}
                        className="w-full inner-glow-input text-on-surface py-2 bg-transparent focus:ring-0 appearance-none"
                      >
                        <option className="bg-surface-container" value="Threat Intelligence Scaling">
                          Threat Intelligence Scaling
                        </option>
                        <option className="bg-surface-container" value="Regulatory Compliance">
                          Regulatory Compliance
                        </option>
                        <option className="bg-surface-container" value="Incident Response Automation">
                          Incident Response Automation
                        </option>
                        <option className="bg-surface-container" value="Employee Training">
                          Employee Training
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-xs">
                    <label className="text-label-sm font-label-sm text-on-surface-variant">
                      PROJECT SCOPE & REQUIREMENTS *
                    </label>
                    <textarea
                      required
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleChange}
                      className="w-full inner-glow-input text-on-surface py-2 resize-none focus:ring-0"
                      placeholder="Briefly describe your current security infrastructure..."
                      rows={4}
                    ></textarea>
                  </div>

                  <div className="pt-md flex flex-col md:flex-row items-center gap-md">
                    <button
                      disabled={isSubmitting}
                      className="crimson-button w-full md:w-auto px-xl py-md rounded font-bold text-headline-sm uppercase tracking-wider transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        "Secure Your Organization"
                      )}
                    </button>
                    <p className="text-label-sm font-label-sm text-on-surface-variant text-center md:text-left italic">
                      Average response time: 2 Business Hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  );
}

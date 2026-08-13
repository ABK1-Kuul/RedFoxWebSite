export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
}

export const SITE_CONFIG = {
  name: "RedFox",
  fullName: "RedFox Cybersecurity Awareness Platform",
  parentCompany: "BitLabs Technology PLC",
  domain: "https://redfox.bitlabsbuild.com",
  defaultTitle: "RedFox — Enterprise Cyber-Resilience & Human Risk Management Engine",
  defaultDescription:
    "RedFox by BitLabs Technology PLC is the leading enterprise cybersecurity awareness platform. Secure the human layer with automated phishing simulations, micro-learning, and human risk analytics.",
  defaultImage: "https://redfox.bitlabsbuild.com/logo.jpg",
  twitterHandle: "@RedFoxSec",
  contactEmail: "info@bitlabsbuild.com",
};

export function buildMetaTags({
  title,
  description,
  path = "",
  image = SITE_CONFIG.defaultImage,
  type = "website",
  keywords = [
    "cybersecurity awareness",
    "human risk management",
    "phishing simulation platform",
    "BitLabs Technology PLC",
    "RedFox security",
    "employee security training",
    "cyber resilience engine",
    "ISO 27001 compliance training",
    "human risk index",
  ],
}: SEOProps) {
  const fullUrl = `${SITE_CONFIG.domain}${path.startsWith("/") ? path : `/${path}`}`;
  const pageTitle = title.includes("RedFox") ? title : `${title} | ${SITE_CONFIG.name}`;

  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: pageTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { name: "author", content: SITE_CONFIG.parentCompany },
    { name: "publisher", content: SITE_CONFIG.parentCompany },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

    // OpenGraph Meta
    { property: "og:site_name", content: SITE_CONFIG.name },
    { property: "og:type", content: type },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: fullUrl },
    { property: "og:image", content: image },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE_CONFIG.twitterHandle },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

// JSON-LD Schema Generators for LLMO & Google Rich Snippets
export function getOrganizationSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BitLabs Technology PLC",
    "alternateName": "BitLabs",
    "url": "https://redfox.bitlabsbuild.com",
    "logo": "https://redfox.bitlabsbuild.com/logo.jpg",
    "email": SITE_CONFIG.contactEmail,
    "description": "Advancing digital sovereignty through cyber-resilience infrastructure and intelligence.",
    "brand": {
      "@type": "Brand",
      "name": "RedFox",
      "logo": "https://redfox.bitlabsbuild.com/logo.jpg",
      "slogan": "Secure the Human Layer with Vigilant Awareness."
    },
    "sameAs": [
      "https://twitter.com/RedFoxSec",
      "https://linkedin.com/company/bitlabs-technology"
    ]
  });
}

export function getSoftwareApplicationSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RedFox Cyber-Resilience Engine",
    "operatingSystem": "Web-based Platform, Cloud SaaS",
    "applicationCategory": "SecurityApplication",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "3.50",
      "highPrice": "12.00",
      "offerCount": "3"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BitLabs Technology PLC"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "featureList": [
      "Automated Phishing & Spear-Phishing Simulations",
      "Workflow-Native Micro-Learning Modules",
      "Real-time Human Risk Index (HRI)",
      "1-Click Threat Reporting with AI Triage",
      "ISO 27001, SOC 2, HIPAA Compliance Automation"
    ]
  });
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  });
}

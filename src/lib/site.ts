import { socialLinks } from "./links";

// Public URL of the site. Set NEXT_PUBLIC_SITE_URL for a custom domain;
// on Vercel it falls back to the project's production domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Structured data so search engines understand who the site is about
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mitchell Brenner",
  jobTitle: "Full-Stack Software Engineer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Wisconsin–Madison",
  },
  sameAs: [socialLinks.github, socialLinks.linkedin],
};

import type { Metadata } from "next";
import "./globals.css";
import satoshi from "../../public/fonts/satoshi";

const title = "Mitchell Brenner";
const description =
  "Full-stack software engineer in San Francisco building fast, well-crafted web and mobile products.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your custom domain; on Vercel it's inferred otherwise
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title,
  description,
  authors: [{ name: "Mitchell Brenner" }],
  openGraph: {
    title,
    description,
    siteName: "Mitchell Brenner",
    type: "website",
    locale: "en_US",
  },
  // X (Twitter) reuses the Open Graph title, description, and image above;
  // this just asks it for the large image card instead of a small thumbnail
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#EBEBEB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark");document.querySelector('meta[name="theme-color"]').setAttribute("content","#020305")}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

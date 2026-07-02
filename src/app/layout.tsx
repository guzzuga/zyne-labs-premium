import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Zyne Labs Studio — Premium AI Engineering",
  description:
    "We build premium AI-powered applications, intelligent systems, and automation solutions for forward-thinking businesses. Software & AI Development Studio based in Indonesia.",
  keywords: [
    "AI engineering",
    "software development",
    "automation",
    "machine learning",
    "web development",
    "mobile apps",
    "Indonesia",
    "premium development",
  ],
  metadataBase: new URL("https://zynelabs.studio"),
  openGraph: {
    title: "Zyne Labs Studio — Premium AI Engineering",
    description:
      "We build premium AI-powered applications, intelligent systems, and automation solutions.",
    url: "https://zynelabs.studio",
    type: "website",
    siteName: "Zyne Labs Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyne Labs Studio — Premium AI Engineering",
    description:
      "We build premium AI-powered applications, intelligent systems, and automation solutions.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body
        className="font-body"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Zyne Labs Studio",
              description:
                "Premium AI engineering studio building intelligent applications, systems, and automation for forward-thinking businesses.",
              url: "https://zynelabs.studio",
              logo: "https://zynelabs.studio/zyne-logo.png",
              image: "https://zynelabs.studio/zyne-logo.png",
              sameAs: [
                "https://github.com/guzzuga",
                "https://www.linkedin.com/in/agus-efendi-45645a18a",
                "https://instagram.com/efnd_ags",
                "https://x.com/efndags",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6285729753619",
                contactType: "sales",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Indonesian"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mojokerto",
                addressRegion: "East Java",
                addressCountry: "ID",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "25",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
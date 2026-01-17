import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

// Premium but still modern: Space Grotesk gives a "studio" feel.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300","400","500","600","700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400","500","600"]
});

export const metadata = {
  title: "Zyne Labs Studio — Portfolio",
  description: "Software & AI Development Studio — Custom apps, systems, and automation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

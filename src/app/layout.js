import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Alacrity — AI-Powered Digital Growth Agency | Scale Revenue with Intelligent Systems",
  description:
    "Alacrity is an AI-powered digital growth agency helping businesses scale revenue through high-converting websites, automation systems, and intelligent technology solutions.",
  keywords:
    "AI agency, digital growth, automation, web development, SaaS, chatbots, CRM, lead generation, conversion optimization",
  metadataBase: new URL("https://alacrity.agency"),
  openGraph: {
    title: "Alacrity — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
    type: "website",
    url: "https://alacrity.agency",
    siteName: "Alacrity",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alacrity — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}

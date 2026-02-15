import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "NexusForge — AI-Powered Digital Growth Agency | Scale Revenue with Intelligent Systems",
  description:
    "NexusForge is an AI-powered digital growth agency helping businesses scale revenue through high-converting websites, automation systems, and intelligent technology solutions.",
  keywords:
    "AI agency, digital growth, automation, web development, SaaS, chatbots, CRM, lead generation, conversion optimization",
  metadataBase: new URL("https://nexusforge.agency"),
  openGraph: {
    title: "NexusForge — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
    type: "website",
    url: "https://nexusforge.agency",
    siteName: "NexusForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusForge — AI-Powered Digital Growth Agency",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppMotionConfig } from "@/components/AppMotionConfig";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://yajatmehta.com"),
  title: "Yajat Mehta — AI, Data & Product Systems Builder",
  description:
    "Portfolio of Yajat Mehta, an AI/data builder focused on analytics, machine learning, product systems, strategy, and security-aware design.",
  openGraph: {
    title: "Yajat Mehta — Portfolio",
    description: "Data analyst. AI builder. Product strategist. Systems thinker.",
    type: "website",
    images: [
      {
        url: "/images/yajat-mehta.jpeg",
        width: 1200,
        height: 630,
        alt: "Yajat Mehta — AI, Data & Product Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yajat Mehta — AI, Data & Product Systems Builder",
    description: "Data analyst. AI builder. Product strategist. Systems thinker.",
    images: ["/images/yajat-mehta.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppMotionConfig>
          <Navbar />
          {children}
          <Footer />
        </AppMotionConfig>
      </body>
    </html>
  );
}

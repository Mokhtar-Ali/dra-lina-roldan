import type { Metadata } from "next";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linaroldan.com"),
  title: {
    default: "Dra. Lina Roldán | Integrative Dentistry",
    template: "%s | Dra. Lina Roldán",
  },
  description:
    "Integrative and minimally invasive dentistry by Dra. Lina Roldán in Colombia.",
  openGraph: {
    type: "website",
    siteName: "Dra. Lina Roldán",
    title: "Dra. Lina Roldán | Integrative Dentistry",
    description:
      "Integrative and minimally invasive dentistry by Dra. Lina Roldán in Colombia.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

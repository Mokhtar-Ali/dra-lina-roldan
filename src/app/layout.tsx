import type { Metadata } from "next";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dra. Lina Roldán | Integrative Dentistry",
    template: "%s | Dra. Lina Roldán",
  },
  description:
    "Integrative and minimally invasive dentistry by Dra. Lina Roldán in Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

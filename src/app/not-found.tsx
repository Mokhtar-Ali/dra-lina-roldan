import type { Metadata } from "next";
import { NotFoundSection } from "@/components/home/NotFoundSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundSection />
      </main>
      <Footer />
    </>
  );
}

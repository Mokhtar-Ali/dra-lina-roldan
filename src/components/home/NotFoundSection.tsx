"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { media } from "@/data/media";
import { useLanguage } from "@/providers/LanguageProvider";

export function NotFoundSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-section not-found-section">
      <div className="hero-background" aria-hidden="true">
        <Image alt="" fill loading="eager" sizes="100vw" src={media.heroBackdrop} />
      </div>

      <div className="section-shell not-found-inner">
        <RevealBlock as="p" className="not-found-code" aria-hidden="true">
          404
        </RevealBlock>
        <RevealBlock as="h1" className="hero-title not-found-title" delay={120}>
          {t({
            en: "This page doesn't exist.",
            es: "Esta página no existe.",
          })}
        </RevealBlock>
        <RevealBlock as="p" className="hero-subtitle not-found-text" delay={240}>
          {t({
            en: "The link may be broken or the page may have moved. Head back to the home page to find what you need.",
            es: "Es posible que el enlace esté roto o que la página se haya movido. Vuelve al inicio para encontrar lo que necesitas.",
          })}
        </RevealBlock>
        <RevealBlock className="hero-actions not-found-actions" delay={340}>
          <Link className="button primary" href="/">
            {t({ en: "Back to home", es: "Volver al inicio" })}
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}

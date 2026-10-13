"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { media } from "@/data/media";
import { useLanguage } from "@/providers/LanguageProvider";

export function HeroSection() {
  const { language, t } = useLanguage();
  const titleLines =
    language === "en"
      ? ["Integrative &", "Minimally Invasive", "Dentistry."]
      : ["Odontología", "Integral y Mínimamente", "Invasiva."];

  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        <Image
          alt=""
          fill
          priority
          sizes="100vw"
          src={media.heroBackdrop}
        />
      </div>

      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <RevealBlock as="p" className="hero-kicker">
            {t({
              en: "Science. Artistry. Compassion.",
              es: "Ciencia. Arte. Compasión.",
            })}
          </RevealBlock>
          <RevealText
            as="h1"
            className={`hero-title hero-title-${language}`}
            lines={titleLines}
          />
          <RevealBlock as="p" className="hero-subtitle" delay={380}>
            {t({
              en: "Modern dental care in Colombia, shaped by scientific rigor, aesthetic sensitivity, and a whole-person approach.",
              es: "Cuidado dental moderno en Colombia, guiado por rigor científico, sensibilidad estética y una mirada integral de la persona.",
            })}
          </RevealBlock>

          <RevealBlock className="hero-meta" delay={480}>
            <span>Medellín · Entrerríos</span>
            <span>15+ {t({ en: "years of experience", es: "años de experiencia" })}</span>
          </RevealBlock>

          <RevealBlock className="hero-actions" delay={560}>
            <Link className="button primary" href="#contact">
              {t({ en: "Book consultation", es: "Agendar consulta" })}
            </Link>
          </RevealBlock>
        </div>

        <RevealBlock className="hero-visual" delay={260}>
          <div className="hero-card">
            <Image
              alt={t({
                en: "Portrait of Dra. Lina Roldán",
                es: "Retrato de la Dra. Lina Roldán",
              })}
              className="hero-portrait"
              fill
              priority
              sizes="(max-width: 900px) 82vw, 38vw"
              src={media.heroPortrait}
            />
            <div className="experience-badge">
              <strong>15+</strong>
              <span>{t({ en: "Experience", es: "Experiencia" })}</span>
            </div>
          </div>
          <div className="hero-pill preserve-pill">
            {t({ en: "Preserve first", es: "Preservar primero" })}
          </div>
          <div className="hero-pill invasive-pill">
            {t({ en: "Minimally invasive", es: "Mínimamente invasiva" })}
          </div>
          <div className="hero-pill whole-pill">
            {t({ en: "Whole-person care", es: "Cuidado integral" })}
          </div>
        </RevealBlock>
      </div>

      <a
        aria-label={t({ en: "Scroll to about", es: "Ir a perfil" })}
        className="scroll-indicator"
        href="#about"
      >
        <span />
      </a>
    </section>
  );
}

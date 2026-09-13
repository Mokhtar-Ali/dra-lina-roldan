"use client";

import Image from "next/image";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { media } from "@/data/media";
import { useLanguage } from "@/providers/LanguageProvider";

const credentials = [
  {
    en: "Dentist, Universidad CES",
    es: "Odontóloga, Universidad CES",
  },
  {
    en: "Master in Dental Basic Sciences, Universidad CES",
    es: "Magíster en Ciencias Básicas Odontológicas, Universidad CES",
  },
  {
    en: "PhD in Engineering, Universidad EAFIT",
    es: "PhD en Ingeniería, Universidad EAFIT",
  },
  {
    en: "Postdoctoral Fellow, Temple University",
    es: "Postdoctoral Fellow, Temple University",
  },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-shell about-grid">
        <div className="about-media">
          <RevealBlock className="about-portrait">
            <Image
              alt={t({
                en: "Dra. Lina Roldán in a professional portrait",
                es: "Retrato profesional de la Dra. Lina Roldán",
              })}
              fill
              sizes="(max-width: 900px) 90vw, 36vw"
              src={media.heroPortrait}
            />
          </RevealBlock>
          <RevealBlock className="science-badge" delay={180}>
            <span>{t({ en: "Science-based", es: "Basada en ciencia" })}</span>
            <strong>{t({ en: "Whole-person care", es: "Cuidado integral" })}</strong>
          </RevealBlock>
        </div>

        <div className="about-copy">
          <RevealBlock as="p" className="section-eyebrow">
            {t({ en: "About Dra. Lina", es: "Sobre la Dra. Lina" })}
          </RevealBlock>
          <RevealText
            as="h2"
            className="section-title about-title"
            lines={["Dentist.", "Orthodontist.", "Researcher.", "Educator."]}
          />
          <RevealBlock as="p" className="section-lead" delay={260}>
            {t({
              en: "Her work brings clinical training, research, and patient-centered decision-making into a calm and precise dental experience.",
              es: "Su trabajo integra formación clínica, investigación y decisiones centradas en el paciente dentro de una experiencia odontológica serena y precisa.",
            })}
          </RevealBlock>
          <RevealBlock className="about-stats" delay={340}>
            <div>
              <strong>15+</strong>
              <span>{t({ en: "years", es: "años" })}</span>
            </div>
            <div>
              <strong>EN / ES</strong>
              <span>{t({ en: "care", es: "atención" })}</span>
            </div>
          </RevealBlock>
          <RevealBlock as="ul" className="credential-list" delay={420}>
            {credentials.map((credential) => (
              <li key={credential.en}>{t(credential)}</li>
            ))}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

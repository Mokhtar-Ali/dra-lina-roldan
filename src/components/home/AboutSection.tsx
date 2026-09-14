"use client";

import Image from "next/image";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { useLanguage } from "@/providers/LanguageProvider";

const aboutPortraitImage = "/media/dra-lina/services/service-restorative.jpg";
const aboutTitleSegments = [
  "Dentist.",
  "Orthodontist.",
  "Researcher.",
  "Educator.",
];

const credentials = [
  {
    number: "01",
    title: {
      en: "Dentist",
      es: "Odontóloga",
    },
    detail: {
      en: "Universidad CES",
      es: "Universidad CES",
    },
  },
  {
    number: "02",
    title: {
      en: "Orthodontics Specialist",
      es: "Especialista en Ortodoncia",
    },
    detail: {
      en: "Clinical alignment, function, and long-term planning",
      es: "Alineación clínica, función y planeación a largo plazo",
    },
  },
  {
    number: "03",
    title: {
      en: "PhD & Biomaterials Research",
      es: "PhD e investigación en biomateriales",
    },
    detail: {
      en: "PhD in Engineering, Universidad EAFIT · Postdoctoral Fellow, Temple University",
      es: "PhD en Ingeniería, Universidad EAFIT · Postdoctoral Fellow, Temple University",
    },
  },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-shell about-shell">
        <div className="about-heading">
          <RevealBlock as="p" className="section-eyebrow">
            {t({
              en: "Meet Dra. Lina Roldán",
              es: "Conoce a la Dra. Lina Roldán",
            })}
          </RevealBlock>
          <RevealBlock as="h2" className="section-title about-title">
            {aboutTitleSegments.map((segment, index) => (
              <span className="reveal-line about-title-segment" key={segment}>
                <span style={{ transitionDelay: `${index * 130}ms` }}>
                  {segment}
                </span>
              </span>
            ))}
          </RevealBlock>
        </div>

        <div className="about-grid">
          <div className="about-media">
            <RevealBlock className="about-portrait">
              <Image
                alt="Dra. Lina Roldán providing restorative dental care"
                fill
                sizes="(max-width: 900px) 90vw, 36vw"
                src={aboutPortraitImage}
              />
              <div className="about-experience-badge">
                <strong>15+</strong>
                <span>
                  {t({
                    en: "Clinical experience",
                    es: "Experiencia clínica",
                  })}
                </span>
              </div>
            </RevealBlock>
            <RevealBlock className="science-badge" delay={180}>
              <span>{t({ en: "Science-based", es: "Basada en ciencia" })}</span>
              <strong>
                {t({ en: "Whole-person care", es: "Cuidado integral" })}
              </strong>
            </RevealBlock>
          </div>

          <div className="about-copy">
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
            <div className="credential-list">
              {credentials.map((credential) => (
                <RevealBlock
                  className="credential-row"
                  delay={360 + Number(credential.number) * 90}
                  key={credential.number}
                >
                  <span>{credential.number}</span>
                  <div>
                    <h3>{t(credential.title)}</h3>
                    <p>{t(credential.detail)}</p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>

          <RevealBlock
            as="blockquote"
            className="about-philosophy"
            delay={560}
          >
            <p>
              {t({
                en: "My philosophy is simple",
                es: "Mi filosofía es simple",
              })}
            </p>
            <strong>
              {t({
                en: "Preserve what’s healthy, restore what’s necessary, and elevate what’s possible.",
                es: "Preservar lo sano, restaurar lo necesario y elevar lo posible.",
              })}
            </strong>
            <cite>Dra. Lina Roldán</cite>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

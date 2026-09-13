"use client";

import Link from "next/link";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { useLanguage } from "@/providers/LanguageProvider";

const steps = [
  {
    number: "01",
    title: { en: "Understand", es: "Comprender" },
    body: {
      en: "Listen, examine, and clarify the clinical context before choosing a direction.",
      es: "Escuchar, evaluar y aclarar el contexto clínico antes de elegir una ruta.",
    },
  },
  {
    number: "02",
    title: { en: "Preserve", es: "Preservar" },
    body: {
      en: "Prioritize conservative decisions and protect healthy structure whenever possible.",
      es: "Priorizar decisiones conservadoras y proteger estructura sana siempre que sea posible.",
    },
  },
  {
    number: "03",
    title: { en: "Align", es: "Alinear" },
    body: {
      en: "Coordinate function, aesthetics, timing, and patient priorities into one plan.",
      es: "Coordinar función, estética, tiempos y prioridades del paciente en un solo plan.",
    },
  },
  {
    number: "04",
    title: { en: "Transform", es: "Transformar" },
    body: {
      en: "Move with intention toward a smile that feels considered, natural, and personal.",
      es: "Avanzar con intención hacia una sonrisa pensada, natural y personal.",
    },
  },
];

export function CareApproachSection() {
  const { t } = useLanguage();

  return (
    <section className="care-section section-pad">
      <div className="section-shell">
        <RevealBlock as="p" className="section-eyebrow">
          {t({ en: "Care approach", es: "Enfoque de cuidado" })}
        </RevealBlock>
        <RevealText
          as="h2"
          className="section-title narrow"
          lines={[
            t({
              en: "A precise path from diagnosis to transformation.",
              es: "Una ruta precisa del diagnóstico a la transformación.",
            }),
          ]}
        />

        <div className="care-timeline">
          {steps.map((step, index) => (
            <RevealBlock
              className="care-card"
              delay={index * 120}
              key={step.number}
            >
              <span className="care-number">{step.number}</span>
              <div className="care-icon" aria-hidden="true" />
              <h3>{t(step.title)}</h3>
              <p>{t(step.body)}</p>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock className="care-cta" delay={420}>
          <p>
            {t({
              en: "A premium clinical experience begins with careful questions.",
              es: "Una experiencia clínica premium empieza con preguntas cuidadosas.",
            })}
          </p>
          <Link className="button primary" href="#contact">
            {t({ en: "Begin thoughtfully", es: "Empezar con criterio" })}
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}

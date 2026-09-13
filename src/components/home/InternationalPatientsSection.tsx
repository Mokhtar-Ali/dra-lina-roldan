"use client";

import Image from "next/image";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { media } from "@/data/media";
import { useLanguage } from "@/providers/LanguageProvider";

const journey = [
  {
    step: "01",
    title: { en: "Share context", es: "Compartir contexto" },
    body: {
      en: "Begin with records, expectations, timeline, and any questions that should shape the first consultation.",
      es: "Iniciar con registros, expectativas, tiempos y preguntas que deben orientar la primera consulta.",
    },
  },
  {
    step: "02",
    title: { en: "Review options", es: "Revisar opciones" },
    body: {
      en: "Use the initial evaluation to understand possible paths before travel decisions are finalized.",
      es: "Usar la valoración inicial para comprender rutas posibles antes de cerrar decisiones de viaje.",
    },
  },
  {
    step: "03",
    title: { en: "Coordinate visit", es: "Coordinar visita" },
    body: {
      en: "Align appointment timing, city logistics, and personal pacing for an organized visit.",
      es: "Alinear tiempos de citas, logística de ciudad y ritmo personal para una visita ordenada.",
    },
  },
  {
    step: "04",
    title: { en: "Continue care", es: "Continuar cuidado" },
    body: {
      en: "Leave with clear next steps and follow-up expectations appropriate to the plan.",
      es: "Salir con próximos pasos claros y expectativas de seguimiento acordes al plan.",
    },
  },
];

const cities = [
  {
    name: "Medellín",
    image: media.gallery[0],
    note: {
      en: "Primary care and planning city",
      es: "Ciudad principal de atención y planeación",
    },
  },
  {
    name: "Cartagena",
    image: media.gallery[6],
    note: {
      en: "Travel extension option",
      es: "Opción para extender el viaje",
    },
  },
  {
    name: "Santa Marta",
    image: media.gallery[7],
    note: {
      en: "Caribbean recovery pacing",
      es: "Ritmo caribeño para pausar",
    },
  },
];

const aliTravelFramesUrl =
  "https://alitravelframes.com/contact?utm_source=dra_lina_roldan&utm_medium=website&utm_campaign=international_patients";

export function InternationalPatientsSection() {
  const { t } = useLanguage();

  return (
    <section className="international-section section-pad" id="international">
      <div className="section-shell">
        <div className="section-split-heading">
          <div>
            <RevealBlock as="p" className="section-eyebrow">
              {t({
                en: "International patients",
                es: "Pacientes internacionales",
              })}
            </RevealBlock>
            <RevealText
              as="h2"
              className="section-title"
              lines={[
                t({
                  en: "Dental care in Colombia, coordinated with care.",
                  es: "Atención dental en Colombia, coordinada con cuidado.",
                }),
              ]}
            />
          </div>
          <RevealBlock as="p" className="section-lead" delay={200}>
            {t({
              en: "The journey is designed to keep clinical decisions, travel timing, and patient comfort in the same plan.",
              es: "El recorrido está diseñado para mantener decisiones clínicas, tiempos de viaje y comodidad del paciente en un mismo plan.",
            })}
          </RevealBlock>
        </div>

        <div className="journey-grid">
          {journey.map((item, index) => (
            <RevealBlock className="journey-card" delay={index * 110} key={item.step}>
              <span>{item.step}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.body)}</p>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock className="medical-tourism-panel" delay={260}>
          <div>
            <p className="section-eyebrow">
              {t({ en: "Medical-tourism area", es: "Área de turismo médico" })}
            </p>
            <h3>
              {t({
                en: "Plan the trip around health, timing, and rest.",
                es: "Planear el viaje alrededor de salud, tiempos y descanso.",
              })}
            </h3>
          </div>
          <div className="city-grid">
            {cities.map((city) => (
              <article className="city-card" key={city.name}>
                <Image
                  alt={t({
                    en: `${city.name} planning visual`,
                    es: `Visual de planeación para ${city.name}`,
                  })}
                  fill
                  sizes="(max-width: 700px) 86vw, 20vw"
                  src={city.image}
                />
                <div>
                  <h4>{city.name}</h4>
                  <p>{t(city.note)}</p>
                </div>
              </article>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock className="ali-card" delay={320}>
          <div>
            <span>Ali Travel Frames</span>
            <h3>
              {t({
                en: "Travel planning partner",
                es: "Aliado de planeación de viaje",
              })}
            </h3>
            <p>
              {t({
                en: "Custom itineraries and Colombia travel support can be coordinated separately through Ali Travel Frames.",
                es: "Itinerarios personalizados y apoyo de viaje en Colombia pueden coordinarse por separado con Ali Travel Frames.",
              })}
            </p>
          </div>
          <a href={aliTravelFramesUrl} rel="noopener noreferrer" target="_blank">
            {t({ en: "Plan travel", es: "Planear viaje" })}
          </a>
        </RevealBlock>
      </div>
    </section>
  );
}

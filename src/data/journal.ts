import type { JournalArticle } from "@/types";
import { media } from "./media";

export const journalArticles: JournalArticle[] = [
  {
    id: "science-artistry-compassion",
    featured: true,
    title: {
      en: "Science, artistry, and compassion in dental planning",
      es: "Ciencia, arte y compasión en la planeación dental",
    },
    excerpt: {
      en: "An editorial note on why diagnosis, aesthetics, and patient context belong in the same conversation.",
      es: "Una nota editorial sobre por qué diagnóstico, estética y contexto del paciente deben conversar juntos.",
    },
    category: {
      en: "Care Philosophy",
      es: "Filosofía de cuidado",
    },
    image: media.gallery[5],
    imageAlt: {
      en: "Dental gallery image used for journal preview",
      es: "Imagen de galería dental usada para la vista previa del journal",
    },
  },
  {
    id: "minimally-invasive",
    title: {
      en: "What minimally invasive care asks us to preserve",
      es: "Lo que el cuidado mínimamente invasivo busca preservar",
    },
    excerpt: {
      en: "A patient-friendly lens on conservative treatment decisions.",
      es: "Una mirada cercana para pacientes sobre decisiones de tratamiento conservador.",
    },
    category: {
      en: "Clinical Notes",
      es: "Notas clínicas",
    },
    image: media.gallery[6],
    imageAlt: {
      en: "Dental studio image used for article preview",
      es: "Imagen de estudio dental usada para vista previa de artículo",
    },
  },
  {
    id: "travel-planning",
    title: {
      en: "Planning dental care while traveling to Colombia",
      es: "Cómo planear atención dental al viajar a Colombia",
    },
    excerpt: {
      en: "A calm overview of timing, appointments, and coordination for visiting patients.",
      es: "Una visión serena sobre tiempos, citas y coordinación para pacientes visitantes.",
    },
    category: {
      en: "International Patients",
      es: "Pacientes internacionales",
    },
    image: media.gallery[7],
    imageAlt: {
      en: "Dental profile gallery image used for travel article",
      es: "Imagen de galería usada para artículo de viaje dental",
    },
  },
];

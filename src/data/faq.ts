import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    id: "languages",
    question: {
      en: "Is care available in English and Spanish?",
      es: "¿La atención está disponible en inglés y español?",
    },
    answer: {
      en: "Yes. Dra. Lina Roldán's public profile lists Spanish and English as available languages.",
      es: "Sí. El perfil público de la Dra. Lina Roldán indica atención en español e inglés.",
    },
  },
  {
    id: "locations",
    question: {
      en: "Which locations are highlighted for appointments?",
      es: "¿Qué ubicaciones se destacan para las citas?",
    },
    answer: {
      en: "The current site brief highlights Medellín and Entrerríos. Her public profile also references additional Antioquia locations.",
      es: "El brief actual destaca Medellín y Entrerríos. Su perfil público también referencia otras ubicaciones en Antioquia.",
    },
  },
  {
    id: "international",
    question: {
      en: "Can international patients start with a virtual step?",
      es: "¿Los pacientes internacionales pueden iniciar con un paso virtual?",
    },
    answer: {
      en: "The homepage is structured for an international-patient journey, including a virtual orientation step before in-person planning.",
      es: "La página está estructurada para una ruta de pacientes internacionales, incluyendo orientación virtual antes de la planeación presencial.",
    },
  },
  {
    id: "source-copy",
    question: {
      en: "Where will the final clinical FAQ copy live?",
      es: "¿Dónde quedará el texto clínico final de preguntas frecuentes?",
    },
    answer: {
      en: "FAQ copy is data-driven in src/data/faq.ts so exact legacy questions and answers can be swapped in without changing the component.",
      es: "El contenido de preguntas frecuentes vive en src/data/faq.ts para reemplazarlo por el texto original exacto sin cambiar el componente.",
    },
  },
];

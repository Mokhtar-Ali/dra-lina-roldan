import type { Service } from "@/types";
import { media } from "./media";

export const services: Service[] = [
  {
    id: "smile-aesthetic",
    category: {
      en: "Smile & Aesthetic Dentistry",
      es: "Odontología estética y sonrisa",
    },
    title: {
      en: "Smile design with clinical restraint",
      es: "Diseño de sonrisa con criterio clínico",
    },
    description: {
      en: "Aesthetic planning focused on proportion, color, shape, and facial harmony.",
      es: "Planificación estética enfocada en proporción, color, forma y armonía facial.",
    },
    image: media.gallery[0],
    imageAlt: {
      en: "Dental studio detail from Dra. Lina Roldán profile gallery",
      es: "Detalle de estudio dental de la galería de la Dra. Lina Roldán",
    },
    treatments: {
      en: ["Smile design", "Dental lenses", "Whitening", "Resin restorations"],
      es: ["Diseño de sonrisa", "Lentes dentales", "Aclaramiento", "Resinas"],
    },
  },
  {
    id: "orthodontics",
    category: {
      en: "Orthodontics",
      es: "Ortodoncia",
    },
    title: {
      en: "Alignment for function and aesthetics",
      es: "Alineación funcional y estética",
    },
    description: {
      en: "Orthodontic care organized around diagnostics, planning, and long-term stability.",
      es: "Cuidado ortodóncico organizado desde el diagnóstico, la planeación y la estabilidad.",
    },
    image: media.gallery[1],
    imageAlt: {
      en: "Clinical dentistry photo from Dra. Lina Roldán profile gallery",
      es: "Foto clínica dental de la galería de la Dra. Lina Roldán",
    },
    treatments: {
      en: ["Adult orthodontics", "Invisible orthodontics", "Retainers"],
      es: ["Ortodoncia para adultos", "Ortodoncia invisible", "Retenedores"],
    },
  },
  {
    id: "restorative-care",
    category: {
      en: "Restorative & Comprehensive Care",
      es: "Cuidado restaurador e integral",
    },
    title: {
      en: "Conservative restorative dentistry",
      es: "Odontología restauradora conservadora",
    },
    description: {
      en: "Restorative options considered within the full bite, smile, and oral-health context.",
      es: "Opciones restauradoras consideradas dentro del contexto de mordida, sonrisa y salud oral.",
    },
    image: media.gallery[2],
    imageAlt: {
      en: "Dental treatment planning photo from Dra. Lina Roldán profile gallery",
      es: "Foto de planeación odontológica de la galería de la Dra. Lina Roldán",
    },
    treatments: {
      en: ["Reconstructive dentistry", "Implant coordination", "Periodontal support"],
      es: ["Odontología reconstructiva", "Coordinación de implantes", "Apoyo periodontal"],
    },
  },
  {
    id: "diagnosis-prevention",
    category: {
      en: "Diagnosis & Preventive Care",
      es: "Diagnóstico y prevención",
    },
    title: {
      en: "Care begins with understanding",
      es: "El cuidado empieza por comprender",
    },
    description: {
      en: "Clinical evaluation, imaging, and prevention help clarify the next best step.",
      es: "La valoración clínica, las imágenes y la prevención ayudan a definir el siguiente paso.",
    },
    image: media.gallery[3],
    imageAlt: {
      en: "Dental consultation image from Dra. Lina Roldán profile gallery",
      es: "Imagen de consulta dental de la galería de la Dra. Lina Roldán",
    },
    treatments: {
      en: ["First consultation", "Intraoral imaging", "Preventive hygiene"],
      es: ["Consulta inicial", "Imágenes intraorales", "Higiene preventiva"],
    },
  },
  {
    id: "treatment-planning",
    category: {
      en: "Comprehensive Treatment Planning",
      es: "Planeación integral de tratamiento",
    },
    title: {
      en: "A complete view before treatment",
      es: "Una mirada completa antes de tratar",
    },
    description: {
      en: "Digital planning supports a coordinated plan for complex aesthetic and functional needs.",
      es: "La planeación digital apoya un plan coordinado para necesidades estéticas y funcionales.",
    },
    image: media.gallery[4],
    imageAlt: {
      en: "Dental planning photograph from Dra. Lina Roldán profile gallery",
      es: "Fotografía de planeación dental de la galería de la Dra. Lina Roldán",
    },
    treatments: {
      en: ["Digital planning", "Virtual review", "Specialist coordination"],
      es: ["Planeación digital", "Revisión virtual", "Coordinación con especialistas"],
    },
  },
];

"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";

const treatmentLinks = [
  { en: "Aesthetic dentistry", es: "Odontología estética" },
  { en: "Orthodontics", es: "Ortodoncia" },
  { en: "Restorative care", es: "Cuidado restaurador" },
  { en: "Treatment planning", es: "Planeación integral" },
];

const patientLinks = [
  { en: "Virtual orientation", es: "Orientación virtual" },
  { en: "Medellín", es: "Medellín" },
  { en: "Entrerríos", es: "Entrerríos" },
];

const exploreLinks = [
  { href: "/#about", label: { en: "About", es: "Perfil" } },
  { href: "/#services", label: { en: "Services", es: "Servicios" } },
  { href: "/#journal", label: { en: "Journal", es: "Journal" } },
  { href: "/#faq", label: { en: "FAQ", es: "Preguntas" } },
];

export function Footer() {
  const { language, t } = useLanguage();
  const cleopatraUrl =
    language === "en"
      ? "https://cleopatrasolutions.com/en"
      : "https://cleopatrasolutions.com/es";

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="eyebrow">
            {t({
              en: "Integrative & Minimally Invasive Dentistry",
              es: "Odontología integral y mínimamente invasiva",
            })}
          </p>
          <h2>Dra. Lina Roldán</h2>
          <p>
            {t({
              en: "Science-led dental care with an editorial, human rhythm.",
              es: "Cuidado dental guiado por ciencia, con un ritmo humano y editorial.",
            })}
          </p>
          <span>Medellín · Entrerríos</span>
          <LanguageSwitcher />
        </div>

        <div className="footer-links">
          <div>
            <h3>{t({ en: "Treatments", es: "Tratamientos" })}</h3>
            {treatmentLinks.map((item) => (
              <Link href="/#services" key={item.en}>
                {t(item)}
              </Link>
            ))}
          </div>
          <div>
            <h3>{t({ en: "Patients", es: "Pacientes" })}</h3>
            {patientLinks.map((item) => (
              <span key={item.en}>{t(item)}</span>
            ))}
          </div>
          <div>
            <h3>{t({ en: "Explore", es: "Explorar" })}</h3>
            {exploreLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {t(item.label)}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dra. Lina Roldán.{" "}
            {t({ en: "All rights reserved.", es: "Todos los derechos reservados." })}
          </p>
          <a href={cleopatraUrl} rel="noopener noreferrer" target="_blank">
            {t({
              en: "Website by Cleopatra Solutions",
              es: "Sitio web por Cleopatra Solutions",
            })}
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { href: "/", label: { en: "Home", es: "Inicio" } },
  { href: "#about", label: { en: "About", es: "Perfil" } },
  { href: "#services", label: { en: "Services", es: "Servicios" } },
  { href: "#journal", label: { en: "Journal", es: "Journal" } },
  { href: "#contact", label: { en: "Contact", es: "Contacto" } },
];

export function Header() {
  const { language, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.classList.add("nav-open");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <Link aria-label="Dra. Lina Roldán home" className="brand-mark" href="/">
        <span>Dra. Lina Roldán</span>
        <small>
          {t({
            en: "Dentist & Orthodontist",
            es: "Odontóloga & Ortodoncista",
          })}
        </small>
      </Link>

      <nav aria-label={language === "en" ? "Primary" : "Navegación principal"}>
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{t(item.label)}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <LanguageSwitcher compact />
        <Link
          className="header-cta"
          href="https://www.doctoralia.co/perfil/lina-maria-roldan-lopera"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t({ en: "Book Consultation", es: "Agendar consulta" })}
        </Link>
        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>

      <div
        aria-hidden={!isMenuOpen}
        className={isMenuOpen ? "mobile-nav is-open" : "mobile-nav"}
        id="mobile-menu"
      >
        <div className="mobile-nav-panel">
          <div className="mobile-nav-top">
            <span>Dra. Lina Roldán</span>
            <LanguageSwitcher />
          </div>
          <nav
            aria-label={
              language === "en" ? "Mobile navigation" : "Navegación móvil"
            }
          >
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <Link
            className="mobile-nav-cta"
            href="https://www.doctoralia.co/perfil/lina-maria-roldan-lopera"
            onClick={() => setIsMenuOpen(false)}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t({ en: "Book Consultation", es: "Agendar consulta" })}
          </Link>
        </div>
      </div>
    </header>
  );
}

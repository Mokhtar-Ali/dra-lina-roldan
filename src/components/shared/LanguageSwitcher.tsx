"use client";

import type { Language } from "@/types";
import { useLanguage } from "@/providers/LanguageProvider";

const languages: Language[] = ["en", "es"];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label={language === "en" ? "Language selector" : "Selector de idioma"}
      className={compact ? "language-switcher compact" : "language-switcher"}
      role="group"
    >
      {languages.map((option) => (
        <button
          aria-pressed={language === option}
          className={language === option ? "is-active" : ""}
          key={option}
          onClick={() => setLanguage(option)}
          type="button"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

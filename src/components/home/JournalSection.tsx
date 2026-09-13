"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { journalArticles } from "@/data/journal";
import { useLanguage } from "@/providers/LanguageProvider";

export function JournalSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<"idle" | "error" | "success">(
    "idle",
  );
  const featured = journalArticles.find((article) => article.featured);
  const secondary = journalArticles.filter((article) => !article.featured);

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!isValid) {
      setFormState("error");
      return;
    }

    setFormState("success");
  };

  if (!featured) {
    return null;
  }

  return (
    <section className="journal-section section-pad" id="journal">
      <div className="section-shell">
        <div className="section-split-heading">
          <div>
            <RevealBlock as="p" className="section-eyebrow">
              {t({ en: "Journal", es: "Journal" })}
            </RevealBlock>
            <RevealText
              as="h2"
              className="section-title"
              lines={[
                t({
                  en: "Clinical thinking, written with calm.",
                  es: "Pensamiento clínico, escrito con calma.",
                }),
              ]}
            />
          </div>
          <RevealBlock as="p" className="section-lead" delay={180}>
            {t({
              en: "Short editorial notes for patients who want to understand the why behind treatment planning.",
              es: "Notas editoriales breves para pacientes que quieren entender el porqué detrás de la planeación.",
            })}
          </RevealBlock>
        </div>

        <div className="journal-grid">
          <RevealBlock className="featured-article" delay={220}>
            <div className="article-image">
              <Image
                alt={t(featured.imageAlt)}
                fill
                sizes="(max-width: 900px) 90vw, 48vw"
                src={featured.image}
              />
            </div>
            <div className="article-copy">
              <span>{t(featured.category)}</span>
              <h3>{t(featured.title)}</h3>
              <p>{t(featured.excerpt)}</p>
            </div>
          </RevealBlock>

          <div className="secondary-articles">
            {secondary.map((article, index) => (
              <RevealBlock
                as="article"
                className="secondary-article"
                delay={260 + index * 100}
                key={article.id}
              >
                <div>
                  <span>{t(article.category)}</span>
                  <h3>{t(article.title)}</h3>
                  <p>{t(article.excerpt)}</p>
                </div>
                <div className="secondary-thumb">
                  <Image
                    alt={t(article.imageAlt)}
                    fill
                    sizes="120px"
                    src={article.image}
                  />
                </div>
              </RevealBlock>
            ))}

            <RevealBlock className="newsletter-card" delay={420}>
              <h3>{t({ en: "Notes from the studio", es: "Notas del estudio" })}</h3>
              <form onSubmit={submitNewsletter}>
                <label htmlFor="newsletter-email">
                  {t({ en: "Email address", es: "Correo electrónico" })}
                </label>
                <div>
                  <input
                    id="newsletter-email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t({
                      en: "you@example.com",
                      es: "tu@correo.com",
                    })}
                    type="email"
                    value={email}
                  />
                  <button type="submit">
                    {t({ en: "Join", es: "Unirme" })}
                  </button>
                </div>
                {formState === "error" && (
                  <p className="form-message error" role="alert">
                    {t({
                      en: "Enter a valid email address.",
                      es: "Ingresa un correo electrónico válido.",
                    })}
                  </p>
                )}
                {formState === "success" && (
                  <p className="form-message" role="status">
                    {t({
                      en: "Thank you. Your email format has been validated.",
                      es: "Gracias. El formato de tu correo fue validado.",
                    })}
                  </p>
                )}
              </form>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

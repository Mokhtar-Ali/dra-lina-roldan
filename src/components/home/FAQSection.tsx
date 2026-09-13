"use client";

import { useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { faqs } from "@/data/faq";
import { useLanguage } from "@/providers/LanguageProvider";

export function FAQSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="section-shell faq-grid">
        <div>
          <RevealBlock as="p" className="section-eyebrow">
            {t({ en: "FAQ", es: "Preguntas frecuentes" })}
          </RevealBlock>
          <RevealText
            as="h2"
            className="section-title"
            lines={[
              t({
                en: "Clear answers, without rushing the decision.",
                es: "Respuestas claras, sin apresurar la decisión.",
              }),
            ]}
          />
        </div>

        <RevealBlock className="faq-list" delay={180}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const buttonId = `${faq.id}-button`;

            return (
              <div className="faq-item" key={faq.id}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  id={buttonId}
                  onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  type="button"
                >
                  <span>{t(faq.question)}</span>
                  <strong aria-hidden="true">{isOpen ? "−" : "+"}</strong>
                </button>
                <div
                  aria-labelledby={buttonId}
                  className={isOpen ? "faq-panel is-open" : "faq-panel"}
                  hidden={!isOpen}
                  id={panelId}
                  role="region"
                >
                  <p>{t(faq.answer)}</p>
                </div>
              </div>
            );
          })}
        </RevealBlock>
      </div>
    </section>
  );
}

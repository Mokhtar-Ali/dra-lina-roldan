"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { services } from "@/data/services";
import { useLanguage } from "@/providers/LanguageProvider";

function wrapIndex(index: number) {
  const length = services.length;
  return ((index % length) + length) % length;
}

export function ServicesSection() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualTick, setManualTick] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleServices = useMemo(
    () => [0, 1, 2].map((offset) => services[wrapIndex(activeIndex + offset)]),
    [activeIndex],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);

    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1));
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isVisible, manualTick, reducedMotion]);

  const navigate = (direction: 1 | -1) => {
    setActiveIndex((current) => wrapIndex(current + direction));
    setManualTick((current) => current + 1);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    touchStartX.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = event.clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    navigate(distance < 0 ? 1 : -1);
  };

  return (
    <section className="services-section section-pad" id="services" ref={sectionRef}>
      <div className="section-shell">
        <div className="section-split-heading">
          <div>
            <RevealBlock as="p" className="section-eyebrow">
              {t({ en: "Services", es: "Servicios" })}
            </RevealBlock>
            <RevealText
              as="h2"
              className="section-title"
              lines={[
                t({
                  en: "Comprehensive dentistry, composed with restraint.",
                  es: "Odontología integral, compuesta con sutileza.",
                }),
              ]}
            />
          </div>
          <RevealBlock as="p" className="section-lead" delay={200}>
            {t({
              en: "Services are organized as a clinical ecosystem: aesthetics, alignment, restoration, diagnosis, and planning.",
              es: "Los servicios se organizan como un ecosistema clínico: estética, alineación, restauración, diagnóstico y planeación.",
            })}
          </RevealBlock>
        </div>

        <RevealBlock className="services-carousel" delay={260}>
          <div
            aria-label={
              language === "en" ? "Services carousel" : "Carrusel de servicios"
            }
            className="services-track"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            role="region"
          >
            {visibleServices.map((service, index) => (
              <article className="service-card" key={`${service.id}-${index}`}>
                <div className="service-image">
                  <Image
                    alt={t(service.imageAlt)}
                    fill
                    sizes="(max-width: 700px) 88vw, (max-width: 1100px) 44vw, 28vw"
                    src={service.image}
                  />
                </div>
                <div className="service-content">
                  <span>{t(service.category)}</span>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.description)}</p>
                  <ul>
                    {service.treatments[language].map((treatment) => (
                      <li key={treatment}>{treatment}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="carousel-controls">
            <button
              aria-label={t({ en: "Previous service", es: "Servicio anterior" })}
              onClick={() => navigate(-1)}
              type="button"
            >
              ‹
            </button>
            <span aria-live="polite">
              {activeIndex + 1} / {services.length}
            </span>
            <button
              aria-label={t({ en: "Next service", es: "Servicio siguiente" })}
              onClick={() => navigate(1)}
              type="button"
            >
              ›
            </button>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

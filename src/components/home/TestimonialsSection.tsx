"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { media } from "@/data/media";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/providers/LanguageProvider";

function nextIndex(current: number, direction: 1 | -1) {
  return (
    ((current + direction) % testimonials.length) + testimonials.length
  ) % testimonials.length;
}

export function TestimonialsSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];
  const videoSrc = media.testimonialVideo.src;

  const playVideo = () => {
    setHasError(false);
    setIsLoading(true);

    const playPromise = videoRef.current?.play();

    if (!playPromise) {
      setIsPlaying(true);
      return;
    }

    playPromise
      .then(() => setIsPlaying(true))
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
        setIsPlaying(false);
      });
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
    setIsLoading(false);
  };

  return (
    <section className="testimonials-section section-pad">
      <div className="section-shell testimonial-grid">
        <div>
          <RevealBlock as="p" className="section-eyebrow">
            {t({ en: "Patient experiences", es: "Experiencias de pacientes" })}
          </RevealBlock>
          <RevealText
            as="h2"
            className="section-title"
            lines={[
              t({
                en: "A calm view into the patient journey.",
                es: "Una mirada serena al recorrido del paciente.",
              }),
            ]}
          />
          <RevealBlock as="p" className="section-lead" delay={180}>
            {t({
              en: "Video and written stories should reflect real patient consent and exact approved source material.",
              es: "El video y las historias escritas deben reflejar consentimiento real y material fuente exacto aprobado.",
            })}
          </RevealBlock>
        </div>

        <RevealBlock className="testimonial-video-card" delay={220}>
          <div className="video-frame">
            <video
              muted={isMuted}
              onEnded={() => {
                setIsPlaying(false);
                setIsLoading(false);
              }}
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
              onLoadedData={() => setIsLoading(false)}
              onPlaying={() => setIsLoading(false)}
              playsInline
              preload="metadata"
              ref={videoRef}
              src={videoSrc}
              title={t({
                en: "Dra. Lina Roldán video",
                es: "Video de la Dra. Lina Roldán",
              })}
            />
            {!isPlaying && !hasError && (
              <button className="play-button" onClick={playVideo} type="button">
                <span>{t({ en: "Play", es: "Reproducir" })}</span>
              </button>
            )}
            {isLoading && (
              <div className="video-state">
                {t({ en: "Loading video", es: "Cargando video" })}
              </div>
            )}
            {hasError && (
              <div className="video-state error">
                {t({
                  en: "The video could not be loaded.",
                  es: "No se pudo cargar el video.",
                })}
              </div>
            )}
          </div>
          <div className="video-controls">
            <button onClick={isPlaying ? pauseVideo : playVideo} type="button">
              {isPlaying
                ? t({ en: "Pause", es: "Pausar" })
                : t({ en: "Play", es: "Reproducir" })}
            </button>
            <button onClick={() => setIsMuted((current) => !current)} type="button">
              {isMuted
                ? t({ en: "Unmute", es: "Activar sonido" })
                : t({ en: "Mute", es: "Silenciar" })}
            </button>
          </div>
        </RevealBlock>

        <RevealBlock className="patient-story-card" delay={320}>
          <p>{t(testimonial.quote)}</p>
          <div>
            <strong>{testimonial.patient}</strong>
            <span>{t(testimonial.detail)}</span>
          </div>
          <div className="story-controls">
            <button
              aria-label={t({ en: "Previous story", es: "Historia anterior" })}
              onClick={() => setActiveTestimonial((current) => nextIndex(current, -1))}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label={t({ en: "Next story", es: "Historia siguiente" })}
              onClick={() => setActiveTestimonial((current) => nextIndex(current, 1))}
              type="button"
            >
              ›
            </button>
          </div>
          <Link className="text-link" href="#contact">
            {t({ en: "Start your consultation", es: "Iniciar tu consulta" })}
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}

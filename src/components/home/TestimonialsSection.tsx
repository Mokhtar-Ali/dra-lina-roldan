"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RevealBlock } from "@/components/shared/RevealBlock";
import { RevealText } from "@/components/shared/RevealText";
import { bookingUrl } from "@/data/links";
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
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];
  const videoSrc = media.testimonialVideo.src;

  // Autoplay (muted) when the video scrolls into view, pause when it leaves.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked (for example Low Power Mode). Stay silent.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  return (
    <section className="testimonials-section section-pad" id="reviews">
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
              muted
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
              onLoadedData={() => setIsLoading(false)}
              onPlaying={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              playsInline
              preload="metadata"
              ref={videoRef}
              src={videoSrc}
              title={t({
                en: "Dra. Lina Roldán video",
                es: "Video de la Dra. Lina Roldán",
              })}
            />
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
            <button
              aria-label={
                isMuted
                  ? t({ en: "Unmute video", es: "Activar sonido del video" })
                  : t({ en: "Mute video", es: "Silenciar video" })
              }
              aria-pressed={!isMuted}
              className="sound-button"
              onClick={toggleSound}
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" />
                {isMuted ? (
                  <path d="m22 9-6 6M16 9l6 6" />
                ) : (
                  <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
                )}
              </svg>
              <span>
                {isMuted
                  ? t({ en: "Unmute", es: "Activar sonido" })
                  : t({ en: "Mute", es: "Silenciar" })}
              </span>
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
          <Link
            className="text-link"
            href={bookingUrl}
            rel="noopener noreferrer" target="_blank"
          >
            {t({ en: "Start your consultation", es: "Iniciar tu consulta" })}
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}

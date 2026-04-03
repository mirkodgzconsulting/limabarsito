"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

/** 6 foto da /public — griglia 3×2 (2×3 su mobile) con celle quadrate */
const PHOTOS: { src: string; alt: string }[] = [
  { src: encodeURI("/lima bar-2.jpg"), alt: "Lima Bar — ambiente e tavola" },
  { src: "/FLW05786.JPG", alt: "Lima Bar — dessert e presentazione" },
  { src: "/FLW05870.JPG", alt: "Lima Bar — piatti e colori" },
  { src: "/lb.jpg", alt: "Lima Bar — drink e cocktail" },
  { src: encodeURI("/lima bar-16.jpg"), alt: "Lima Bar — burger e specialità" },
  { src: "/jugodenaranja.jpg", alt: "Lima Bar — colazione e bevande" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const active = useMemo(
    () => (lightbox !== null ? PHOTOS[lightbox] : null),
    [lightbox]
  );

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (lightbox === null) return;
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? 0 : (i + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? 0 : (i - 1 + PHOTOS.length) % PHOTOS.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      className="galleria-section"
      id="galleria"
      aria-labelledby="galleria-title"
    >
      <div className="galleria-section__container gallery-flex">
        <h2 id="galleria-title" className="gallery-title">
          Galleria
        </h2>
        <div className="galleria-mosaic galleria-mosaic--six">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src}
              type="button"
              className="galleria-mosaic__item"
              onClick={() => setLightbox(i)}
              aria-label={`Apri immagine: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 767px) 50vw, 33vw"
                className="galleria-mosaic__img"
              />
            </button>
          ))}
        </div>
      </div>

      {active && lightbox !== null && (
        <div
          className="modal-backdrop is-open"
          style={{ zIndex: 2100 }}
          role="dialog"
          aria-modal
          aria-label={active.alt}
          onClick={close}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "min(92vw, 900px)",
              maxHeight: "88vh",
              margin: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi galleria"
              style={{
                position: "absolute",
                top: "-2.5rem",
                right: 0,
                color: "#fff",
                fontSize: "2rem",
                lineHeight: 1,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                maxHeight: "80vh",
              }}
            >
              <Image
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

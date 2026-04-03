"use client";

import Image from "next/image";
import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* Carrusel hero — imágenes en /public */
const SLIDES = ["/hero1b.webp", "/hero2.png", "/hero3b.png", "/hero4.JPG"];

const AUTO_MS = 5000;
/** Móvil: tiempo con solo letras (portada) antes de mostrar la foto de la 1ª slide */
const MOBILE_TEXT_COVER_MS = 4200;

/** Mismo corte que el menú hamburguesa (992px): evita split en tablet vertical */
const MQ_MOBILE = "(max-width: 991px)";

function useIsMobileHero() {
  /** true hasta medir viewport: si empezamos en false, SSR/1er paint usa split de desktop y en ≤991px se ve texto+imagen (mal). */
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MQ_MOBILE);
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return isMobile;
}

/** Paleta tipo hero anterior: fondos vivos + texto contrastado */
const PALETTE: { bg: string; fg: string }[] = [
  { bg: "#f7e017", fg: "#b91c1c" },
  { bg: "#dc2626", fg: "#fef08a" },
  { bg: "#2563eb", fg: "#fef9c3" },
  { bg: "#16a34a", fg: "#e9d5ff" },
  { bg: "#ec4899", fg: "#ffffff" },
  { bg: "#9333ea", fg: "#ffffff" },
  { bg: "#f97316", fg: "#ffffff" },
  { bg: "#eab308", fg: "#1e3a8a" },
  { bg: "#059669", fg: "#fecaca" },
  { bg: "#e23636", fg: "#ffffff" },
  { bg: "#3498db", fg: "#ffffff" },
  { bg: "#f39c12", fg: "#1a1a1a" },
];

type BlockCell = { ch: string; bg: string; fg: string };

function useWordCells() {
  return useMemo(() => {
    let i = 0;
    const cell = (ch: string): BlockCell => {
      const { bg, fg } = PALETTE[i % PALETTE.length];
      i += 1;
      return { ch, bg, fg };
    };
    const word = (w: string): BlockCell[] =>
      w.split("").map((c) => cell(c === "’" || c === "'" ? "'" : c));

    const rows: BlockCell[][][] = [
      [word("LA"), word("NOSTRA"), word("FILOSOFIA")],
      [word("SI"), word("BASA"), word("SULL'USO")],
      [word("DI"), word("INGREDIENTI")],
      [word("FRESCHI"), word("E"), word("STAGIONALI")],
    ];
    return rows;
  }, []);
}

function BlockWord({ cells }: { cells: BlockCell[] }) {
  return (
    <>
      {cells.map((cell, idx) => (
        <span
          key={`${cell.ch}-${idx}`}
          className="tanta-hero__blk"
          style={{ backgroundColor: cell.bg, color: cell.fg }}
        >
          {cell.ch}
        </span>
      ))}
    </>
  );
}

function HeroHeadline() {
  const rows = useWordCells();

  return (
    <div className="tanta-hero__headline">
      <p className="tanta-hero__blocks" aria-hidden="true">
        {rows.map((groups, ri) => (
          <span key={ri} className="tanta-hero__blocks-row">
            {groups.map((cells, wi) => (
              <Fragment key={wi}>
                {wi > 0 ? <span className="tanta-hero__blocks-wordgap" aria-hidden /> : null}
                <span className="tanta-hero__blocks-group">
                  <BlockWord cells={cells} />
                </span>
              </Fragment>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
}

export function Hero() {
  const isMobile = useIsMobileHero();
  const [index, setIndex] = useState(0);
  /** Móvil + slide 0: false = solo letras (portada); true = solo imagen hero1 */
  const [mobileSlide0ShowImage, setMobileSlide0ShowImage] = useState(false);
  const prevIndexRef = useRef(-1);

  useEffect(() => {
    if (!isMobile) {
      setMobileSlide0ShowImage(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && index === 0 && prevIndexRef.current > 0) {
      setMobileSlide0ShowImage(false);
    }
    prevIndexRef.current = index;
  }, [isMobile, index]);

  useEffect(() => {
    if (isMobile) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTO_MS
    );
    return () => clearInterval(id);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    if (index === 0 && !mobileSlide0ShowImage) {
      const id = window.setTimeout(() => {
        setMobileSlide0ShowImage(true);
      }, MOBILE_TEXT_COVER_MS);
      return () => clearTimeout(id);
    }

    if (index === 0 && mobileSlide0ShowImage) {
      const id = window.setTimeout(() => setIndex(1), AUTO_MS);
      return () => clearTimeout(id);
    }

    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTO_MS
    );
    return () => clearTimeout(id);
  }, [isMobile, index, mobileSlide0ShowImage]);

  return (
    <section className="tanta-hero" aria-label="Inicio">
      <h1 className="sr-only">
        La nostra filosofia si basa sull&apos;uso di ingredienti freschi e
        stagionali — Lima Bar
      </h1>
      <div className="tanta-hero__viewport">
        <div
          className="tanta-hero__track"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translateX(-${(100 / SLIDES.length) * index}%)`,
            transition: "transform 0.65s ease",
          }}
        >
          {SLIDES.map((src, i) => {
            const isFirst = i === 0;
            const desktopSplit = isFirst && !isMobile;
            const mobileTextCover = isFirst && isMobile && !mobileSlide0ShowImage;
            const mobileFirstImage = isFirst && isMobile && mobileSlide0ShowImage;

            const slideClass = [
              "tanta-hero__slide",
              desktopSplit ? "tanta-hero__slide--split" : "",
              mobileTextCover ? "tanta-hero__slide--mobile-text-cover" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={src}
                className={slideClass}
                style={{ flex: `0 0 ${100 / SLIDES.length}%` }}
                aria-hidden={i !== index}
              >
                {desktopSplit ? (
                  <>
                    <div className="tanta-hero__slide-copy">
                      <HeroHeadline />
                    </div>
                    <div className="tanta-hero__slide-visual">
                      <Image
                        src={src}
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 991px) 100vw, 50vw"
                        className="tanta-hero__slide-img"
                      />
                    </div>
                  </>
                ) : null}

                {mobileTextCover ? (
                  <div className="tanta-hero__slide-copy tanta-hero__slide-copy--mobile-full">
                    <HeroHeadline />
                  </div>
                ) : null}

                {mobileFirstImage ? (
                  <div className="tanta-hero__slide-visual">
                    <Image
                      src={src}
                      alt=""
                      fill
                      priority
                      sizes="100vw"
                      className="tanta-hero__slide-img"
                    />
                  </div>
                ) : null}

                {!isFirst ? (
                  <div className="tanta-hero__slide-visual">
                    <Image
                      src={src}
                      alt=""
                      fill
                      priority={i === 1}
                      sizes="100vw"
                      className="tanta-hero__slide-img"
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

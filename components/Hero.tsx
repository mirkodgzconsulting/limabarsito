"use client";

import Image from "next/image";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

/* Carrusel hero — imágenes en /public */
const SLIDES = ["/hero1b.webp", "/hero2.png", "/hero3b.png", "/hero4.JPG"];

const AUTO_MS = 5000;

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
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, AUTO_MS);
    return () => clearInterval(id);
  }, [next]);

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
            const isSplit = i === 0;
            return (
              <div
                key={src}
                className={
                  isSplit
                    ? "tanta-hero__slide tanta-hero__slide--split"
                    : "tanta-hero__slide"
                }
                style={{ flex: `0 0 ${100 / SLIDES.length}%` }}
                aria-hidden={i !== index}
              >
                {isSplit ? (
                  <div className="tanta-hero__slide-copy">
                    <HeroHeadline />
                  </div>
                ) : null}
                <div className="tanta-hero__slide-visual">
                  <Image
                    src={src}
                    alt=""
                    width={1920}
                    height={1080}
                    priority={i === 0}
                    sizes={
                      isSplit
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "100vw"
                    }
                    className="tanta-hero__slide-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

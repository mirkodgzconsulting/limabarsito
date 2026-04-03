"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="page-header" className={scrolled ? "is-scrolled" : ""}>
        <div className="header-inner">
          <Link
            href="/"
            className="header-logo-link"
            aria-label="Lima Bar — Inizio"
            onClick={close}
          >
            <Image
              src="/logoborderblack.webp"
              alt=""
              width={300}
              height={64}
              className="header-logo"
              priority
            />
          </Link>

          <nav className="nav-desktop nav-desktop--three" aria-label="Principal">
            <Link href="/#noi" className="nav-link" onClick={close}>
              Noi
            </Link>
            <Link href="/#galleria" className="nav-link" onClick={close}>
              Galleria
            </Link>
            <Link href="/menu" className="nav-link" onClick={close}>
              Menu
            </Link>
          </nav>

          <button
            type="button"
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`drawer-backdrop ${open ? "is-open" : ""}`}
        aria-hidden
        onClick={close}
      />
      <div className={`mobile-drawer ${open ? "is-open" : ""}`} role="dialog" aria-modal>
        <Link href="/#noi" onClick={close}>
          Noi
        </Link>
        <Link href="/#galleria" onClick={close}>
          Galleria
        </Link>
        <Link href="/menu" onClick={close}>
          Menu
        </Link>
      </div>
    </>
  );
}

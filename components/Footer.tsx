"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TEL_URL, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-global">
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/" className="footer-logo-link" aria-label="Lima Bar">
            <Image
              src="/logoborderblack.webp"
              alt=""
              width={300}
              height={64}
              className="footer-logo"
            />
          </Link>
          <p style={{ opacity: 0.92, fontSize: "0.95rem", margin: "0.5rem 0 0" }}>
            Síguenos en:
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{t("usefulLinks")}</h4>
          <ul>
            <li>
              <Link href="/menu">La carta</Link>
            </li>
            <li>
              <Link href="/#galleria">Galleria</Link>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={TEL_URL}>328 428 1204</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t("legal")}</h4>
          <ul>
            <li>
              <Link href="/privacy">Política de privacidad</Link>
            </li>
            <li>
              <Link href="/privacy#cookie">Política de cookies</Link>
            </li>
            <li>
              <Link href="/privacy#termini">Términos y condiciones</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">© {new Date().getFullYear()} Lima Bar. Tutti i diritti riservati.</div>
    </footer>
  );
}

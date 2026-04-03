import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Limabar",
  description: "Informativa privacy, cookie e termini.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="section section--white" style={{ paddingTop: "6rem", minHeight: "60vh" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <h1 className="section-title">Privacy policy</h1>
          <p>
            Questa pagina è un placeholder. In produzione inserire testo legale completo su trattamento
            dati personali (GDPR), base giuridica, diritti dell&apos;interessato e contatti del DPO.
          </p>
          <h2 id="cookie" className="section-title" style={{ fontSize: "1.5rem", marginTop: "2.5rem" }}>
            Cookie policy
          </h2>
          <p>
            Descrizione tipologie di cookie, finalità, durata e come gestire le preferenze dal banner
            o dal browser.
          </p>
          <h2 id="termini" className="section-title" style={{ fontSize: "1.5rem", marginTop: "2.5rem" }}>
            Termini e condizioni
          </h2>
          <p>
            Condizioni d&apos;uso del sito, prenotazioni, limitazioni di responsabilità e legge applicabile.
          </p>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/">← Torna alla home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

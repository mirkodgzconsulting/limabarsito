import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WHATSAPP_URL } from "@/lib/contact";

const events = [
  {
    title: "Menu di primavera",
    date: "15 aprile — 15 giugno",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    alt: "Piatti primaverili colorati",
  },
  {
    title: "Serata vini naturali",
    date: "28 aprile · ore 20:00",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    alt: "Degustazione vini",
  },
];

export function Events() {
  return (
    <section className="section section--white">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Eventi &amp; speciali</h2>
          <p className="section-subtitle">
            Stagionalità, degustazioni e piccole feste in sala. Prenota il tuo posto.
          </p>
        </ScrollReveal>
        <div className="menu-grid" style={{ marginTop: "2.5rem" }}>
          {events.map((ev, i) => (
            <ScrollReveal key={ev.title} delayClass={i === 1 ? "reveal-delay-1" : ""}>
              <article className="event-card">
                <Image src={ev.img} alt={ev.alt} width={800} height={500} />
                <div className="event-card__body">
                  <span className="event-card__date">{ev.date}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", margin: 0, fontSize: "1.35rem" }}>
                    {ev.title}
                  </h3>
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill"
                    style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex" }}
                  >
                    Contattaci
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

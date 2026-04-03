import Image from "next/image";

export function About() {
  return (
    <section id="noi" aria-labelledby="about-heading">
      <div className="slider-food">
        <div className="slider-food-left">
          <Image
            src="/noib.webp"
            alt="Lima Bar"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            priority={false}
          />
        </div>
        <div className="slider-food-right">
          <div className="slider-food-info">
            <h2 id="about-heading" className="slider-food-title">
              Su di noi
            </h2>
            <p className="slider-food-description">
              Ci vantiamo di una squadra dedicata di chef, sommelier e personale di sala, tutti
              uniti nell&apos;obiettivo comune di superare le aspettative dei nostri clienti. Ogni
              piatto servito è il risultato di un&apos;attenzione meticolosa ai dettagli e di un
              impegno costante per l&apos;eccellenza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const PDF_CARTA = "https://tantaperu.com/cartas/TNT_CartaWeb.pdf";

function MosaicCard({
  href,
  external,
  image,
  alt,
  label,
  area,
}: {
  href: string;
  external?: boolean;
  image: string;
  alt: string;
  label: string;
  area: "carta" | "food" | "aperitivi" | "drinks" | "colazione";
}) {
  return (
    <div className={`gallery-mosaic__slot gallery-mosaic__slot--${area}`}>
      <div className="gallery-image-container gallery-image-container--mosaic">
        <Link
          href={href}
          className="gallery-link gallery-link--mosaic"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <div className="overlay" aria-hidden />
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 34vw, 480px"
            className="gallery-mosaic__img"
          />
          <div className="gallery-text-overlay">
            <h3>
              <span className="bg-line-deco white">{label}</span>
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function MenuSection() {
  return (
    <section id="offriamo" className="gallery-flex" aria-labelledby="carta-title">
      <h2 id="carta-title" className="gallery-title">
        Cosa offriamo
      </h2>
      <div className="gallery-grid gallery-grid--mosaic">
        <MosaicCard
          area="carta"
          href={PDF_CARTA}
          external
          image="/FLW05786.JPG"
          alt="Carta"
          label="Carta"
        />
        <MosaicCard
          area="food"
          href="/menu"
          image="/FLW05870.JPG"
          alt="Food"
          label="Food"
        />
        <MosaicCard
          area="aperitivi"
          href="/menu"
          image={encodeURI("/lima bar-16.jpg")}
          alt="Aperitivi"
          label="Aperitivi"
        />
        <MosaicCard
          area="drinks"
          href="/menu"
          image="/FLW05703.JPG"
          alt="Drinks"
          label="Drinks"
        />
        <MosaicCard
          area="colazione"
          href="/menu"
          image="/jugodenaranja.jpg"
          alt="Colazione peruviana"
          label="Colazione peruviana"
        />
      </div>
    </section>
  );
}

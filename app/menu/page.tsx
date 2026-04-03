import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { MenuPageContent } from "@/components/MenuPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Limabar",
  description: "Scopri piatti, dessert, bar, colazione e proposte da condividere.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="menu-page section--cream">
        <div className="container">
          <h1
            className="section-title"
            style={{ textAlign: "center", marginBottom: "0.5rem" }}
          >
            Il nostro menu
          </h1>
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto 2rem" }}>
            Ingredienti stagionali, ricette sincere, prezzi trasparenti.
          </p>
          <MenuPageContent />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

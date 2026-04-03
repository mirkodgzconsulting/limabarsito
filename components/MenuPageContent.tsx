"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MENU_BY_CATEGORY,
  MENU_TABS,
  type MenuCategoryId,
} from "@/lib/menuData";

type Props = {
  initialTab?: MenuCategoryId;
};

export function MenuPageContent({ initialTab = "menu" }: Props) {
  const [active, setActive] = useState<MenuCategoryId>(initialTab);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as MenuCategoryId;
    if (hash && MENU_TABS.some((t) => t.id === hash)) {
      setActive(hash);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${active}`);
  }, [active]);

  const items = MENU_BY_CATEGORY[active];

  return (
    <>
      <div className="menu-tabs" role="tablist" aria-label="Categorie menu">
        {MENU_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            id={`tab-${tab.id}`}
            className={`menu-tab ${active === tab.id ? "is-active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="menu-items-grid"
      >
        {items.map((item) => (
          <article key={item.name} className="menu-item-card">
            <Image
              src={item.img}
              alt={item.alt}
              width={600}
              height={412}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="menu-item-card__body">
              <h3 style={{ fontFamily: "var(--font-display)", margin: 0, fontSize: "1.2rem" }}>
                {item.name}
              </h3>
              <p style={{ margin: "0.35rem 0 0", fontSize: "0.95rem", opacity: 0.85 }}>
                {item.description}
              </p>
              <p className="menu-item-card__price">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

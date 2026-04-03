"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const UI: Dict = {
  navCarta: { es: "La carta", en: "Menu" },
  navLocales: { es: "Locales", en: "Locations" },
  navPedido: { es: "Haz tu pedido", en: "Order now" },
  discover: { es: "Conoce aquí", en: "Discover" },
  usefulLinks: { es: "Lima Bar", en: "Lima Bar" },
  legal: { es: "Ayuda y legales", en: "Help & legal" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof UI) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const t = useCallback((key: keyof typeof UI) => UI[key][lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

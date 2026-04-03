import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Lima Bar",
  description: "Lima Bar — cucina, menu e galleria.",
  icons: {
    icon: [{ url: "/faviconlb.webp", type: "image/webp" }],
    shortcut: "/faviconlb.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

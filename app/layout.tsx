import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Aprisco Urbano | Uma casa para pertencer", template: "%s | Aprisco Urbano" },
  description: "Igreja Aprisco Urbano em Itaguaí. Uma casa para pertencer e um lugar para crescer.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

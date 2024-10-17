import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sua Saúde",
  description: "Agendamento de consultas médicas hospitalares",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="./images/icone.ico" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}

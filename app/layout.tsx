import type { Metadata } from "next";
import { Footer } from "@/components/shared";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Sergennetti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

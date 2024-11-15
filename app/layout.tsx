import type { Metadata } from "next";
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
      </body>
    </html>
  );
}

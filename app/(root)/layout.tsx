import type { Metadata } from "next";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Sergennetti | Главная",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

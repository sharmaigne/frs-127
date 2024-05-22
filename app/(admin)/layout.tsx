import { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "UP Reserve Hub",
  description: "The official reservation system of UP Mindanao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>
    </div>
  );
}

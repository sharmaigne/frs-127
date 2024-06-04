import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "@/components/Footer";
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
      <Footer />
    </div>
  );
}

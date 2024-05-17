import { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'UP Reserve Hub',
  description: 'The official reservation system of UP Mindanao',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className="bg-[#8B1538] text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
import './globals.css';

import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'HR Engineering | Trusted HVAC Solutions',
  description: 'Professional AC, VRF, Chiller & Industrial Cooling Services in Dhaka, Bangladesh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* And add suppressHydrationWarning here */}
      <body className="min-h-screen bg-slate-50 text-slate-900" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
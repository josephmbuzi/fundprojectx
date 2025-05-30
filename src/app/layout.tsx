import type { Metadata } from "next";
import { Golos_Text } from 'next/font/google'
import "./globals.css";

const golos = Golos_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-golos'
})

export const metadata = {
  title: 'Passion Project',
  description: 'A frontend-only site built with love.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={golos.variable}>
      <body>{children}</body>
    </html>
  );
}

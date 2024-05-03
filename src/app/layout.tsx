import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatein",
  description: "Discover Your Dream Property with Estatein",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className="wrapper">{children}</body>
    </html>
  );
}

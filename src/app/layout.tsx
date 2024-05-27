import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss';
import ReactQueryProvider from '@/providers/react-query';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatein",
  description: "Discover Your Dream Property with Estatein",
  icons: {
    icon: '/icons/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className="wrapper"><ReactQueryProvider>
                    <main>{children}</main>
                </ReactQueryProvider></body>
    </html>
  );
}

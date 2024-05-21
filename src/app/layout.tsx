import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { XmlProvider } from "@/context/XmlContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XML Discover",
  description: "aplicação destinada a análise de XML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-white`}>
        <Suspense fallback={<Loading />}>
          <Header />
          <XmlProvider>{children}</XmlProvider>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {locales} from "@/i18n/settings";
import {getTranslation} from "@/i18n";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviePulse",
  description: "Created with React",
};

export function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = await getTranslation()
  return (
    <Layout>
      {children}
    </Layout>
  );
}

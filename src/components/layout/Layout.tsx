import {Inter} from "next/font/google";

import {getTranslation} from "@/i18n";
import Header from "@/components/layout/Header";


import "@/app/[language]/globals.css";

const inter = Inter({subsets: ["latin", "cyrillic"]});

import Providers from '@/shared/providers'


export default async function Layout(
  {
    children,
  }: LayoutProps) {
  const {i18n} = await getTranslation()
  return (
    <html lang={i18n.resolvedLanguage}>
    <body className={inter.className}>
    <Providers>
      <Header/>
      <div className="max-w-wrapper">
        {children}
      </div>
    </Providers>
    </body>
    </html>
  );
}

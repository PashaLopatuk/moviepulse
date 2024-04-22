import {getTranslation} from "@/i18n";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin", "cyrillic"]});
import "@/app/[language]/globals.css";
import Header from "@/components/layout/Header";

export default async function Layout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const {i18n} = await getTranslation()
  return (
    <html lang={i18n.resolvedLanguage}>
    <body className={inter.className}>
    <Header/>
    <div className="">
      {children}
    </div>
    </body>
    </html>
  );
}

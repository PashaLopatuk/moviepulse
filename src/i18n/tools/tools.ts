// !languages.some(locale => req.nextUrl.pathname.startsWith(`/${locale}`)) 

import { NextRequest } from "next/server";

/**
 * 
 * @param avalaibleLocales insert here an array of languages
 * @param req insert here NextJS request
 * @returns if pathaname has a avalaible language
 */

export function checkifLocaleIsAvailable(avalaibleLocales: string[], req: NextRequest): boolean {
    return avalaibleLocales.some((locale: string) => (req.nextUrl.pathname.startsWith(`/${locale}`)) )
}



export const fallbackLng = 'uk'
export const localesLabels = {
    "en": "English 🇬🇧",
    "uk": "Українська 🇺🇦",
}
export const locales: (keyof typeof localesLabels)[] = ["en", "uk"]

export const defaultNS = 'index'

/**
*
* @constant string name of language parameter in user's url
*
*/
export const languageSlug = 'language';

/**
*
* @constant string name of language parameter in user's Cookies
* 
*/
export const cookieName = 'i18next'


export function getOptions(lng: string = fallbackLng, ns: string = defaultNS) {

    // ns ??= (await localesApi).default_ns
    // lng ??= fallbackLng

    return {
        // debug: true,
        supportedLngs: locales,
        fallbackLng: fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS: defaultNS,
        ns
    }
}
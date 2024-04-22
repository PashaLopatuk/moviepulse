import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import {defaultNS, fallbackLng, getOptions} from './settings'
import getDictionaries from './resources/resourcesToBackend'

const initI18next = async (lng: string, ns: string) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend(getDictionaries))
        .init({
            ...(getOptions(lng, ns)),
        })
    return i18nInstance
}

/**
 * 
 * @param lng users language
 * @param namespace current namespace for translation
 * @param options dont use
 * @returns function t to get translation by key and instance of i18next
 */
export async function getTranslation(lng?: string, namespace?: string, options: { keyPrefix?: any } = {}) {
    lng ??= fallbackLng
    namespace ??= defaultNS

    // console.log('index.ts usetranslation: ', { lng, namespace })
    const i18nextInstance = await initI18next(lng, namespace)
    return {
        t: i18nextInstance.getFixedT(lng, Array.isArray(namespace) ? namespace[0] : namespace, options.keyPrefix),
        i18n: i18nextInstance
    }
}
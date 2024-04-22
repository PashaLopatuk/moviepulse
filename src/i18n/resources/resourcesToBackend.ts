export default function getDictionaries(language: string, namespace?: string) {
    return import(`../locales/${language}/${namespace ? namespace : 'index'}.json`)
}

//../api/locales/dictionaries/${language}/${namespace ? namespace : 'index'}.json
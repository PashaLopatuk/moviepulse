export default function getDictionaries(language: string, namespace?: string) {
    return import(`../locales/${language}/${namespace ? namespace : 'index'}.json`)
}

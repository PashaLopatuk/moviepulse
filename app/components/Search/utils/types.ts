export type searchStoreType = {
    query: string
    include_adult: boolean
    language: string
    primary_release_year: string
    page: number
    region: string
    year: string
    writeSearch: (p: string) => void
    writeAdult: (p: boolean) => void
    writeLanguage: (p: string) => void
    writeRegion: (p: string) => void
    writeYear: (p: string) => void
} 
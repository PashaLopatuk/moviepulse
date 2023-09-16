import {create} from 'zustand'
import { searchStoreType } from '../utils/types'

const useSearchStore = create<searchStoreType>((set) => ({
    query: '',
    include_adult: false,
    language: 'en-US',
    primary_release_year: '',
    page: 1,
    region: '',
    year: '',

    writeSearch : (
        query: string
        ) => set(() => ({
            query: query,
        })),

    writeAdult: (param: boolean) => set((state) => ({
        ...state,
        include_adult: param
    })),

    writeLanguage: (param: string) => set((state) => ({
        ...state,
        language: param
    })),

    writeRegion: (param: string) => set((state) => ({
        ...state,
        region: param
    })),

    writeYear: (param: string) => set((state) => ({
        ...state,
        year: param
    })),

    // writeSearch : (
    //     { query, include_adult, language, primary_release_year, page, region, year } : searchStoreType
    //     ) => set(() => ({
    //         query: query,
    //         include_adult: include_adult,
    //         language: language,
    //         primary_release_year: primary_release_year, 
    //         page: page, 
    //         region: region, 
    //         year: year
    // }))
}))

export default useSearchStore
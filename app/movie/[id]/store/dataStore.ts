import { create } from 'zustand'
import loadData from '../services/loadData'
import { DataStoreType } from '../types'

const useDataStore = create<DataStoreType>((set) => ({
  isLoading: true,
  movieData: {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [
      {
        iso_3166_1: "",
        name: "",
      },
    ],
    release_date: "0000-00-00",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "Released",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },

  async loadData(id: string) {
    const response = await loadData(id)
    set(
      {
        movieData: response,
        isLoading: false,
      }
    )
  }

}))

export default useDataStore
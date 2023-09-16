import { create } from 'zustand'
import { Movie, MovieListResponse } from '../../../shared/types/MovieListResponse'
import fetchSearch from '../utils/fetchSearch'
import { searchStoreType } from '../utils/types'

const useSearchedMovieList = create<MovieListResponse>((set) => ({
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,

  
  
  loadMovies: async (params: searchStoreType) => {
    const response = await fetchSearch(params)
    set((state) => ({
      results: response.results.sort((a: Movie, b: Movie) => b.popularity - a.popularity )
    }))
  }
}))

export default useSearchedMovieList
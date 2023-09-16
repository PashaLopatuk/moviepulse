'use client'

import React, { useEffect } from 'react'
import useSearchedMovieList from '../store/searchedMovieStore'
import { searchStoreType } from '../utils/types'
import useSearchStore from '../store/searchStore'
import FilmsListItem from './FilmsListItem'

const FilmsListSearch = () => {
  
  const movies = useSearchedMovieList(state => state.results)
  const loadMovies = useSearchedMovieList(state => state.loadMovies)

  const searchParams = useSearchStore()

  useEffect(() => {
    loadMovies(searchParams)
  }, [])

  return (
    <ul className="space-y-4">
      {
        movies.map((movie) => (
          <FilmsListItem {...movie}/>
        ))
      }
    </ul>
  )
}

export default FilmsListSearch
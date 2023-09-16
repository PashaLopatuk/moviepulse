'use client'

import React from 'react'
// import Link from 'next/link'
import useSearchedMovieList from '../store/searchedMovieStore'
import useSearchStore from '../store/searchStore'
import { useRouter } from 'next/navigation'


const SearchButton = () => {
  const loadMovies = useSearchedMovieList(state => state.loadMovies)

  const searchParams = useSearchStore()

  const router = useRouter()

  const handleClick = () => {
    loadMovies(searchParams)
    // if (router. !== 'search') {
    router.push('search')
    // }
  }

  return (
    <button className="border rounded-e-2xl p-2 dark:bg-black clicked:text-lime-500"
      onClick={handleClick}
    >Search</button>
  )
}

export default SearchButton

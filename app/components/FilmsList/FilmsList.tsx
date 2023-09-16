'use client'

import React, { useEffect } from 'react'
import useShowsStore from './data/showsStore'
import { ShowType } from './data/types'
import useSearchStore from './data/searchStore';
import { useState } from 'react';
import FilmsListItem from './FilmsListItem/FilmsListItem';

const FilmsList: React.FC = () => {

  const shows = useShowsStore(store => store.shows)
  const isLoading = useShowsStore(store => store.isLoading)
  const errors = useShowsStore(store => store.errors)
  const loadShows = useShowsStore(store => store.loadShows)

  const search = useSearchStore(store => store.search)
  const setSearch = useSearchStore(store => store.setSearch)

  const [searchValue, setSearchValue] = useState<string>('')

  // useEffect(() => {
  //   loadShows( search )
  // }, [])

  useEffect(() => {
    setSearch(searchValue)
  }, [searchValue])

  return (
    <div>
      <input type="text" name="" id="" 
      className="bg-black border p-2 rounded text-white space-y-3" 
      onChange={(e) => setSearchValue(e.target.value)}/>
      <button 
      className=""
      onClick={ () => loadShows(search)}
      >Search</button>
      
      <ul className=''>
      {
        shows.map( (show: ShowType) => (
          <FilmsListItem {...show}/>
        ))
      }
      </ul>
      
    </div>
  )
}
export default FilmsList

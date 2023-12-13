import React from 'react'
import Search from '../components/Search/Search'
import FilmsListDiscover from '../components/FilmsListDiscover/FilmsListDiscover'
import FilmsList from '../components/FilmsList/FilmsList'

const page = () => {
  return (
    <div className='mt-20'>
        <Search />
      <FilmsListDiscover />
      <FilmsList />
    </div>
  )
}

export default page
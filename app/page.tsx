import React from 'react'
// import FilmsList from './components/FilmsList/FilmsList'
import FilmsListDiscover from './components/FilmsListDiscover/FilmsListDiscover'
// import SearchField from './components/Search/FilmsListSearch/SearchField'
import Search from './components/Search/Search'

const page = () => {
  return (
    <div className=''>

      {/* <FilmsList /> */}
      <Search />
      <FilmsListDiscover />
      {/* <FilmsList /> */}
    </div>
  )
}

export default page
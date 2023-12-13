'use client'

import React from 'react'
import { Movie } from '../../shared/types/MovieListResponse'
import Link from 'next/link'

const TrendingItem = (movie: Movie) => {
  return (
    <li className=""
      style={{
        transition: 'all 0.5s',
      }}
    >

        <div className="p-1 absolute hidden hover:block z-[200]">
            <h2 className="font-semibold text-md">{movie.title}
            <h3 className=""> {movie.release_date.slice(0, 4)} </h3>
            </h2>
            {/*<div className="line-clamp-3 text-neutral-200">*/}
            {/*    {movie.overview}*/}
            {/*</div>*/}
        </div>

       <Link href={
        'movie/' + movie.id
       }
             className={'inline-block md:m-2 hover:opacity-50'}
       // className='rounded-2xl hover:bg-neutral-900  flex space-x-3 h-40'
       >
       <img
        src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
        alt=""
        className="w-28 object-contain transform hover:flip-[90deg] transition"
       />


       </Link>
    </li>
  )
}

export default TrendingItem
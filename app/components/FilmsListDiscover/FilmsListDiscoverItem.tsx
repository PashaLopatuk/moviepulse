'use client'

import React from 'react'
import { Movie } from '../../shared/types/MovieListResponse'
import Link from 'next/link'

const FilmsListDiscoverItem = (movie: Movie) => {
  return (
    <li className="">
      
       <Link href={
        'movie/' + movie.id
       }
       className='rounded-2xl hover:bg-gray-900  flex space-x-3 h-40'
       >
       <img 
        src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} 
        alt="" 
        className="w-28 object-contain rounded-s-2xl" />

        <div className="p-1">
            <h2 className="font-semibold text-2xl line-clamp-1">{movie.title}
            <span className=""> {movie.release_date.slice(0, 4)} </span>
            </h2>
            <div className="line-clamp-3 text-neutral-200">
                {movie.overview}
            </div>
        </div>
       </Link>
    </li>
  )
}

export default FilmsListDiscoverItem
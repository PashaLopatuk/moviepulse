'use client'

import React, { useState, useEffect } from 'react'
import getDiscover from './data/fetch'
import { MovieListResponse } from '../../shared/types/MovieListResponse'
import FilmsListDiscoverItem from './FilmsListDiscoverItem'

const FilmsListDiscover = () => {

  const [data, setdata] = useState<MovieListResponse | undefined>()

  useEffect(() => {

    getDiscover().then(res => setdata(res))

  }, [])

  return (
    <div className='p-5'>
        <ul className="space-y-4">
            {
                data?.results?.map( (movie) => (
                    <FilmsListDiscoverItem {...movie}/>
                ))
            }
        </ul>
    </div>
  )
}

export default FilmsListDiscover
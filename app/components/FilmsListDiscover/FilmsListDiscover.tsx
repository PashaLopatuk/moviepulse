'use client'

import React, { useState, useEffect } from 'react'
import getDiscover from './data/fetch'
import { MovieListResponse } from '../../shared/types/MovieListResponse'
import FilmsListDiscoverItem from './FilmsListDiscoverItem'
import { useRef } from 'react'
import { Movie } from './data/types'

const FilmsListDiscover = () => {

  const [data, setdata] = useState<Movie[] | undefined>()
  const [pageNum, setpageNum] = useState<number>(1)

  useEffect(() => {
    getDiscover(pageNum).then(res => {
      setdata(prevData => {
        if (prevData) {
          return [...prevData, ...res];
        } else {
          return res;
        }
      });
    });
  }, [pageNum]);

  const nextPageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the targetDiv is in the viewport
      if (nextPageRef.current) {
        const { top, bottom } = nextPageRef.current.getBoundingClientRect();
        const isDivInViewport = top >= 0 && bottom <= window.innerHeight;
        // console.log('Is div in viewport:', isDivInViewport);
        if (isDivInViewport) {
          setpageNum( (x) => x + 1 )
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [nextPageRef])
  

  return (
    <div className='p-5'>
        <ul className="space-y-4">
            {
                data?.map( (movie) => (
                    <FilmsListDiscoverItem {...movie}/>
                ))
            }
        </ul>
        <div 
        className=""
        ref={nextPageRef}
        />
    </div>
  )
}

export default FilmsListDiscover
'use client'

import React, { useState, useEffect } from 'react'
import getDiscover from './data/fetch'
import { MovieListResponse } from '../../shared/types/MovieListResponse'
import TrendingItem from './TrendingItem'
import { useRef } from 'react'
import { Movie } from './data/types'

const Trending = () => {

  const [data, setdata] = useState<Movie[] | undefined>()
  // const [pageNum, setpageNum] = useState<number>(1)

  useEffect(() => {
    getDiscover(1).then(res => {
          setdata(res);
        });
  }, [])

  //
  // useEffect(() => {
  //   getDiscover(pageNum).then(res => {
  //     setdata(prevData => {
  //       if (prevData) {
  //         return [...prevData, ...res];
  //       } else {
  //         return res;
  //       }
  //     });
  //   });
  // }, [pageNum]);

  // const nextPageRef = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the targetDiv is in the viewport
  //     if (nextPageRef.current) {
  //       if (nextPageRef.current) {
  //         const element = nextPageRef.current as HTMLDivElement;  // Приведення типу до HTMLDivElement
  //         const { top, bottom } = element.getBoundingClientRect();
  //         const isDivInViewport = top >= 0 && bottom <= window.innerHeight;
  //
  //         if (isDivInViewport) {
  //           setpageNum(x => x + 1);
  //         }
  //       }
  //     }
  //   }
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [nextPageRef])
  

  return (
    <div className='p-2 flex justify-center'>
        <ul className="grid grid-cols-3 md:flex flex-wrap line-clamp-2 justify-between max-w-[74rem]">
            {
                data?.slice(0, 18).map( (movie) => (
                    <TrendingItem {...movie}/>
                ))
            }
        </ul>
        {/*<div */}
        {/*className=""*/}
        {/*ref={nextPageRef}*/}
        {/*/>*/}
    </div>
  )
}

export default Trending
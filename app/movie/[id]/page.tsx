'use client'

import React, { useEffect, useState } from 'react'
import useDataStore from './store/dataStore'
import { movieDetailsType, DataStoreType } from './types'
import { load } from './services/load'
import { Video } from './types'
import Link from 'next/link'
// import fetchVideos from './services/fetchVideos'
import fetchTMDB from '@/app/shared/services/fetchTMDB'

const page = ({ params }: { params: { id: string } }) => {

    const movieData = useDataStore((state: DataStoreType) => state.movieData)
    const loadData = useDataStore((state: DataStoreType) => state.loadData)
    const isLoading = useDataStore((state: DataStoreType) => state.isLoading)

    useEffect(() => {
        loadData(params.id)
    }, [])

    const [videos, setVideos] = useState<Video[]>()

    useEffect(() => {
        // load(params.id, fetchVideos, setVideos)
        load(params.id, 'videos', fetchTMDB, setVideos)
    }, [])

    const [images, setimages] = useState<any[]>()

    useEffect(() => {
        // load(params.id, fetchVideos, setVideos)
        load(params.id, 'images', fetchTMDB, setimages)
    }, [])

    useEffect(() => {
        console.log('movieData: ', movieData)
    }, [movieData])




    return (
        <div className='mt-[6rem] max-w-[80rem] mx-auto'>
            {
                movieData.title === '' ?
                    <div className="fixed w-100 h-80 t-20 bg-black text-3xl">Loading...</div>
                    :

                    <div className="space-y-20">

                        {/*<div className="">*/}
                        {/*	<h1 className="">*/}
                        {/*		{movieData?.title}*/}
                        {/*	</h1>*/}
                        {/*</div>*/}


                        {/*<iframe*/}
                        {/*	src={`https://www.youtube.com/embed/${videos?.at(0)?.key}`}*/}
                        {/*	className='w-full h-[30vh] sm:max-w-[35rem] mx-auto'*/}
                        {/*	// width={videos?.at(0)?.size}*/}
                        {/*></iframe>*/}

                        {/*<div className="grid grid-cols-2">*/}
                        {/*	<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full" href="">Videos</Link>*/}
                        {/*	<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full" href="">Images</Link>*/}
                        {/*</div>*/}

                        <div className="space-y-4 md:hidden">
                            <h1 className="font-bold text-5xl ml-2 whitespace-nowrap max-w-[99vw] text-ellipsis overflow-hidden">
                                {
                                    movieData?.title
                                }
                            </h1>

                            <div className="flex px-2 h-60 ">

                                <img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path}
                                    alt="movie poster"
                                    className='w-35 md:w-40 object-contain'
                                />

                                <div className="px-1 flex flex-col justify-between md:justify-start">
                                    <div className="">

                                        <h1 className="font-bold text-3xl ml-2">
                                            {movieData?.release_date?.slice(0, 4)}
                                        </h1>

                                    </div>
                                    <ul className="flex space-x-2 pl-2 py-3 ">
                                        {
                                            movieData
                                                .genres
                                                // .slice(0, 3)
                                                .map((e) => (
                                                    <li
                                                        className="px-2 py-1 cursor-pointer rounded-2xl bg-neutral-800 text-xs"
                                                        key={e.id}
                                                    >{e.name.split(' ').at(0)}</li>
                                                ))
                                        }
                                    </ul>
                                    <div
                                        className="px-4 text-md text-neutral-200 overflow-hidden whitespace-wrap md:overflow-auto md:whitespace-normal">
                                        {
                                            movieData.overview
                                        }..
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <div className="flex text-2xl">
                                        <div className='text-amber-400 cursor-pointer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(251 191 36)"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </div>
                                        <div className="font-bold">
                                            {
                                                movieData?.vote_average
                                            }
                                        </div>
                                        <div className="text-neutral-200">
                                            /10
                                        </div>
                                    </div>
                                </div>
                                <div className="text-neutral-300">
                                    Film popularity: {
                                        Math.floor(movieData?.popularity)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block space-y-4 mx-[auto]">


                            <div className="flex px-2 ">

                                <img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path}
                                    alt="movie poster"
                                    className='w-60 h-100 object-contain'
                                />

                                <div className="px-5 flex flex-col justify-between md:justify-end md:gap-4">
                                    <h1 className="font-bold text-5xl ml-2 whitespace-nowrap max-w-[99vw] text-ellipsis overflow-hidden ">
                                        {
                                            movieData?.title
                                        }
                                        <span className="font-bold text-5xl ml-2">
                                            {movieData?.release_date?.slice(0, 4)}
                                        </span>
                                    </h1>

                                    <div className="">
                                        <div className="">
                                            <div className="flex text-2xl">
                                                <div className='text-amber-400 cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(251 191 36)"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>
                                                </div>
                                                <div className="font-bold">
                                                    {
                                                        movieData?.vote_average
                                                    }
                                                </div>
                                                <div className="text-neutral-200">
                                                    /10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-neutral-300">
                                            Film popularity: {
                                                Math.floor(movieData?.popularity)
                                            }
                                        </div>
                                    </div>

                                    <div className="">
                                        <ul className="flex space-x-2 py-3 ">
                                            {
                                                movieData
                                                    .genres
                                                    // .slice(0, 3)
                                                    .map((e) => (
                                                        <li
                                                            className="px-2 py-1 cursor-pointer rounded-2xl bg-neutral-800 text-xs"
                                                            key={e.id}
                                                        >{e.name.split(' ').at(0)}</li>
                                                    ))
                                            }
                                        </ul>
                                        <div
                                            className='max-w-[40rem] whitespace-wrap'
                                        // className="px-4 text-md text-neutral-200 overflow-hidden whitespace-wrap md:overflow-auto md:whitespace-normal"
                                        >
                                            {
                                                movieData.overview
                                            }
                                        </div>
                                    </div>


                                    <Link
                                        href={''}
                                        className="justify-self-end"
                                    >
                                        <button className="
                                        transition-xl
                                        border-2 
                                        border-emerald-700
                                        hover:border-green-500 
                                        rounded-2xl 
                                        p-2 px-4 
                                        bg-gradient-to-r 
                                        from-lime-500 
                                        via-green-500 
                                        to-emerald-700 
                                        bg-clip-text 
                                        text-transparent
                                        font-bold
                                        flex
                                        gap-1
                                        ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                            className="w-6 h-6 
                                            
                                            text-green-500 
                                           ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                            </svg>

                                            See trailer
                                        </button>
                                    </Link>
                                </div>

                            </div>



                        </div>

                        {/*<div className="border-t border-neutral-200">*/}
                        {/*    <h2 className="text-2xl p-2 font-bold text-neutral-100">Images</h2>*/}
                        {/*    <div className="overflow-x-scroll flex">*/}
                        {/*        {*/}
                        {/*            images?.posters.slice(0, 10).map(image => (*/}
                        {/*                <img*/}
                        {/*                    src={"https://image.tmdb.org/t/p/w500" + image.file_path}*/}
                        {/*                     alt=""*/}
                        {/*                     key={JSON.stringify(image)}*/}
                        {/*                />*/}
                        {/*            ))*/}
                        {/*        }*/}
                        {/*        /!*{*!/*/}
                        {/*        /!*    videos?.slice(1, 5).map(e =>*!/*/}
                        {/*        /!*        <iframe src={`https://www.youtube.com/embed/${e.key}`}>*!/*/}
                        {/*        /!*        </iframe>*!/*/}
                        {/*        /!*    )*!/*/}
                        {/*        /!*}*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="border-t border-neutral-200">
                            <h2 className="text-2xl p-2 font-bold text-neutral-100">Videos</h2>
                            <ul className=" flex gap-3 justify-between">
                                {
                                    videos?.slice(1, 5).map(video =>
                                        <li className="" key={JSON.stringify(video)}>
                                            <iframe src={`https://www.youtube.com/embed/${video.key}`}>
                                            </iframe>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>


                        <div className="border-t border-neutral-200">
                            <h2 className="text-2xl p-2 font-bold text-neutral-100">Production</h2>
                            {/*<h1 className="text-2xl p-2 font-bold text-neutral-100">Budget:*/}
                            {/*	<span className="">{movieData?.budget}</span>*/}
                            {/*</h1>*/}
                            <div className="space-y-2">
                                <ul className="flex gap-4 p-2">
                                    {
                                        movieData.production_companies.map((company) => (
                                            <li className="flex justify-center items-center bg-white rounded-xl max-w-fit p-2" key={JSON.stringify(company)}>
                                                <img
                                                    src={"https://image.tmdb.org/t/p/w500" + company.logo_path}
                                                    alt=""
                                                    className={'min-w-10 max-w-10 max-h-10'}
                                                />
                                                {/*<h3 className="">{company.name}</h3>*/}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}

export default page
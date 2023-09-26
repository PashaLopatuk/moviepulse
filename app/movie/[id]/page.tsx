'use client'

import React, { useEffect, useState } from 'react'
import useDataStore from './store/dataStore'
import { movieDetailsType } from './types'
import { load } from './services/load'
import { Video } from './types'
import Link from 'next/link'
// import fetchVideos from './services/fetchVideos'
import fetchTMDB from '@/app/shared/services/fetchTMDB'

const page = ({ params }: { params: { id: string } }) => {

	const movieData = useDataStore<movieDetailsType>((state) => state.movieData)
	const loadData = useDataStore((state) => state.loadData)
	const isLoading: boolean = useDataStore((state) => state.isLoading)

	useEffect(() => {
		loadData(params.id)
	}, [])

	const [videos, setVideos] = useState<Video[]>()

	useEffect(() => {
		// load(params.id, fetchVideos, setVideos)
		load(params.id, 'videos', fetchTMDB, setVideos)
	}, [])

	useEffect(() => {
		console.log('videos: ', videos)
	}, [videos])

	return (
		<div>
			{
				isLoading ?
					<div className="fixed w-100 h-80 t-20 bg-black text-3xl">Loading...</div>
					:

					<div className="space-y-4">


						<div className="">
							<h1 className="font-bold text-5xl ml-2">
								{
									movieData?.title
								}
							</h1>
							<div className="mx-2 flex justify-between">
								<div className="">
									<span className="text-neutral-200">
										{
											movieData?.status
										}
									</span> <span className="font-semibold">
										{
											movieData?.release_date.slice(0, 4)
										}
									</span>
								</div>

								{/* <ul className="">
									{
										movieData?.production_countries.map((e) =>
											<li className="" key={e.iso_3166_1}>{e.name}</li>
										)
									}
								</ul> */}

								<div className="">
									{
										movieData?.production_countries.at(0)?.name
									}
								</div>

								<div className="">
									{
										movieData?.runtime
									}
									<span className="text-neutral-300"> min</span>
								</div>
							</div>
						</div>

						<iframe
							src={`https://www.youtube.com/embed/${videos?.at(0).key}`}
							className='w-full h-[30vh] sm:max-w-[35rem] mx-auto'
							// width={videos?.at(0)?.size}
						></iframe>

						<div className="grid grid-cols-2">
							<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full" href="">Videos</Link>
							<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full" href="">Images</Link>
						</div>

						<div className="flex px-2 h-60">

							<img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path}
								alt="movie poster"
								className='w-35 object-contain'
							/>

							<div className="px-1 flex flex-col justify-between md:justify-start">
								<ul className="flex space-x-2 pl-2 py-3">
									{
										movieData
											.genres
											.slice(0, 3)
											.map((e) => (
												<li
													className="px-2 py-1 cursor-pointer rounded-2xl border border-neutral-500 hover:bg-neutral-800 text-xs"
													key={e.id}
												>{e.name.split(' ').at(0)}</li>
											))
									}
								</ul>
								<div className="px-4 text-md text-neutral-200 overflow-hidden whitespace-wrap md:overflow-auto md:whitespace-normal">
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
										<svg xmlns="http://www.w3.org/2000/svg" fill="rgb(251 191 36)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
											<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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
								} / 5000
							</div>
						</div>

						<div className="border-t border-neutral-200">
							<h2 className="text-2xl p-2 font-bold text-neutral-100">Videos</h2>
							<div className="overflow-x-scroll flex">
								{
									videos?.slice(1, 5).map(e =>
										<iframe src={`https://www.youtube.com/embed/${e.key}`}>
										</iframe>
									)
								}
							</div>
						</div>

						<div className="">

						</div>
					</div>

			}
		</div>
	)
}

export default page
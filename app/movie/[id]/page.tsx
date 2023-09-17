'use client'

import React, { use, useEffect, useState } from 'react'
import useDataStore from './store/dataStore'
import { movieDetailsType } from './types'
import { videosResponseType } from './types'
import loadVideos from './services/loadVideos'
import { Video } from './types'
import Link from 'next/link'

async function load(id: string, func: any) {
	const res = await loadVideos(id)
	func(res?.results)
}

const page = ({ params }: { params: { id: string } }) => {

	const movieData = useDataStore<movieDetailsType>((state) => state.movieData)
	const loadData = useDataStore((state) => state.loadData)
	const isLoading: boolean = useDataStore((state) => state.isLoading)

	useEffect(() => {
		loadData(params.id)
	}, [])

	const [videos, setVideos] = useState<Video[]>()
	useEffect(() => {
		load(params.id, setVideos)
	}, [])

	useEffect(() => {
		console.log(videos)
	}, [videos])

	return (
		<div>
			{
				isLoading ?
					<div className="">Loading...</div>
					:

					<div className="space-y-4">


						<div className="">
							<div className="font-bold text-3xl ml-2">
								{
									movieData?.title
								}
							</div>
							<div className="ml-1 flex space-x-3">
								<div className="">
									{
										movieData?.release_date.slice(0, 4)
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
							className='w-[100vw]'
						// width={videos?.at(0)?.size}
						></iframe>

						<div className="grid grid-cols-2">
							<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full " href="">Videos</Link>
							<Link className="hover:bg-neutral-800 h-10 flex items-center justify-center w-full " href="">Images</Link>
						</div>

						<div className="flex px-2 h-60">

							<img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path}
								alt="movie poster"
								className='w-35 object-contain'
							/>

							<div className="px-1">
								<ul className="flex space-x-2">
									{
										movieData
										.genres
										.slice(0, 3)
										.map((e) => (
											<li 
											className="px-2 py-1 rounded-2xl border border-neutral-500 hover:bg-neutral-800 text-xs"
											key={e.id}
											>{e.name.split(' ').at(0)}</li>
										))
									}
								</ul>
								<div className="py-2 px-4 text-xs text-neutral-200">
									{
										movieData.overview
									}
								</div>
							</div>

						</div>
					</div>

			}

		</div>
	)
}

export default page
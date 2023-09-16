'use client'

import React, { useEffect } from 'react'
import useDataStore from './store/dataStore'
import { movieDetailsType } from './types'

const page = ({ params }: { params: { id: string } }) => {

	const movieData = useDataStore<movieDetailsType>((state) => state.movieData)
	const loadData = useDataStore((state) => state.loadData)
	const isLoading: boolean = useDataStore((state) => state.isLoading)

	useEffect(() => {
		loadData(params.id)
	}, [])

	return (
		<div>
			{
				isLoading ?
					<div className="">Loading...</div>
					:

					<div className="space-y-3">
						<img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path} alt=""
							className='w-30'
						/>
						
						<div className="px-2">
							<div className="">
								{
									movieData?.title
								}
							<div className="">
								{
									movieData?.release_date.slice(0, 4)
								}
							</div>
							<ul className="">
								{
									movieData.genres.map( (e) => (
										<li className="">{e.name}</li>
									))
								}
							</ul>
							<div className="">
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
'use client'

import React from 'react'
import useDataStore from '../store/dataStore'
import { movieDetailsType } from '../types'

const page = () => {

	const movieData = useDataStore<movieDetailsType>((state) => state.movieData)

	return (
		<div>Videos {movieData?.id}</div>
	)
}

export default page
'use client'

import React from 'react'
import useSearchStore from '../store/searchStore'


const SearchField = () => {

	const query = useSearchStore(state => state.query)
	const writeSearch: (e: string) => void = useSearchStore(state => state.writeSearch)

	

	const handleInputChange = (e: any) => {
		writeSearch(e.target.value)
	}

	// React.useEffect(() => {
	// 	document.addEventListener('keydown', (event) => {
	// 		if (event.key === 'enter') {
				
	// 		}
	// 	})
	// }, [])



  return (
    <input 
		type="text" 
		name="" 
		id="" 
		onChange={handleInputChange} 
		value={query}
		className='bg-black border-white text-white p-2 px-4 rounded-s-2xl'
		/>
  )
}

export default SearchField
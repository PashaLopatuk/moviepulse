'use client'

//     query: '',
//     include_adult: false,
//     language: 'en-US',
//     primary_release_year: '',
//     page: 1,
//     region: '',
//     year: '',

import React from 'react'
import useSearchStore from '../store/searchStore';
// import { searchStoreType } from '../utils/types';

const Filters = () => {

  const languages: { code: string; displayName: string }[] = [
    { code: "en-US", displayName: "English" },
    { code: "es-ES", displayName: "Spanish" },
    { code: "fr-FR", displayName: "French" },
    { code: "de-DE", displayName: "German" },
    { code: "it-IT", displayName: "Italian" },
    { code: "ja-JP", displayName: "Japanese" },
    { code: "ko-KR", displayName: "Korean" },
    { code: "zh-CN", displayName: "Chinese (Simplified)" },
    { code: "uk-UA", displayName: "Ukrainian" },
    // Add more languages as needed
  ];
  
  const include_adult = useSearchStore(state => state.include_adult)
  // const language = useSearchStore(state => state.language)
  // // const primary_release_year = useSearchStore(state => state.primary_release_year)
  // const region = useSearchStore(state => state.region)
  // const year = useSearchStore(state => state.year)
  
  const writeAdult = useSearchStore(state => state.writeAdult)
  const writeLanguage = useSearchStore(state => state.writeLanguage)
  const writeRegion = useSearchStore(state => state.writeRegion)
  const writeYear = useSearchStore(state => state.writeYear)

  return (
    <div className='flex space-x-3'>

      <select 
      name='languageSelect' id="" 
      className="bg-black rounded-xl h-10 w-30 border" 
      onChange={(e) => {
        writeLanguage(e.target.value)
      }}
      >
        {
          languages.map( (e) => (
            <option value={e.code} className="" key={e.code}>{e.displayName}</option>
          ))
        }
      </select>

      <div className="flex space-x-1 items-center">
        <input type="checkbox" name="adultInput" id="" 
        className='rounded-full w-4 h-4 checked:accent-lime-500 accent-black ' 
        onChange={() => {
          writeAdult(!include_adult)
        }}
        // value={include_adult ? 'on' : 'off'}
        />
        <label htmlFor="adultInput" 
        className="whitespace-nowrap"
        >
          Include adult?
        </label>
      </div>

      <input type="text" name="" id="" 
      placeholder='Country'
      className='p-1 dark:bg-black dark:text-white rounded-xl border px-2'
      onChange={(e) => {writeRegion(e.target.value)}}
      />

      <input type="text" name="" id="" 
      placeholder='Year'
      className='p-1 dark:bg-black dark:text-white rounded-xl border px-2'
      onChange={(e) => {writeYear(e.target.value)}}
      />

      </div>
  )
}

export default Filters
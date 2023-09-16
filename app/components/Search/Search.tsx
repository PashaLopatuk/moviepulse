import SearchField from "./FilmsListSearch/SearchField";
import SearchButton from "./FilmsListSearch/SearchButton";
import Link from "next/link";
import React from 'react'

const Search = () => {
  return (
    <div className="sticky w-full dark:bg-black w-full pl-5 pr-5">
      
      <SearchField />
      <SearchButton />
    
    </div>
  )
}

export default Search
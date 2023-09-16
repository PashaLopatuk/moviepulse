'use client'

import React from 'react'
import { ShowType } from '../data/types'

const FilmsListItem: React.FC<ShowType> = ({
  i, id, l, q, rank, s, v, vt, y, yr
}) => {
  return (
    <li className="p-2 border rounded hover:bg-gray-800">
        <img src={''} alt="" />
        <div className="">
          <h2 className="">{l} <span className=''>{y}</span></h2>
          <h3 className="">{rank}</h3>
          <h3 className="">{s}</h3>
        </div>
    </li>
  )
}

export default FilmsListItem
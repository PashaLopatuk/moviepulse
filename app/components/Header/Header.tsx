import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-16 w-full sm:h-20 items-center flex justify-between p-5 dark:bg-black'>
      <Link href={'/'}>
        <h1 className="text-3xl">Movie
          <span className="font-bold text-lime-500">Pulse</span>
        </h1>
      </Link>
    </div>
  )
}

export default Header
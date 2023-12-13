import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-16 max-w-[100vw] w-[100%] sm:h-20 items-center flex justify-between p-5 dark:bg-black fixed top-0 bg-black z-[9999]'>
      <Link href={'/'}>
        <h1 className="text-3xl">Movie
          <span className="font-bold text-green-500 ">Pulse</span>
        </h1>
      </Link>
        <nav className="">
            <ul className="">
                <li className="">

                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
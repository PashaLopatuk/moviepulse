'use client';

import {useRef, useEffect} from 'react'

import type {FC, RefObject} from 'react'


const titles = [
  'movies', 'series', 'shows', 'episodes'
]

const randomSecs = () => (
  Math.floor(Math.random() * 300)
)

const DURATION = 4000

const DynamicTitle: FC = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleIndexRef = useRef(0)

  // const updateTitle = () => {
  //   if (titleRef.current) {
  //     titleRef.current.innerText = titles[titleIndexRef.current]
  //   }
  // }

  const writeWordAnimated = (word: string, target: RefObject<any>, duration: number) => {
    const deltaTime = Math.floor(duration / word.length)

    for (let idx = 1; idx <= word.length; idx++) {
      timeOutRef.current = setTimeout(() => {
        if (target.current) {
          target.current.innerText = word.slice(0, idx)
        }
      }, idx * deltaTime + randomSecs())
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      titleIndexRef.current = (titleIndexRef.current + 1) % titles.length
      writeWordAnimated(titles[titleIndexRef.current], titleRef, DURATION - 1000)
      // updateTitle()
    }, DURATION)

    return () => {
      clearInterval(intervalRef.current ?? undefined)
      clearTimeout(timeOutRef.current ?? undefined)
    }
  }, [])


  return (
    <h3
      className="font-extrabold text-4xl lg:text-6xl">
      Find{' '}
      <span
        ref={titleRef}
        className={'transition-all duration-500'}
      >movies</span>
      <span
        className={'bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700'}
      >{'...'}</span>
    </h3>
  )
}

export default DynamicTitle;
import Image from 'next/image'
import Link from 'next/link'

import {FireIcon} from "@/shared/assets/icons";
import {DrivePosterImage, BladeRunnerPosterImage, GrayManPosterImage} from '@/shared/assets/images'
import Trending from "@/features/home/components/Trending";
import DynamicTitle from "@/features/home/components/DynamicTitle";

const page = () => {
  return (
    <div className='bg-background'>
      <section
        className="flex justify-between md:justify-center items-center h-screen overflow-hidden
            shadow-animation
            lg:gap-20
        ">
        <article className="">

          <DynamicTitle/>

          <h2
            className="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent"
          >TV shows and more</h2>
          <p className="text-neutral-500 max-w-[25rem] line-clamp-4">
            Dive into an extensive database featuring a diverse collection of movies from various genres, eras, and
            languages. Whether you{`'`}re a fan of timeless classics, blockbuster hits, or indie gems, MoviePulse has it
            all. Discover hidden cinematic treasures and stay up-to-date with the latest releases.
          </p>
          <Link className="" href={'/discover'}>
            <button className="
              bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent
              border-2
              border-emerald-700 rounded-md px-2 py-1 font-bold
              ">
              Discover
            </button>
          </Link>
        </article>
        <div className="relative right-0 opacity-65 md:opacity-90 lg:scale-150">
          <Image
            src={DrivePosterImage.src}
            alt={'Drive poster'}
            className="w-[10rem] absolute bottom-20 left-5 z-[0]"
            width={663}
            height={1000}
            placeholder={"blur"}
            blurDataURL={DrivePosterImage.src}
            loading="lazy"
          />

          <Image
            src={BladeRunnerPosterImage.src}
            alt="Blade Runner 2049 poster"
            className="w-[10rem] z-[50]"
            width={663}
            height={1000}
            placeholder={"blur"}
            blurDataURL={BladeRunnerPosterImage.src}
            loading="lazy"
          />

          <Image
            src={GrayManPosterImage.src}
            alt="Gray man poster"
            className="w-[10rem] absolute top-20 left-10"
            width={663}
            height={1000}
            placeholder={"blur"}
            blurDataURL={GrayManPosterImage.src}
            loading="lazy"
          />

        </div>
      </section>
      <section className="h-[100vh]">
        <div className="flex justify-between md:justify-center items-center">
          <div className="flex gap-1">
            <div className="text-lime-500">
              <FireIcon/>
            </div>
            <div className="font-semibold">Trending</div>
          </div>
          <div className="h-[1px] w-[100%] md:w-[60rem] bg-neutral-700 mx-2"></div>
          <Link href={'/discover'} className="text-neutral-400 whitespace-nowrap text-sm">See more</Link>
        </div>
        <Trending/>
      </section>
    </div>
  )
}

export default page
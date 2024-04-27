import Link from 'next/link'
import {FireIcon} from "@/shared/assets/icons";


const page = () => {
  return (
    <div className='bg-background'>
      <section className="flex justify-between md:justify-center items-center h-screen overflow-hidden
            shadow-animation
            lg:gap-20
        ">
        <div className="">
          <h3 className="font-extrabold text-4xl lg:text-6xl">
            Find movies
          </h3>
          <h2
            className="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent"
          >TV shows and more</h2>
          <p className="text-neutral-500 max-w-[25rem] line-clamp-4">
            Dive into an extensive database featuring a diverse collection of movies from various genres, eras, and languages. Whether you{`'`}re a fan of timeless classics, blockbuster hits, or indie gems, MoviePulse has it all. Discover hidden cinematic treasures and stay up-to-date with the latest releases.
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
        </div>
        <div className="relative right-0 opacity-50 md:opacity-75 lg:scale-150">
          <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/070ec2214ca241a2f56dd13d7f33bc93f112137c2e9190d0931bc6f85da64ab2._RI_TTW_.jpg"
               alt=""
               className="w-[10rem] absolute bottom-20 left-5 z-[0]"
          />

          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/9ce75157565137.59db4c0ec6577.png"
               alt=""
               className="w-[10rem] z-[50]"
          />

          <img src="https://i.ebayimg.com/images/g/7LYAAOSwrXhiuV1R/s-l1200.jpg"
               alt=""
               className="w-[10rem] absolute top-20 left-10"
          />

        </div>
      </section>
      <section className="h-[100vh]">
        <div className="flex justify-between md:justify-center items-center">
          <div className="flex gap-1">
            <div className="text-lime-500">
              <FireIcon />
            </div>
            <div className="font-semibold">Trending</div>
          </div>
          <div className="h-[1px] w-[100%] md:w-[60rem] bg-neutral-700 mx-2"></div>
          <Link href={'/discover'} className="text-neutral-400 whitespace-nowrap text-sm">See more</Link>
        </div>
        {/*<Trending />*/}
      </section>
    </div>
  )
}

export default page
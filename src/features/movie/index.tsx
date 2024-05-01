import MovieApiManager from "@/api/managers/MovieApiManager";

import type {Genre} from "@/shared/types/movie";

import Image from "next/image";
import {api} from "@/api/consts";
import ResizableTitle from "@/components/ResizableTitle";


type Params = {
  params: {
    movie_id: string;
  },
  searchParams: unknown
}

const MoviePage = async ({params: {movie_id}}: Params) => {
  const requestData = await MovieApiManager.getMovieDetails({movie_id: parseInt(movie_id)})
  const {data: MovieData} = requestData ?? {} as any;


  return (
    <section>
      <div className="space-y-4">

        <ResizableTitle
          text={MovieData?.title}
          minFontSize={16}
          maxFontSize={80}
          defaultFontSize={16}
        />


        <div className="flex px-2 h-60 ">

          <Image
            src={api.images_url + MovieData?.poster_path}
            alt="movie poster"
            className='w-35 md:w-40 object-contain'
            width={500}
            height={700}
          />

          <div className="px-1 flex flex-col justify-between md:justify-start">
            <div className="">


              <h1 className="font-bold text-3xl ml-2">
                {MovieData?.release_date?.slice(0, 4)}
              </h1>
            </div>
            <ul className="flex space-x-2 pl-2 py-3 scroll-auto">
              {
                MovieData
                  ?.genres
                  .map((genre: Genre) => (
                    <li
                      className="px-2 py-1 cursor-pointer rounded-2xl bg-muted text-xs"
                      key={genre.id}
                    >
                      {genre.name.split(' ').at(0)}
                    </li>
                  ))
              }
            </ul>
            <p
              className="px-4 text-sm md:text-md text-muted-foreground overflow-hidden whitespace-wrap md:overflow-auto md:whitespace-normal">
              {
                MovieData.overview
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoviePage
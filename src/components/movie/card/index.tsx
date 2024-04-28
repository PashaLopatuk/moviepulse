import Image from "next/image";
import {api} from "@/api/consts";
import Link from "next/link";

import type {FC} from 'react'
import type {Movie} from "@/shared/types/movie";


type MovieCardProps = {
  movie?: Movie
}

const MovieCard: FC<MovieCardProps> = ({movie}) => (
  <Link
    href={'/movie/' + movie?.id}
    className={'flex justify-center'}
  >
    {movie && (
      <Image
        src={api.images_url + movie.poster_path}
        blurDataURL={api.images_url + movie.poster_path}
        alt={`${movie.title} poster`}
        width={200}
        height={300}
        loading={'lazy'}
        placeholder={'blur'}
      />
    )}
  </Link>
);

export default MovieCard;
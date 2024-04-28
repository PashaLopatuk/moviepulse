import MovieApiManager from "@/api/managers/MovieApiManager";

type Params = {
  movie_id: number;
}

export default async function MoviePage({ movie_id }: Params) {
  const MovieData = await MovieApiManager.getMovieDetails({movie_id})

  console.log(MovieData?.data)

  return (
    <section>
      title:
      {MovieData?.data.title}
    </section>
  )
}


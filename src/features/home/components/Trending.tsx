import MovieApiManager from "@/api/managers/MovieApiManager";
import MovieCard from "@/components/movie/card";

const Trending = async () => {
  const Movies = await MovieApiManager.getTrendingMovies()
  const isSuccess = Movies?.status === 200 && typeof Movies === 'object' && 'data' in Movies

  console.log('Response: ', Movies)

  return (
    <ul className={`
    flex flex-col items-center flex-wrap
    line-clamp-2 justify-between
    sm:grid sm:grid-cols-2 
    md:grid-cols-3
    max-w-[70vw]
    mx-auto
    `}>
      {isSuccess &&
        Movies.data.results.map(movie => (
          <li
            className={'h-[fit-content]'}
            key={movie.id}>
            <MovieCard movie={movie}/>
          </li>
        ))}
    </ul>
  )
}

export default Trending;
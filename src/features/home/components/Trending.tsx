import MovieApiManager from "@/api/managers/MovieApiManager";

const Trending = async () => {
  const Movies = await MovieApiManager.getTrendingMovies()
  return (
    <ul>

    </ul>
  )
}

export default Trending;
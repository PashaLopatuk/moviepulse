import {axiosConfig} from "@/api/config";

import type {BulkResponse} from "@/shared/types/response";
import type {Movie, MovieDetails} from "@/shared/types/movie";


export default abstract class MovieApiManager {
  public static paths = {
    trendingMovies: '/3/trending/movie/',
    movieDetails: '/3/movie/'
  }


  static async getTrendingMovies(
    {
      time_window = 'day',
    }: {
      time_window?: 'day' | 'week'
    } = {}) {
    const searchParams = new URLSearchParams({
      language: 'en-US'
    });
    try {
      return await axiosConfig.get<BulkResponse<Movie>>(
        this.paths.trendingMovies + '/' + time_window,
        {
          params: searchParams
        }
      )
    } catch (error) {
      return undefined
    }
  }

  static async getMovieDetails(
    {
      movie_id
    }: {
      movie_id: number
    }) {
    const searchParams = new URLSearchParams({
      language: 'en-US'
    });
    try {
      return await axiosConfig.get<MovieDetails>(
        this.paths.movieDetails + '/' + movie_id
      );
    } catch (error) {
      return undefined
    }
  }
}
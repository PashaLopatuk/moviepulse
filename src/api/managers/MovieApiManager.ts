import {axiosConfig} from "@/api/config";


export default abstract class MovieApiManager {
  public static paths = {
    trendingMovies: '/trending/movie/'
  }



  static async getTrendingMovies(
    {
      time_window='day',
    }: {
      time_window?: 'day'|'week'
    } = {}) {
      return await axiosConfig.get(this.paths.trendingMovies + '/' + time_window, {

      })
  }
}
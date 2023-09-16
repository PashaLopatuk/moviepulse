
import axios from "axios";

export default async function getDiscover<MovieListResponse>() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDc4OTE1NTNlMzc5MTNkODI4NGY5NzQzOGYxMWNkOCIsInN1YiI6IjY1MDA1MjM4ZGI0ZWQ2MTAzODU1ZTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT-IIPJK1rAdPj7S1z-kIhvlhZGel9kDFqoiukUC5Uk'
        }
      };
    //   url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

      try {
        const response = await axios.request(options);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}
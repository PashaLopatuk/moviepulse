import { searchStoreType } from "./types";
import axios from "axios";

export default async function fetchSearch(params: searchStoreType) {
  const url = 'https://api.themoviedb.org/3/search/movie';
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDc4OTE1NTNlMzc5MTNkODI4NGY5NzQzOGYxMWNkOCIsInN1YiI6IjY1MDA1MjM4ZGI0ZWQ2MTAzODU1ZTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT-IIPJK1rAdPj7S1z-kIhvlhZGel9kDFqoiukUC5Uk'
  };

  // Фільтруємо параметри, щоб відфільтрувати тільки ті, які не є пустими
  const filteredParams = Object.keys(params)
    .filter(key => params[key] !== null && params[key] !== undefined)
    .reduce((result, key) => {
      result[key] = params[key];
      return result;
    }, {});

  const { data } = await axios(url, {
    method: 'GET',
    headers,
    params: filteredParams
  });

  return data;
}

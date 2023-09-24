import axios from "axios";

// type fetchTMDBParamsType = {
//     itemsLabel: string,
//     id: string,
//     method: string,
//     params: any,
// } 

export default async function fetchTMDB(
    itemsLabel: string,
    id: string,
    method: string = 'GET',
    params: any = {}
) {
    
    const options = {
        url: `https://api.themoviedb.org/3/movie/${id}/${itemsLabel}`,
        method: method,
        params: params,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDc4OTE1NTNlMzc5MTNkODI4NGY5NzQzOGYxMWNkOCIsInN1YiI6IjY1MDA1MjM4ZGI0ZWQ2MTAzODU1ZTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT-IIPJK1rAdPj7S1z-kIhvlhZGel9kDFqoiukUC5Uk'
        }
    }
    try {
        const { data } = await axios.request(options)
        console.log('fetchTMDB: ', data)
        return data.results
    } catch (e) {
        console.error(e)
    }
}
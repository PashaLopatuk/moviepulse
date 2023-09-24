import axios from "axios";
import { videosResponseType } from "../types";

export default async function fetchVideos (id: string) {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDc4OTE1NTNlMzc5MTNkODI4NGY5NzQzOGYxMWNkOCIsInN1YiI6IjY1MDA1MjM4ZGI0ZWQ2MTAzODU1ZTU4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT-IIPJK1rAdPj7S1z-kIhvlhZGel9kDFqoiukUC5Uk'
        },
    }
    try {
        const response = await axios.request<videosResponseType>(options)
        return response.data
    } catch (e)  {
        console.error(e )
    }
}
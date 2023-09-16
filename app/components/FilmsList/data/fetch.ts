import axios from 'axios';


export default async function fetchShows ( search: string ) {

// const search = useSearchStore(state => state.search)

let params = {}

if (search) {
    params = {q : search}
}

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: params,
  headers: {
    'X-RapidAPI-Key': 'b0bee1aa66msha9f9727374b3d4ap1e0bc8jsn925a0ff3b1dd',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    console.log(response.data)
    return response.data
} catch (error) {
	console.error(error);
}
}
import axios from 'axios';


export default async function FetchUtil (
    url: string,
    params: any = {},
    headers: any = {},
) {


const options = {
  method: 'GET',
  url: url,
  params: params,
  headers: headers,
};

try {
	const response = await axios.request(options);
    return response.data
} catch (error) {
	console.error(error);
}
}
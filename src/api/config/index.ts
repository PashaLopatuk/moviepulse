import axios from 'axios';

import {api} from "@/api/consts";
import {requestLogger} from "axios-logger";


export const axiosConfig = axios.create({
  baseURL: api.tmdb,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_TMDB_AUTH_TOKEN,
  },
});

axiosConfig.interceptors.request.use((request) =>
  requestLogger(request, {
    dateFormat: 'HH:MM:ss',
    method: true,
    url: true,
    headers: true,
    params: true,
    data: false,
  })
);

import axios from 'axios';
import AxiosLogger from 'axios-logger';
import {api} from "@/api/consts";

export const axiosConfig = axios.create({
  baseURL: api.tmdb,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosConfig.interceptors.request.use((request) =>
  AxiosLogger.requestLogger(request, {
    dateFormat: 'HH:MM:ss',
    method: true,
    url: true,
    headers: true,
    params: true,
    data: true,
  })
);

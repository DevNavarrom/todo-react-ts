import axios, { type AxiosInstance } from 'axios'

export const apiInstance = (): AxiosInstance => {
  return axios.create({ baseURL: 'https://dummyjson.com/' })
}

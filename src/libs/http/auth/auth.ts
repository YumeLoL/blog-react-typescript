import env from '@beam-australia/react-env'
import axios from 'axios'
import { load } from 'react-cookies'

interface Login {
  data: { token: string }
  email: string
  password: string
  role: string
}

const axiosInstance = axios.create({
  baseURL: env('API_URL'),
  timeout: 5000,
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = load('token')
    // add token if it is not "login" request
    if (token){
      config = {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` }
      }} else if(axios.defaults.headers.common.Authorization){
          delete axios.defaults.headers.common.Authorization
      }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export const LoginPost = (data = {}): Promise<{ data: Login }> =>
  axiosInstance.post(`/login`, data)

import axios from "axios"
import axiosInstance from "./auth"

interface Login {
    username: string
    password: string
  }

interface Image {
    image: string
}

export interface Posts {
  title: string;
  description: string;
  content: string;
  coverUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export const Login = (data:Login) =>
  axios.post(`http://localhost:5000/api/user/login`, data)

// mock 
export const PostImage = (data = {}): Promise<{ data: Image }> =>
  axiosInstance.post(`/`, data)





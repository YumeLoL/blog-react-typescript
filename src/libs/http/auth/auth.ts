import env from "@beam-australia/react-env";
import axios from "axios";


interface Login {
    data: {token: string};
    email: string;
    password: string;
    role: string;
}

axios.defaults.baseURL = env('API_URL');


export const LoginPost = (data={}): Promise<{ data: Login }> => axios.post(`/login`, data)
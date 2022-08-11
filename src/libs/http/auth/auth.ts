import axios from "axios";
import env from '@beam-australia/react-env';


interface Login {
    data: { token: string; };
    email: string;
    password: string;
    role: string;
}

axios.defaults.baseURL = env('API_URL');


export const LoginPost = (data={}): Promise<{ data: Login }> => axios.post(`/login`, data)
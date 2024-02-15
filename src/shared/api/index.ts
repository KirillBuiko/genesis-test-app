import axios, {AxiosError} from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
})

export interface ResponseScheme<ResponseT> {
    result: ResponseT | null;
    error: AxiosError | null;
}

import axios, {AxiosError} from 'axios';

export const axiosInstance = axios.create({
    baseURL: "/api"
});

export interface ResponseScheme<ResponseT> {
    result: ResponseT | null;
    error: AxiosError | null;
}

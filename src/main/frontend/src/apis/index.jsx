import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_END ?? '';
export default function createAxios(endpoint, config) {
    const axiosBasic = axios.create({
        baseURL: BASE_URL,
        headers: { 'Content-Type': 'application/json', ...config?.headers },
        ...config,
    });

    const client = axios.create({
        baseURL: BASE_URL,
        headers: { 'Content-Type': 'application/json' }
    });

    return {
        axiosBasic,
        client
    };
}

const { axiosBasic, client } = createAxios(BASE_URL);

export { axiosBasic, client};

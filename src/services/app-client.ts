import axios, { type AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "6fac1d5156a942e284aacbe9c2405c68"
    }
});
export default apiClient;

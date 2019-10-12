import axios from "axios";
const baseUrl = "/api";
const axiosInstance = axios.create({
    baseURL: baseUrl
});
axios.interceptors.response.use(resp => resp, err => {
    console.log(err);
});

export default axiosInstance;
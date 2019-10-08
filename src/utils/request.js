import axios from "axios";
const baseUrl = "http://192.168.2.206:3000/api";
const axiosInstance = axios.create({
    baseURL: baseUrl
});
axios.interceptors.response.use(resp => resp, err => {
    console.log(err);
});

export default axiosInstance;
import request from "utils/request";
//br 码率
export const fetchSonsDetailApi = ({ id, br = 999000 }) => {
    return request.get(`song/url?id=${id}`);
}
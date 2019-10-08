import request from "utils/request";
export const fetchSonsDetailApi = ({ ids = [] }) => {
    const idsStr = ids.reduce((preStr, nextStr) => preStr.concat(nextStr), "").slice(1);
    return request.get(`/song/detail?ids=${idsStr}`);
}
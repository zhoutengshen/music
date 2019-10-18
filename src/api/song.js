import request from "utils/request";
//br 码率
export const fetchMuiltSongMp3InfoApi = ({ ids = [], br = 999000 }) => {
    const idsStr = ids.join(",");
    return request.get(`song/url?id=${idsStr}`);
}


export const fetchSongDetailApi = ({ ids = [] }) => {
    const idsStr = ids.join(",");
    return request.get(`/song/detail?ids=${idsStr}`);
}
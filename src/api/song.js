import request from "utils/request";
//br 码率
export const fetchSonsDetailApi = ({ ids = [], br = 999000 }) => {
    const idsStr = ids.join(",");
    return request.get(`song/url?id=${idsStr}`);
}

//获取多条歌曲的mmp3信息

export const fetchMuiltSongMp3InfoApi = ({ ids = [] }) => {

}
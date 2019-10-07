import request from "utils/request";
export const fetchAlbumDetailApi = ({ albumId }) => {
    return request.get(`playlist/detail?id=${albumId}`);
}
import * as actionTyps from "./constants";
import { fetchAlbumDetailApi } from "api/album";
import { fromJS } from "immutable";

export const fetchAlbumDetailAction = ({ albumId }) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetchAlbumDetailApi(({ albumId: albumId })).then(({ data }) => {
                const { playlist } = data;
                dispatch({
                    type: actionTyps.FETCH_ALBUM_DETAIL,
                    data: fromJS(playlist)
                });
                resolve(playlist);
            }).catch(reject)
        })
    }
}

import * as actionType from "./constants";
import { fromJS } from "immutable";
import { fetchBannerApi, fetchPersonalizedApi } from "api/recommend";
export const fetchBannerAction = () => {
    return async dispatch => {
        try {
            const { data } = await fetchBannerApi();
            const { banners } = data;
            dispatch({
                type: actionType.FETCH_BANNERS,
                data: fromJS(banners)
            });
            return Promise.resolve([...banners]);
        }
        catch (e) {
            console.log("网络错误");
            return Promise.reject(e);
        }
    }
}
export const fetchRecommendAction = (limit = 30) => {
    return async dispatch => {
        try {
            const { data } = await fetchPersonalizedApi(limit);
            const { result } = data;
            //hash去重
            const newArr = [];
            const table = {};
            result.forEach(item => {
                if (!table[item.id]) {
                    table[item.id] = true;
                    newArr.push(item);
                }
            });
            dispatch({
                type: actionType.FETCH_RECOMMEND,
                data: fromJS(newArr)
            });
            return Promise.resolve([...newArr]);
        } catch (e) {
            return Promise.reject(e);
        }
    }
} 

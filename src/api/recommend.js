import requst from "utils/request";
import { deviceType } from "utils";
export const fetchBannerApi = (() => {
    const bannerApiType = {
        pc: 0,
        android: 1,
        iphone: 2,
        ipad: 3
    };
    const type = deviceType();
    return () => {
        return requst.get("/banner?type=" + bannerApiType[type]);
    }
})();


export const fetchPersonalizedApi = (limit = 30) => {
    const timestamp = Date.now();
    return requst.get(`/personalized?limit=${limit}&timestamp=${timestamp}`)
}
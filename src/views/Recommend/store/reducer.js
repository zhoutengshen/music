import * as actionsType from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
    banners: [],
    recommends: []
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.FETCH_BANNERS:
            return state.set("banners", action.data);
        case actionsType.FETCH_RECOMMEND:
            return state.set("recommends", action.data);
        default:
            return state
    }
}
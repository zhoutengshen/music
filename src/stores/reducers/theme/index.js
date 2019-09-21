import { defalutTheme } from "theme";
const DEFALUT_THEME_ACTION = Symbol();

const themeReducer = (state = { ...defalutTheme }, action) => {
    if (action.type === DEFALUT_THEME_ACTION) {
        return {
            ...defalutTheme
        }
    } else {
        return {
            ...state
        }
    }
}
export default themeReducer;
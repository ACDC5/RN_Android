import actionTypes from "./actionType";

export function getHomeBannerAction(homeBanner) {
    return {
        type:actionTypes.FETCH_HOME_BANNER,
        homeBanner//key-value同名触发对象简写，在取值时，key和值都叫homeBanner
    }
}

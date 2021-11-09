import actionTypes from '../actions/actionType'

const init = {
    page: 1, // 第一页page为0
    dataSource: [9,8,7], // 列表数据源
    homeList: {},
    homeBanner: [], // 首页轮播数据
    isRenderFooter: false, // 是否渲染列表footer
    isFullData: false, // 是否加载完全部数据
    websites: [], // 常用网站数据
    isRefreshing:false
}
export default function home(state = init,action) {

    const {type} = action
    console.log('reducer',action)
    switch (type) {
        case actionTypes.FETCH_HOME_BANNER:
            return {
                ...state,
                homeBanner: action.homeBanner.data
            };
        default:
            return state
    }

}

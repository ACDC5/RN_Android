import httpUtil from "../utils/httpUtil";


export async function getHomeBanner() {
    return httpUtil.get('https://www.wanandroid.com/banner/json');
}

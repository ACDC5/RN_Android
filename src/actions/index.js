import {getHomeBanner} from '../api/'
import store from '../store'
import {getHomeBannerAction} from './action-creator'

export function fetchHomeBanner() {
    getHomeBanner().then(res => store.dispatch(getHomeBannerAction(res.data)))
}

import {PixelRatio,Dimensions} from 'react-native'

//动态获取设备宽高
export let DEVICE_WIDTH = Dimensions.get('window').width
export let DEVICE_HEIGHT = Dimensions.get('window').height

export function getRealDP(designPx) {
    return PixelRatio.roundToNearestPixel((designPx / 750) * DEVICE_WIDTH)
}


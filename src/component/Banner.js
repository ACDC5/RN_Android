import React, {Component} from 'react';
import {Text, View,Image,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import Touchable from "./Touchable";

import {DEVICE_WIDTH,getRealDP as dp} from '../utils/screenUtil'

class Banner extends Component {

    state = {currentBannerIndex:0}

    //获取当前轮播的下标
    getCurrentImgIndex = (imageIndex) => {
        this.setState({currentBannerIndex:imageIndex})
    }

    render() {
        const {bannerArr} = this.props
        const {currentBannerIndex} = this.state
        if (!bannerArr) {
            return(
                <View>
                    <Text>没有轮播数据</Text>
                </View>
                )
        }

        return (
            <View>
                <Swiper
                    style={styles.imgCarousel}
                    horizontal={true}
                    loop={true}
                    autoplay={true}
                    showPagination={false}
                    removeClippedSubViews={false}
                    onIndexChanged={this.getCurrentImgIndex}>
                    {
                        bannerArr.map(item => {
                            return <Touchable
                                key={item.id}
                                isWithoutFeedback={true}
                                onPress={() => alert('轮播图点击回调未实现')}>
                                <Image style={styles.imgBanner} source={{uri:item.imagePath}}/>
                            </Touchable>
                        })
                    }
                </Swiper>
                <View style={styles.bannerHint}>
                    <Text style={styles.bannerText}>
                        {/* TODO 没搞懂.bannerArr明明是个数组，这样写bannerArr[currentBannerIndex].title却会报错？非得写判断才正常,而且还非得用instanceof才行！
                            TODO　原因可能和请求数据的返回时机有关*/}
                        {bannerArr instanceof Array
                            ? 'bannerArr[currentBannerIndex].title'
                            : 'nothing'}
                    </Text>
                    <Text style={styles.bannerText}>
                        {currentBannerIndex + 1}/{bannerArr.length}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Banner;

const imageHeight = dp(380);
const styles = StyleSheet.create({

    imgCarousel:{
      height:imageHeight
    },
    imgBanner: {
        width: DEVICE_WIDTH,
        height: imageHeight,
        resizeMode: 'stretch',
    },

    bannerHint:{
        flex:1,
        width:DEVICE_WIDTH,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:dp(20),
        backgroundColor:'rgba(0,0,0,0.3)',
        height: dp(50),
        bottom:0,
        left:0,
        position:'absolute'

    },
    bannerText:{
        color:'#FFFFFF',
        fontSize:dp(28),
    }

})

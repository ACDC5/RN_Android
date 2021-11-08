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
        console.log('当前设备宽度：',DEVICE_WIDTH)
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
                    {/*//TODO*/}
                    <Text style={styles.bannerText} numberOfLines={1}>字呢？
                        {bannerArr.map(item => {
                            return item.title
                        })}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Banner;

const imageHeight = dp(380);
const styles = StyleSheet.create({
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
        fontSize:dp(28)
    }

})

import React, {Component} from 'react';
import {TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,Text,Image
} from 'react-native';

class Touchable extends Component {

    /**
     * 防重复点击处理事件
     * */
    onPreventDoublePress = () => {
        const {onPress} = this.props
        if(onPress) return onPress();
    }


    render() {
        //react自带的children属性:父组件中的标签内容，不是标签(组件)的属性
        const {isWithoutFeedback,children} = this.props
        /** TouchableWithoutFeedback 无视觉反馈触摸响应效果, 建议少使用 */
        if(isWithoutFeedback) {
            return (
                <TouchableWithoutFeedback
                    style={{backgroundColor: '#00FFF'}}
                    {...this.props}
                    onPress={this.onPreventDoublePress}>
                        {children}
                </TouchableWithoutFeedback>
            );
        }

    }
}

export default Touchable;

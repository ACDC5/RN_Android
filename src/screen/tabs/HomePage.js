import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from "react-redux";
import {getHomeBanner} from '../../api'

import ArticleItemRow from "../../component/ArticleItemRow";
import Banner from "../../component/Banner";
import CommonFlatList from "../../component/CommonFlatList";
import {fetchHomeBanner} from "../../actions";



class HomePage extends Component {

    async componentDidMount() {
        await this.onFetchData()
    }

    renderItem = ({item,index}) => {
        return (<Text key={item.id}>内容列表:{item.imagePath}</Text>)
    }



    //从服务器获取数据
    async onFetchData() {
        //Promese.all属于Promise的静态方法，所以不需要new实例(道理都懂，突然看到又想不起这个点)
            await Promise.all([fetchHomeBanner()])
    }

    //渲染轮播图
    renderHeader = () => {
        const {homeBanner} = this.props
        return (
            <View>
                <Banner
                    bannerArr={homeBanner}/>
            </View>
        )
    }

    render() {
        const {homeBanner} = this.props
        return (
            <View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <CommonFlatList
                    data={homeBanner}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        homeBanner:state.homeBanner
    }
)
export default connect(mapStateToProps)(HomePage)



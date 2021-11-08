import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {getHomeBanner} from '../../api'

import ArticleItemRow from "../../component/ArticleItemRow";
import Banner from "../../component/Banner";
import CommonFlatList from "../../component/CommonFlatList";



class HomePage extends Component {

    state = {
        page: 1, // 第一页page为0
        dataSource: [9,8,7], // 列表数据源
        homeList: {},
        homeBanner: [], // 首页轮播数据
        isRenderFooter: false, // 是否渲染列表footer
        isFullData: false, // 是否加载完全部数据
        websites: [], // 常用网站数据
        isRefreshing:false
    }

    componentDidMount() {
        this.onFetchData()
    }

    renderItem = ({item,index}) => {
        return (<Text key={item.id}>{item.imagePath}</Text>)
    }



    //从服务器获取数据
    async onFetchData() {
        //用promise的then方法获取返回的数据
        /*getHomeBanner().then(res => {
            this.setState({homeBanner:res.data.data})
        })*/
        //使用async/await写法
        const bannerData = await getHomeBanner()
        this.setState({homeBanner:bannerData.data.data})
    }

    //渲染轮播图
    renderHeader = () => {
        const {homeBanner} = this.state
        return (
            <View>
                <Banner
                    bannerArr={homeBanner}/>
            </View>
        )
    }

    render() {
        const {homeBanner} = this.state
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

export default HomePage;

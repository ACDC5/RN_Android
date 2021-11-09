/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import store from './src/store'
import {Provider} from "react-redux";
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';
import {MyNavigation,MyTabs} from './src'
import {setAxios} from "./src/service/setAxios";


class App extends PureComponent{

  componentDidMount(){
    // setAxios();//请求设置
  }

  render() {
    return (
        <Provider store={store}>
          <MyTabs/>
        </Provider>

    );
  }

};

export default App;

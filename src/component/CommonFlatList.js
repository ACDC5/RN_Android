import React, {Component} from 'react';
import {View,FlatList} from 'react-native';

class CommonFlatList extends Component {
    render() {
        return (
            <View>
                <FlatList
                    {...this.props}
                />
            </View>
        );
    }
}

export default CommonFlatList;

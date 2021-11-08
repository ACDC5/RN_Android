import React, {Component} from 'react';
import {Text, View,Touchable} from 'react-native';

class ArticleItemRow extends Component {
    render() {
        const {dataSource} = this.props
        return (
            <View>
                {dataSource.map((item) => {
                    return (
                        <Text key={item.id}>
                            {item.title}
                        </Text>
                    )
                })}
            </View>
        );
    }
}

export default ArticleItemRow;

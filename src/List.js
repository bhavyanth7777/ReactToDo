import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class List extends Component {

    // create function renderItem
    renderItem = (text, i) => {

        const {onPressItem} = this.props;

        return (
            <TouchableOpacity style={styles.item} onPress={() => onPressItem(i)}>
                <Text>{text}</Text>
            </TouchableOpacity>
        );
    }

    render(){
        const {list} = this.props;

        return(
            <View>
                {list.map(this.renderItem)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
    },
});
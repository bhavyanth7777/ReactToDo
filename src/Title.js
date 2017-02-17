import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Title extends Component {
    render() {
        const { children } = this.props;

        return (
            <View style={styles.header}>
                <Text style={styles.title}>{children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 5
  },
})
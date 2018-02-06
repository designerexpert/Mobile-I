import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles.js';
// https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.NavContainer}>
                <Image style={styles.optionsImage} source={{ uri: `https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png` }} />
                <TextInput style={styles.searchBar} placeholder='search' underlineColorAndroid='transparent'></TextInput>
            </View>
        );
    }
}
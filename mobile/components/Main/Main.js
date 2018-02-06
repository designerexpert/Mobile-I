import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles.js';
//https://lambdaschool.com/assets/img/background.jpg
export default class Main extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.division}>
                    <Image style={styles.bannerImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View>
                    <Text>Some Random Header</Text>
                </View>
            </View>
        );
    }
}
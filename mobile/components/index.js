import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Post from './Post/Post';
import { StackNavigator } from 'react-navigation';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Nav />
            <Main />
        </View>
    );
}

const PostPage = () => {
    return (
        <View style={styles.container}>
            <Nav />
            <Post />
        </View>
    );
}

const myApp = StackNavigator({
    HomePage: { screen: HomePage },
    PostPage: { screen: PostPage },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100%',
    },
});
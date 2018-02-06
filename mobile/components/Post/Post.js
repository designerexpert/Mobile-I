import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles.js';

export default class Post extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        this.setState(this.props);
    }

    render() {
        return (
            <View style={styles.PostContainer}>
                <View>
                    <Text style={styles.header}>{this.state.header}</Text>
                    <Image
                        style={styles.postImage}
                        source={{ uri: this.state.imgUrl }}
                    />
                </View>
                <View style={styles.interactButtons}>
                    <TouchableOpacity onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Like'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Share'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Comment'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.comments}>
                    <FlatList
                        data={this.state.comments}
                        renderItem={({ item, index }) => {
                            return (
                                <Text key={index} style={styles.comment}>{item.userName}{':  '}{item.comment}</Text>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }

}
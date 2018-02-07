import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
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
            <ScrollView style={styles.PostContainer}>
                <View>
                    <Text style={styles.header}>{this.state.header}</Text>
                    <Image
                        style={styles.postImage}
                        source={{ uri: this.state.imgUrl }}
                    />
                </View>
                <View style={styles.interactButtons}>
                    <TouchableOpacity style={styles.buttonsOpacity} onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Like'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Share'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { console.log('I was Pressed') }}>
                        <Text style={styles.button}>{'Comment'}</Text>
                    </TouchableOpacity>
                </View>
                
                    <FlatList style={styles.InnerComments}
                        data={this.state.comments}
                        renderItem={({ item, index }) => {
                            return (
                                <Text key={item.id} style={styles.comment}>{item.userName}{':  '}{item.comment}</Text>
                            );
                        }}
                    />
                
            </ScrollView>
        );
    }

}
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
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
            <ScrollView style={styles.MainContainer}>
                <View style={styles.division}>
                    <Image style={styles.bannerImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View style={styles.division}>
                    <Text style={styles.headerText}>Some Random Header</Text>
                </View>
                <View style={styles.division}>
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View style={styles.division}>
                    <Text style={styles.imageComments}>
                        This is a bunch of smaller text that is giving information about the two images above. You might see this kind of design in a news site.
                    </Text>
                </View>
                <View style={styles.division}>
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View style={styles.division}>
                    <Text style={styles.imageComments}>
                        This is a bunch of smaller text that is giving information about the two images above. You might see this kind of design in a news site.
                    </Text>
                </View>
                <View style={styles.division}>
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View style={styles.division}>
                    <Text style={styles.imageComments}>
                        This is a bunch of smaller text that is giving information about the two images above. You might see this kind of design in a news site.
                    </Text>
                </View>
                <View style={styles.division}>
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                    <Image style={styles.doubleImage} source={{ uri: 'https://lambdaschool.com/assets/img/background.jpg' }} />
                </View>
                <View style={styles.division}>
                    <Text style={styles.imageComments}>
                        This is a bunch of smaller text that is giving information about the two images above. You might see this kind of design in a news site.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}
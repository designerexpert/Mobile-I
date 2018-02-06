import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post/Post.js';
import Nav from './components/Nav/Nav.js';
import Main from './components/Main/Main.js';
let comments = [
  {
    userName: 'Bobby',
    comment: 'Hi This Rocks, Stop Hiding and get to work!'
  },
  {
    userName: 'Ana',
    comment: 'Are you even at the office today?'
  },
  {
    userName: 'Joseph',
    comment: 'I see you!'
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Nav /> */}
        <Post header={'Header Text Testing'} imgUrl={'https://lambdaschool.com/assets/img/istock1.jpg'} comments={comments} />
        {/* <Main /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
  },
});

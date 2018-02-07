import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post/Post.js';
import Nav from './components/Nav/Nav.js';
import Main from './components/Main/Main.js';
import { StackNavigator } from 'react-navigation';

let comments = [
  {
    id: 1,
    userName: 'Bobby',
    comment: 'Hi This Rocks, Stop Hiding and get to work!'
  },
  {
    id: 2,
    userName: 'Ana',
    comment: 'Are you even at the office today?'
  },
  {
    id: 3,
    userName: 'Joseph',
    comment: 'I see you!'
  },
  {
    id: 4,
    userName: 'Bobby',
    comment: 'Hi This Rocks, Stop Hiding and get to work!'
  },
  {
    id: 5,
    userName: 'Ana',
    comment: 'Are you even at the office today?'
  },
  {
    id: 6,
    userName: 'Joseph',
    comment: 'I see you!'
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav />
        {/* <Post
          header={'Header'}
          imgUrl={'https://lambdaschool.com/assets/img/istock1.jpg'}
          comments={comments}
        /> */}
        <Main />
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

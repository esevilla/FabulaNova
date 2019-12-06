import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hola></Text>
        <TouchableOpacity onPress={() => Actions.Characters()}>
          <Text>{'IR A PERSONAJES'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Home;

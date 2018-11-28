import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Color} from '../assets/colors';


class JamSession extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>JamSession</Text>
          <Text style={styles.subheader}>Coming Soon</Text>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.background, //'#4F4F4F'

  },
  title: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 40
  },
  subheader: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 20
  },
});

export default JamSession;

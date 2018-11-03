import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class JamSession extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>JamSession</Text>
      </View>
    );
  }
}

export default JamSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

class Public extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Public</Text>
      </View>
    );
  }
}

export default Public;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

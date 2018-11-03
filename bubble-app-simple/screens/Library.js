import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class Library extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Library</Text>
        </View>
      );
    }
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

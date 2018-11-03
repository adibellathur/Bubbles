import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class Library extends Component {
    render() {
      return (
        <View styles={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <Text>Library</Text>
        </View>
      );
    }
}

export default Library;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UserPage from '../components/UserPage';

class Public extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Public</Text>
          <UserPage message = {'Generic userpage message!!'}/>
        </View>
      </SafeAreaView>
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

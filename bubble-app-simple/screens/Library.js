import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Library extends Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <StatusBar backgroundColor="blue" barStyle="light-content"/>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Library</Text>
          </View>
          <View style={styles.searchbar}>
            <Icon name='ios-search' size={30} />
          </View>
        </SafeAreaView>

      );
    }
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
      height: 100,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#dddddd',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      paddingTop: 20,
      color: 'blue',
      fontSize: 20
    },
    searchbar: {
      paddingLeft: 50,
      height: 50,
      justifyContent: 'center'
    }
});

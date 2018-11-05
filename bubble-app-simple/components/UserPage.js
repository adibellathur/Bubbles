import React, {Component} from 'react';
import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native';
import UserProfile from './UserProfile';
import {Users} from '../src/data.js'

class UserPage extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		message: this.props.message,
      users: Users
  	}
  }

  render() {
    return (  
        <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <FlatList data= {this.state.users}
          renderItem={
            ({item}) => <UserProfile person = {item}/>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
    );
  }
}

export default UserPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center'
    }
});
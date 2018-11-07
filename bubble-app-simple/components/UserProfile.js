import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class UserProfile extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      person: this.props.person
    }
  }
  render() {
    user = this.state.person
    return (
      <View>
        <Text>Here's a person!</Text>
        <Text>{user.firstName}</Text>
        <Text>{user.lastName}</Text>
        <Text>This user has: {user.Followers.length} followers.</Text>
      </View>
    );
  }
}

export default UserProfile;

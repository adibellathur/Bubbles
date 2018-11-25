import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Public from './screens/Public';
import Library from './screens/Library';
import LibraryNew from './screens/LibraryNew'; 
import JamSession from './screens/JamSession';
import {Color} from './assets/colors';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
    Public: {
        screen: Public,
        navigationOptions: {
             tabBarLabel: 'PUBLIC',
             tabBarIcon: ({tintColor}) => (
                 <Icon name="ios-people"
                 color={tintColor}
                 size={24}/>
             ),
         }
    },
    Library: {
        screen: Library,
        navigationOptions: {
             tabBarLabel: 'LIBRARY',
             tabBarIcon: ({tintColor}) => (
                 <Icon name="ios-home"
                 color={tintColor}
                 size={24}/>
             ),
         }
    },
    LibNew: {
        screen: LibraryNew,
        navigationOptions: {
             tabBarLabel: 'LibNew',
             tabBarIcon: ({tintColor}) => (
                 <Icon name="ios-home"
                 color={tintColor}
                 size={24}/>
             ),
         }
    },
    JamSession: {
        screen: JamSession,
        navigationOptions: {
             tabBarLabel: 'JAMSESSION',
             tabBarIcon: ({tintColor}) => (
                 <Icon name="ios-musical-notes"
                 color={tintColor}
                 size={24}/>
             ),
        }
      }
  },
  {
    tabBarOptions: {
        inactiveTintColor: 'grey',
        activeTintColor: Color.primaryblue,
        style: {
            backgroundColor: Color.backgroundtabbar,
            borderTopWidth: 0,
            shadowOffset: {width:5, height:3},
            shadowColor: 'black',
            shadowOpacity: 0.9,
            elevation: 1
        },
    },
      initialRouteName: 'Library'
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

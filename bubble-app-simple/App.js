import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';

import BrowseStack from './screens/BrowseStack';
import BrowseScreen from './screens/Browse';
import LibraryStack from './screens/LibraryStack';
import ProjectScreen from './screens/Project';
import JamSession from './screens/JamSession';
import {Color} from './assets/colors';
import Expo from 'expo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.initData();
    Expo.Assets;
  }

  async initData() {
    await AsyncStorage.setItem('test', 'I like to save it.');
  }

  render() {
    return (
        <BottomTabNav/>
    );
  }

}

export default App;

const BottomTabNav = createBottomTabNavigator({
    Browse: {
        screen: BrowseStack,
        navigationOptions: {
             tabBarLabel: 'Browse',
             tabBarIcon: ({tintColor}) => (
                 <Icon name="ios-people"
                 color={tintColor}
                 size={24}/>
             ),
         }
    },
    Library: {
        screen: LibraryStack,
        navigationOptions: {
             tabBarLabel: 'Library',
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
        activeTintColor: Color.indigopalette[1],
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

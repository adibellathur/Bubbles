import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TextInput,
    Platform,
    TouchableOpacity,
    Dimensions,
    Image,
    Button
}
from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {Asset, FileSystem, Font, Permissions} from 'expo';

import {Color} from '../assets/colors';
import ProjectScreen from './Project';
import LibraryScreen from './LibraryNew';

class LibraryStack extends Component {
    render() {
        return (
            <StackNavigator/>
        );
    }
}

const StackNavigator =  createStackNavigator(
  {
    Library: {
      screen: LibraryScreen
    },
    Project: {
      screen: ProjectScreen
    }
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: Color.background },
  },
);

export default LibraryStack;

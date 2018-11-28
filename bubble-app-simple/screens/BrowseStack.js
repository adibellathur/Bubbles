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
import BrowseScreen from './Browse';

class BrowseStack extends Component {
    render() {
        return (
            <StackNavigator/>
        );
    }
}

const StackNavigator =  createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen
    }
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: Color.background },
  },
);

export default BrowseStack;

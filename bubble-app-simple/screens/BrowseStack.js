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
import JayZScreen from './JayZ';
import BounceSynthScreen from './BounceSynth'
import FastAcousticScreen from './FastAcoustic'
import CharliePuthScreen from './CharliePuth'

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
    },
    JayZ: {
      screen: JayZScreen
    },
    BounceSynth: {
      screen: BounceSynthScreen
    },
    FastAcoustic: {
      screen: FastAcousticScreen
    },
    CharliePuth: {
        screen: CharliePuthScreen
    }
    

  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: Color.background },
  },
);

export default BrowseStack;

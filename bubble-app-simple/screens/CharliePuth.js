import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform,
  TouchableOpacity,
  AsyncStorage } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { Asset, Audio, FileSystem, Font, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';
import GridView from 'react-native-super-grid';
import {Color} from '../assets/colors'

class CharliePuthScreen extends Component {
  constructor(props) {
    super(props);
    this.getData();
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });

    Permissions.askAsync(Permissions.AUDIO_RECORDING);
    Expo.Audio.setIsEnabledAsync(true);

    this.state = {
      playing: false,
      isRecording: false,
      isPlaying: false,
      items: [
        { id: 0, name: 'Intro Guitar', code: Color.indigopalette[0], sound: null , src: require('../assets/Attention/1_Intro_Guitar.mp3') }, { id: 1,name: 'Runnin Round', code: Color.indigopalette[1], sound: null , src: require('../assets/Attention/2_Runnin_Round.mp3')  },
        { id: 2, name: 'You Knew', code: Color.indigopalette[2], sound: null , src: require('../assets/Attention/3_You_Knew.mp3') }, { id: 3, name: 'Whoa', code: Color.indigopalette[3], sound: null , src: require('../assets/Attention/4_Whoa.mp3') },
        { id: 4, name: 'Short Pick', code: Color.indigopalette[4], sound: null , src: require('../assets/Attention/5_Short_Pick.mp3') }, { id: 5, name: 'You Got Me', code: Color.indigopalette[5], sound: null , src: require('../assets/Attention/6_You_Got_Me.mp3') },
        { id: 6, name: 'Chorus', code: Color.indigopalette[6], sound: null , src: require('../assets/Attention/7_Chorus.mp3') }, { id: 7, name: 'Sparkle', code: Color.indigopalette[7], sound: null , src: require('../assets/Attention/8_Sparkle.mp3') }
      ],
      sounds: []
    }

    this.playing = [];
    for(i=0 ; i<this.state.items.length ; i++) {
      new_sound = new Audio.Sound();
      item = this.state.items[i];
      new_sound.loadAsync(
        item.src,
        initialStatus={androidImplementation: 'MediaPlayer'},
        downloadFirst = true
      );
      this.state.sounds.push(new_sound);
      this.playing.push(false);
    }

    this.soundObject = new Audio.Sound();
    this.soundObject.loadAsync(
      require('../assets/444/01KillJayZ.mp3'),
      initialStatus={androidImplementation: 'MediaPlayer'},
      downloadFirst = true
    );

    this.recording = new Expo.Audio.Recording();
    this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
    console.log(this.state.sounds.length);
  }

  static navigationOptions = {
    header: null
  };

  async getData() {
    console.log("THIS: " + await AsyncStorage.getItem('test'));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content"/>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Attention</Text>
        </View>
        <GridView
          itemDimension={130}
          items={this.state.items}
          style={styles.gridView}
          renderItem={(item) => (
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]}
              onPress={this.loadSounds.bind(this, item)}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }

  loadSounds = async (item) => {
    if(this.playing[item.id] == false) {
      try {
        console.log("PLAYING")
        this.state.sounds[item.id].playAsync();
        this.playing[item.id] = true;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log("PAUSING")
        this.state.sounds[item.id].stopAsync();
        this.playing[item.id] = false;
      } catch(error) {
        console.log(error);
      }
    }
  }
}

export default CharliePuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: Color.background,
    },
    header: {
      height: 60,
      borderBottomWidth: 0,
      borderBottomColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS=='android' ? 20 : null
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 30
    },
    searchbararea: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 80,
    },
    searchbaricon: {
      margin: 10,
      color: Color.light
    },
    searchbar: {
      flexDirection: 'row',
      margin: 10,
      backgroundColor: Color.backgroundlight,
      shadowOffset: {width:0, height:0},
      shadowOpacity: 0.2,
      shadowColor: 'black',
      borderRadius: 20,
      elevation:1,
      marginTop: Platform.OS=='android' ? 30 : null
    },
    searchbartext: {
      flex: 1,
      fontWeight: '700',
      backgroundColor: Color.backgroundlight,
      borderRadius: 20,
      marginRight: 10,
      height: 45,
    },
    fab: {
      position: 'absolute',
      margin: 24,
      bottom: 0
    },
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 95,
      padding: 10,
      margin: 5,
      height: 160,
      width: 160,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    }
});

// <View style={styles.searchbararea}>
//   <View style={styles.searchbar}>
//     <Icon name='ios-search' size={20} style={styles.searchbaricon} />
//     <TextInput placeholder='find your thoughts...'
//     placeholderTextColor='grey'
//     style={styles.searchbartext}/>
//   </View>
// </View>

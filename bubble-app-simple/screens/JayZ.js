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

class JayZScreen extends Component {
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
        { id: 0, name: 'Kill JayZ', code: Color.redpalette[0], sound: null , src: require('../assets/444/01KillJayZ.mp3') }, { id: 1,name: 'The Story of OJ', code: Color.redpalette[1], sound: null , src: require('../assets/444/02TheStoryofOJ.mp3')  },
        { id: 2, name: 'Smile', code: Color.redpalette[2], sound: null , src: require('../assets/444/03Smile.mp3') }, { id: 3, name: 'Caught Their Eyes', code: Color.redpalette[3], sound: null , src: require('../assets/444/04CaughtTheirEyes.mp3') },
        { id: 4, name: '4:44', code: Color.redpalette[4], sound: null , src: require('../assets/444/05-4_44.mp3') }, { id: 5, name: 'Family Feud', code: Color.redpalette[5], sound: null , src: require('../assets/444/06FamilyFeud.mp3') },
        { id: 6, name: 'Bam', code: Color.redpalette[6], sound: null , src: require('../assets/444/07Bam.mp3') }, { id: 7, name: 'Moonlight', code: Color.redpalette[7], sound: null , src: require('../assets/444/08Moonlight.mp3') },
        { id: 8, name: 'Marcy Me', code: Color.redpalette[0], sound: null , src: require('../assets/444/09MarcyMe.mp3') }, { id: 9, name: 'Legacy', code: Color.redpalette[1], sound: null , src: require('../assets/444/10Legacy.mp3') }
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
          <Text style={styles.title}>4:44</Text>
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

export default JayZScreen;

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
      height: 180,
      width: 180,
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

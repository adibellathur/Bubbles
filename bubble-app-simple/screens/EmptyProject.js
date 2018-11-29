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

class EmptyProjectScreen extends Component {
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
        // { id: 0, name: 'TURQUOISE', code: Color.indigopalette[0], sound: null , src: require('../assets/444/01KillJayZ.mp3') }, { id: 1,name: 'EMERALD', code: Color.indigopalette[1], sound: null , src: require('../assets/444/02TheStoryofOJ.mp3')  },
        // { id: 2, name: 'PETER RIVER', code: Color.indigopalette[2], sound: null , src: require('../assets/444/03Smile.mp3') }, { id: 3, name: 'AMETHYST', code: Color.indigopalette[3], sound: null , src: require('../assets/444/04CaughtTheirEyes.mp3') },
        // { id: 4, name: 'WET ASPHALT', code: Color.indigopalette[4], sound: null , src: require('../assets/444/05-4_44.mp3') }, // { id: 5, name: 'GREEN SEA', code: Color.indigopalette[5], sound: null , src: require('../assets/444/06FamilyFeud.mp3') },
        // { id: 6, name: 'NEPHRITIS', code: Color.indigopalette[6], sound: null , src: require('../assets/444/07Bam.mp3') }, { id: 7, name: 'BELIZE HOLE', code: Color.indigopalette[7], sound: null , src: require('../assets/444/08Moonlight.mp3') },
        // { id: 8, name: 'WISTERIA', code: Color.indigopalette[0], sound: null , src: require('../assets/444/09MarcyMe.mp3') }, { id: 9, name: 'MIDNIGHT BLUE', code: Color.indigopalette[1], sound: null , src: require('../assets/444/10Legacy.mp3') }
      ],
      sounds: []
    }

    this.playing = [];
    for(i=0 ; i<this.state.items.length ; i++) {
      new_sound = new Audio.Sound();
      item = this.state.items[i];
      new_sound.loadAsync(
        item.src,
        initialStatus={androidImplementation: 'MediaPlayer', isLooping: true},
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
          <Text style={styles.title}>Project #2</Text>
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
        <FAB style={[styles.fab, this.state.isRecording ? { backgroundColor: 'red' } : {backgroundColor: Color.primaryblue}]}
        extended
        icon="mic"
        label= {this.state.isRecording ? 'Recording' : 'Record'}
        onPress={this.handlerRecordingButtonOnClick.bind(this)}/>
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

  async handlerRecordingButtonOnClick() {
    if(this.state.isRecording == false) {
      console.log("STARTING RECORDING");
      this.setState({
        isRecording: true
      });

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        playsInSilentLockedModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });

      try {
        const status = await this.recording.getStatusAsync();
        if (this.recording !== null) {
          this.recording.setOnRecordingStatusUpdate(null);
          this.recording = null;
          this.recording = new Expo.Audio.Recording();
        }
        await this.recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await this.recording.startAsync();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("STOPPING RECORDING AND SAVING");
      this.setState({
        isRecording: false
      });
      try {
        await this.recording.stopAndUnloadAsync();
      } catch (error) {
        console.log(error);
      }
      const info = await FileSystem.getInfoAsync(this.recording.getURI());
      console.log(`FILE INFO: ${JSON.stringify(info)}`);
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        playsInSilentLockedModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
      const { sound, status } = await this.recording.createNewLoadedSoundAsync(
        {
          isLooping: true,
          isMuted: this.state.muted,
          volume: this.state.volume,
          rate: this.state.rate,
          shouldCorrectPitch: this.state.shouldCorrectPitch,
        },
        null
      );

      const copySounds = Object.assign([],this.state.sounds);
      copySounds.push(await sound);

      const copyItems = Object.assign([], this.state.items);
      copyItems.push({
        id: this.state.sounds.length,
        name: 'Recording #' + this.state.sounds.length,
        code: Color.indigopalette[this.state.sounds.length % Color.indigopalette.length],
        src: null
      });

      this.setState({
        sounds: copySounds,
        items: copyItems
      });

      this.playing.push(false);
    }
  }
}

export default EmptyProjectScreen;

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
      width: '100%'
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
      color: Color.light,
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: Color.light,
    }
});

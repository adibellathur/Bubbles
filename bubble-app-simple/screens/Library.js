import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';
import Expo, { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

class Library extends Component {
  constructor(props) {
    super(props);
    this.recording = null;
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      haveRecordingPermissions: false,
      isLoading: false,
      isPlaybackAllowed: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isRecording: false,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
    };
    this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
  }

  async componentDidMount() {
    try {
      Audio.setAudioModeAsync({
        playsInBackgroundModeIOS: true,
        playsInBackgroundModeAndroid: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        playsInSilentLockedModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false
      });
    } catch (e) {
      this.props.errorCallback({
        type: 'NON_FATAL',
        message: 'setAudioModeAsync error',
        obj: e,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar backgroundColor="blue" barStyle="light-content"/>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Library</Text>
        </View>
        <View style={styles.searchbararea}>
          <View style={styles.searchbar}>
          <Icon name='ios-search' size={20} style={styles.searchbaricon} />
          <TextInput placeholder='find your thoughts...'
          placeholderTextColor='grey'
          style={styles.searchbartext}/>
          </View>
        </View>
        <FAB style={styles.fab}
        extended
        icon="mic"
        label='Record'
          onPress={ async () => {
            const soundObject = new Audio.Sound();
            try {
              await soundObject.loadAsync(require('https://song.link/us/i/159293848'),
              initialStatus = {},
              onPlaybackStatusUpdate = null,
              downloadFirst = true);
              await soundObject.playAsync();
            } catch (error) {
              console.log(error);
              throw error;
            }
          }}
        />
      </SafeAreaView>

    );
  }
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'white'
    },
    header: {
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: 'grey',
      fontWeight: '700',
      fontSize: 20
    },
    searchbararea: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: 80,
    },
    searchbaricon: {
      margin: 10
    },
    searchbar: {
      flexDirection: 'row',
      margin: 10,
      backgroundColor: 'white',
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
      backgroundColor: 'white',
      borderRadius: 20,
      marginRight: 10
    },
    fab: {
      position: 'absolute',
      margin: 24,
      bottom: 0,
      backgroundColor: 'lightblue'
    }
});

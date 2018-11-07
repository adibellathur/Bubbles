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
import { Asset, Audio, FileSystem, Font, Permissions } from 'expo';

class Library extends Component {
  constructor(props) {
    super(props);
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
            try {
              await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                playThroughEarpieceAndroid: false,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
              });
              await Permissions.askAsync(Permissions.AUDIO_RECORDING);
              await Expo.Audio.setIsEnabledAsync(true);
              const soundObject = new Audio.Sound();
              await soundObject.loadAsync(
                require('../assets/sounds/01KillJayZ.mp3'),
                initialStatus={androidImplementation: 'MediaPlayer'},
                downloadFirst = true
              );
              await soundObject.playAsync();
            } catch (error) {
              console.log("ERROR: " + error);
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

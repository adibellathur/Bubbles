var users = [
    {
        name: 'Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. ',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]


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
    Image
}
from 'react-native';
import {Asset, Audio, FileSystem, Font, Permissions} from 'expo';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';
import GridView from 'react-native-super-grid';
import {Color} from '../assets/colors'

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            isRecording: false,
            isPlaying: false,
            items: null
        }

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

        this.soundObject = new Audio.Sound();
        this.soundObject.loadAsync(require('../assets/sounds/01KillJayZ.mp3'), initialStatus = {
            androidImplementation: 'MediaPlayer'
        }, downloadFirst = true);
        this.state.items = [
            {
                id: 0,
                name: 'TURQUOISE',
                code: '#1abc9c',
                sound: null,
                src: require('../assets/sounds/01KillJayZ.mp3')
            }, {
                id: 1,
                name: 'EMERALD',
                code: '#2ecc71',
                sound: null,
                src: require('../assets/sounds/02TheStoryofOJ.mp3')
            }, {
                id: 2,
                name: 'PETER RIVER',
                code: '#3498db',
                sound: null,
                src: require('../assets/sounds/03Smile.mp3')
            }, {
                id: 3,
                name: 'AMETHYST',
                code: '#9b59b6',
                sound: null,
                src: require('../assets/sounds/04CaughtTheirEyes.mp3')
            }, {
                id: 4,
                name: 'WET ASPHALT',
                code: '#34495e',
                sound: null,
                src: require('../assets/sounds/05-4_44.mp3')
            }, {
                id: 5,
                name: 'GREEN SEA',
                code: '#16a085',
                sound: null,
                src: require('../assets/sounds/06FamilyFeud.mp3')
            }, {
                id: 6,
                name: 'NEPHRITIS',
                code: '#27ae60',
                sound: null,
                src: require('../assets/sounds/07Bam.mp3')
            }, {
                id: 7,
                name: 'BELIZE HOLE',
                code: '#2980b9',
                sound: null,
                src: require('../assets/sounds/08Moonlight.mp3')
            }, {
                id: 8,
                name: 'WISTERIA',
                code: '#8e44ad',
                sound: null,
                src: require('../assets/sounds/09MarcyMe.mp3')
            }, {
                id: 9,
                name: 'MIDNIGHT BLUE',
                code: '#2c3e50',
                sound: null,
                src: require('../assets/sounds/10Legacy.mp3')
            }
        ];
        this.sounds = [];
        this.playing = [];
        for (i = 0; i < this.state.items.length; i++) {
            new_sound = new Audio.Sound();
            item = this.state.items[i];
            new_sound.loadAsync(item.src, initialStatus = {
                androidImplementation: 'MediaPlayer'
            }, downloadFirst = true);
            this.sounds.push(new_sound);
            this.playing.push(false);
        }

        this.recording = new Expo.Audio.Recording();
        this.recordingSettings = JSON.parse(JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY));
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
                        <Icon name='ios-search' size={20} style={styles.searchbaricon}/>
                    <TextInput placeholder='Search' placeholderTextColor='grey' style={styles.searchbartext}/>
                    </View>
                </View>


                <Card title='Lorem Ipsum' containerStyle={styles.cardStyle} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    {
                        users.map((u, i) => {
                            return (
                                <Text style={{color:'#fff', width: 150}}>
                                    {u.name}
                                </Text>

                            );
                        })
                    }
                </Card>

        </SafeAreaView>);
    }
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4F4F4F'
    },
    header: {
        height: 60,
        borderBottomWidth: 0,
        borderBottomColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios'
            ? 20
            : null
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 40
    },
    searchbararea: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 80
    },
    searchbaricon: {
        margin: 10,
        color: Color.light
    },
    searchbar: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: Color.backgroundlight,
        shadowOffset: {
            width: 0,
            height: 0
        },
        width: Dimensions.get('window').width * .9,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        borderRadius: 10,
        elevation: 1,
        marginBottom: 30,
        marginTop: Platform.OS == 'ios'
            ? 30
            : null
    },
    searchbartext: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: Color.backgroundlight,
        borderRadius: 10,
        marginRight: 10,
        height: 45,
        color: '#fff'
    },
    fab: {
        position: 'absolute',
        margin: 24,
        bottom: 0
    },
    gridView: {
        paddingTop: 25,
        flex: 1
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
        fontWeight: '600'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff'
    },
    cardStyle: {
        borderRadius: 10,
        borderColor: '#FB6868',
        width: Dimensions.get('window').width * .9,
        backgroundColor: '#FB6868',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        },
        paddingBottom: 30
    },
    cardDivider: {
        opacity: 0
    },
    cardTitle: {
        fontSize: 30,
        textAlign: 'left',
        color: '#fff'
    }
});

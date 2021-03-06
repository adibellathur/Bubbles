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
} from 'react-native';

import {Asset, FileSystem, Font, Permissions} from 'expo';
import { Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../assets/colors';

class LibraryScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      header: null
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

                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Project') }>
                  <Card title='Project #1' containerStyle={styles.cardStyle} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Text style={{color: Color.light, width: "100%", fontSize: 18}}>This is a description of your project. It can be as long or as short as you want, as long as it gets the job done</Text>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('EmptyProject') }>
                  <Card title='Project #2' containerStyle={[styles.cardStyle,{backgroundColor: Color.indigopalette[3], borderColor: Color.indigopalette[3]}]} titleStyle={styles.cardTitleLight} dividerStyle={styles.cardDivider}>
                    <Text style={{color: Color.light, width: "100%", fontSize: 18}}>This is an empty project. Let your ideas flow!</Text>
                  </Card>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default LibraryScreen;

var users = [
    {
        name: 'Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. ',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.background, //'#4F4F4F'

    },
    header: {
        height: 60,
        borderBottomWidth: 0,
        borderBottomColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS == 'ios'
            ? 20
            : 30
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
        borderRadius: 22,
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
        borderRadius: 22,
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
        borderRadius: 20,
        borderColor: Color.greenpalette[1],
        width: Dimensions.get('window').width * .9,
        backgroundColor: Color.greenpalette[1],
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
        color: Color.light
    },
    cardTitleLight: {
        fontSize: 30,
        textAlign: 'left',
        color: Color.light
    }
});

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
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

class BrowseScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View>
              <StatusBar backgroundColor="blue" barStyle="light-content"/>
          </View>
          <View style={styles.header}>
              <Text style={styles.title}>Browse</Text>
          </View>
          <View style={styles.searchbararea}>
              <View style={styles.searchbar}>
                  <Icon name='ios-search' size={20} style={styles.searchbaricon}/>
              <TextInput placeholder='Search' placeholderTextColor='grey' style={styles.searchbartext}/>
              </View>
          </View>
          <ScrollView style={{flex: 1}} scrollEventThrottle={16}>
            <View style={{flex: 1, marginTop: 10, justifyContent: 'flex-start'}}>
              <Text style={styles.subheader}>Popular Bubbles</Text>
              <ScrollView horizontal={true} style={{marginLeft:30}}>
                <TouchableOpacity style={{flex:1}} onPress={ () => this.props.navigation.navigate('JayZ') }>
                  <Card title='4:44' containerStyle={[styles.cardStyle, {backgroundColor: Color.redpalette[0], borderColor: Color.redpalette[0]}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/jayz.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={ () => this.props.navigation.navigate('BounceSynth') }>
                  <Card title='Bounce Synth' containerStyle={[styles.cardStyle, {backgroundColor: '#41c2ff', borderColor: '#41c2ff'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/andrew.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                  <Card title='MLSA -Ideas' containerStyle={[styles.cardStyle, {backgroundColor: '#6de8a4', borderColor: '#6de8a4'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/melisa.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={ () => this.props.navigation.navigate('FastAcoustic')}>
                  <Card title='Fast Acoustic' containerStyle={[styles.cardStyle, {backgroundColor: '#367ae8', borderColor: '#367ae8'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/andrew.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={{flex: 1, marginTop: 40, justifyContent: 'center'}}>
              <Text style={styles.subheader}>Discover New Bubbles</Text>
              <View style={{flex: 1, width: "100%", marginTop: 10, alignItems: 'center'}} >
                <TouchableOpacity style={{flex:1}} onPress={ () => this.props.navigation.navigate('FastAcoustic')}>
                  <Card title='Fast Acoustic' containerStyle={[styles.bigCardStyle, {backgroundColor: '#367ae8', borderColor: '#367ae8'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/andrew.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                  <Card title='Rain Sounds' containerStyle={[styles.bigCardStyle, {backgroundColor: '#4857ff', borderColor: '#4857ff'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/adithya.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={ () => this.props.navigation.navigate('BounceSynth') }>
                  <Card title='Bounce Synth' containerStyle={[styles.bigCardStyle, {backgroundColor: '#41c2ff', borderColor: '#41c2ff'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/andrew.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                  <Card title='MLSA -Ideas' containerStyle={[styles.bigCardStyle, {backgroundColor: '#6de8a4', borderColor: '#6de8a4'}]} titleStyle={styles.cardTitle} dividerStyle={styles.cardDivider}>
                    <Image source={require("../assets/img/melisa.jpg")} style={{width:36, height:36, borderRadius: 18, resizeMode: 'cover'}}/>
                  </Card>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      </SafeAreaView>
    );
  }

  static navigationOptions = {
    header: null
  }

}

export default BrowseScreen;

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
        borderRadius: 22,
        elevation: 1,
        marginBottom: 30,
        marginTop: Platform.OS == 'ios'
            ? 20
            : 30
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
    subheader: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 30,
        marginHorizontal: 30
    },
    cardStyle: {
        borderRadius: 20,
        borderColor: '#1abc9c',
        width: Dimensions.get('window').width * 0.4,
        height:180,
        backgroundColor: '#1abc9c',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        },
        justifyContent:'flex-right',
        marginHorizontal: 5
    },
    bigCardStyle: {
        borderRadius: 20,
        borderColor: '#1abc9c',
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#1abc9c',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    cardDivider: {
        opacity: 0
    },
    cardTitle: {
        fontSize: 30,
        textAlign: 'left',
        color: '#fff'
    },
    cardArtist: {
        fontSize: 20,
        textAlign: 'left',
        color: '#fff',
        marginTop:0
    }
});

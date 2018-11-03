import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class Library extends Component {
    // return (
    //     <SafeAreaView style={{flex:1}}>
    //         <View style={{flex:1}}>
    //             <View style={{height:80, backgroundColor: 'white',
    //             bottomBorderWidth: 1, bottomBorderColor: '#dddddd'}}>
    //                 <Text>
    //                     Library
    //                 </Text>
    //             </View>
    //         </View>
    //     </SafeAreaView>
    // );
    render() {
      return (
        <View styles={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <Text>Library</Text>
        </View>
      );
    }
}

export default Library;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

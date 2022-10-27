import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image, ScrollView } from "react-native";

export default class Header3 extends Component {
  render() {
    return (
        <ScrollView horizontal={true}>
        <View style={StyleSheet.mainView}>

<TouchableOpacity style={styles.airtel} onPress={() => alert('clicked button')}>
<Image source={require('../assets/airtel.png')} style={styles.sortImg} />
<Image source={require('../assets/airtel.png')} style={styles.sortImg} />
<Image source={require('../assets/airtel.png')} style={styles.sortImg} />
            </TouchableOpacity>
</View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    mainView:{
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 15,    
    },
    sortImg:{
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop:18,
       marginHorizontal:10,
        // margin:20,
    },
    airtel:{
        flexDirection:'row',
    }
})
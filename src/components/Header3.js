import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image } from "react-native";

class Header3 extends Component {
  render() {
    return (
<View style={styles.main}>
<Image source={require('../assets/logo.png')} style={styles.logoImg} />
<Text style={styles.mainText}>5GPlus</Text>
<Text style={styles.text2}>Check if your phone is 5G </Text>
<Image source={require('../assets/arrow.png')} style={styles.logoImg} />
</View>
    )
  }}
  export default Header3;
const styles = StyleSheet.create({
  main:{
height:40,
flexDirection:'row',
justifyContent:'space-evenly',
    width: 350,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal:15,

  },
  logoImg:{
  height:30,
  width:40,
  marginTop:5
  },
  mainText:{
fontWeight:'bold',
color:'red',
marginTop:10,
  },
  text2:{
    marginTop:10,
  }

});
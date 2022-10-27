import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image, ScrollView } from "react-native";

export default class Header3 extends Component {
  render() {
    return (
<View style={styles.mainView}>  
<TouchableOpacity style={styles.airtel}>
<Image source={require('../assets/phone.jpeg')} style={styles.sortImg} />
<Text style={styles.text1}>missed</Text>
<Text  style={styles.text1}>call alerts</Text>
</TouchableOpacity>
</View>
    )
  }
}
const styles = StyleSheet.create({
mainView:{
   height:90,
   width:130,
   borderWidth:1,
   borderColor:'white',
   backgroundColor:'white',
borderRadius:13, 
marginTop:20,
},
sortImg:{
    height:30,
    width:30,
    alignSelf:'center',
    marginTop:15,
    borderRadius:50, 
},
text1:{
    alignSelf:'center', 
},
airtel:{
    justifyContent:'center',
    alignItems:'center',
}

})
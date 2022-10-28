import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image } from "react-native";
import ImagesArray from "./ImagesArray";
class Header extends Component {
  render() {
    return (
        <View style={styles.shortcutBox}>
        <Text style={styles.shortcut}>SHORTCUTS</Text>
        <View style={styles.shortcutView}>
          <View>
          <TouchableOpacity style={styles.shortcutBtn} onPress={console.log("recharge Pressed")}>
            <Image
                resizeMode="contain"
             source={ImagesArray[0].imageUri}
              style={styles.rechargeImg}
            />
            
          </TouchableOpacity>
          <Text>{ImagesArray[0].title}</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
            resizeMode="contain"
              source={require('../assets/bill.jpeg')}
              style={styles.rechargeImg}
            />
          </TouchableOpacity>
          <Text>pay bills</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
            resizeMode="contain"
              source={require('../assets/roam.png')}
              style={styles.rechargeImg}
            />
          </TouchableOpacity>
          <Text>thanks</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
              source={require('../assets/add.webp')}
              style={styles.rechargeImg}
            />
          </TouchableOpacity>
          <Text>add</Text>
          </View>
        </View>
        <View style={styles.shortcutView}>
            <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
              source={require('../assets/topup.jpeg')}
              style={styles.rechargeImg}
            />
           
          </TouchableOpacity>
          <Text>recharge</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
              source={require('../assets/roam.png')}
              style={styles.rechargeImg}
            />
            
          </TouchableOpacity>
          <Text>pay bills</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
              source={require('../assets/roam.png')}
              style={styles.rechargeImg}
            />
          </TouchableOpacity>
          <Text>thanks</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.shortcutBtn}>
            <Image
              source={require('../assets/add.webp')}
              style={styles.rechargeImg}
            />
            
          </TouchableOpacity>
          <Text>add </Text>
          </View>
        </View>
      </View>
    );
  }
}


export default Header;



const styles = StyleSheet.create({
    top: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    userImg: {
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'grey',
      width: 35,
      height: 35,
    },
    text1: {
      fontWeight: 'bold',
    },
    bellImg: {
      height: 30,
      width: 30,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'grey',
    },
    shortcutBox: {
      borderWidth: 1,
      borderColor: 'white',
      height: 280,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
    },
    shortcut: {
      margin: 20,
      fontWeight: 'bold',
      color: 'grey',
    },
    shortcutView: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
    },
    shortcutBtn: {
        backgroundColor:'rgb(227,229,252)',
        borderWidth: 1,
      borderRadius: 25,
      borderColor: 'white',
      // height: 48,
      // width: 48,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rechargeImg: {
      height: 30,
      width: 30,
      margin: 15
    },
    redButton: {
      backgroundColor: 'red',
      width: '90%',
    },
    redButtonText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      padding: 10,
    },
    buttonView: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  });
  
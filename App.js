import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import Header from './src/components/Header';
import Header2 from './src/components/Header2';
import Header3 from './src/components/Header3';
import Header4 from './src/components/Header4';
// import Header5 from './src/components/Header5';
// import Product  from './src/components/Product';

// const ImagesArray=[
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },
//   {
//       imageUri:require("./src/assets/recharge.png"),
//       title:"recharge",
//   },

// ];



export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'rgb(239,241,253)', flex: 1}}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.mainImg}>
            <Image  resizeMode="contain"
              source={require('./src/assets/user.png')}
              style={styles.userImg}
            />
          </TouchableOpacity>
          <Text style={styles.text1}> manage </Text>
          <TouchableOpacity style={styles.mainImg}>
            <Image
            resizeMode="contain"
              source={require('./src/assets/bell.png')}
              style={styles.bellImg}
            />
          </TouchableOpacity>
        </View>
<ScrollView>
  <View style={styles.services}>
    <Header2 title={'SERVICES'} images={require("./src/assets/fack.png")} content={'5 services'} buttonText={'VIEW  DETAILS'}/>
    <Header2 title={'MONEY'} content={'....'} buttonText={'SHOW BALANCE'}/>
    </View>
    <Header3/>
    <Header4/>
    {/* <View style={styles.boxes}>
    <Header5/>
    <Header5/>
    <Header5/>
    </View> */}
       <Header/>

        <View style={styles.shortcutBox}>
          <Text style={styles.shortcut}>BUY NEW SERVICE</Text>
          <View style={styles.shortcutView}>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/band.png')}
                style={styles.rechargeImg}
              />
              <Text>broadband</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/bill.jpeg')}
                style={styles.rechargeImg}
              />
              <Text> prepaid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/roam.png')}
                style={styles.rechargeImg}
              />
              <Text> postpaid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/add.webp')}
                style={styles.rechargeImg}
              />
              <Text>airtel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.redButton}>
              <Text style={styles.redButtonText}>
                Free Home Delivery of SIM
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.shortcutView}>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/dth.png')}
                style={styles.rechargeImg}
              />
              <Text>recharge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/roam.png')}
                style={styles.rechargeImg}
              />
              <Text>bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/roam.png')}
                style={styles.rechargeImg}
              />
              <Text> benefits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutBtn}>
              <Image
                source={require('./src/assets/add.webp')}
                style={styles.rechargeImg}
              />
              <Text>add </Text>
            </TouchableOpacity>
          </View>
        </View> 
        </ScrollView>
      </SafeAreaView>
// {/* <View>
// <FlatList  data={ImagesArray}
// renderItem={({item})=>(<Product product={item}/>)}></FlatList>
// </View> */}
    );
  }
}
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
    fontSize:15,
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
    borderRadius: 50,
  },
  rechargeImg: {
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 50,
    // backgroundColor:'grey',
  },
  redButton: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius:10,
  },
  redButtonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  buttonView: {
    // alignSelf:'center'
    marginHorizontal:15,

  },
  services:{
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  mainImg:{
    height: 48,
    width: 48,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxes:{
    justifyContent: 'space-between',
    flexDirection: 'row', 
    margin:10,
  }
});

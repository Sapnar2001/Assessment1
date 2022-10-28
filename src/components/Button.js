


import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image, FlatList } from "react-native";


class Button extends Component{

        render(){

            return(
                <View style={styles.buttonView}>
            <TouchableOpacity style={styles.redButton} onPress={() => alert('clicked button')}>
              <Text style={styles.redButtonText}>{this.props.text}</Text>
            </TouchableOpacity>
          </View>
            )
        }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  serviceView: {
    height: 200,
    width: 180,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 5,
  },
  serviceText: {
    fontSize: 18,
    margin: 20,
    color:'black',

    fontWeight: 'bold',
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  a: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  backImg: {
    height: 20,
    width: 20,
  },
  redButton: {
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 10,
    marginTop:50,
  },
  redButtonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  buttonView: {
    // alignSelf:'center'
    marginHorizontal: 15,
    flex: 1,
  },
});
export default Button
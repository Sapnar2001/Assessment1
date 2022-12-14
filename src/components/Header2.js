
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Button from './Button';
class Header2 extends Component {
  render() {
    return (
        <View style={styles.serviceView}>
          <View style={styles.a}>
            <Text style={styles.heading}>{this.props.title}</Text>
            <Image
              source={this.props.images}
              style={styles.backImg}
            />
          </View>
          <Text style={styles.serviceText}>{this.props.content}</Text>
          <Button text={this.props.buttonText}/>
        </View>

    );
  }
}

export default Header2;
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

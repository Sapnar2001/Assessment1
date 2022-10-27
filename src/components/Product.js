import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class Product extends Component {
  render() {
    const {imageUri,title}=this.props.product
    return(
        <>
<View>
          <TouchableOpacity>
            <Image
                resizeMode="contain"
             source={{uri:imageUri}}
            />
            <Text>{title}</Text>
            </TouchableOpacity>
            </View>
            </>
    )}}
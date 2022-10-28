
import React, { Component } from "react";
import { View, Text, TouchableOpacity,  StyleSheet, Image, FlatList } from "react-native";


import Header2 from "./Header2";




class CardsRail extends Component{

    render(){
        return(
            <FlatList
                horizontal
                style={{marginHorizontal:10}}
            data={this.props.data}
            renderItem={({item,index})=>{
                return(
                    <Header2 title={item.title} content={item.content} buttonText={item.buttonText}/>
                )
            }}
            />
        )
    }
}

export default CardsRail




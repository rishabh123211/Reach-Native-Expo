import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// {title, onPress}   onPress={onPress}
const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress} >
        <Text style={styles.textBox}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    touchable:{
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:3,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        paddingHorizontal:40
        
    },
    textBox:{
        color:'white',
        fontWeight:700,
        fontSize:15

    }
})


export default MyButton
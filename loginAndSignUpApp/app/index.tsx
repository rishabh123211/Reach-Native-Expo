import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/components/myButton'
import { router, useRouter } from 'expo-router'

const Index = () => {

    const route = useRouter();

    const onCountinue = () => {
        router.navigate('/register')
    }

  return (
    <View style={styles.container} >
      <Text style={styles.textBox} >Index</Text>
      <MyButton title={"Continue"} onPress={onCountinue} />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        borderColor:'black',
        borderWidth:3,
        borderRadius:10,
        padding :10,
        alignItems:'center',
        justifyContent:'center',
        margin:10
        
    },
    textBox:{
        color:'white',
        fontWeight:700,
        fontSize:30,
        flex:1

    }
})



export default Index
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/components/myButton'
import { useRouter } from 'expo-router'

const Login = () => {

    const router = useRouter();
    const onLogin = () => {
        router.navigate('/register')
    }
    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.textBox} >Login</Text>
                <Image source={require('@/assets/images/login.jpg')} style={{ width: "100%", height: 400, }} resizeMode="cover" />
                <TextInput placeholder='Enter Your User ID' style={styles.inputText} />
                <TextInput placeholder='Enter Your Password' style={styles.inputText} />
                <MyButton title={"Login"} onPress={onLogin} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10

    },
    textBox: {
        color: 'white',
        fontWeight: 700,
        fontSize: 30,
        flex: 1

    },
    inputText: {
        backgroundColor: 'gray',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    }
})



export default Login
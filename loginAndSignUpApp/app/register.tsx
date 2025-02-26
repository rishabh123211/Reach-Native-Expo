import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import MyButton from '@/components/myButton'
import { useRouter } from 'expo-router'


const Register = () => {

    const router = useRouter();
    const onRegister = () => {
        router.navigate('/signUp')
    }
    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.textBox} >Register</Text>
                <Image source={require('@/assets/images/register.jpg')} style={{ width: "100%", height: 400, }} resizeMode="cover" />
                <TextInput placeholder='Enter Your Name' style={styles.inputText} />
                <TextInput placeholder='Enter Your Email ID' style={styles.inputText} />
                <TextInput placeholder='Enter Your Password' style={styles.inputText} />
                <TextInput placeholder='Renter Your Password' style={styles.inputText} />
                <MyButton title={"Register"} onPress={onRegister} />
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


export default Register
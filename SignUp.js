import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Signup = () => {

    const navigation = useNavigation();
    const GoLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    return (

        <KeyboardAwareScrollView>
            <ImageBackground source={require('./Images/5.jpg')} resizeMode="cover" style={Styles.image}>
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 1 }}>
                        <Text style={Styles.txt}>Signup</Text>
                    </View>

                    <View style={{ flex: 3 }}>
                        <Text style={Styles.txt2}>    Username:</Text>
                        <TextInput mode="outlined" label="Usename" right={<TextInput.Affix text="/15" />} style={Styles.Inputs} required />

                        <Text style={Styles.txt2}>    Tea Estate ID:</Text>
                        <TextInput mode="outlined" label="Email" right={<TextInput.Affix text="/15" />} style={Styles.Inputs} required />

                        <Text style={Styles.txt2}>    Password:</Text>
                        <TextInput mode="outlined" label="Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={Styles.Inputs} required />

                        <Text style={Styles.txt2}>    Confirm Password:</Text>
                        <TextInput mode="outlined" label="Confirm Password" secureTextEntry right={<TextInput.Icon icon="eye" />} style={Styles.Inputs} required />

                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: "center" }}>
                            <Text style={Styles.btn}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={Styles.foter}>Already Have An Account?<Text style={Styles.sign} onPress={GoLogin}>  Login</Text></Text>
                    </View>

                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>
    )
}

const Styles = StyleSheet.create({
    txt: {
        fontSize: 50,
        color: 'rgb(221, 230, 237)',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 40,
        fontStyle: 'italic',
        fontFamily: "serif"
    },
    txt2: {
        fontSize: 16,
        color: "rgb(221, 230, 237)",
        marginTop: 10
    },
    Inputs: {
        margin: 10,
        borderRadius: 40,
        backgroundColor: 'rgb(221, 230, 237)',
        color: "white",
        marginTop: -0,
        fontSize: 16,
    },
    btn: {
        marginTop: 85,
        backgroundColor: 'rgb(221, 230, 237)',
        width: 280,
        height: 40,
        fontSize: 26,
        color: "rgb(39, 55, 77)",
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
    },
    foter: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgb(97, 103, 122)',
        marginTop: 58,
        backgroundColor: "rgb(221, 230, 237)",
        height: 32,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        height: screenHeight,
        width: screenWidth,
    },
    sign: {
        fontSize: 20,
        color: "rgb(39, 40, 41)"
    }
})

export default Signup
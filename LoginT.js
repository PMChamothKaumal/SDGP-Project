import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


function LoginT() {

    const navigation = useNavigation();
    const GoHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "HomeT" }]
        })
    }

    const [rememberMe, setRememberMe] = useState(false);
    return (

        <KeyboardAwareScrollView>
            <ImageBackground source={require('./Images/5.jpg')} resizeMode="cover" style={Styles.image}>
                <View style={Styles.container}>

                    <View style={{ flex: 3 }}>
                        <View style={{ alignItems: "center", textAlign: "center" }}>
                            <Text style={Styles.txt3}>Tea Transporter's</Text>
                        </View>
                        <Text style={Styles.txt}>Login</Text>
                    </View>

                    <View style={{ flex: 3, marginTop: 60 }}>
                        <Text style={Styles.txt2}>    Username:</Text>
                        <TextInput mode="outlined" label="Username:" right={<TextInput.Affix text="/15" />} style={Styles.Inputs} required />

                        <Text style={Styles.txt2}>    Password:</Text>
                        <TextInput mode="outlined" label="Password:" secureTextEntry right={<TextInput.Icon icon="eye" />} style={Styles.Inputs} required />

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox.Android
                                status={rememberMe ? 'checked' : 'unchecked'}
                                onPress={() => setRememberMe(!rememberMe)} />
                            <Text style={{ marginLeft: 58 }}>Remember Me</Text>

                        </View>
                    </View>

                    <View style={{ flex: 4, }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: "center" }} onPress={GoHome}>
                            <Text style={Styles.btn}>Login</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={Styles.foter}>Don't You Have An Account?<Text style={Styles.sign}>   Sign_Up</Text></Text>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        fontSize: 70,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 12,
        fontStyle: 'italic',
        fontFamily: "serif"
    },
    txt3: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 40,
        fontStyle: 'italic',
        fontFamily: "serif"
    },

    Inputs: {
        margin: 10,
        borderRadius: 40,
        backgroundColor: 'rgb(221, 230, 237)',
        color: "white",
        marginTop: -0,
        fontSize: 18,
    },
    btn: {
        marginTop: 45,
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
        fontSize: 18,
        color: 'rgb(97, 103, 122)',
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
    txt2: {
        fontSize: 16,
        color: "rgb(221, 230, 237)",
        marginTop: 10
    },
    sign: {
        fontSize: 20,
        color: "rgb(39, 40, 41)"
    }
})

export default LoginT;
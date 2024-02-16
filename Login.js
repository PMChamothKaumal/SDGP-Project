import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';
import Axios from "react-native-axios"

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


function Login() {

    const navigation = useNavigation();
    const GoSignup = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Signup" }]
        })
    }

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [loginSt, setLoginSt] = useState('')
    const [nameError, setNameError] = useState(null);
    const [pwError, setpwError] = useState(null);

    const LoginData = () => {
        Axios.post('http://192.168.1.102:3000/api/teasage_database/TeaEstateOwner_Validation', {
            method: 'POST',
            username: Username,
            password: Password,
        })
            .then((response) => {
                if (response.data.message) {
                    setLoginSt(response.data.message);
                } else {
                    { GoHome() }
                }
            })
    }

    const GoHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "HomeT" }]
        })
    }


    const validate = () => {
        if (Username.trim() === "") {
            setNameError("Username Required.");
        } else if (Password.trim() === "") {
            setNameError(null);
            setpwError("Password Required.");
        } else {
            setpwError(null);
        }
    }

    const merge = () => {
        validate();
        LoginData();
    };

    const txt = () => {
        if (loginSt.trim() === "Wrong user name or password") {
            Alert.alert('Invalid Credentials', 'Please check your username and password.');
            return <Text style={{ color: "red", fontSize: 18, marginTop: 10, fontWeight: "bold" }}>  {loginSt}</Text>;

        } else {
            return <Text style={{ color: "green" }}>{loginSt}</Text>;
        }
    }

    const [rememberMe, setRememberMe] = useState(false);
    return (

        <KeyboardAwareScrollView>
            <ImageBackground source={require('./Images/5.jpg')} resizeMode="cover" style={Styles.image}>
                <View style={Styles.container}>

                    <View style={{ flex: 3 }}>
                        <View style={{ alignItems: "center", textAlign: "center" }}>
                            <Text style={Styles.txt3}>Tea Estate Owner's</Text>
                        </View>
                        <Text style={Styles.txt}>Login</Text>
                    </View>

                    <View style={{ flex: 3, marginTop: 60 }}>
                        <Text style={Styles.txt2}>    Tea Estate ID:</Text>
                        <TextInput mode="outlined" label="Username:" onChangeText={(data) => { setUsername(data) }} right={<TextInput.Affix text="/15" />} style={Styles.Inputs} required />
                        {!!nameError && (<Text style={{ color: "red" }}>   {nameError}</Text>)}

                        <Text style={Styles.txt2}>    Password:</Text>
                        <TextInput mode="outlined" label="Password:" onChangeText={(data) => { setPassword(data) }} secureTextEntry right={<TextInput.Icon icon="eye" />} style={Styles.Inputs} required />
                        {!!pwError && (<Text style={{ color: "red" }}>   {pwError}</Text>)}

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox.Android
                                status={rememberMe ? 'checked' : 'unchecked'}
                                onPress={() => setRememberMe(!rememberMe)} />
                            <Text style={{ marginLeft: 248, color: "white", fontWeight: "bold" }}>Remember Me</Text>

                        </View>
                    </View>

                    <View style={{ flex: 4, }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: "center" }} onPress={merge}>
                            <Text style={Styles.btn}>Login</Text>
                        </TouchableOpacity>
                        {txt()}

                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={Styles.foter}>Don't You Have An Account?<Text style={Styles.sign} onPress={GoSignup}>   Sign_Up</Text></Text>
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 12,
        fontStyle: 'italic',
        fontFamily: "serif"
    },
    txt3: {
        fontSize: 20,
        color: 'white',
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
        marginTop: 10,
        fontWeight: "bold"
    },
    sign: {
        fontSize: 20,
        color: "rgb(39, 40, 41)"
    }
})

export default Login;
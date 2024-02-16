import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Checkbox, Avatar, Card, IconButton } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;




function Menu() {
    const navigation = useNavigation();
    const GoLoginOwner = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }


    const GoLoginTransporter = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "LoginT" }]
        })
    }

    return (

        <KeyboardAwareScrollView>
            <ImageBackground source={require('./Images/2.jpg')} resizeMode="cover" style={Styles.image}>
                <View style={Styles.container}>

                    <View >
                        <Text style={Styles.txt3}>Welcome To</Text>
                        <Text style={Styles.txt}>TeaSage</Text>
                    </View>
                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity onPress={GoLoginOwner}>
                            <View style={Styles.Inputs}>
                                <Card.Title
                                    title="Tea Estate Owner"
                                    titleStyle={{ fontSize: 25, textAlign: 'center', marginTop: 55 }}
                                //left={(props) => <Avatar.Icon {...props} icon="folder" />}

                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={GoLoginTransporter}>
                            <View style={Styles.Inputs}>
                                <Card.Title
                                    title="Tea Transporter"
                                    titleStyle={{ fontSize: 25, textAlign: 'center', marginTop: 55 }}
                                //left={(props) => <Avatar.Icon {...props} icon="folder" />}
                                />
                            </View>
                        </TouchableOpacity>
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
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 12,
        fontStyle: 'italic',
        fontFamily: "serif"
    },
    txt3: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: "center",
        marginTop: 40,
        fontStyle: 'italic',
        fontFamily: "serif"
    },

    Inputs: {
        marginTop: 40,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        color: "white",
        fontSize: 18,
        width: 360,
        height: 130,
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

export default Menu;
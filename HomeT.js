import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Alert, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


function HomeT() {

    return (

        <KeyboardAwareScrollView>
            <ImageBackground source={require('./Images/5.jpg')} resizeMode="cover" style={Styles.image}>
                <View style={Styles.container}>

                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        height: screenHeight,
        width: screenWidth,
    }
})

export default HomeT;


import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, Dimensions, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { BarIndicator, } from 'react-native-indicators';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Menu from './Menu';
import Login from './Login';
import Signup from './SignUp';
import LoginT from './LoginT';
import HomeT from './HomeT';



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Menu} options={{ headerShown: false }} />
      <Drawer.Screen name="About" component={Login} options={{ headerStyle: { backgroundColor: 'gray', } }} />
    </Drawer.Navigator>
  );
}

const App = () => {

  useEffect(() => {
    startLoading();
  }, []);

  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <ImageBackground source={require('./Images/1234.jpg')} resizeMode="cover" style={styles.image}>
      {loading ? (
        <View style={styles.container}>

          <View style={{ marginTop: 60 }}>
            <Text style={styles.view}>Welcome To</Text>
            <Text style={styles.view}>TeaSage</Text>

          </View>
          <View style={styles.view2}>
            <BarIndicator color='white' />
            <View style={{ alignItems: "center", textAlign: "center", marginTop: 30 }}>
              <Image source={require("./Images/5.jpg")} style={{ alignItems: "center", width: 180, height: 180 }} />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 24, marginTop: 200, color: "white", fontWeight: "bold", textAlign: "center", fontFamily: "serif" }}>Powerd By AMAD</Text>
          </View>
        </View>) : (


        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="LoginT" component={LoginT} options={{ headerShown: false }} />
            <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
            <Stack.Screen name="HomeT" component={HomeT} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ImageBackground>
  );



}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: screenHeight,
    width: screenWidth,
  },
  view: {
    fontSize: 52,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontFamily: "serif"
  },
  view3: {
    fontSize: 42,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold",
    fontFamily: "serif"
  },
  view2: {
    marginTop: 40
  }


})
export default App

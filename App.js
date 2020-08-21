/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from "./src/screens/SplashScreen";
import InitialLaunchScreen from "./src/screens/InitialLaunchScreen";
import SignUpScreen1 from "./src/screens/SignUpScreen1";
import SignUpScreen2 from "./src/screens/SignUpScreen2";
import FeedScreen from "./src/screens/FeedScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LoginScreen from "./src/screens/LoginScreen";

const App: () => React$Node = () => {
  return (<View style={styles.container}>
             <LoginScreen/>
          </View>
  );
};

const styles = StyleSheet.create({
container:{
  display:'flex',
  flex:1
}
});

export default App;

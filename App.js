import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View,SafeAreaView, TouchableHighlight, Button, Alert, } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';

export default function App() {
  return (
    <>
    <WelcomeScreen/>
      {/* <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Text>hey there</Text>
        <TouchableHighlight>
        
        <Image source={{
          width:200,
          height:200,
          uri: "https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif"}} />
        </TouchableHighlight>
        <Button title="click here" onPress={() => alert("Button tapped")}></Button>
      </SafeAreaView>
      <Button title="go on"
      onPress={()=> Alert.alert("My title", "Wanna Go On", [
        {text:"Yes", onPress:()=>console.log("Yes")},
        {text:"No", onPress:()=>console.log("No")},
      ])}
      ></Button> */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <>
      <ImageBackground
      style={styles.background}
      source={{
          uri:"https://cdna.artstation.com/p/assets/images/images/024/538/828/original/pixel-jeff-clipc-s.gif?1582740521"}}
      ></ImageBackground>
      <Image style={styles.logo} source={{uri:"https://poeticbusiness.co.uk/wp-content/uploads/2020/05/business_logo_design_thumb.jpg"}}></Image>
      <View style={styles.loginButton}>
         log in
      </View>
      <View style={styles.registerButton}>
         log in
      </View>
      </>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginButton:{
    width:"100",
    height:70,
    backgroundColor:"#ed355e"
    },
    registerButton:{
        width:"100",
        height:70,
        backgroundColor:"#514fb1"
        },
logo:{
    width:100,
    hei:100,
    position:'absolute',
    top:80,
}
})

export default WelcomeScreen;
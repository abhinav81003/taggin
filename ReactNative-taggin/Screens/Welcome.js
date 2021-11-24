import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, View,Image, Text, TouchableOpacity, Pressable } from 'react-native';
import colors from '../assets/colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SignupScreen2 from './SignupScreen2';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const myLoginDetailsStorageKey = "loginCred";

const getMyUserData = async () => {
    try {
      const value = await AsyncStorage.getItem(myLoginDetailsStorageKey)
      if(value !== null) {
        return value
      }
      return null
    } catch(e) {
      console.log(e)
      return null
    }
  }
  

const Welcome = ({navigation}) => {
     
    const [loading, setLoading] = useState(true);
    useEffect( async () => {
        const myCredentials = await getMyUserData()
        if(myCredentials != null){
            axios.post("https://fierce-mountain-79115.herokuapp.com/stayLogin", {myCredentials})
            .then(function(res){
                if(res.data.status !='error'){
                    navigation.navigate("Root",{username: res.data.username})
                }else{
                    setLoading(false);
                }
            })
        }
    },[])

    const gotoSignUp =() => {
        navigation.navigate("Signup");
    }
    return ( 
        <View style = {styles.screen}>
            <SafeAreaView style = {styles.panel}>
                <Image source={require("../assets/images/logo.png")} style = {styles.logo}/>
                <View style= {styles.textPanel}>
                    <Text style={styles.title}> Taggin' </Text>
                    <TouchableOpacity onPress={ () => gotoSignUp()} style={[ {display: loading? 'none' : 'flex'},styles.button]}> 
                        <Text style={[ {display: loading? 'none' : 'flex'},styles.buttonText]}> Get Started </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: 'center'
    },
    panel: {
        margin: "10%",
        flex: 1,
        flexDirection: 'column'
    },
    logo: {
        width: "80%",
        height: '30%',
        alignSelf: 'center',
        marginTop: '40%'
    },
    textPanel: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        marginTop: '20%'
    },
    title: {
        fontSize: 50,
        color: colors.third,
        left: 0,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 18.3,
        alignSelf: 'flex-start',
        fontWeight: '500',
        color: 'black',
    },
    button: {
        marginTop: '10%',
        width: '41%',
        height: '13%',
        textAlignVertical: 'center',
        borderRadius: 50,
        backgroundColor: colors.secondary
    },
    buttonText: {
        padding: "8%",
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: colors.fourth,
        fontSize: 17,
        fontWeight: '500'
    },

});
 
export default Welcome;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView, View,Image, Text, TouchableOpacity, Pressable } from 'react-native';
import colors from '../assets/colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SignupScreen2 from './SignupScreen2';


const Welcome = ({navigation}) => {
     
const gotoSignUp =() => {
    navigation.navigate("Signup");
}
    return ( 
        <View style = {styles.screen}>
            <SafeAreaView style = {styles.panel}>
                <Image source={require("../assets/images/logo.png")} style = {styles.logo}/>
                <View style= {styles.textPanel}>
                    <Text style={styles.title}>Connex </Text>
                    <Text style={styles.subtitle}>Get connected to the commmunitites you never knew existed. </Text>
                    <TouchableOpacity onPress={ () => gotoSignUp()} style={styles.button}> 
                        <Text style={styles.buttonText}> Get Started </Text>
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
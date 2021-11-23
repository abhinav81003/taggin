import React, {useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Alert, SafeAreaView, Pressable, Keyboard, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import axios from 'axios';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //checking if user exists and showing an error if it does
    const handleEmailChecks = (email) => {
        const isEmailInUse = false;
        //query the database to find the email, if it exists set isEmailInUse to true
        return isEmailInUse;
    }
    //
    const handleContinuePress = () => {
        //checking for empty fields
        const emailIsInUse = handleEmailChecks(email);
        if (email==="" || password==="") {
            if (Platform.OS === 'web'){
                alert("Kindly fill all the fields to continue")
            }else {
                Alert.alert(
                    "All fields are compulsory",
                    "Kindly fill all the fields to continue",
                    [
                        {
                            text: "Go Back",
                        }
                    ]
                )
            }
        } else if (emailIsInUse) {
            if (Platform.OS === 'web'){
                alert("An account is already registered with the same email address")
            }else {
                Alert.alert(
                    "Email Already In Use",
                    "An account is already registered with the same email address",
                    [
                        {
                            text: "Enter Email Again",
                            
                        }
                    ]
                )
            }
        }else if (password.length<8){
            if (Platform.OS === 'web'){
                alert("Please make sure that the password has atleast 8 characters")
            }else {
                Alert.alert(
                    "Passwords Too Short",
                    "Please make sure that the password has atleast 8 characters",
                    [
                        {
                            text: "Edit Password",
                            onPress: () => console.log('Password error')
                        }
                    ]
                )
            }
        }else {
            if (Platform.OS === 'web'){
            }else {
                axios.post("https://fierce-mountain-79115.herokuapp.com/insert", 
                {email: email, phone: password}
                ).then(function() {
				    navigation.navigate('Home');
			    })
                .catch(function () {
                    alert("Could not submit email. Please try again");
                });
            }
        }
    }
const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingWeight: '800',
    headingFontSizeLandscape: 34,
    headerBottomMargin: 5,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 13,
    textBoxPadding: 10,
    formHorizontalMargin: 40,
    formBottomMarginLandscape: 30,
    buttonTextLineHeight: 21,
    buttonTextLineHeightLandscape: 21,
    buttonHeight: 70,
    buttonHeightLandscape: 45,
}
const styles = StyleSheet.create({
    screenBackground: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 30,
        paddingTop: '30%'
    },
    container: {
        marginHorizontal: viewConstants.containerHorizontalMargins,
        flex: 1,
        justifyContent: 'center',
       
        //implementing different code for differnet orientations
    },
    header: {
        marginBottom: viewConstants.headerBottomMargin,
        flex:  0,
        flexDirection: 'column',
        width: '100%',
    },
    headerTitle: {
        fontWeight: viewConstants.headingWeight,
        fontSize: viewConstants.headingFontSize,
        color: colors.third,
        paddingVertical: '3%',
        paddingTop: 0,
    },
    headerText: {
        fontSize:  viewConstants.textSize,
        paddingTop:  0,
        color: '#200111',
    },
    linkText: {
        textDecorationLine: 'underline',
        paddingVertical: '3%',
        color: 'darkblue',
        fontSize:  viewConstants.textSize,
    },  
    signUpForm:{
        flex: 1,
        color: 'black',
    },
    details: {
        flexDirection: 'column',
        marginHorizontal: viewConstants.formHorizontalMargin,
        marginBottom: 0
    },
    password: {
        flexDirection: 'column',
        marginHorizontal: viewConstants.formHorizontalMargin,
        marginBottom:  0
    },
    label: {
        fontSize: viewConstants.textSize,
        padding: viewConstants.labelPadding,
        color: colors.third,
        fontWeight: '500',
        marginHorizontal: 0,
        
    },
    inputText: {
        borderWidth: viewConstants.textBoxBorderWidth,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: colors.fourth,
        borderRadius: viewConstants.textBoxBorderRadius,
        textAlign: 'center',
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.3,
        padding: viewConstants.textBoxPadding,
        fontSize:  viewConstants.textSize,
        marginHorizontal: viewConstants.textBoxPadding,
        color: 'black',
    },
    buttonText: {
        fontSize: viewConstants.textSize,
        lineHeight: viewConstants.buttonTextLineHeight,
        fontWeight: 'bold',
        color: colors.fourth,
    },
    continueButton: {
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
       
        borderRadius: 100,
        borderTopWidth: 1,
        height: 40,
        marginBottom: 20,
        shadowColor: 'grey',
        shadowRadius: 10, 
        marginTop: '10%',
        alignSelf: 'center'
    }, 
    backbutton: {
        height: 60,
        alignSelf: 'flex-start',
        width: 60,
        backgroundColor: colors.secondary,
        marginBottom: '15%',
        borderRadius: 40,
    },
    inputbar: {
        flex: 1,
        justifyContent: 'center',
        
        ...Platform.select({
            web: {
                marginLeft: '30%',
                marginRight: '30%',
            },
            default: {
                marginLeft: '5%',
                marginRight: '5%',
            },
        }),
    },
})
    return ( 
        <View style={styles.screenBackground}>
             <TouchableOpacity onPress={()=> navigation.navigate("Signup 2")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("../assets/images/back.png")}/>
            </TouchableOpacity>
             <View style = {styles.header}>
                        <Text 
                            style = {styles.headerTitle}>
                            Login
                        </Text>
                        <Text 
                            style = {styles.headerText} >
                            Welcome back to Connex. Enter your details to get back to your community.
                        </Text>
                        <Text 
                            style = {styles.linkText} 
                            onPress={() => navigation.navigate("Signup 2")} >
                            Don't have an account?
                        </Text>
                    </View>
             <View>
                    <Text 
                        style={styles.label}>
                        Email: 
                    </Text>
                    <TextInput
                        style={styles.inputText} 
                        onChangeText = { email => setEmail(email) }
                        defaultValue = {email}
                        enablesReturnKeyAutomatically = {true}
                        keyboardType = 'email-address'     // Works on all platforms
                        textContentType = 'emailAddress'  // Only for iOS
                        autoCompleteType='email'         // Only for Android
                        autoCapitalize='none'           // Works on all platforms
                        returnKeyType="next"
                        // onSubmitEditing={() => { this.secondTextInput.focus() }}
                        placeholder="Enter Your Email ID" />
                </View>
            <View>
                <Text 
                    style={styles.label}>
                    Password: 
                </Text>
                <TextInput 
                    enablesReturnKeyAutomatically = {true}
                    secureTextEntry={true} 
                    returnKeyType="next"
                    onChangeText = { password => setPassword(password) }
                    defaultValue = {password}
                    textContentType = "newPassword" 
                    autoCompleteType='password' 
                    style={styles.inputText} 
                    placeholder="Enter your Password" 
                    autoCapitalize='none'/>
            </View>
            <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.third : colors.secondary,},
                        styles.continueButton,]}
                        onPress={() => { handleContinuePress()}}>
                        <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
     );
}
 
export default LoginScreen;
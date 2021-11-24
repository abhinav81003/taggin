import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Alert, SafeAreaView,ActivityIndicator, Pressable, Keyboard, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import axios from 'axios';
const SignupScreen2 = ({navigation}) => {

const [name, setName] = useState('')
const [email, setEmail] = useState('');
const [username, setUSername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('')
const [loading,setLoading] = useState(false)

//checking if user exists and showing an error if it does

//
const handleContinuePress = () => {
    setLoading(true);
    //checking for empty fields
    if (email==="" || username==="" || password==="" || confirmPassword === "") {
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
        setLoading(false);
    } else if (confirmPassword!=password){
        if (Platform.OS === 'web'){
            alert("Passwords Don't Match")
        }else {
            Alert.alert(
                "Passwords Don't Match",
                "Kindly ensure that your passwords match",
                [
                    {
                        text: "Edit Password",
                        
                    }
                ]
            )
        }
        setLoading(false);
    }else {
        axios.post("https://fierce-mountain-79115.herokuapp.com/register",
            {email: email, password: password, userID: username, name: name, interests: []}
        ).then(function(res){
            if(res.data.status != 'error'){
                navigation.navigate("Interests");
                setLoading(false);
            }else{
                Alert.alert(
                    res.data.error
                )
                setLoading(false);
            }
        })
        
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
        backgroundColor: colors.primary
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
    screenBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.primary,
    },
    buttonText: {
        fontSize: viewConstants.textSize,
        lineHeight: viewConstants.buttonTextLineHeight,
        fontWeight: 'bold',
        color: colors.fourth,
    },
    continueButton: {
        width: "42%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderTopWidth: 1,
        height: 42,
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
        <KeyboardAvoidingView style={styles.screenBackground}>
            {/*  Wrapping the code with TouchableWithoutFeedback dismisses the keyboard when the user taps out of the input box*/}
            <View style={styles.form} onPress={ Keyboard.dismiss}>
                <SafeAreaView style = { styles.container} > 
                    <TouchableOpacity onPress={()=> navigation.navigate("Welcome")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("../assets/images/back.png")}/>
                    </TouchableOpacity>
                    <View style = {styles.header}>
                        <Text 
                            style = {styles.headerTitle}>
                            Create an Account
                        </Text>
                        <Text 
                            style = {styles.headerText} >
                            Welcome to Taggin. Create a free account to begin sharing your thoughts.
                        </Text>
                        <Text 
                            style = {styles.linkText} 
                            onPress={() => navigation.navigate("Login")} >
                            Already have an account?
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label} >
                                Full Name: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                returnKeyType="next"
                                onChangeText = { name => setName(name) }
                                defaultValue = {name}
                                style={styles.inputText} 
                                textContentType='name'   // Only for iOS
                                autoCompleteType="name" // Only for Android
                                autoCapitalize='none'
                                placeholder="Your Actual Name" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Username: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                returnKeyType="next"
                                onChangeText = { username => setUSername(username) }
                                defaultValue = {username}
                                style={styles.inputText} 
                                textContentType='username'   // Only for iOS
                                autoCompleteType="username" // Only for Android
                                autoCapitalize='none'
                                placeholder="Create a Username" />
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
                    </View>
                    <View styles = { styles.password }>
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
                                placeholder="Create a Password" 
                                autoCapitalize='none'/>
                        </View>
                        <View>
                            <Text 
                                style={styles.label}>
                                Confirm Password: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                secureTextEntry={true} 
                                returnKeyType= "done"
                                onChangeText = { confirmPassword => setConfirmPassword(confirmPassword) }
                                defaultValue = {confirmPassword}
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                autoCapitalize='none'
                                style={styles.inputText} 
                                onSubmitEditing = { handleContinuePress} 
                                placeholder="Confirm your Password"/>
                        </View>
                    </View>
                    <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.third : colors.secondary,},
                        styles.continueButton,]}
                        onPress={() => { handleContinuePress()}}>
                        <Text style={[ {display: loading?'none':'flex'}, styles.buttonText]}>
                            Continue
                        </Text>
                        <ActivityIndicator style={{ display: loading? 'flex' : 'none'}} />
                    </Pressable>
                </SafeAreaView>
            </View>
            
        </KeyboardAvoidingView>
     );
}

 
export default SignupScreen2;
import React, {useState,useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Alert, SafeAreaView, Pressable, Keyboard, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
    
    const myLoginDetailsStorageKey = "loginCred";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [viewPassword, setViewPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const saveMyLoginInfo = async (myUserInfo) => {
        try {
          await AsyncStorage.setItem("rat", myUserInfo)
        } catch (e) {
            console.log(e)
            Alert.alert(
                "Couldn't Save Login Info"
              )
        }
      }
    const handleContinuePress = () => {
        setLoading(true);
        //checking for empty fields
        if (username === "" || password==="") {
            setLoading(false);
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
        } else {
            axios.post("https://fierce-mountain-79115.herokuapp.com/login", 
            {username: username, password: password}
            ).then(async function (res) {
                setLoading(false);
                if(res.data.status != 'error'){
                    //put the token in local storage
                    const myUserInfo = res.data.message;
                    await saveMyLoginInfo(myUserInfo);
                    navigation.navigate("Root",{username: username});
                }else {
                    Alert.alert(
                        res.data.error
                    )
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
        width: "100%",
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
    passwordAndEye: {
        flexDirection: 'row',
    },
    eye:{
        position: 'absolute',
        right: 25,
        top : 2
    }
})
    return ( 
        <View style={styles.screenBackground}>
             <TouchableOpacity onPress={()=> navigation.navigate("Signup")} style={styles.backbutton}>
                        <Image style={{ marginLeft:'10%', marginTop:'15%', width: 40, height: 40, tintColor: colors.primary}} source={require("../assets/images/back.png")}/>
            </TouchableOpacity>
             <View style = {styles.header}>
                        <Text 
                            style = {styles.headerTitle}>
                            Login
                        </Text>
                        <Text 
                            style = {styles.headerText} >
                            Welcome back. Enter your details to start Taggin' again.
                        </Text>
                        <Text 
                            style = {styles.linkText} 
                            onPress={() => navigation.navigate("Signup")} >
                            Don't have an account?
                        </Text>
                    </View>
             <View>
                    <Text 
                        style={styles.label}>
                        Username: 
                    </Text>
                    <TextInput
                        style={styles.inputText} 
                        onChangeText = { username => setUsername(username) }
                        defaultValue = {username}
                        enablesReturnKeyAutomatically = {true}
                        textContentType = 'username'  // Only for iOS
                        autoCompleteType = 'username'         // Only for Android
                        autoCapitalize='none'           // Works on all platforms
                        returnKeyType="next"
                        placeholder="Enter Your Username" />
                </View>
            <View>
                <Text 
                    style={styles.label}>
                    Password: 
                </Text>
                <View style ={styles.passwordAndEye}>
                <TextInput 
                    enablesReturnKeyAutomatically = {true}
                    secureTextEntry={ !viewPassword} 
                    returnKeyType='done'
                    onChangeText = { password => setPassword(password) }
                    defaultValue = {password}
                    textContentType = "newPassword" 
                    autoCompleteType='password' 
                    style={styles.inputText} 
                    placeholder="Enter your Password" 
                    autoCapitalize='none'/>
                <TouchableOpacity onPress={()=> setViewPassword(!viewPassword)}> 
                    <Icon style={styles.eye} name= { viewPassword ? "eye" : "eye-off"} size={30}/>
                </TouchableOpacity>
                 </View>
            </View>
            <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.third : colors.secondary,},
                        styles.continueButton,]}
                        onPress={() => { setLoading(true); handleContinuePress()}}>
                <Text style={[{display: loading? 'none' : 'flex'},styles.buttonText]}>Login</Text>
                <ActivityIndicator style={{display: loading? 'flex':'none'}} />
            </Pressable>
        </View>
     );
}
 
export default LoginScreen;
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import UploadPost from '../Screens/UploadPost'

const RootStack = createStackNavigator();
const RootScreen = ({navigation, route}) => {
    const username = route.params.username
    return ( 
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen  initialParams={ {username: username}} options={{headerShown: false}} name="Home" component={HomeScreen} />
                <RootStack.Screen  initialParams={ {username: username}}  name="Profile" component={Profile} />
            </RootStack.Group>
            <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                <RootStack.Screen  initialParams={ {username: username}} name="Upload" component={UploadPost} />
            </RootStack.Group>
        </RootStack.Navigator>
     );
}
 
export default RootScreen;
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Alert, Button, SafeAreaView,ActivityIndicator, Pressable, Keyboard, StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../assets/colors';
import axios from 'axios';


const SelectInterests = ({navigation, route}) => {
    return ( 
        <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
            <Text> Select Interests Now </Text>
            <Button onPress={()=>navigation.navigate("Home", {username: route.params.username})} title={"Go Home"}> </Button>
        </View>
     );
}
 
export default SelectInterests;
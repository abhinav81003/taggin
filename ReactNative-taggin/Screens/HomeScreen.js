import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, TextInputComponent,ScrollView, TouchableOpacity, View, Text, Image, Pressable } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../assets/colors';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const thoughts = [ { title: "Village dining sucks", description: "#usc", latitude: 34.0256, longitude: -118.593 }]
const Home = ({navigation}) => {
    const {width, height} = useDimensions().window;
    const styles = StyleSheet.create({
        map: {width: width,
        height: height/2, 
        }
    })
    const BottomTabs = createBottomTabNavigator();
    return ( 
        <View>
             <MapView style={styles.map} region={{longitude: -118.2850,
                        latitude: 34.0256,
                        longitudeDelta: 0.02,
                        latitudeDelta: 0.02}}>
            <MapView.Marker 
                coordinate={{latitude: 34.0256,
                longitude: -118.2850,}}
                title = {"Fuck UCLA"}
                description ={"#fucla"}
                image = {style={height: 2,width:2}, source = require('../assets/thought.png')}
                />
            </MapView>
        </View>
     );
}

export default Home;
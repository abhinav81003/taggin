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

const thoughts = [ { "title": "Village dining sucks", "description": "#usc", "latitude": "34.02007", "longitude": "-118.2878" }, { "title": "Parkside is the best", "description": "#parkside", "latitude":  "34.02569", "longitude": "-118.2848" },{ "title": "Just gave my midterm, suffice to say, I'm failing this shit ", "description": "#CS", "latitude":  "34.02059", "longitude": "-118.2950" } ]
const Home = ({navigation}) => {
    const {width, height} = useDimensions().window;
    const styles = StyleSheet.create({
        map: {width: width,
        height: height,
        }
    })
    const BottomTabs = createBottomTabNavigator();
    return ( 
        <View>
             <MapView style={styles.map} region={{longitude: -118.2850,
                        latitude: 34.0256,
                        longitudeDelta: 0.0250,
                        latitudeDelta: 0.0252}}>
           
            {thoughts.map((thought,index) => (
            <MapView.Marker key={index}
            coordinate={{latitude: parseFloat(thought.latitude),
            longitude: parseFloat(thought.longitude)}}
            description = {thought.title + " " + thought.description } />
          ))}
            </MapView>
        </View>
     );
}

export default Home;
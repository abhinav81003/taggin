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
<<<<<<< HEAD
import MapView from 'react-native-maps';
import { Marker, Callout, Circle} from 'react-native-maps';

var thoughts = [ { "title": "Village dining sucks", "description": "#usc", "latitude": "34.02007", "longitude": "-118.2878" , "liked": "0", "radius": "100"}, { "title": "Parkside is the best", "description": "#parkside", "latitude":  "34.02569", "longitude": "-118.2848", "liked": "0", "radius": "200"},{ "title": "Just gave my midterm, suffice to say, I'm failing this shit ", "description": "#CS", "latitude":  "34.02059", "longitude": "-118.2950","liked": "0", "radius": "1000"} ]
=======
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';

const thoughts = [ { "title": "Village dining sucks yuvhycvftvhfgv yfvdtyfav fyvsadfyasdf fas df ads fda ", "description": "#usc", "latitude": "34.02007", "longitude": "-118.2878" }, { "title": "Parkside is the best", "description": "#parkside", "latitude":  "34.02569", "longitude": "-118.2848" },{ "title": "Just gave my midterm, suffice to say, I'm failing this shit ", "description": "#CS", "latitude":  "34.02059", "longitude": "-118.2950" } ]
>>>>>>> b1ed0243a8478390d12530c39a8a5e4fb4031a87

var mapStyles = [
    {
        "featureType": "road",
        "stylers": [
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -79
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -78
            },
            {
                "hue": "#6600ff"
            },
            {
                "lightness": -47
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#eddded"
            },
            {
                "saturation": -11
            }
        ]
    },
    {},
    {},
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": -65
            },
            {
                "hue": "#1900ff"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#5e00ff"
            },
            {
                "saturation": -16
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "saturation": -72
            }
        ]
    },
    {}
]

<<<<<<< HEAD
const Home = ({navigation}) => {
    const {width, height} = useDimensions().window;
    const [liked,setLiked] = useState(false);
    const styles = StyleSheet.create({
        map: {
            width: width,
            height: height,
        },
        thought: {
            borderRadius: 10,
            minHeight: 80,
            maxWidth: 300,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
=======

const Home = ({navigation}) => {
    const {width, height} = useDimensions().window;
    const [liked, setLiked] = useState(false);
    const styles = StyleSheet.create({
        map: {width: width,
        height: height,
        },
        thought: {
            borderRadius: 10,
            minHeight: 20,
            maxWidth: 200,
            backgroundColor: "white"
>>>>>>> b1ed0243a8478390d12530c39a8a5e4fb4031a87
        }

    })
    const BottomTabs = createBottomTabNavigator();
    return ( 
        <View>
<<<<<<< HEAD
=======
           
>>>>>>> b1ed0243a8478390d12530c39a8a5e4fb4031a87
             <MapView style={styles.map} region={{longitude: -118.2850,
                        latitude: 34.0256,
                        longitudeDelta: 0.02,
                        latitudeDelta: 0.02}} 
                        provider={MapView.PROVIDER_GOOGLE}
                        customMapStyle={mapStyles}>
<<<<<<< HEAD
           
            {thoughts.map((thought,index) => {
            return(
            <View key={index}>

            <Marker 
            coordinate={{latitude: parseFloat(thought.latitude),
            longitude: parseFloat(thought.longitude)}}>
                <Callout tooltip onPress={()=> { setLiked(!liked); thought.liked = thoughts.liked === "0"?  "1" : "0"}} >
                    <View style={[styles.thought,{backgroundColor: liked? 'red': 'white'}]}>
                        <Text>
                            {thought.title + " " + thought.description}
                        </Text>
                    </View>
                </Callout>
            </Marker>
            <Circle style = {{display: thought.liked !== "0"? 'flex': 'none'}}
                    center={{latitude: parseFloat(thought.latitude),
                    longitude: parseFloat(thought.longitude)}}
                    radius = {parseInt(thought.radius) }
                />
            </View>
            );})}
=======
            {thoughts.map((thought,index) => {
            return(
            <Marker key={index}
            coordinate={{latitude: parseFloat(thought.latitude),
            longitude: parseFloat(thought.longitude)}} >  
                <Callout tooltip >
                    <View style= {{zIndex: 1}}>
                    <View  style={styles.thought}>
                        <Text> {thought.title +  " " + thought.description}  </Text>
                    </View>
                    <TouchableOpacity onPress= { ()=>  { console.log("Hi"); setLiked(!liked)}} style={{ width: 10, height : 10, backgroundColor: liked? "red" : "white" }}>

                    </TouchableOpacity>
                    </View>
                </Callout>
            </Marker>
            );})}

>>>>>>> b1ed0243a8478390d12530c39a8a5e4fb4031a87
            </MapView>
        </View>
     );
}

export default Home;